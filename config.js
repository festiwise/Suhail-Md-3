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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_09_03_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNSxcbiAgICAgICAgODMsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDgyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxODksXG4gICAgICAgIDY3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1LFxuICAgICAgICAxMixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzksXG4gICAgICAgIDg5LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA1LFxuICAgICAgICA2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkxLFxuICAgICAgICA4MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk0LFxuICAgICAgICA0MCxcbiAgICAgICAgOSxcbiAgICAgICAgNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNDksXG4gICAgICAgIDc5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MixcbiAgICAgICAgMjUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDUyLFxuICAgICAgICA1MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgODcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5dnBuWUZmWTdFdm1mci9aZWtWM2ZMTEpPTHdNU2J0dXhFeElDVnpkTUpvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyZnVjeEdvNFFmLVRoTktvazluYjhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVkZTFhMmNkLWZmMTItNDdmNi1hNGRhLTY4ZjAyYWM1NDQ3OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzLFxuICAgICAgMTU1LFxuICAgICAgMTE5LFxuICAgICAgMTk5LFxuICAgICAgMTM0LFxuICAgICAgNDUsXG4gICAgICAyMDEsXG4gICAgICAxODYsXG4gICAgICAyNTMsXG4gICAgICAxNTYsXG4gICAgICAxODIsXG4gICAgICAyMDcsXG4gICAgICAxODIsXG4gICAgICAxMDIsXG4gICAgICAxNzksXG4gICAgICA2MyxcbiAgICAgIDExMSxcbiAgICAgIDE1OSxcbiAgICAgIDE5MSxcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNCxcbiAgICAgIDU3LFxuICAgICAgNDQsXG4gICAgICAxNDgsXG4gICAgICAyMTEsXG4gICAgICAxMTMsXG4gICAgICAyNDMsXG4gICAgICAxMDEsXG4gICAgICAxMzYsXG4gICAgICAxNzYsXG4gICAgICAxMDksXG4gICAgICAxMixcbiAgICAgIDIwNyxcbiAgICAgIDE3OSxcbiAgICAgIDIzNCxcbiAgICAgIDExOSxcbiAgICAgIDEyNyxcbiAgICAgIDEsXG4gICAgICAxNjAsXG4gICAgICAyMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1NHTEdKODVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU1MDkyODc5NTo5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA1MTM2Nzg5NzA4OTM2OjkxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04yRjByTURFT2ZqbEw4R0dBd2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicHhQd1pqSTRSLzBJL2hBS3RiNDdjcnNEZFlsWUpOZFplVm4xUy9sOWZFQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtTkVMTjNlN1hNd2kvQ3p0MG9yWG1Zc2tkTFljYStEQ1RtQ0tpajJmTmthOGFkNHJrdlNSM1BBQU8wQXBrT1VMRWNneFRLZlBrRUNCZjA2RklUdEhBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJROVNGdmpxWTdRRERtYzhFaUpseENTMmZia2Nobm9YaEdkV09obHJEY2tubTVMT0hWQ0VxNTNwYUZEVEUzMm9yUzF0b04wb1NpVndOdEozcnRyZGVnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1NTA5Mjg3OTU6OTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDMwNzM3NzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGMS9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUYxLy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
