var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Ui = function(){
    EventEmitter.call(this);
    this.on('ui:update:lightbulb', function(data){
        document.querySelector('#bulb-output').innerHTML  += data;
    });
};
util.inherits(Ui, EventEmitter);

Ui.prototype.setSlider = function(slideSelector, displaySelector, cb){
    this.slider = document.querySelector(slideSelector);
    this.sliderDisplay = document.querySelector(displaySelector);
    this.slider.addEventListener('change', function(e){
        this.sliderDisplay.value = e.target.value;
        cb(e.target.value);
    }.bind(this));

    return this;
};

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
