const {fromMe, from} = require (".../thechoute")

const janza = {
    key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
    },
    message: {
    "productMessage": {
    "product": {
    "productImage":{
    "mimetype": "image/jpeg",
    "jpegThumbnail": fs.readFileSync(`./media/imagen/fake.jpg`)
    },
    "title": `πΏππππππππ|π­ππππ­πππππππ`,
    "description": "",
    "currencyCode": "NIUSES",
    "priceAmount1000": "999999999999999999",
    "retailerId": "",
    "productImageCount": 999
    },
    "businessOwnerJid": `0@s.whatsapp.net`
    }
    }
    }
    contextInfo: {
    mentionedJid: [sender]}

    const menuall = {
      key:
      { fromMe: false,
      participant: `0@s.whatsapp.net`, ...(from ?
      { remoteJid: "status@broadcast" } : {}) },
      message: { "videoMessage": { "caption":"π₯ πππΏππ πππ πΎπππΌππΏππ π₯", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
      }
      contextInfo: {
      mentionedJid: [sender]}

      const qmiembros = {
        key:
        { fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ?
        { remoteJid: "status@broadcast" } : {}) },
        message: { "videoMessage": { "caption":"π₯ π΄π¬π΅πΌ π·π¨πΉπ¨ π»πΆπ«πΆπΊ π₯", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
        }
        contextInfo: {
        mentionedJid: [sender]}
        
      const brillo = {
        key:
        { fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ?
        { remoteJid: "status@broadcast" } : {}) },
        message: { "videoMessage": { "caption":"π₯π΄π¬π΅πΌ π·π¨πΉπ¨ π¨π«π΄π°π΅ π₯", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
        }
        contextInfo: {
        mentionedJid: [sender]}

      const juegosc = {
        key:
        { fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ?
        { remoteJid: "status@broadcast" } : {}) },
        message: { "videoMessage": { "caption":"π₯ πππΏππ πππ πΎπππΌππΏππ π₯", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
        }
        contextInfo: {
        mentionedJid: [sender]}

        const fimg = {
          key:
          { fromMe: false,
          participant: `0@s.whatsapp.net`, ...(from ?
          { remoteJid: "status@broadcast" } : {}) },
          message: { "imageMessage": { "mimetype": "image/jpeg","caption": `πΏπΩππ?πππππ`, 'jpegThumbnail': fs.readFileSync('./src/help.jpg')}}
          }
          contextInfo: {
          mentionedJid: [sender]}

          const cnal = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(from ?
            { remoteJid: "status@broadcast" } : {}) },
            message: { "videoMessage": { "caption":"π₯πΏπΩππ?πππππ π₯", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
            }
            contextInfo: {
            mentionedJid: [sender]}
            module.exports = {
                janza, menuall, qmiembros, brillo, fimg, cnal
            }