const Unit = require('./Unit');

function Doctor(health, name){
    Unit.apply(this, arguments);
    this._healPower = 10;
}

Doctor.prototype = Object.create(Unit.prototype);

Doctor.prototype.heal = function(Unit) {
    var healCoef = 1;
    if (this._level === 1) {
        healCoef = 1;
    } else {
        healCoef = 1 + (this._level * 0.1);
    }
    healedAmount = this._healPower * healCoef;
    Unit.addHealth(healedAmount);
    this.earnExperience(250);
}

module.exports = Doctor;