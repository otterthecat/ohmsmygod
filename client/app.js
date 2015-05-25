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
        console.log('Circuit turned on');
        console.log('circuit data is ', this.getStats());
        lightbulb.consume(this.getStats());
    })
    .on('circuit:off', function(){
        console.log('Circuit truned off');
        lightbulb.consume(this.getStats());
    });

ui.setOnSwitch('#power-on')
    .setOffSwitch('#power-off')
    .on('switch:on', circuit.turnOn.bind(circuit))
    .on('switch:off', circuit.turnOff.bind(circuit));
