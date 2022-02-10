require('dotenv').config();

const app = require('./server')
require('./database')

app.set('port', process.env.PORT || 4000);
//server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})