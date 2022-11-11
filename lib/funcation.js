const chalk = require('chalk')
const fetch = require ('node-fetch')
const axios = require('axios')

exports.sendVideo = (client,url,filename,caption) => {
client.replyWithVideo({
url: url,
filename: filename

},{caption: caption})
}

exports.isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=])/, 'gi'))
}

exports.toJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
// console.log(json)
resolve(json)
})
.catch((err) => {
reject(err)
})
})
exports.format = async(seconds) => {
function pad(s){
return (s < 10 ? `0` : ``) + s;
}
var hours = Math.floor(seconds / (6060));
var minutes = Math.floor(seconds % (6060) / 60);
var seconds = Math.floor(seconds % 60);
return pad(hours) + ` H,` + pad(minutes) + ` M,` + pad(seconds) + ` S`;
 }
exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
		return 'err'
	}
}
exports.getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
exports.sendsearch = async(bot,ctx) => {
 let botReply = "Tunggu Sebentar..."
 bot.telegram.sendMessage(ctx.chat.id ,botReply,{reply_to_message_id: ctx.message.message_id})
.then((result) => { setTimeout(() => {
bot.telegram.deleteMessage(ctx.chat.id, result.message_id)
}, 10 * 500)})
.catch(err => console.log(err))
 }