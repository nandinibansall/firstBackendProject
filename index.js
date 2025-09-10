console.log("helllooooo")
require('dotenv').config();
const express = require('express') //importing express
const app = express() //something useful
const port = 4000 //listening in this port

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//ye bolra h ki get ek request h jo hi home route pe koi bhi request aati h toh usko return krre response that is hello world
app.get('/twitter',(req,res)=>{
    res.send("NandiniBansall")
})

app.get('/login',(req,res) =>{
    res.send('<h1>please login at mypage</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
//listen method is a variable that listens from the port and if succesfully you are listening then print console.log