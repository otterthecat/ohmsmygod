var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Circuit = function(){
    EventEmitter.call(this);

    this.batteries = [];
    this.resistors = [];
    this.isOn = false;
};
util.inherits(Circuit, EventEmitter);

Circuit.prototype.turnOn = function(){
    this.isOn = true;
    this.emit('circuit:on', this);
    return this;
};

Circuit.prototype.turnOff = function(){
    this.isOn = false;
    this.emit('circuit:off', this);
    return this;
};

Circuit.prototype.addBattery = function(battery){
    this.batteries.push(battery);
    this.emit('circuit:add:battery', this);
    return this;
};

Circuit.prototype.getVoltage = function(){
    var totalVoltage = 0;
    this.batteries.forEach(function(battery){
        totalVoltage += battery.volts;
    });
    return this.isOn ? totalVoltage : 0;
};

Circuit.prototype.addResistor = function(resistor){
    this.resistors.push(resistor);
    this.emit('circuit:add:resistor', this);
    return this;
};

Circuit.prototype.getResistance = function(){
    var totalResistance = 0;
    this.resistors.forEach(function(resistor){
        totalResistance += resistor.ohms;
    });
    return totalResistance;
};

Circuit.prototype.getCurrent = function(){
    return this.getVoltage() * this.getResistance();
};

Circuit.prototype.getWatts = function(){
    return this.getVoltage() * this.getAmperage();
};

Circuit.prototype.getAmperage = function(){
    return this.getVoltage() / this.getResistance();
};

Circuit.prototype.getStats = function(){

    return {
        'poweredOn': this.isPowerOn,
        "batteries": this.batteries,
        "resistors": this.resistors,
        "votage": this.getVoltage(),
        "resistance": this.getResistance(),
        "current": this.getCurrent(),
        "watts": this.getWatts(),
        "amps": this.getAmperage()
    };
};

module.exports = Circuit;
