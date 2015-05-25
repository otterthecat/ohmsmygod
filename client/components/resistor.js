var Resistor = function(ohms){
    this.ohms = ohms || 330;
    this.watts = 0.125; // 1/8 watt
    this.tollerance = 0; // not used yet
};

module.exports = Resistor;
