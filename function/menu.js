require('../config')
const chalk = require('chalk')
const fs = require("fs");
const pendaftar = JSON.parse(fs.readFileSync('./database/pendaftar.json'))
global.menuu = (prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname) => {
return `hi ${pushname} 🪸, i am an automated system (WhatsApp bot) that can help to do something search and get data / information only through WhatsApp.

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

▧  *L I S T  M E N U*
│ • ${prefix}menu all
│ • ${prefix}menu owner
│ • ${prefix}menu bug
│ • ${prefix}menu ai
│ • ${prefix}menu download
│ • ${prefix}menu pushkontak
│ • ${prefix}menu group
│ • ${prefix}menu tools
│ • ${prefix}menu converter
│ • ${prefix}menu game
│ • ${prefix}menu islamic
│ • ${prefix}menu ephoto
│ • ${prefix}panel pterodactyl
└───···
`}

global.menuall = (prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname) => {
return `hi ${pushname} 🪸, i am an automated system (WhatsApp bot) that can help to do something search and get data / information only through WhatsApp.

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

▧  *O W N E R  M E N U*
│ • ${prefix}self
│ • ${prefix}public
│ • ${prefix}addcase *( code )*
│ • ${prefix}delcase *( feature )*
│ • ${prefix}getcase *( feature )*
│ • ${prefix}addplug
│ • ${prefix}rmplug
│ • ${prefix}cgplug 
│ • ${prefix}getplug
│ • ${prefix}sendplug *( @tag feature )*
│ • ${prefix}banchat
│ • ${prefix}unbanchat
│ • ${prefix}upsw *( reply media )*
│ • ${prefix}getsw *( reply sw )*
│ • ${prefix}saweria *( option )*
│ • ${prefix}addcmd *( command )*
│ • ${prefix}delcmd *( command )*
│ • ${prefix}delsesi
│ • ${prefix}addowner *( tag/number )*
│ • ${prefix}delowner *( tag/number )*
│ • ${prefix}addprem *( tag/number 30d )*
│ • ${prefix}delprem *( tag/number 30d )*
│ • ${prefix}setppbot *( reply image )*
│ • ${prefix}leavegc *( number group )*
│ • ${prefix}cls
│ • ${prefix}backup 
│ • ${prefix}restart
│ • ${prefix}listgc 
│ • ${prefix}listpc
│ • ${prefix}addfile 
│ • ${prefix}getfile 
└───···

▧  *P U S H  K O N T A K   M E N U*
│ • ${prefix}pushkontak *( question )*
│ • ${prefix}pushkontak1 *( idgroup|question )*
│ • ${prefix}pushkontak2 *( idgroup|delay|question )*
└───···

▧  *A I  M E N U*
│ • ${prefix}bard *( question )*
│ • ${prefix}gemini *( question )*
│ • ${prefix}gpt4 *( question )*
│ • ${prefix}rimuru-ai *( question )*
│ • ${prefix}ryo-yamada *( question )*
│ • ${prefix}bocchi *( question )*
│ • ${prefix}zeta *( question )*
│ • ${prefix}thinkany *( question )*
│ • ${prefix}blackbox *( question )*
│ • ${prefix}aoyo *( question )*
└───···

▧  *A I - V O I C E  M E N U*
│ • ${prefix}prabowo *( question )*
│ • ${prefix}vocal *( reply audio )*
│ • ${prefix}ai-voice *( question )*
└───···

▧  *A I - I M A G E  M E N U*
│ • ${prefix}dalle3 *( prompt )*
│ • ${prefix}bingimg *( prompt )*
│ • ${prefix}txt2img *( prompt )*
│ • ${prefix}animedif *( prompt )*
└───···

▧  *B U G  M E N U*
│ • ${prefix}samsung-chace *( 628xxx )*
│ • ${prefix}zero-bug *( 628xxx )*
│ • ${prefix}fatal-notif *( 628xxx )*
│ • ${prefix}virg4m *( 628xxx )*
│ • ${prefix}1hit *( 628xxx )*
│ • ${prefix}restart-ui *( 628xxx )*
│ • ${prefix}fatal-ui *( 628xxx )*
│ • ${prefix}forces-sql *( 628xxx )*
│ • ${prefix}crash-total *( 628xxx )*
│ • ${prefix}gada-ampun *( 628xxx )*
│ • ${prefix}bug-rom *( 628xxx )*
│ • ${prefix}sipilist *( 628xxx )*
└───···

▧  *B U G - I O S  M E N U*
│ • ${prefix}lawag *( 628xxx )*
│ • ${prefix}oemji *( 628xxx )* 
│ • ${prefix}gasbug *( 628xxx )*
│ • ${prefix}okidos *( 628xxx )*
│ • ${prefix}bug-ios *( 628xxx|2)*
│ • ${prefix}ios24j *( 628xxx )*
└───···

▧  *B U G - B E T A  M E N U*
│ • ${prefix}xwaweb *( 628xxx )*
│ • ${prefix}doublekill *( 628xxx )*
│ • ${prefix}xioshot *( 628xxx )*
│ • ${prefix}xbeta *( 628xxx )*
│ • ${prefix}coresix *( 628xxx )*
│ • ${prefix}dovure *( 628xxx )*
│ • ${prefix}betacore *( 628xxx )*
│ • ${prefix}xcrash *( 628xxx )*
│ • ${prefix}xpayment *( 628xxx )* 
└───···

▧  *B U G - E M O J I  M E N U*
│ • ${prefix}😈 *( 628xxx )*
│ • ${prefix}🐦 *( 628xxx )*
│ • ${prefix}🧢 *( 628xxx )*
│ • ${prefix}🗿 *( 628xxx )*
│ • ${prefix}😹 *( 628xxx )* 
└───···

▧  *D D o S  A T T A C K  M E N U*
│ • ${prefix}ddos-lol *( url )*
│ • ${prefix}ddos-mix *( url )*
│ • ${prefix}ddos-hent *( url )*
│ • ${prefix}ddos-tlsvip *( url )*
│ • ${prefix}ddos-mixmax *( url )*
└───···

▧  *O T H E R*
│ • ${prefix}temp-ban *( 62|8xxx )*
│ • ${prefix}spam-pairing *( +628xxx|150 )*
└───···

▧  *D O W N L O A D  M E N U*
│ • ${prefix}tiktok *( url )*
│ • ${prefix}play *( search )*
│ • ${prefix}mediafire *( url )*
│ • ${prefix}ytmp3 *( url )*
│ • ${prefix}ytmp4 *( url )*
│ • ${prefix}song *( search )*
│ • ${prefix}capcut *( url )*
│ • ${prefix}telestick *( url )*
└───···

▧  *C O N V E R T E R  M E N U*
┌ • ${prefix}tourl *( reply media )*
│ • ${prefix}toptv *( reply video )*
│ • ${prefix}tomp3 *( reply audio/video )*
│ • ${prefix}tovn *( reply audio/video )*
│ • ${prefix}toimg *( reply sticker )*
│ • ${prefix}enhancer *( reply image )*
│ • ${prefix}unblur *( reply image )*
│ • ${prefix}enhance *( reply image )*
│ • ${prefix}hdr *( reply image )*
│ • ${prefix}hd *( reply image )*
│ • ${prefix}remini *( reply image )*
│ • ${prefix}bass *( reply audio )*
│ • ${prefix}blown *( reply audio )*
│ • ${prefix}deep *( reply audio )*
│ • ${prefix}earrape *( reply audio )*
│ • ${prefix}fast *( reply audio )*
│ • ${prefix}fat *( reply audio )*
│ • ${prefix}nightcore *( reply audio )*
│ • ${prefix}reverse *( reply audio )*
│ • ${prefix}robot *( reply audio )*
│ • ${prefix}slow *( reply audio )*
│ • ${prefix}smooth *( reply audio )*
│ • ${prefix}squirrel *( reply audio )*
└───···

▧  *F U N  M E N U*
┌ • ${prefix}bisakah *( question )*
│ • ${prefix}bagaimanakah *( question )*
│ • ${prefix}apakah *( question )*
│ • ${prefix}cekkhodam *( name )*
│ • ${prefix}cekcantik *( name )*
│ • ${prefix}cekganteng *( name )*
│ • ${prefix}jadian
│ • ${prefix}truth
│ • ${prefix}dare
└───···

▧  *S E A R C H  M E N U*
│ • ${prefix}tiktoks *( search )*
│ • ${prefix}ongoing
│ • ${prefix}trackip *( IP Address )*
│ • ${prefix}lirik *( search )*
│ • ${prefix}spotifysearch *( search )*
│ • ${prefix}npmsearch *( search )*
│ • ${prefix}yts *( search )*
│ • ${prefix}ceknik *( nik ktp )*
│ • ${prefix}ping
│ • ${prefix}server
└───···

▧  *I S L A M I C  M E N U*
│ • ${prefix}bacaansholat
│ • ${prefix}ayatkursi
│ • ${prefix}quotesislami
│ • ${prefix}asmaulhusna
│ • ${prefix}kisahnabi
└───···

▧  *T O O L S  M E N U*
│ • ${prefix}sticker *( reply image )*
│ • ${prefix}smeme *( text|text )*
│ • ${prefix}ssweb *( url )*
│ • ${prefix}tqto
│ • ${prefix}searchsubdo
│ • ${prefix}ceksn
│ • ${prefix}unreg
│ • ${prefix}stext *( question )*
│ • ${prefix}get *( url )*
│ • ${prefix}ambilq *( reply )*
│ • ${prefix}translate
│ • ${prefix}qc
└───···

▧  *G R O U P  M E N U*
│ • ${prefix}kick *( reply/tag )*
│ • ${prefix}hidetag *( question )*
│ • ${prefix}tagall
│ • ${prefix}totag *( reply )*
│ • ${prefix}demote *( reply/tag )*
│ • ${prefix}promote *( reply/tag )*
│ • ${prefix}tagme
│ • ${prefix}linkgc
│ • ${prefix}opentime
│ • ${prefix}closetime
└───···

▧  *P A N E L  P T E R O D A C T Y L*
│ • ${prefix}buypanel
│ • ${prefix}delpanel
│ • ${prefix}delusr
│ • ${prefix}delsrv
│ • ${prefix}listpanel
└───···

▧  *G A M E  M E N U*
│ • ${prefix}tebak gambar
│ • ${prefix}tebak kata
│ • ${prefix}tebak kalimat
│ • ${prefix}tebak lirik
│ • ${prefix}tebak tebakan
│ • ${prefix}tebak bendera
│ • ${prefix}tebak bendera2
│ • ${prefix}tebak kabupaten
│ • ${prefix}tebak kimia
│ • ${prefix}tebak asahotak
│ • ${prefix}tebak siapakahaku
│ • ${prefix}tebak suitpvp
│ • ${prefix}kuismath
│ • ${prefix}tictatoe
└───···

▧  *E P H O T O  M E N U*
│ • ${prefix}glitchtext *( name )*
│ • ${prefix}writetext *( name )*
│ • ${prefix}advancedglow *( name )*
│ • ${prefix}typographytext *( name )*
│ • ${prefix}pixelglitch *( name )*
│ • ${prefix}neonglitch *( name )*
│ • ${prefix}flagtext *( name )*
│ • ${prefix}flag3dtext *( name )*
│ • ${prefix}deletingtext *( name )*
│ • ${prefix}blackpinkstyle *( name )*
│ • ${prefix}glowingtext *( name )*
│ • ${prefix}underwatertext *( name )*
│ • ${prefix}logomaker *( name )*
│ • ${prefix}cartoonstyle *( name )*
│ • ${prefix}papercutstyle *( name )*
│ • ${prefix}watercolortext *( name )*
│ • ${prefix}effectclouds *( name )*
│ • ${prefix}blackpinklogo *( name )*
│ • ${prefix}gradienttext *( name )*
│ • ${prefix}summerbeach *( name )*
│ • ${prefix}luxurygold *( name )*
│ • ${prefix}multicoloredneon *( name )*
│ • ${prefix}sandsummer *( name )*
│ • ${prefix}galaxywallpaper *( name )*
│ • ${prefix}1917style *( name )*
│ • ${prefix}makingneon *( name )*
│ • ${prefix}royaltext *( name )*
│ • ${prefix}freecreate *( name )*
│ • ${prefix}galaxystyle *( name )*
│ • ${prefix}lighteffects *( name )*
└───···
`}

