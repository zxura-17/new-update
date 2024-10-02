let fs = require('fs')

module.exports = {
	type: 'owner',
	command: ['sendplug'],
	operate: async (context) => {
		const {
			ptz,
			m,
			q: text,
			prefix,
			command,
            args,
			reply
		} = context;
	if (!q) return reply(`*Example*: ${prefix + command} @tag/number tools/tagme.js`)
	let who;
				try {
				if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender } catch (err) {
				if (m.isGroup) who = args[0] + "@s.whatsapp.net"
				}
				if (!who) return reply(`tag/number ! ! !`)
				if (!args[1]) return reply(`plugin (name)`)

 const isValid = await ptz.onWhatsApp(q + "@s.whatsapp.net");
 	if (isValid.length == 0) {
	 	return reply("Number not in whatsapp!");
 	}
				var user_bot = await fs.readFileSync(`./plugin/${args[1]}.js`)
				ptz.sendMessage(who, {
					document: user_bot,
					caption: 'Kiriman Plugins: ' + ' `'+args[1]+'`',
					mimetype: 'document/application',
					fileName: `${args[1]}`
				})
reply('Success sending file to :' + args[0])
}}