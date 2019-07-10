const line = require('../utils/line')

const upload = async (req, res) => {
  console.warn('++++ Upload +++++')
  try {
    const replyToken = req.body.events[0].replyToken || 'no replyToken'
    const type = req.body.events[0].message.type
    const messageID = req.body.events[0].message.id
    const userID = req.body.events[0].source.userId

    console.warn('message type #####==> ', type)

    switch (type) {
      case 'image':
        line.getContent(messageID)
        break
      default:
        line.getUserProfile(userID, replyToken)
    }
  } catch (e) {
    console.error(e)
    res.statusCode = 200
    res.send('success')
  }
}

module.exports = {
  upload
}