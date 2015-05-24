var Battery = function(options){
    this.volts = options ? options.volts : 9;
    this.amps = options ? options.amps : 0;
};

module.exports = Battery;
