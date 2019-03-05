let Firestore = require('@google-cloud/firestore')
const {
  FIREBASE
} = require('../constants')

let firestore = new Firestore({
  projectId: FIREBASE.PROJECT_ID,
  credentials: {
    "private_key": process.env.private_key.replace(/\\n/g, '\n'),
    "client_email": process.env.client_email
  }
})

module.exports = {
  firestore
}