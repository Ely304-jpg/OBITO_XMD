
export async function prem(message, client) {

    const remoteJid = message.key.remoteJid;

    const today = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDay = daysOfWeek[today.getDay()];

    const currentDate = today.getDate();

    const currentMonth = today.getMonth() + 1; 

    const currentYear = today.getFullYear();

    const owner = "𓂀 👑𝕃𝕠𝕣𝕕 𝕆𝕓𝕚𝕥𝕠👑𓂀";

    const username = message.pushName || "Unknown";

    const t = ` 
╭─────────────────╮
     👑𝕃𝕆ℝ𝔻 𝕆𝔹𝕀𝕋𝕆👑 
╰─────────────────╯
╭─────────────────╮
│ Prefix : .
│ User : ${username}  
│ Day : ${currentDay}
│ Date : ${currentDate}/${currentMonth}/${currentYear} 
│ Version : 3
│ Plugins : 2
│ Type : X-MD 
╰─────────────────╯

╭────[ PREMIUM CMDS ]─────╮
│      
│ ⬢ connect 237xxxxx
│ ⬢ reconnect 237xxxxx            
│ ⬢ disconnect 237xxxxx        
╰─────────────────╯        

made by 👑Lord Obito👑
    `
;

    await client.sendMessage(remoteJid, {

        image: { url: "menu.jpg" },

        caption: t,

        contextInfo: {

            participant: '0@s.whatsapp.net',

            remoteJid: 'status@broadcast',

            quotedMessage: { conversation:"𝗟𝗜𝗥𝗗 ༒ 𝗢𝗕𝗜𝗧𝗢"}, 

            isForwarded: true,
        },


    });
}   

export default prem;
