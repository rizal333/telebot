/**
	* CREATED BY FADHIL GRAPHY
	* CARA INSTALL? BUKA PADA FOLDER MENU LALU BUKA FILE carainstall.txt
	* ADDIN AUTO UPDATE WOI, GW ADD MALAH EROR:v
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const { Telegraf } = require('telegraf')
const NodeID3 = require('node-id3')
const yts = require( 'yt-search' )
const chalk = require("chalk")
const fs = require("fs")
const gradient = require('gradient-string');
const { promisify } = require('util')
const _gis = require('g-i-s')
const gis = promisify(_gis)
const os = require('os')
const speed = require(`performance-now`);
const moment = require('moment-timezone')

const { color, bgcolor, ConsoleLog, biocolor } = require('./lib/color')
const { sendVideo, toJson, isUrl, format, getBuffer, getRandom, sendsearch, pushname, sendText} = require('./lib/funcation.js')
const setting = require('./lib/setting.js')
const men = require("./menu/help.js")
const { TiktokDownloader } = require("./lib/scraper/tiktokdl.js")
const { TelegraPh } = require("./lib/scraper/telegraph.js")
const {  youtube, searchResult } = require("./lib/scraper/ytdl.js")
const { instagram } = require("./lib/scraper/igdl.js")
const mediafireDl  = require("./lib/scraper/mediafire.js")
const { twitter } = require("./lib/scraper/twitter.js")
const Cuaca = require("./lib/scraper/cuaca")
const { facebookDownload } = require("./lib/scraper/fbdl")
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const brainly = require('brainly-scraper')
const Spotify = require('spotifydl-core').default
const spotify = new Spotify({
clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
}) 
/**
[============== GATAU INI MAINAN ===============]
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.clear()
let duck = gradient.pastel.multiline([
    "───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───",
	"───█▒▒░░░░░░░░░▒▒█───",
	"────█░░█░░░░░█░░█────",
	"─▄▄──█░░░▀█▀░░░█──▄▄─",
	"█░░█─▀▄░░░░░░░▄▀─█░░█",
	"█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█",
	"█░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█",
	"█░░║║║╠─║─║─║║║║║╠─░░█",
	"█░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█",
	"█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█"
].join('\n'));
console.log(duck);
console.log(bgcolor('\nBase by : Fadhil Graphy\nInstagram : deff.ydhs\n', 'gray'))
setTimeout(function () {
    console.log(color('Success Conected!', 'magenta'))
}, 1000);
global.bot = new Telegraf(`${setting.tokenbot}`) 


/**
[============== CALLBACK DATA ===============]
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
bot.on("callback_query", async (ctx) => {
    var body = ctx.callbackQuery.data
    const chatss = ctx.update.callback_query.message.text || ctx.update.callback_query.message.caption || ""
	var prefa = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ_&<`™©®Δ^βα¦|/\\©^]/.test(chatss) ? chatss.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ_&<!`™©®Δ^βα¦|/\\©^]/gi) : '/'

	
async function donasi(anu, name) {

    text = men.donasi(ctx.update.callback_query.message.chat.first_name+" "+ctx.update.callback_query.message.chat.last_name)
    options = {
        reply_markup: {
            inline_keyboard: [
            
                [
                    { text: 'Back to menu', callback_data: 'command' }                             ]
            ]
        }
    }
    try {
        await anu.editMessageText(text, options, {parse_mode: "Markdown"})
    } catch {
        await anu.reply(text, options)
    }

}
async function sendCmd(anu, text) {
        return anu.editMessageText(text, {
reply_markup: {
inline_keyboard: [
[{ text: 'My Instagram', url: 'instagram.com/deff.ydhs'}
],
[
{text: 'Back' ,callback_data: 'command'}]
]},
disable_web_page_preview: "true", parse_mode: "Markdown"}).then(a => {
        })
        }
    switch (body) {
    //<No prefix / prefix awal bot>\\
    	case "allmenu":
        return ctx.editMessageText(men.allmenu(ctx.update.callback_query.message.chat.first_name+" "+ctx.update.callback_query.message.chat.last_name, prefa),{
reply_markup: {
inline_keyboard: [
[{ text: 'My Instagram', url: 'instagram.com/deff.ydhs'}
],
[
{text: 'Back' ,callback_data: 'command'}]
]},
disable_web_page_preview: "true", parse_mode: "Markdown"}).then(a => {
        })
        break

    	case "command":
    	ctx.deleteMessage()
        return sendText(bot, ctx, 'Hai Silahkan pilih menu dibawah')  
        
        case "downloadmenu":
        sendCmd(ctx, men.downloader(prefa))
        break
        case "othermenu":
        sendCmd(ctx, men.other(prefa))
        break
        case "searchmenu":
        sendCmd(ctx, men.searching(prefa))
        break
        case "toolsmenu":
        sendCmd(ctx, men.tools(prefa))
        break
        case "imagemanipulationmenu":
        sendCmd(ctx, men.imageManipulation(prefa))
        break
    	//PEMISAH!!
		
case 'donasi': {
   	await donasi(ctx, ctx.update.callback_query.message.chat.first_name+" "+ctx.update.callback_query.message.chat.last_name, body)
   	}
	break

    }
})
/*bot.action('start', async(ctx) =>{
sendStart(bot,ctx)
})*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


bot.on("message", async(client) => {
try {
	const chats = client.message.text || client.message.caption || ""
    var prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ_&<`™©®Δ^βα¦|/\\©^]/.test(chats) ? chats.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ_&<!`™©®Δ^βα¦|/\\©^]/gi) : '.'
    const command = chats.trim().split(" ").shift().toLowerCase()
    const name = pushname(client.message.from) 
    const OwnerId = [`${setting.owner}`]
    const isOwner = OwnerId.includes(name.full_name)
	const from = client.message.from.id.toString()
	const quotedMsg = client.message.reply_to_message
	const isCmd = chats.startsWith(prefix)
	const args = chats.trim().split(/ +/).slice(1)
	const q = args.join(' ')

    var today = new Date();
    const time = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

   const getLink = async(file_id) => { try { return (await bot.telegram.getFileLink(file_id)).href } catch { throw "Error while get url" } }
   const isImage = client.message.hasOwnProperty("photo")
   const isText = client.message.hasOwnProperty("text")
   const isVideo = client.message.hasOwnProperty("video")
   const isAudio = client.message.hasOwnProperty("audio")
   const isSticker = client.message.hasOwnProperty("sticker")
   const isContact = client.message.hasOwnProperty("contact")
   const isLocation = client.message.hasOwnProperty("location")
   const isDocument = client.message.hasOwnProperty("document")
   const isAnimation = client.message.hasOwnProperty("animation")
   const isMedia = isImage || isVideo || isAudio || isSticker || isContact || isLocation || isDocument || isAnimation
   const Quoted = client.message.reply_to_message || {}
   const isQuotedImage = Quoted.hasOwnProperty("photo")
   const isQuotedVideo = Quoted.hasOwnProperty("video")
   const isQuotedAudio = Quoted.hasOwnProperty("audio")
   const isQuotedSticker = Quoted.hasOwnProperty("sticker")
   const isQuotedContact = Quoted.hasOwnProperty("contact")
   const isQuotedLocation = Quoted.hasOwnProperty("location")
   const isQuotedDocument = Quoted.hasOwnProperty("document")
   const isQuotedAnimation = Quoted.hasOwnProperty("animation")
   const isQuoted = client.message.hasOwnProperty("reply_to_message")
var file_id = ""
  if (isQuoted) {
   file_id = isQuotedImage ? client.message.reply_to_message.photo[client.message.reply_to_message.photo.length - 1].file_id :
    isQuotedVideo ? client.message.reply_to_message.video.file_id :
     isQuotedAudio ? client.message.reply_to_message.audio.file_id :
      isQuotedSticker ? client.message.reply_to_message.sticker.file_id :
       isQuotedDocument ? client.message.reply_to_message.document.file_id :
        isQuotedAnimation ? client.message.reply_to_message.animation.file_id : ""
         } else {
file_id = isImage ? client.message.photo[client.message.photo.length - 1].file_id :
 isVideo ? client.message.video.file_id :
  isAudio ? client.message.audio.file_id :
   isDocument ? client.message.document.file_id :
    isSticker ? client.message.sticker.file_id :
     isAnimation ? client.message.animation.file_id : ""
  }
     var mediaLink = file_id != "" ? await getLink(file_id) : ""


if (chats) {
bot.telegram.sendChatAction(client.chat.id, 'upload_voice'),
	console.log(color('[CMD]', 'green'), color(time, 'blue'), color(chats.split(" ")[0] || chats, 'cyan'), color("By", "green"), color(name.full_name, 'white'))
	}
/**
[============== FUNCATION MENU ===============]
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
async function help(anu) {

    text = men.start()
    options = {
        reply_markup: {
            inline_keyboard: [
            	[
					{ text: 'Source', url: 'github.com/deff-y'},
				    { text: 'Tutorial Penggunaan', url: 'https://youtu.be/dBx06IOjtBg'}
				],
                [
                    { text: 'Command', callback_data: 'command' }                 ]
            ]
        }
    }
    try {
        await anu.editMessageText(text, options, {parse_mode: "Markdown"})
    } catch {
        await anu.reply(text, options)
    }

}


/**
[============== START COMMAND ===============]
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

switch (command) {
	case ">":
if (!isOwner) return
	try {
    	let evaled = await eval(chats.slice(2))
    	if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
    	client.reply(`${evaled}`)
	} catch (err) {
    	client.reply(`${err}`)
	}
	break

	case prefix+"menu": 
	case prefix+"start": {
     help(client)
   	}
	break
	//BUAT MISAH AJA!!!
	case prefix+'tiktoknowm':
	case prefix+'tiktok':
	case prefix+'tt':{
if (!q) return client.reply(`masukan url\ncontoh ketik : ${prefix}tiktok <link>`)
           sendsearch(bot,client)
           try {
                 TiktokDownloader(args[0])
            	 .then(async hasil => {	
            	 var { media } = hasil
	             console.log(hasil)	  
	             let url = media[1].url 
	             let filename = Date.now()+'.mp4'
				let nih = ` *TIKTOK DOWNLOADER BY DEFF-BOT*\n©️ *Creator:* DEFF\nThank You
				`
		await sendVideo(client,url,filename,nih)

				})
	} catch(e) {
client.reply('Error : Masukan link yg valid')
}
				}
			    break
case prefix+'searchimage':
case prefix+'gimage': 
if(!q) return client.reply('Nyari apa kak?\ncontoh ketik: /searchimage kuda')
sendsearch(bot,client)
           try {
let results = await gis(args.join(" ")) || []
let { url, width, height } = results[Math.floor(Math.random() * results.length)] || {}
if (!url) return client.reply('Gambar tidak ditemukan')
client.replyWithPhoto({
url: url,
filename: Date.now() + '.jpg' })
	} catch(e) {
client.reply('Error')
}
break

case prefix+'ping': case prefix+'status':
const uptime = process.uptime();
const timestamp = speed();
const latensi = speed() - timestamp
const tutid = moment().millisecond()
const tmenu = `Host : _${os.hostname()}_
Platfrom : _${os.platform()}_
Penggunaan RAM : _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require(`os`).totalmem / 1024 / 1024)}MB_

Ping : ${tutid}MS
Runtime : ${await format(uptime)}
Speed : ${latensi.toFixed(4)} Second` 
bot.telegram.sendMessage(client.chat.id, tmenu ,
{reply_to_message_id: client.message.message_id,
reply_markup: {
inline_keyboard:[
[
{ text: 'Back!', callback_data: 'start'}]
]
},
parse_mode: "Markdown"
})
break
case prefix+'ytmp4':
case prefix+'youtubemp4': {
if (!q) return client.reply(`masukan url\ncontoh ketik : ${prefix}ytmp4 https://youtu.be/JFK-K4d3JzQ`)
sendsearch(bot,client)
           try {
let nuh = await youtube(q)
console.log(nuh)
let link = nuh.link
await getBuffer(link).then(async result => {
let ranV = getRandom('.mp4')
await fs.writeFileSync('./sampah/' + ranV, result)
const buff = './sampah/' + ranV    
console.log(result)                
await client.replyWithVideo({ source: buff});
setTimeout(() => { fs.unlinkSync(buff) }, 10000)
})
	} catch(e) {
client.reply('Error : Masukan link yg valid')
}
}
break

case prefix+'ytmp3':
case prefix+'youtubemp3': {
if (!q) return client.reply(`masukan url\ncontoh ketik : ${prefix}ytmp3 https://youtu.be/JFK-K4d3JzQ`)
sendsearch(bot,client)
           try {
let nuh = await youtube(q)
console.log(nuh)
 let filename = Date.now()+'.mp3'
 let caption = 'Sukses'
let link = nuh.mp3
await getBuffer(link).then(async result => {
let ranV = getRandom('.mp3')
await fs.writeFileSync('./sampah/' + ranV, result)
const buff = './sampah/' + ranV    
console.log(result)                
await client.replyWithVoice({
    source: buff
  });
setTimeout(() => { fs.unlinkSync(buff) }, 10000)
})
	} catch(e) {
client.reply('Error : Masukan link yg valid')
}
}
break
case prefix+'igdl':
case prefix+'instagram' : {
if (!q) return client.reply(`masukan url\ncontoh ketik : ${prefix}instagram <link>`)
sendsearch(bot,client)
           try {
let IG = await instagram(q)
let TXT = ` *⇨ Your Url* : ${IG.url}\n`
TXT += ` *⇨ Title* : ${IG.title}\n`
TXT += ` *⇨ Total Media* : ${IG.medias.length}\n\n`
TXT += ` _Harap tunggu, File akan dikirim beberapa saat lagi...._`
for(let v of IG.medias){
let filename = Date.now()+'.mp3'
let url = v.url
if(v.extension == 'jpg' || v.extension == 'jpeg' || v.extension == 'png'){
client.replyWithPhoto({
url: url,
filename: Date.now() + '.jpg' })
} else if(v.extension == 'mp4'){
	await sendVideo(client,url,filename,'Done')
} 
}  
	} catch(e) {
client.reply('Error : Masukan link yg valid')
}
}
break
case prefix+'mediafire':{
if (!q) return client.reply(`masukan url\ncontoh ketik : ${prefix}mediafire <link>`)
sendsearch(bot,client)
           try {
let medi = await mediafireDl(q)
texs = `[ Mediafire Download 📥 ]\n\n> Name : ${medi[0].name}\n> Type : application/${medi[0].mime}\n> FileSize :  ${medi[0].size}\n${medi[0].link}`
client.reply(texs)
client.replyWithDocument({
url: medi[0].link,
filename: medi[0].name + '.' + medi[0].mime })
	} catch(e) {
client.reply('Error : Masukan link yg valid')
}
}
break
case prefix+'twitter':{
if (!q) return client.reply(`masukan url\ncontoh ketik : ${prefix}twitter <link>`)
sendsearch(bot,client)
           try {
const down = await twitter(args[0])
const url = down.HD
let filename = Date.now()+'.mp4'
await sendVideo(client,url,filename,'Done')
	} catch(e) {
client.reply('Error : Masukan link yg valid')
}
}
break
case prefix+'facebook':
case prefix+'fbdl':{
if (!q) return client.reply(`masukan url\ncontoh ketik : ${prefix}facebook <link>`)
sendsearch(bot,client)
           try {
if(q.includes('/reel/')) return msg.reply('Fitur ini tidak berfungsi untuk video reels!')
if(!q.includes('/videos/') && !q.includes('watch/')) return client.reply('Media tidak valid!\nHanya mendukung tautan seperti contoh : \n- https://facebook.com/username/videos/\n- https://fb.watch/plmnkoijb')            
 let efbe = await facebookDownload(q)   
let filename = Date.now()+'.mp4'
let link = efbe.result.hd
await sendVideo(client,link,filename,'Done')
	} catch(e) {
client.reply('Error : Masukan link yg valid')
}
}
break
case prefix+'cuaca':
case prefix+'cekcuaca':{
if (!q) return client.reply(`masukan lokasi\ncontoh ketik : ${prefix}cekcuaca jakarta`)
sendsearch(bot,client)
           try {
cuaca = await Cuaca(q)
text = client.reply(`Nama : ${cuaca.data.Nama}\nSuhu : ${cuaca.data.Suhu}\nAngin : ${cuaca.data.Angin}\nKelembapan : ${cuaca.data.Kelembaban}\nCuaca : ${cuaca.data.Cuaca}\nUdara : ${cuaca.data.Udara}`)
	} catch(e) {
client.reply('Error')
}
}
break
case prefix+'tourl':{
if (!isQuotedImage) return client.reply('Reply Gambar yang ingin di convert ke url dengan caption /tourl') 
sendsearch(bot,client)
try {
let buff = await getBuffer(mediaLink)
let ranV = getRandom('.jpg')
await fs.writeFileSync('./sampah/' + ranV, buff)
const buffer = './sampah/' + ranV  
const graph = await TelegraPh(buffer)
client.reply(`Result : ${graph}`)
  setTimeout(() => { fs.unlinkSync(buffer) }, 10000)
} catch(e) {
client.reply('Hanya support Image')
}
}
break
case prefix+'wanted': case prefix+'utatoo': case prefix+'unsharpen': case prefix+'thanos': case prefix+'sniper': case prefix+'sharpen': case prefix+'sepia': case prefix+'scary': case prefix+'rip': case prefix+'redple': case prefix+'rejected': case prefix+'posterize': case prefix+'ps4': case prefix+'pixelize': case prefix+'missionpassed': case prefix+'moustache': case prefix+'lookwhatkarenhave': case prefix+'jail': case prefix+'invert': case prefix+'greyscale': case prefix+'glitch': case prefix+'gay': case prefix+'frame': case prefix+'fire': case prefix+'distort': case prefix+'dictator': case prefix+'deepfry': case prefix+'ddungeon': case prefix+'circle': case prefix+'challenger': case prefix+'burn': case prefix+'brazzers': case prefix+'beautiful': {
sendsearch(bot,client)
try {
let buff = await getBuffer(mediaLink)
let ranV = getRandom('.jpg')
await fs.writeFileSync('./sampah/' + ranV, buff)
const buffer = './sampah/' + ranV  
const graph = await TelegraPh(buffer)
ameApi.generate(chats.slice(1), { url : graph }).then(gambar => { 
client.replyWithPhoto({
source: gambar,
filename: Date.now() + '.jpg' })
})
	} catch(e) {
client.reply(`Reply image dengan caption ${command}`)
}
}
break
case prefix+'hh': {
client.reply('yyy')
}
break 
case prefix+'spotify':{
if (!q) return client.reply(`masukan url\ncontoh ketik : ${prefix}spotify <link>`)
sendsearch(bot,client)
           try {
let spo = await spotify.downloadTrack(q)
await client.replyWithVoice({
    source: spo
  });
  	} catch(e) {
client.reply('Error : Masukan link yg valid')
}
}
break
} // END COMMAND
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	} catch(e) {
console.log(e)
}
})

bot.launch().then(() => console.log('BOT READY!'));
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let file = require.resolve(__filename)
 fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.red(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})
process.on('uncaughtException', console.error)

