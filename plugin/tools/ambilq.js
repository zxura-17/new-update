const fs = require('fs');
const kripto = require('crypto');
require("../../config");

module.exports = {
 type: 'tools',
 command: ['ambilq', 'getq'],
 operate: async (context) => {
 const { ptz, m, q, prefix, command, reply } = context;
 if (!m.quoted) return reply(`*Reply pesan yang quotednya mau diambil*`);
 
 let penis = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2);
 let jeneng = `MessageData_${kripto.randomBytes(8).toString('hex')}.json`;

 await fs.writeFileSync(jeneng, penis);
 await reply(penis);
 await ptz.sendMessage(m.chat, { document: { url: `./${jeneng}` }, fileName: jeneng, mimetype: '*/*' }, { quoted: m });
 await fs.unlinkSync(jeneng);
 }
};