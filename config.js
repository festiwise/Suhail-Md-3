const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233550928795";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_36_03_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0LFxuICAgICAgICA5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NCxcbiAgICAgICAgOTksXG4gICAgICAgIDQ3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgODQsXG4gICAgICAgIDU1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDY4LFxuICAgICAgICA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM5LFxuICAgICAgICA4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3LFxuICAgICAgICA4NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwLFxuICAgICAgICA1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDcyLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NixcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDg0LFxuICAgICAgICAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ1LFxuICAgICAgICAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhsWHphdE04QS9qTC9tQUJ4RmNrQjJhK2VFcitEeGJDMVJuTUtiMUM4RnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJzZGJlU2JxUlZLNXI2YXJoRGpXNWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTFlNTdlNWItZTljNi00OWNiLThlZmItMjg3OWJlNjcyYzFhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgMTQ1LFxuICAgICAgOTMsXG4gICAgICAxMTAsXG4gICAgICAxNyxcbiAgICAgIDQ3LFxuICAgICAgMTA2LFxuICAgICAgMTU5LFxuICAgICAgMTE0LFxuICAgICAgMTkwLFxuICAgICAgMTQ2LFxuICAgICAgMTgsXG4gICAgICAzNyxcbiAgICAgIDIxOSxcbiAgICAgIDkwLFxuICAgICAgMTAyLFxuICAgICAgNTEsXG4gICAgICA2MyxcbiAgICAgIDE1NSxcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MyxcbiAgICAgIDEwMSxcbiAgICAgIDIxLFxuICAgICAgNDgsXG4gICAgICAyMDMsXG4gICAgICA0OSxcbiAgICAgIDM2LFxuICAgICAgMCxcbiAgICAgIDIxNixcbiAgICAgIDIwMixcbiAgICAgIDYwLFxuICAgICAgMjYsXG4gICAgICAyMTEsXG4gICAgICA1NSxcbiAgICAgIDI0MyxcbiAgICAgIDI0NSxcbiAgICAgIDE5MCxcbiAgICAgIDMxLFxuICAgICAgMTI3LFxuICAgICAgNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkFEQTlZOFhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU1MDkyODc5NTo4NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA1MTM2Nzg5NzA4OTM2Ojg0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04yRjByTURFT2Zmakw4R0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicHhQd1pqSTRSLzBJL2hBS3RiNDdjcnNEZFlsWUpOZFplVm4xUy9sOWZFQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnQldsS0VHcTlJTGc3eGM2Mml6YWRlYVJtK0c0VTRxQ1ZlUTM5M3RHVjZuNEZrOHg2a0ZWK2ZBWG94MG52MGtwMHNvRkplaGZjUngycmJEV1BCTjFDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhbWxUWVc0VXhjeWJkVHpKeVVUM0h1TEpFMUZoYm0wUEg0Rzl5QUlKb1pQQVlxM0ZKV1BUZmhKSlVkdk11RUxxZmt4UWpLWGt4NEo1QmVaK1dVZ0ZDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1NTA5Mjg3OTU6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDI5NDIxODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGMkNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUYyQy5qc29uIjogIntcImtleURhdGFcIjpcImlTdm1rWVk1aUIzcVB1OTJsTVNvSE1QTDFXRVdVbm1FWHU3SWtCVFBNbjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTEzNjA1MzQxLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTc0Mjk0MTIwMDQzMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
