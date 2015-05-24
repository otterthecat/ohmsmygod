var ui = require('./ui');
var Battery = require('./components/battery');
var Resistor = require('./components/resistor');
var calculator = require('./calculator');
var lightbulb = require('./lightbulb');
var Circuit = require('./circuit');

var battery9v = new Battery();
var resistor100 = new Resistor();

var circuit = new Circuit();
circuit.addBattery(battery9v)
    .addResistor(resistor100)
    .on('circuit:on', function(){
        console.log('Circuit turned on');
        console.log('Circuit current is ', this.getCurrent());
    })
    .on('circuit:off', function(){
        console.log('Circuit truned off');
    });

ui.setOnSwitch('#power-on')
    .setOffSwitch('#power-off')
    .on('switch:on', circuit.turnOn.bind(circuit))
    .on('switch:off', circuit.turnOff.bind(circuit));
