const axios = require("axios");

async function tiktoks(text) {
 return new Promise(async (resolve, reject) => {
 try {
 const response = await axios({
 method: "POST",
 url: "https://tikwm.com/api/feed/search",
 headers: {
 "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
 Cookie: "current_language=en",
 "User-Agent":
 "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
 },
 data: {
 keywords: text,
 count: 10,
 cursor: 0,
 HD: 1,
 },
 });
 const videos = response.data.data.videos;
 if (videos.length === 0) {
 reject("No videos found.");
 } else {
 const results = videos.map((video) => ({
 title: video.title,
 cover: video.cover,
 origin_cover: video.origin_cover,
 no_watermark: video.play,
 watermark: video.wmplay,
 music: video.music,
 }));
 resolve(results);
 }
 } catch (error) {
 reject(error);
 }
 });
}

async function download(downloadLink) {
 try {
 const response = await axios.get(
 `https://api.hyuunewbie.my.id/api/ttdl?url=${downloadLink}`,
 );
 if (response.data.status === true) {
 return response.data;
 } else {
 throw new Error("Failed to download the link");
 }
 } catch (error) {
 throw new Error("Failed to download the link");
 }
}

module.exports = {
 type: "search",
 command: ["tiktoks2", "tts"],
 operate: async ({ ptz, m, q:text, prefix, command, reply }) => {
 if (!q) {
 await ptz.sendMessage(
 m.chat,
 { text: `Enter a query, ${prefix + command} <query>.` },
 { quoted: m },
 );
 return;
 }

 const results = await tiktoks(q);
 const orderedLinks = results.map((link, index) => {
 const sectionNumber = index + 1;
 const { title } = link;
 return `${sectionNumber}. ${title}`;
 });

 const orderedLinksText = orderedLinks.join("\n");
 const { key } = await ptz.sendMessage(m.chat, {
 text: `*Tiktok Search:* "${q}."\nReply with the number and type (video/audio):\n\n${orderedLinksText}\n`,
 contextInfo: {
 mentionedJid: [m.sender],
 externalAdReply: {
 showAdAttribution: false,
 renderLargerThumbnail: true,
 title: results[0].title,
 body: ``,
 previewType: "PHOTO",
 containsAutoReply: true,
 mediaType: 1,
 thumbnailUrl: results[0].origin_cover,
 mediaUrl: "",
 sourceUrl: "",
 },
 },
 });

 ptz.tiktoks = ptz.tiktoks || {};
 ptz.tiktoks[m.sender] = {
 results,
 key,
 timeout: setTimeout(() => {
 ptz.sendMessage(m.chat, { delete: key });
 delete ptz.tiktoks[m.sender];
 }, 180 * 1000),
 };
 },
 before: async ({ ptz, m }) => {
 try {
 ptz.tiktoks = ptz.tiktoks || {};
 if ((!m.sender in ptz.tiktoks)) return;

 const { results, key, timeout } = ptz.tiktoks[m.sender];
 if (!m.quoted || m.quoted.id !== key.id || !m.text) return;

 const input = m.body.split(" ");
 const index = parseInt(input[0]) - 1;
 const type = input[1] ? input[1].toLowerCase() : "";

 if (index >= 0 && index < results.length) {
 const selectedReq = results[index];
 const downloadResult = await download(selectedReq.no_watermark);
 const audioResult = await downloadResult.music;

 if (type === "video") {
 await ptz.sendMessage(m.chat, {
 video: { url: downloadResult },
 caption: selectedReq.title,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 renderLargerThumbnail: true,
 title: selectedReq.title,
 body: "Downloaded from TikTok",
 previewType: "PHOTO",
 containsAutoReply: true,
 mediaType: 2,
 thumbnail: null,
 mediaUrl: selectedReq.no_watermark,
 sourceUrl: selectedReq.no_watermark,
 },
 },
 });
 } else if (type === "audio") {
 await ptz.sendMessage(m.chat, {
 audio: { url: audioResult },
 mimetype: "audio/mpeg",
 fileName: `${selectedReq.title}.mp3`,
 ptt: false,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 renderLargerThumbnail: true,
 title: selectedReq.title,
 body: "Downloaded from TikTok",
 previewType: "PHOTO",
 containsAutoReply: true,
 mediaType: 2,
 thumbnail: null,
 mediaUrl: selectedReq.no_watermark,
 sourceUrl: selectedReq.no_watermark,
 },
 },
 });
 } else {
 await ptz.sendMessage(
 m.chat,
 { text: `Invalid type. Choose either "video" or "audio".` },
 { quoted: m },
 );
 }
 } else {
 await ptz.sendMessage(
 m.chat,
 { text: `Invalid number. Choose between 1 and ${results.length}.` },
 { quoted: m },
 );
 }
 } catch (err) {
 console.error("An error occurred:", err);
 await ptz.sendMessage(
 m.chat,
 {
 text: `Sorry, there was a problem processing your request. Error details: ${err.message}. Please try again later.`,
 },
 { quoted: m },
 );
 }
 },
};