const { Telegraf } = require('telegraf')
const chalk = require("chalk")
const fs = require("fs")

exports.menu = (nama, pref) => {
  return `──「 **ALL MENU** 」──\nHai **${nama}!**\nOwner : Daffa

**[Downloader]**

${pref}tiktok <url>
${pref}youtubemp3 <url>
${pref}youtubemp4 <url>
${pref}instagram <url>
${pref}mediafire <url>
${pref}facebook <url>
${pref}twitter <url>

**[Searching]**
${pref}searchimage <query>

**[Other]**
${pref}cuaca <name place>

**[Tools]**
${pref}tourl <Reply img>

「 __Deff__ 」`
}

exports.start = (nama) => {
	return `Hello ${nama}👋, Thanks for visiting this bot

Have A Nice Day`
	}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update!`), chalk.yellow(`${__filename}`))
	delete require.cache[file]
	require(file)
})
