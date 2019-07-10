const request = require('request')
const fs = require('fs')

const {
  LINE_TOKEN,
  LINE_API,
  FILE_PATH
} = require('../constants')

function sendReplyBodyToLine(replyToken, body) {
  request({
    method: `POST`,
    uri: `${LINE_API}/reply`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer {${LINE_TOKEN}}`
    },
    body: JSON.stringify(body)
  })
}

function sendTextReplyToLine(replyToken, text) {
  body = {
    replyToken: replyToken,
    messages: [{
      type: `text`,
      text: text
    }]
  }
  sendReplyBodyToLine(replyToken, body)
}

const getContent = messageID => {
  download(`${LINE_API}/${messageID}/content`, `${new Date().toISOString()}.jpg`, () => {
    console.log('done');
  });
}

const getUserProfile = (userID, replyToken) => {
  request({
    uri: `${LINE_PROFILE}/${userID}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer {${LINE_TOKEN}}`
    },
  }, (err, res, body) => {
    const { displayName } = JSON.parse(body)
    sendTextReplyToLine(replyToken, `สวัสดี ${displayName}`)
  })
}

const download = (uri, filename, callback) => {
  request.head(uri, {
    headers: {
      Authorization: `Bearer {${LINE_TOKEN}}`
    },
  }, function (err, res, body) {
    request({
      uri,
      headers: {
        Authorization: `Bearer {${LINE_TOKEN}}`
      },
    }).pipe(fs.createWriteStream(`${FILE_PATH}/${filename}`)).on('close', callback);
  });
};

module.exports = {
  sendReplyBodyToLine,
  sendTextReplyToLine,
  getContent,
  getUserProfile
}