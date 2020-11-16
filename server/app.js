require("dotenv").config();
const express = require('express')
const app = express();
const db = require('./db')

const log = require('./controller/logcontroller')
const user = require('./controller/usercontroller')



app.use(express.json())
db.sync()

app.use('/user', user)
app.use(require('./middleware/validate-session'))
app.use('/log', log)

app.listen(3000, function(){
    console.log('App is listening on port 3000')
})