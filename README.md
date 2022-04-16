### Table of Contents

| No. | Savollar                                                                                                                                                                                                                        |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | **Core Node js**                                                                                                                                                                                                                   |
| 1   | [Node js nima ?](#node-js-nima)                                                                                                                                                                                                   |
| 2   | [Package json nima va u qanday yaratiladi?](#package-json-nima-va-u-qanday-yaratiladi)                                                                                                                                                  |
| 3   | [Qanday qilib Node Modules va Package-lock.json fileni o`rnatib olish mumkin ?](#qanday-qilib-node-modules-va-package-lock-json-yaratiladi)                                                                                                                                                                                                       |
| 4   | [Node js da import va export qanday qilinadi?](#node-jsda-import-va-export-qanday-qilinadi)                                                                                                                             |
| 5   | [Path module nima?](#path-module-nima)                                                                                                                                            |
| 6   | [FS (File system) module nima?](#fs-module-nima)                                                                                                      |
| 7   | [Os (Operation system) module nima ?](#os-module-nima)                                                                                                                                                                               |
| 8   | [Events module nima ?](#events-module-nima)                                                                                                                                                                                    |
| 9   | [URL module nima ?](#url-module-nima)                                                                                                                                                                               |
| 10  | [HTTP module nima ?](#http-module-nima)                                                                                                                                           |
| 11  | [Nodemon qanday kutubxona ?](#nodemon-qanday-kutubxona)                                                                                                                                           |
| 12  | [UUID qanday kutubxona ?](#uuid-qanday-kutubxona)                                                                                                                                           |
# 1. Node js nima ?

Node js bu Javascript dasturlash tilini bakend bilan integratsiya qildirish uchun kerak boladigan qurilma hisoblanadi 

# 2.Package json nima va u qanday yaratiladi?

Birinchi bolib terminalda `npm init` qilinadi va filega **name, description, keywords, author** yozishimiz kerak boladi.Keyin **yes** ni bosishimiz kerak boladi.

```bash
  {
  "name": "node_course",
  "version": "1.0.0",
  "description": "node js basic",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "nodejs",
    "course"
  ],
  "author": "Fozilkhon Buzrukxojayev",
  "license": "ISC",
}
```

# 3.Qanday qilib Node Modules va Package-lock.json fileni o`rnatib olish mumkin ?

`npm install nodemon --save-dev` comandasi orqali  node modules o'rnatiladi.Sababi hamma packagelarimiz shu papkaga o'rnatiladi. **--save-dev** esa bu proyektimizga local holatda ornatib beradi va u `devDependencies` ga borib o'rnaydi.Agar  **--save-dev** ishlatmasak to'g'ridan to'g'ri `dependencies` ga borib qoshiladi.

```bash
  {
  "name": "node_course",
  "version": "1.0.0",
  "description": "node js basic",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "nodejs",
    "course"
  ],
  "author": "Fozilkhon Buzrukxojayev",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.15"
  },
  "dependencies": {
    "uuid": "^8.3.2"
  }
}
```

# 4.Node js da import va export qanday qilinadi?

Demak **Import** qilish uchun `module.exports = Variable` dan foydalaniladi.**Export** qilish uchun `var user = require(./user.js)` shu shaklda olinadi.

1
### Misollar Objectda

**Fayldan Import Qilish**
```bash 

var obj = {
    name:'fozil',
    age: 16,
    job: 'mentor'
}

module.exports = obj

```

**Fayldan Export Qilish**

```bash 

var user = require('./user.js')

console.log(user.name) // fozil

```

2.
### Misollar Classlarda

**Fayldan Import Qilish**
```bash 

class User {
    constructor(name, age){
        this.name = name,
        this.age = age
    }

    hello(){
        return 'hello ' + this.name + this.age
    }
}

module.exports = User

```

**Fayldan Export Qilish**

```bash 

var User = require('./users')

const person = new User('fozil ', 32)

console.log(person.hello()) // hello fozil 32

```


# 5.Path module nima?

Birinchi bolib pathni import qilib olamiz `const path = require('path')`


1. ###  `__dirname` - bu papkani yolini korsatib beradi

2. ###  `__filename` - bu fileni yolini korsatib beradi

3. ###  `path.basename(__filename)` - BaseName metodi fayl nomini qaytaradi ``path.js``

4. ###  `path.extname(__filename)` - Extname bu file qanday dasturlash tilida yozilayotganini qaytaradi ``.js``

5. ###  `path.parse(__filename)` - parse tepadagi hammasini qaytaradi

```bash
{
  root: 'C:\\',
  dir: 'C:\\Users\\hp\\Desktop\\node js\\modules',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}

```

6. ###  `path.join(__dirname, 'database', 'mongodb', 'db.js')` -> Join bu faylni nomiga yana nom qoshib ketadi.

```bash
C:\Users\hp\Desktop\node js\modules\database\mongodb\db.js
```

# 6.Fs (File system) module nima?

Bu module orqali biz fileni yarata olamiz, filega malumotlar qosha olamiz, fileni ichidagi malumotlarni olamiz, fileni nomini o`zgartira olamiz.

Birinchi bo'lib file systemni **fs** import qilishimiz kerak bo'ladi `const fs = require('fs')` 


1. ###  Papka yaratish uchun `fs.mkdir()` dan foydalanamiz.

```bash

fs.mkdir(path.join(__dirname, '/papka'), {}, err => {
    if(err) throw err
    console.log('Papka yaratildi...')
})

```

2. ###  File yaratish uchun `fs.writeFile()` dan foydalanamiz.

```bash

fs.writeFile(path.join(__dirname, '/papka', 'text.txt'), 'node js orqali yaratildi', err => {
     if(err) throw err
     console.log('File yaratildi')
 })

```

3. ###  Bosh bir fayl ichidagi malumotni ozgartirish , unga yengi malumot qo'shish `fs.appendFile()` orqali bo'ladi

```bash

fs.appendFile(path.join(__dirname, '/papka', 'text.txt'), ' hello world', err => {
     if(err) throw err
     console.log('File yaratildi')
})

 ```

4. ### Fileni ichidagi malumotlarni olish uchun `fs.readFile()` dan foydalanamiz 

```bash

fs.readFile(path.join(__dirname, '/papka', 'text.txt'), 'utf8', (err, data) => {
    if(err) throw err
    console.log(data)
})

```

5. ### Fileni nomini o'zgartirish uchun `fs.rename()` dan foydalanamiz

```bash 

fs.rename(path.join(__dirname, '/papka', 'expensive.txt'), path.join(__dirname, '/papka', 'example.txt'), err => {
    if(err) throw err
    console.log('data')
} )

```

# 7.Os (Operation system) module nima ?

Bu bizga kampyuterning umumiy malumotlarini berib turadi.Masalan hotira, operatsion system, core...
OS ni ishlatishimiz uchun uni import qilishimiz kerak `var os = require('os')`


1. ### `os.platform()` -> Bu platformani qaysi operatsion sistemada ishlayotganini korsatib beradi. `windows32`


2. ### `os.arch()` -> Bu kompyuter bitlarini chiqarib beradi `x64`


3. ### `os.cpus()` -> Bu platforma Core haqida malumot beradi

```bash 

[
  {
    model: 'AMD Ryzen 5 5500U with Radeon Graphics         ',
    speed: 2096,
    times: {
      user: 12691968,
      nice: 0,
      sys: 11933734,
      idle: 240311203,
      irq: 1927625
    }
  },
  }

```


4. ### `os.freemem()` -> Bu Operatsion systemada qancha bosh joy bor shu ko'rsatadi `539705344`

5. ### `os.totalmem()` -> Bu kompyuterni umumiy hotirasini aniqlab beradi `7886458880`

6. ### `os.uptime()` -> Bu Operation sistema ishga tushganiga qancha bo'lgani haqida malumot beradi `539815`

# 8.Events module nima ?

Eventslar odatda biron bir funksiya yaratib , uni ishlatish uchun ishlatilinadi.
Har doimgidek eventslarni import qilib olishimiz kerak `const EventEmitter = require('events')` va import qilingan classdan extend qilib olishimiz kerak boladi.

```bash

const EventEmitter = require('events')


// EventEmitterdan meros olish
class NewEmitter extends EventEmitter {}

// instance obyekt
const newEmitter = new NewEmitter()

```

**Eventslarni** yaratish uchun **on** methodidan foydalanamiz.On methodi **2ta argument** qabul qiladi.Birinchi **argument nom** yani uni chaqirmoqchi bolsak bitta o'ziga hos nom berishimiz kerak boladi.Ikkinchi argument bu **arrow** funksiya eventni ishlatganimizda Arrow funksiya ichida yozilgan malumot chiqadi. 
Endilikda uni ishlatishimiz uchun **emit** methodidan foydalanamiz.**EMIT** bitta argument qabul qiladi nima nom berib ishlatishimiz.

```bash

// Event listener
newEmitter.on('hello', () => {
    console.log('hello world')
})

// Qabul qilib olish
newEmitter.emit('hello')

```

# 9.URL module nima ?

URL module bu saytni linklari boladi.Birinchi navbat uni import qilib olamiz.
`const url = require('url)`.Endilikda uni **new** constructori orqali ishlatamiz.

```bash

const url = require('url')

const newUrl = new URL('http://fozilkhon.uz:5000/users/user.html?name=Fozil&status=active')

```

1. ### `newUrl.href` -> bu method saytni linkini olib beradi `http://fozilkhon.uz:5000/users/user.html?name=Fozil&status=active`
2. ### `newUrl.hostname` -> bu method saytni host nameini olib beradi `fozilkhon.uz`
3. ### `newUrl.host` -> bu method saytni host nameni olib beradi faqat tepadigisi bilan farqi uni porti bilan olib beradi `fozilkhon.uz:5000`
4. ### `newUrl.pathname` -> bu method saytni domen namedan keyin slash bilan davom etadigan routelarini olib beradi `/users/user.html` 
5. ### `newUrl.search` -> bu method saytni query parametrini oladi `name=Fozil&status=active` 
6. ### `newUrl.searchParams` -> bu method saytni queryni object korinishiga otkazish uchun ishlatamiz `URLSearchParams { 'name' => 'Fozil', 'status' => 'active' }`  
7. ### `newUrl.searchParams.append` -> bu method query parametiga qiymat qoshadi 
8. ### `newUrl.searchParams.forEach` -> bu method query parametrini siklda aylantirib beradi 

```bash
const url = require('url')


const newUrl = new URL('http://fozilkhon.uz:5000/users/user.html?name=Fozil&status=active')

//host linkni olib beradki, url ni olib beradi
console.log(newUrl.href);

// host nameni olib beradi + port bilan
console.log(newUrl.host);


// host nameni ozini olib beradi
console.log(newUrl.hostname);


//path bu domen namedan keyin slash bilan davom etadigan route
console.log(newUrl.pathname)

//query parametri
console.log(newUrl.search)

//queryni object korinishiga otkazish uchun
console.log(newUrl.searchParams);

//add query
newUrl.searchParams.append('age', 15)
console.log(newUrl.searchParams);

//skil aylantirish
newUrl.searchParams.forEach((key, value) => {
    console.log(`${key} : ${value}`)
})


```

# 10.HTTP module nima ?

HTTP module bu server yaratish uchun kerak boladi.Birinchi navbatda httpni import qilib olamiz `const http = require('http')`. 

1. ### Endilikda serverni yaratish uchun `createServer()`dan foydalanamiz.

`createServer()` o'zini ichiga 1ta arrow fn.va arrow fn ichida 2ta argument oladi.1-request, 2-resolve.***Request*** serverni hamma malumotlarni olib kelib beradi.***Resolve*** bu serverga sorov yuborishimiz.Resolvening ` write(),writeHead(), end(),` methodlari bor.Ohirida esa biz serverni ishlatishimiz kerak.Uning uchun `listen()` dan foydalanamiz.***Listen*** ozini ichiga 2ta arugemt oladi 1-port, 2-arrow fn.

## 1.Misol uchun : 

```bash

const http = require('http')

 const server = http.createServer((req, res) => {
     res.write('hello node js')
     res.end()
 }
 
 server.listen(3000, () => console.log('server port 3000'))

```

## 2.Misol uchun : 

```bash
const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    if(req.url == '/'){
       fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) =>{
           if(err) throw err
           res.writeHead(200, {'Content-Type': 'text/html'})
           res.end(data)
       })
    }else if(req.url == '/about'){
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) =>{
            if(err) throw err
           res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
     }

})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log('server run port: ', PORT))

```


# 11.Nodemon qanday kutubxona ?

Nodemon bu serverni automatic yengilab beradigan kutubxona hisoblanadi.Uni demak `npm i nodemon -D` qilib olish kerak.**Package.jsonga** kirib script qismini o'zgartiramiz.va endi serverni `npm run dev` qilib yurgazamiz.

```bash

 "scripts": {
    "start": "node index",
    "dev": "nodemon index"
  },

```

# 12.UUID qanday kutubxona ?

UUID bu id generatsiya qilib beradi.Uni biz import qilib 4 versiyasini ishlatishimiz kerak boladi. `uuid.v4()`