let handler = function (m) {
	this.sendContact(m.chat, '6283112170548', 'Owner RUSHBot :)', m)
}

handler.customPrefix = ['🍭Owner RUSHBot'] 
handler.command = new RegExp

module.exports = handler
