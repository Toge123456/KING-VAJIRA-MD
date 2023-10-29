const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : '17245423663';
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://vajira:vajira@cluster0.hzwqrqq.mongodb.net/?retryWrites=true&w=majority" ;
global.port= false // Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000  ; 
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363022922797633@g.us' ;
global.email = 'tresorngalamou@gmail.com' ;
global.location = 'florida' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/Colombo'
global.gurl = 'https://youtube.com/@gamingewingyt6216' ; // add your username
global.sudo =  process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : '17245423663'; ;
global.devs = "17245423663"; //Dont change it From here
global.github  = process.env.YOUR_GITHUB || 'https://github.com/vajirabot1/KING-VAJIRA-MD';
global.scan  = process.env.QR_URL || 'https://replit.com/@VajiraRathnayak/KING-VAJIRA-MD?v=1';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' ; //wa.me/+923000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/fb7993e24f7ecdaecbed5.jpg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || "",      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'ᴠᴀᴊɪʀᴀ-ᴍᴅ',
  botbgm: process.env.BOT_BGM || 'false',
  ownername:  process.env.OWNER_NAME || `𝕋𝕆𝔾𝔼 𝕀ℕ𝕌𝕄𝔸𝕂𝕀`,
  author:  process.env.PACK_AUTHER || '',
  autovoice: process.env.AUTO_VOICE || 'true',
  errorChat : process.env.ERROR_CHAT|| '', // put 'chat' here to send error in chat ,where it accures
  read_status : process.env.AUTO_READ_STATUS || 'true',
  save_status : process.env.AUTO_SAVE_STATUS || 'false',
  packname:  process.env.PACK_NAME || "𝕋𝕆𝔾𝔼 𝕀ℕ𝕌𝕄𝔸𝕂𝕀" ,
  autoreaction: process.env.AUTO_REACTION || 'true',  //  | 'cmd' | 'true' | 'all' |
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokeyuntillYouPutAnWordHere',
  alwaysonline: process.env.WAPRESENCE || 'unavailable', // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
  antifake : 'null', // process.env.FAKE_COUNTRY_CODE ||'94',
  readmessage: process.env.READ_MESSAGE || 'true',   //  | 'false' | 'true' | 
  readcmds : process.env.READ_COMMANDS || 'true',    //  | 'false' | 'true' | 
  HANDLERS: process.env.PREFIX || ',',
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "true",   
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true',  //  | 'false' | 'true' | 
  antilink_values: process.env.ANTILINK_VALUES || 'https://,chat.whatsapp.com',
  //antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "removeBg.com",
  caption :process.env.CAPTION || "BY 𝕋𝕆𝔾𝔼 𝕀ℕ𝕌𝕄𝔸𝕂𝕀",   //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'v.1.2.2',
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : 'VAJIRA',
  menu : process.env.MENU || '', /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Vajira-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'public',
  KOYEB_API : process.env.KOYEB_API || ''
};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
