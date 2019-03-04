module.exports = {
  LINE_TOKEN: process.env.LINE_BOT,
  LINE_API: 'https://api.line.me/v2/bot/message',
  FIREBASE: {
    PROJECT_ID: process.env.LINE_BOT_FIRE,
    KEY_PATH: './src/key.json'
  },
  URL_COPY_PASSWORD: 'https://f3cce102.ngrok.io/api/v1/copy?text=',
  URL_LOGO: 'https://images2.imgbox.com/7e/0b/Cz8AV24h_o.png',
  BOT_MSG: {
    ACCOUNT: 'กรุณาระบุชื่อ Account ที่ต้องการ',
    CONFIRM: 'คุณยืนยันทำรายการหรือไม่',
    DELETE: 'ลบ {name} เรียบร้อยแล้ว'
  }
}