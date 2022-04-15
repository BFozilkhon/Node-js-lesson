# 1.Package.json fileni yaratib olish

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

# 2.Node Modules va Package-lock.json fileni o`rnatib olish

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

# 3.Import va Export 

Demak **Import** qilish uchun `module.exports = Variable` dan foydalaniladi.**Export** qilish uchun `var user = require(./user.js)` shu shaklda olinadi.


## 1.Misollar Objectda

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


## 1.Misollar Classlarda

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


# 4.Path module

Birinchi bolib pathni import qilib olamiz `const path = require('path')`

# 1.`__dirname` - bu papkani yolini korsatib beradi
# 2.`__filename` - bu fileni yolini korsatib beradi
# 3.`path.basename(__filename)` - BaseName metodi fayl nomini qaytaradi **path.js**
# 4.`path.extname(__filename)` - Extname bu file qanday dasturlash tilida yozilayotganini qaytaradi **.js**
# 5.`path.parse(__filename)` - parse tepadagi hammasini qaytaradi

```bash
{
  root: 'C:\\',
  dir: 'C:\\Users\\hp\\Desktop\\node js\\modules',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}

```

# 6.`path.join(__dirname, 'database', 'mongodb', 'db.js')` -> Join bu faylni nomiga yana nom qoshib ketadi.

```bash
C:\Users\hp\Desktop\node js\modules\database\mongodb\db.js
```

# 5.Fs -> File system module
# 6.Os -> Operation system module
# 7.Events module
# 8.URL module
# 9.HTTP module
# 10.Nodemon module