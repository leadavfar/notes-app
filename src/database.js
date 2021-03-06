const mongoose = require('mongoose')

const { NOTES_APP_MONGODB_DATABASE, NOTES_APP_MONGODB_LOCALHOST, NOTES_APP_MONGODB_HOST } = process.env;

/* //utilizar esta constante para utilizar la base de datos local:
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_LOCALHOST}/${NOTES_APP_MONGODB_DATABASE}` */

const MONGODB_URI = NOTES_APP_MONGODB_HOST;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('db connected'))
    .catch(err => console.log(err))