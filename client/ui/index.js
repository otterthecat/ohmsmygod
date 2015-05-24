var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Ui = function(){
    EventEmitter.call(this);
};
util.inherits(Ui, EventEmitter);

Ui.prototype.setOnSwitch = function(selector){
    this.powerOnBtn = document.querySelector(selector);
    this.powerOnBtn.addEventListener('click', function(){
        this.emit('switch:on');
    }.bind(this));

    return this;
};

Ui.prototype.setOffSwitch = function(selector){
    this.powerOffBtn = document.querySelector(selector);
    this.powerOffBtn.addEventListener('click', function(){
        this.emit('switch:off');
    }.bind(this));

    return this;
};

module.exports = new Ui();
