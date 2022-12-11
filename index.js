const express = require('express')
const app = express()

const userRoute = require('./routes/user')

const Db = require('./db/dbConnect.js')
// app.set('view engine','ejs')
// app.use(express.urlencoded({ extended : true }))


app.use(express.json())

app.use('/user',userRoute)



Db.sync()
.then(console.log("database connected"))
.catch(err=>{console.log(err);})
app.listen(2020,()=>{
    console.log("listening on port 2020");
})