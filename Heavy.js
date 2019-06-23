const Unit = require('./Unit');
const Soldier = require('./Soldier');

function Heavy(health, name){
    Unit.apply(this, arguments);
    this._damageResistance = 0.2;
}

Heavy.prototype = Object.create(Soldier.prototype);

Heavy.prototype.machineGunAttack = function(Unit, amountOfShots) {
    var attackCoef = 1;
    if (this._level === 1) {
        attackCoef = 1;
    } else {
        attackCoef = 1 + (this._level * 0.1);
    }
    damageAmount = this._attackPower * attackCoef * amountOfShots;
    Unit.takeDamage(damageAmount);
    this.earnExperience(250);
}

Heavy.prototype.takeDamage = function(amount) {
    this._health -= amount * (1 - this._damageResistance);
    if (this._health < 1) {
        this._health = 0;
    } else {
        this.earnExperience(500);
    }
}

module.exports = Heavy;