global.menuowner = (prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname) => {
return `hi ${pushname} 🪸, i am an automated system (WhatsApp bot) that can help to do something search and get data / information only through WhatsApp.

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

▧  *O W N E R  M E N U*
│ • ${prefix}self
│ • ${prefix}public
│ • ${prefix}addcase *( code )*
│ • ${prefix}delcase *( feature )*
│ • ${prefix}getcase *( feature )*
│ • ${prefix}addplug
│ • ${prefix}rmplug
│ • ${prefix}cgplug 
│ • ${prefix}getplug
│ • ${prefix}sendplug *( @tag feature )*
│ • ${prefix}banchat
│ • ${prefix}unbanchat
│ • ${prefix}upsw *( reply media )*
│ • ${prefix}getsw *( reply sw )*
│ • ${prefix}saweria *( option )*
│ • ${prefix}addcmd *( command )*
│ • ${prefix}delcmd *( command )*
│ • ${prefix}delsesi
│ • ${prefix}addowner *( tag/number )*
│ • ${prefix}delowner *( tag/number )*
│ • ${prefix}addprem *( tag/number 30d )*
│ • ${prefix}delprem *( tag/number 30d )*
│ • ${prefix}setppbot *( reply image )*
│ • ${prefix}leavegc *( number group )*
│ • ${prefix}cls
│ • ${prefix}backup 
│ • ${prefix}restart
│ • ${prefix}listgc 
│ • ${prefix}listpc
│ • ${prefix}addfile 
│ • ${prefix}getfile 
└───···

▧  *P U S H  K O N T A K   M E N U*
│ • ${prefix}pushkontak *( question )*
│ • ${prefix}pushkontak1 *( idgroup|question )*
│ • ${prefix}pushkontak2 *( idgroup|delay|question )*
└───···
`}

