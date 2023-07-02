const express = require('express')
const app = express()
const port = 3000

const nodemailer = require('nodemailer')

require('dotenv').config()

app.use(express.json())
app.use(express.static('public'))
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.post('/send_email',(req,res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.USER,
            pass: process.env.PASS
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: process.env.USER,
        subject: `Message from ${req.body.name} <${req.body.email}>:  `,
        text: req.body.message
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            res.send('error')
        }
        else{
            // console.log("Email sent:",info.response);
            res.send('success')
        }
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})