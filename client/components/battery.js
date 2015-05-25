var Battery = function(options){
    this.volts = options ? options.volts : 5;
    this.amps = options ? options.amps : 0.3;
};

module.exports = Battery;
