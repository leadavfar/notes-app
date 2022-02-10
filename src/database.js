const mongoose = require('mongoose')

const { NOTES_APP_MONGODB_DATABASE, NOTES_APP_MONGODB_HOST } = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('db connected'))
    .catch(err => console.log(err))