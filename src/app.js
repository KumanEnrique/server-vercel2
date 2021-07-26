const express = require('express')
const app = express()
const morgan = require('morgan')

const IndexRoutes = require('./routes/index')
const ReqresRoutes = require('./routes/reqres')

//settings
app.set('port',process.env.PORT || 3000)

//middleware
app.use(morgan('dev'))
app.use(express.json())//para leer json
app.use(express.urlencoded({extended:false}))//para recibir solo texto

//routes
app.get('/',(req,res)=>{
    res.send('hola mundo en servidor hecho con node con el framework express')
})
app.use('/api',IndexRoutes)
app.use('/users',ReqresRoutes)

//404 handler
app.use((req,res,next)=>{
    res.status(404).send('404 personalizado')
    // res.status(404).render('404 personalizado')
})

//starting the server
app.listen(app.get('port'),()=>{
    console.log(`server on http://localhost:${app.get('port')}`)
})
module.exports = app