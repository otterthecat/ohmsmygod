var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Lightbulb = function(){
    EventEmitter.call(this);
    this.voltageDrop = 2;
    this.forwardCurrent = 0.02 // 20 mAh;

    this.on('shine', this.illuminate);
    this.on('explode', this.explode);
    this.on('no-power', function(){
        console.log('there is no power coming to bulb');
    });
};
util.inherits(Lightbulb, EventEmitter);

Lightbulb.prototype.consume = function(circuit){
    var minResistor = (circuit.voltage - this.voltageDrop) / this.forwardCurrent;
    if (circuit.resistance <  minResistor){
        this.emit('explode');
    } else if (circuit.voltage === 0) {
        this.emit('no-power');
    } else {
        this.emit('shine', minResistor / circuit.resistance);
    }
};

Lightbulb.prototype.illuminate = function(brightness){
    console.log('light is shining at brightness of ', brightness);
};

Lightbulb.prototype.explode = function(){
    console.log('BOOM! Everyone is dead');
};


module.exports = Lightbulb;
