/*
    
     #(Developer) = SkyZet
     #(Type) = Case
        
 ≼≽ Dont Forget To Subscribe Our Channel:
    - https://whatsapp.com/channel/0029Val4Foo4tRrsaZ5jWz09
    
 Ingin Membeli Kebutuhan Bot?
⸙ Contact Developer: 62857888108676

*/
const fs = require('fs')
const { color } = require('./function/myfunc')

//owner
global.owner = '6282111238631'
global.pairing = 'ini isi no bot lu ya'
global.nomerowner = [`6282111238631`]
global.Kyuu = '`'
global.prefa = ["", "!", ".", ",", "🐤", "🗿"];
global.url = "https://github.com/khalid-official"
global.channel = `https://github.com/Khalid-official`
global.tele = "https://t.me/khalid_ofc"
global.url2 = "https://api.kyuurzy.site"
global.version = "3.3.0"
global.ownername = "RzxyyTzyy"
global.botname = "SkyHigh"
global.idch = `120363295825562726@newsletter`//`120363328390333122@newsletter`
global.bodyfooter = '𝗖𝗼𝗽𝘆𝗿𝗶𝗴𝗵𝘁 𝟮𝟬𝟮𝟮 - Skyzenn21'

global.autoTyping = false
global.autoRecord = false
global.antispam = false
global.typereply = "v2";
global.publig = true
global.welcome = false
global.autoread = false
//bot
global.thumb = 'https://deposit.pictures/p/33c8ad119aec49139470d798a712145e'
global.thumbnail = 'https://deposit.pictures/p/33c8ad119aec49139470d798a712145e'
global.thumbnailpanel = 'https://deposit.pictures/p/33c8ad119aec49139470d798a712145e'
//watermark 
global.packname = 'ı๋Ɨᧉო࣪ by'
global.author = '᥍ׄƗׄꪱ๋ϲkꫀׄr ϲ𝗎Ɨׄꫀׄ'
global.wmku = `\n\n\n\n\n—Skyzen\``
global.wmnya = 'Please understand, this script still has lots of errors because it is still in the development stage'
//panel
global.domain = ""
global.apikey = ""
global.capikey = ""
global.eggnya = "18"
global.locnya = "1"

//database 
global.urldb = '';

//payment
global.dana = "-",
global.gopay = "-",
global.linkaja = "-",
global.ovo = "-",

//group
global.autowelcomeMsg = false,
global.pathimg = "https://telegra.ph/file/0bf7f99fb65873896e22d.jpg"
global.limitawal = 5
global.balanceawal = 10000

global.delaypushkontak = 6000

global.mess = {
owner: `access denied, only for my owner`,
bugrespon: `Processs...`,
success: `Successfully`,
admin: `This feature can only be used by group admins`,
group: `Feature Only Used For Groups !`,
Badmin: `Features can be used after the bot becomes an admin !`,
limit: `Your limit has run out, please register to get it busing .regmail`
}

const Config = {
	phone_number: "62857888108676"
}
//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})

module.exports = { Config }