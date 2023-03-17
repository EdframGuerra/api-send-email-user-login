require('dotenv').config()
const express = require('express')
const { login } = require('./controlador/login')

const app = express()

app.use(express.json())

app.post('/login', login)


app.listen(process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT)
})