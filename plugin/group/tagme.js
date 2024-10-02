module.exports= {
type: 'group',
command: ['tagme'],
operate: async (context) => {
const { ptz, m, q:text, reply } = context;

let orang = (await ptz.groupMetadata(m.chat)).participants.map(u => u.jid)
let tag = `@${m.sender.replace(/@.+/, '')}`
let mentionedJid = [m.sender]
 ptz.sendMessage(m.chat,{text: tag},{ contextInfo: { mentionedJid }},{quoted:m})
}
 }