global.attack = (prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname) => {
return `hi ${pushname} 🪸, i am an automated system (WhatsApp bot) that can help to do something search and get data / information only through WhatsApp.

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

▧  *A T T A C K  M E N U*
│ • ${prefix}samsung-chace *( 628xxx )*
│ • ${prefix}zero-bug *( 628xxx )*
│ • ${prefix}fatal-notif *( 628xxx )*
│ • ${prefix}virg4m *( 628xxx )*
│ • ${prefix}1hit *( 628xxx )*
│ • ${prefix}restart-ui *( 628xxx )*
│ • ${prefix}fatal-ui *( 628xxx )*
│ • ${prefix}forces-sql *( 628xxx )*
│ • ${prefix}crash-total *( 628xxx )*
│ • ${prefix}gada-ampun *( 628xxx )*
│ • ${prefix}bug-rom *( 628xxx )*
│ • ${prefix}sipilist *( 628xxx )*
└───···

▧  *B U G - I O S  M E N U*
│ • ${prefix}lawag *( 628xxx )*
│ • ${prefix}oemji *( 628xxx )* 
│ • ${prefix}gasbug *( 628xxx )*
│ • ${prefix}okidos *( 628xxx )*
│ • ${prefix}bug-ios *( 628xxx|2)*
│ • ${prefix}ios24j *( 628xxx )*
└───···

▧  *B U G - B E T A  M E N U*
│ • ${prefix}xwaweb *( 628xxx )*
│ • ${prefix}doublekill *( 628xxx )*
│ • ${prefix}xioshot *( 628xxx )*
│ • ${prefix}xbeta *( 628xxx )*
│ • ${prefix}coresix *( 628xxx )*
│ • ${prefix}dovure *( 628xxx )*
│ • ${prefix}betacore *( 628xxx )*
│ • ${prefix}xcrash *( 628xxx )*
│ • ${prefix}xpayment *( 628xxx )* 
└───···

▧  *B U G - E M O J I  M E N U*
│ • ${prefix}😈 *( 628xxx )*
│ • ${prefix}🐦 *( 628xxx )*
│ • ${prefix}🧢 *( 628xxx )*
│ • ${prefix}🗿 *( 628xxx )*
│ • ${prefix}😹 *( 628xxx )* 
└───···

▧  *D D o S  A T T A C K  M E N U*
│ • ${prefix}ddos-lol *( url )*
│ • ${prefix}ddos-mix *( url )*
│ • ${prefix}ddos-hent *( url )*
│ • ${prefix}ddos-tlsvip *( url )*
│ • ${prefix}ddos-mixmax *( url )*
└───···

▧  *O T H E R*
│ • ${prefix}temp-ban *( 62|8xxx )*
│ • ${prefix}spam-pairing *( +628xxx|150 )*
└───···
`}

