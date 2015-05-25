var ui = require('./ui');
var Battery = require('./components/battery');
var Resistor = require('./components/resistor');
var calculator = require('./calculator');
var Lightbulb = require('./components/lightbulb');
var Circuit = require('./circuit');

var battery9v = new Battery();
var lightbulb = new Lightbulb();
// with default batter & lightbulb settings,
// things should not blow up. However, if you're
// a Bond villian, you may wish to make a resistor
// less than 150ohms....
var resistor100 = new Resistor();

var circuit = new Circuit();
circuit.addBattery(battery9v)
    .addResistor(resistor100)
    .on('circuit:on', function(){
        lightbulb.consume(this.getStats());
        ui.emit('ui:update:lightbulb', 'Circuit turned on.&#10;');
    })
    .on('circuit:off', function(){
        lightbulb.consume(this.getStats());
        ui.emit('ui:update:lightbulb', 'Circuit turned off&#10;')
    })
    .on('circuit:set:resistance', function(stats){
        lightbulb.consume(stats);
    });

lightbulb.on('explode', function(){
        ui.emit('ui:update:lightbulb', 'BOOM! Everyone is dead.&#10;');
    })
    .on('shine', function(){
        ui.emit('ui:update:lightbulb', 'Light is shining&#10;');
    })
    .on('no-power', function(){
        ui.emit('ui:update:lightbulb', 'No power to bulb&#10;');
    });

ui.setOnSwitch('#power-on')
    .setOffSwitch('#power-off')
    .setSlider('#slider', '#slider-value', function(value){
        circuit.setResitance(value);
    }.bind(ui))
    .on('switch:on', circuit.turnOn.bind(circuit))
    .on('switch:off', circuit.turnOff.bind(circuit));
