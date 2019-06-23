const Unit = require('./Unit');

function Soldier(health, name){
    Unit.apply(this, arguments);
    this._attackPower = 15;
}

Soldier.prototype = Object.create(Unit.prototype);

Soldier.prototype.handAttack = function(Unit) {
    var attackCoef = 1;
    if (this._level === 1) {
        attackCoef = 1;
    } else {
        attackCoef = 1 + (this._level * 0.1);
    }
    damageAmount = this._attackPower * attackCoef;
    Unit.takeDamage(damageAmount);
    this.earnExperience(250);
}

module.exports = Soldier;