require("../config");
const fs = require("fs");
const chalk = require("chalk");
const moment = require("moment-timezone");
const { TelegraPh } = require("./uploader");
const {
  getRandom,
  smsg,
  isUrl,
  tanggal,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  await,
  sleep,
} = require("./myfunc");
const { isSetWelcome, getTextSetWelcome } = require("./setwelcome");
const { isSetLeft, getTextSetLeft } = require("./setleft");
let set_welcome_db = JSON.parse(fs.readFileSync("./database/set_welcome.json"));
let set_left_db = JSON.parse(fs.readFileSync("./database/set_left.json"));
const time = moment(Date.now())
  .tz("Asia/Jakarta")
  .locale("id")
  .format("HH:mm:ss z");
const jam = moment().format("HH:mm:ss z");
const welcome2 = global.auto_welcomeMsg;
const leave2 = global.auto_leaveMsg;
const {
  delay,
  proto,
  jidDecode,
  jidNormalizedUser,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  downloadContentFromMessage,
} = require("@whiskeysockets/baileys");

module.exports.welcome = async (iswel, isleft, ptz, anu) => {
  try {
    const metadata = await ptz.groupMetadata(anu.id);
    const participants = anu.participants;
    const memeg = metadata.participants.length;
    const groupName = metadata.subject;
    const groupDesc = metadata.desc;

    for (let num of participants) {
      const fkontaku = {
        key: {
          participant: `0@s.whatsapp.net`,
          ...(anu.id ? { remoteJid: `6283136505591-1614953337@g.us` } : {}),
        },
        message: {
          contactMessage: {
            displayName: ``,
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;,;;;\nFN:,\nitem1.TEL;waid=${num.split("@")[0]}:${num.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            jpegThumbnail: global.thumbnyaa,
            thumbnail: global.thumbnyaa,
            sendEphemeral: true,
          },
        },
      };
      try {
        pp_user = await ptz.profilePictureUrl(num, "image");
      } catch {
        pp_user = "https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg";
      }

      try {
        ppgroup = await ptz.profilePictureUrl(anu.id, "image");
      } catch {
        ppgroup = "https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg";
      }
      if (anu.action == "add" && (iswel || global.autowelcomeMsg)) {
        console.log(anu);
        let ppusr = await await ptz
          .profilePictureUrl(num, "image")
          .catch((_) => "https://telegra.ph/file/6880771a42bad09dd6087.jpg");
        const canvafy = require("canvafy");
        const well = await new canvafy.WelcomeLeave()
          .setAvatar(ppusr)
          .setBackground(
            "image",
            "https://telegra.ph/file/40b7756a5c2d56f5e28c6.jpg",
          )
          .setTitle(`Hii +${num.split("@")[0]}`)
          .setDescription(`Welcome To My Group`)
          .setBorder("#fff")
          .setAvatarBorder("#fff")
          .setOverlayOpacity(0.5)
          .build();
        if (isSetWelcome(anu.id, set_welcome_db)) {
          var get_teks_welcome = await getTextSetWelcome(
            anu.id,
            set_welcome_db,
          );
          var replace_pesan = get_teks_welcome.replace(
            /@user/gi,
            `@${num.split("@")[0]}`,
          );
          var full_pesan = replace_pesan
            .replace(/@group/gi, groupName)
            .replace(/@desc/gi, groupDesc);
          await ptz.sendMessage(
            anu.id,
            { image: well, caption: `${full_pesan}`, mentions: [num] },
            { quoted: fkontaku },
          );
        } else {
          await ptz.sendMessage(
            anu.id,
            {
              image: well,
              caption: `Hii @${num.split("@")[0]},Welcome In ${groupName}\n\n${groupDesc}`,
              mentions: [num],
            },
            { quoted: fkontaku },
          );
          let media = fs.readFileSync("./media/welcome.mp4");
          let encmedia = await ptz.sendVideoAsSticker(
            anu.id,
            media,
            fkontaku,
            {
              packname: "Welcome",
              author: `+${num.split("@")[0]}`,
            },
          );
        }
      } else if (anu.action == "remove" && (isleft || global.autoleaveMsg)) {
        console.log(anu);
        let ppusr = await await ptz
          .profilePictureUrl(num, "image")
          .catch((_) => "https://telegra.ph/file/6880771a42bad09dd6087.jpg");
        const canvafy = require("canvafy");
        const leff = await new canvafy.WelcomeLeave()
          .setAvatar(ppusr)
          .setBackground(
            "image",
            "https://telegra.ph/file/40b7756a5c2d56f5e28c6.jpg",
          )
          .setTitle(`Bye +${num.split("@")[0]}`)
          .setDescription(`Leave The My Group`)
          .setBorder("#fff")
          .setAvatarBorder("#fff")
          .setOverlayOpacity(0.5)
          .build();
        if (isSetLeft(anu.id, set_left_db)) {
          var get_teks_left = await getTextSetLeft(anu.id, set_left_db);
          var replace_pesan = get_teks_left.replace(
            /@user/gi,
            `@${num.split("@")[0]}`,
          );
          var full_pesan = replace_pesan
            .replace(/@group/gi, groupName)
            .replace(/@desc/gi, groupDesc);
          await ptz.sendMessage(
            anu.id,
            { image: leff, caption: `${full_pesan}`, mentions: [num] },
            { quoted: fkontaku },
          );
        } else {
          await ptz.sendMessage(
            anu.id,
            {
              image: leff,
              caption: `Sayonara @${num.split("@")[0]}`,
              mentions: [num],
            },
            { quoted: fkontaku },
          );
        }
      } /*else if (anu.action == "promote") {
        ptz.sendMessage(
          anu.id,
          {
            text: `@${num.split("@")[0]} Telah Dipromote Sebagai Admin`,
            mentions: [num],
          },
          { quoted: fkontaku },
        );
      } else if (anu.action == "demote") {
        ptz.sendMessage(
          anu.id,
          {
            text: `@${num.split("@")[0]} Telah Didemote Sebagai Member Biasa`,
            mentions: [num],
          },
          { quoted: fkontaku },
        );
      }*/
    }
  } catch (err) {
    console.log(err);
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
