const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter {
    fetchs(method, route){
        this.emit('message', {id: uuid.v4(), method, route})
    }
}

module.exports = Logger