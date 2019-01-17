var EventEmitter = require('events');
// console.log("  message");
// 'use strict'
class Gym extends EventEmitter {
    constructor() {
        super();
        this.message = 'Athlete is working out';
    }

    emitBoom(){
        this.emit('boom', this.message);
    }
}


// interval to make the every second call
// if we pass simple gym.emitBoom() in setInterval, it won't work, so we need simple fuction to work in interval
setInterval(function(){ 
    var gym = new Gym();
    gym.on('boom',function(message){console.log(message)});
    gym.emitBoom();
}, 1000);
