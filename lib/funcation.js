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
}, 40 * 500)})
.catch(err => console.log(err))
 }
 exports.pushname = (ctx) => {
 try {
user = ctx
last_name = user["last_name"] || ""
full_name = user.first_name + " " + last_name
user["full_name"] = full_name.trim()
return user
 } catch (e) { throw e }
}
/*exports.sendStart = (client) => {
client.replyWithPhoto({url: 'https://telegra.ph/file/aca0973c20a5d1f40429a.jpg'},
{
caption: 'Hai Saya Deff-Bot siap membantu ',

reply_markup: {
inline_keyboard:  [
[{ text: 'Source', url: 'github.com/deff-y'}],
[{ text: 'Tutorial Penggunaan', url: 'https://youtu.be/dBx06IOjtBg'}],
[{ text: 'Command 🗂️', callback_data: 'allmenu' }]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
})
}*/
exports.sendText = async(bot,ctx,teks) => {
bot.telegram.sendMessage(ctx.chat.id, teks,
 {
reply_markup: {
inline_keyboard: [
[{text: 'All menu' ,callback_data: 'allmenu'}],
[{text: 'Downloader' ,callback_data: 'downloadmenu'},
{text: 'Search' ,callback_data: 'searchmenu'},
{text: 'Other' ,callback_data: 'othermenu'},
{text: 'Tools' ,callback_data: 'toolsmenu'}],
[{text: 'Image Manipulation' ,callback_data: 'imagemanipulationmenu'}],
[{text: 'Donasi' ,callback_data: 'donasi'}]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
 })
 }

