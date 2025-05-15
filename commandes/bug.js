async function bug(message, client, texts, num) {

    const remoteJid = message.key.remoteJid;

    await client.sendMessage(remoteJid, {

        image: { url: `${num}.png` },

        caption: `> ${texts}`,

        contextInfo: {

            externalAdReply: {

                title: "Join Our WhatsApp Channel",

                body: "𝕃𝕆ℝ𝔻 ༒ 𝕆𝔹𝕀𝕋𝕆",

                mediaType: 1, // Image preview

                thumbnailUrl: `https://whatsapp.com/channel/0029Vb65HSyHwXbEQbQjQV26`,

                renderLargerThumbnail: false,

                mediaUrl: `${num}.png`,

                sourceUrl: `${num}.png`
            }
        }
    });
}

export default bug;
          
