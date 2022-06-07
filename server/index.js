const express = require('express')
const cors = require('cors')
const app = express()
const sqlz = require('./sequelize.js')

app.use(express.json())
app.use(cors())

app.get('/menu', sqlz.menu)



app.listen(3003, () => console.log(`Howdily Doodily on 3003`))

