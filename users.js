class User {
    constructor(name, age){
        this.name = name,
        this.age = age
    }

    hello(){
        return 'hello' + this.name + this.age
    }
}

module.exports = User



// const user = {
//     name:'fozil',
//     firstName: 'Buzrukxojayev',
//     age: 22
// }

// module.exports = user