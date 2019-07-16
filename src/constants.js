module.exports = {
  LINE_TOKEN: process.env.LINE_BOT,
  LINE_API: 'https://api.line.me/v2/bot/message',
  FIREBASE: {
    PROJECT_ID: process.env.LINE_BOT_FIRE,
    KEY_PATH: './src/key.json'
  },
  URL_COPY_PASSWORD: process.env.URL_COPY_PASS,
  URL_LOGO: 'https://images2.imgbox.com/7e/0b/Cz8AV24h_o.png',
  BOT_MSG: {
    ACCOUNT: 'กรุณาระบุชื่อ Account ที่ต้องการ',
    CONFIRM: 'คุณยืนยันทำรายการหรือไม่',
    DELETE: 'ลบ {name} เรียบร้อยแล้ว'
  },
  FILE_PATH: process.env.FILE_PATH || '/tmp',
  FILE_SERVER: process.env.FILE_SERVER,
  LINE_PROFILE: 'https://api.line.me/v2/bot/profile',
}