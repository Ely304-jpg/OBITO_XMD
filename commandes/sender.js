async function sender(message, client, texts) {

    const remoteJid = message.key.remoteJid;

    await client.sendMessage(remoteJid, {

        text: `> _*${texts}*_`,

    });
}

//2250712668494@s.whatsapp.net

export default sender;