global.menugame = (prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname) => {
return `hi ${pushname} 🪸, i am an automated system (WhatsApp bot) that can help to do something search and get data / information only through WhatsApp.

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

▧  *G A M E  M E N U*
│ • ${prefix}tebak gambar
│ • ${prefix}tebak kata
│ • ${prefix}tebak kalimat
│ • ${prefix}tebak lirik
│ • ${prefix}tebak tebakan
│ • ${prefix}tebak bendera
│ • ${prefix}tebak bendera2
│ • ${prefix}tebak kabupaten
│ • ${prefix}tebak kimia
│ • ${prefix}tebak asahotak
│ • ${prefix}tebak siapakahaku
│ • ${prefix}tebak suitpvp
│ • ${prefix}kuismath
│ • ${prefix}tictatoe
└───···

▧  *F U N  M E N U*
│ • ${prefix}bisakah *( question )*
│ • ${prefix}bagaimanakah *( question )*
│ • ${prefix}apakah *( question )*
│ • ${prefix}cekkhodam *( name )*
│ • ${prefix}cekcantik *( name )*
│ • ${prefix}cekganteng *( name )*
│ • ${prefix}jadian
│ • ${prefix}truth
│ • ${prefix}dare
└───···
`}

global.menuai = (prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname) => {
return `hi ${pushname} 🪸, i am an automated system (WhatsApp bot) that can help to do something search and get data / information only through WhatsApp.

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

▧  *A I  M E N U*
│ • ${prefix}bard *( question )*
│ • ${prefix}gemini *( question )*
│ • ${prefix}gpt4 *( question )*
│ • ${prefix}rimuru-ai *( question )*
│ • ${prefix}ryo-yamada *( question )*
│ • ${prefix}bocchi *( question )*
│ • ${prefix}zeta *( question )*
│ • ${prefix}thinkany *( question )*
│ • ${prefix}blackbox *( question )*
│ • ${prefix}aoyo *( question )*
└───···

▧  *A I - V O I C E  M E N U*
│ • ${prefix}prabowo *( question )*
│ • ${prefix}vocal *( reply audio )*
│ • ${prefix}ai-voice *( question )*
└───···

▧  *A I - I M A G E  M E N U*
│ • ${prefix}dalle3 *( prompt )*
│ • ${prefix}bingimg *( prompt )*
│ • ${prefix}txt2img *( prompt )*
│ • ${prefix}animedif *( prompt )*
└───···
`}

