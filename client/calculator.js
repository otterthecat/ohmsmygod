var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Calculator = function(){
    EventEmitter.call(this);
};
util.inherits(Calculator, EventEmitter);

Calculator.prototype.getVoltage = function(current, resistance){
    var value = current * resistance;
    this.emit('value:voltage', value)
    return value;
};

Calculator.prototype.getCurrent = function(resistance, voltage){
    var value = voltage / resistance;
    this.emit('value:current', value);
    return value;
};

Calculator.prototype.getResistance = function(current, voltage){
    var value = voltage / current;
    this.emit('value:resistance', value);
    return value;
};

module.exports = new Calculator();
