const {
  account
} = require('../controllers/account')
const {
  copyToClipboard
} = require('../controllers/copy')
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
router.get('/copy', copyToClipboard)

module.exports = router