global.menudownload = (prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname) => {
return `hi ${pushname} 🪸, i am an automated system (WhatsApp bot) that can help to do something search and get data / information only through WhatsApp.

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

▧  *D O W N L O A D  M E N U*
│ • ${prefix}tiktok *( url )*
│ • ${prefix}play *( search )*
│ • ${prefix}mediafire *( url )*
│ • ${prefix}ytmp3 *( url )*
│ • ${prefix}ytmp4 *( url )*
│ • ${prefix}song *( search )*
│ • ${prefix}capcut *( url )*
│ • ${prefix}telestick *( url )*
└───···
`}

global.menupushkontak = (prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname) => {
return `hi ${pushname} 🪸, i am an automated system (WhatsApp bot) that can help to do something search and get data / information only through WhatsApp.

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

▧  *P U S H  K O N T A K   M E N U*
│ • ${prefix}pushkontak *( question )*
│ • ${prefix}pushkontak1 *( idgroup|question )*
│ • ${prefix}pushkontak2 *( idgroup|delay|question )*
└───···
`}

global.menugroup = (prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname) => {
return `hi ${pushname} 🪸, i am an automated system (WhatsApp bot) that can help to do something search and get data / information only through WhatsApp.

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

▧  *G R O U P  M E N U*
│ • ${prefix}kick *( reply/tag )*
│ • ${prefix}hidetag *( question )*
│ • ${prefix}tagall
│ • ${prefix}totag *( reply )*
│ • ${prefix}demote *( reply/tag )*
│ • ${prefix}promote *( reply/tag )*
│ • ${prefix}tagme
│ • ${prefix}linkgc
│ • ${prefix}opentime
│ • ${prefix}closetime
└───···
`}

global.menutools = (prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname) => {
return `hi ${pushname} 🪸, i am an automated system (WhatsApp bot) that can help to do something search and get data / information only through WhatsApp.

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

▧  *T O O L S  M E N U*
│ • ${prefix}sticker *( reply image )*
│ • ${prefix}smeme *( text|text )*
│ • ${prefix}ssweb *( url )*
│ • ${prefix}tqto
│ • ${prefix}searchsubdo
│ • ${prefix}ceksn
│ • ${prefix}unreg
│ • ${prefix}stext *( question )*
│ • ${prefix}get *( url )*
│ • ${prefix}ambilq *( reply )*
│ • ${prefix}translate
│ • ${prefix}qc
└───···

▧  *S E A R C H  M E N U*
│ • ${prefix}tiktoks *( search )*
│ • ${prefix}ongoing
│ • ${prefix}trackip *( IP Address )*
│ • ${prefix}lirik *( search )*
│ • ${prefix}spotifysearch *( search )*
│ • ${prefix}npmsearch *( search )*
│ • ${prefix}yts *( search )*
│ • ${prefix}ceknik *( nik ktp )*
│ • ${prefix}ping
│ • ${prefix}server
└───···
`}

