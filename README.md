# Package.json fileni yaratib olish

Birinchi bolib terminalda `npm init` qilinadi va filega **name, description, keywords, author** yozishimiz kerak boladi.Keyin **yes** ni bosishimiz kerak boladi.


# Node Modules va Package-lock.json fileni o`rnatib olish

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

