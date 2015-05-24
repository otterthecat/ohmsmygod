var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Lightbulb = function(){
    EventEmitter.call(this);
    this.maxVoltage = 1.5;

    this.on('shine', this.illuminate);
    this.on('explode', this.explode);
    this.on('no-power', function(){
        console.log('there is no power coming to bulb');
    });
};
util.inherits(Lightbulb, EventEmitter);

Lightbulb.prototype.consume = function(v){
    if (v > this.maxVoltage){
        this.emit('explode')
    } else if (v === 0) {
        this.emit('no-power');
    } else {
        this.emit('shine');
    }
};

Lightbulb.prototype.illuminate = function(){
    console.log('light is shining')
};

Lightbulb.prototype.explode = function(){
    console.log('BOOM! Everyone is dead');
};


module.exports = Lightbulb;