global.menuconvert = (prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname) => {
return `hi ${pushname} 🪸, i am an automated system (WhatsApp bot) that can help to do something search and get data / information only through WhatsApp.

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

▧  *C O N V E R T E R  M E N U*
┌ • ${prefix}tourl *( reply media )*
│ • ${prefix}toptv *( reply video )*
│ • ${prefix}tomp3 *( reply audio/video )*
│ • ${prefix}tovn *( reply audio/video )*
│ • ${prefix}toimg *( reply sticker )*
│ • ${prefix}enhancer *( reply image )*
│ • ${prefix}unblur *( reply image )*
│ • ${prefix}enhance *( reply image )*
│ • ${prefix}hdr *( reply image )*
│ • ${prefix}hd *( reply image )*
│ • ${prefix}remini *( reply image )*
│ • ${prefix}bass *( reply audio )*
│ • ${prefix}blown *( reply audio )*
│ • ${prefix}deep *( reply audio )*
│ • ${prefix}earrape *( reply audio )*
│ • ${prefix}fast *( reply audio )*
│ • ${prefix}fat *( reply audio )*
│ • ${prefix}nightcore *( reply audio )*
│ • ${prefix}reverse *( reply audio )*
│ • ${prefix}robot *( reply audio )*
│ • ${prefix}slow *( reply audio )*
│ • ${prefix}smooth *( reply audio )*
│ • ${prefix}squirrel *( reply audio )*
└───···
`}

global.menuislamic = (prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname) => {
return `hi ${pushname} 🪸, i am an automated system (WhatsApp bot) that can help to do something search and get data / information only through WhatsApp.

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

▧  *I S L A M I C  M E N U*
│ • ${prefix}bacaansholat
│ • ${prefix}ayatkursi
│ • ${prefix}quotesislami
│ • ${prefix}asmaulhusna
│ • ${prefix}kisahnabi
└───···
`}

global.menuephoto = (prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname) => {
return `hi ${pushname} 🪸, i am an automated system (WhatsApp bot) that can help to do something search and get data / information only through WhatsApp.

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

▧  *E P H O T O  M E N U*
│ • ${prefix}glitchtext *( name )*
│ • ${prefix}writetext *( name )*
│ • ${prefix}advancedglow *( name )*
│ • ${prefix}typographytext *( name )*
│ • ${prefix}pixelglitch *( name )*
│ • ${prefix}neonglitch *( name )*
│ • ${prefix}flagtext *( name )*
│ • ${prefix}flag3dtext *( name )*
│ • ${prefix}deletingtext *( name )*
│ • ${prefix}blackpinkstyle *( name )*
│ • ${prefix}glowingtext *( name )*
│ • ${prefix}underwatertext *( name )*
│ • ${prefix}logomaker *( name )*
│ • ${prefix}cartoonstyle *( name )*
│ • ${prefix}papercutstyle *( name )*
│ • ${prefix}watercolortext *( name )*
│ • ${prefix}effectclouds *( name )*
│ • ${prefix}blackpinklogo *( name )*
│ • ${prefix}gradienttext *( name )*
│ • ${prefix}summerbeach *( name )*
│ • ${prefix}luxurygold *( name )*
│ • ${prefix}multicoloredneon *( name )*
│ • ${prefix}sandsummer *( name )*
│ • ${prefix}galaxywallpaper *( name )*
│ • ${prefix}1917style *( name )*
│ • ${prefix}makingneon *( name )*
│ • ${prefix}royaltext *( name )*
│ • ${prefix}freecreate *( name )*
│ • ${prefix}galaxystyle *( name )*
│ • ${prefix}lighteffects *( name )*
└───···
`}

global.panelmenu = (prefix, m, pendaftar, command, sender, formattedUsedMem, formattedTotalMem, limitnya, isCreator, isPremium, pushname) => {
return `hi ${pushname} 🪸, i am an automated system (WhatsApp bot) that can help to do something search and get data / information only through WhatsApp.

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
`}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

