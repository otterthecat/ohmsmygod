var data = require('./data');
var calculator = require('./calculator');
var lightbulb = require('./lightbulb');

calculator.on('value:voltage', function(voltage){
    console.log('voltage is ', voltage);
});

calculator.on('value:resistance', function(resistance){
    console.log('resistance is ', resistance);
});

calculator.on('value:current', function(current){
    console.log('current is ', current);
});


calculator.getVoltage(data.current, data.resistance);
calculator.getCurrent(data.resistance, data.voltage);
calculator.getResistance(data.current, data. voltage);
