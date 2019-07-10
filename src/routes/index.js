const {
  account
} = require('../controllers/account')
const {
  copyToClipboard
} = require('../controllers/copy')
const {
  upload
} = require('../controllers/upload')

let express = require('express')
let router = express.Router()

router.get('', (req, res, next) => {
  res.statusCode = 200
  res.send('success')
  // res.json({
  //   status: 'Success'
  // })
})
router.post('/account', account)
router.post('/k9', upload)
router.get('/copy', copyToClipboard)
router.get('', (req, res) => {
  res.statusCode = 200
  res.send('Hi')
})

module.exports = router