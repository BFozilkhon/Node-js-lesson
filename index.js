//HTTP Request va Response JSon
const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    if(req.url == '/'){
         var obj = [
             {name:'Oq kema', author:'Paoulo Key', pages: 150},
             {name:'Erkamol', author:'Ahad qayum', pages: 300},
             {name:'Shytanat', author:'Odil yoqubov', pages: 193},
         ]

         res.writeHead(200, {'Content-Type' : 'application/json'})
         res.end(JSON.stringify(obj))

    }

})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log('server run port: ', PORT))















// const Logger = require('./logger')

// const newLogger = new Logger()

// newLogger.on('message', (data) => {
//     console.log('Loggering: ', data);
// })

// newLogger.fetchs('GET', '/admin/dashboard')