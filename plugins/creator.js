const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Cocopie;;;'
                    + 'FN:Cocopie\n' // full name
                    + 'ORG:Owner CocoBotz;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=628992029499:+628992029499\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Cocopie', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
