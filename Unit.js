//main class
function Unit(health, name) {
    this._health = health;
    this._maxHealth = health;
    this._name = name;
    this._level = 1;
    this._xp = 0;
}

Unit.prototype.getName = function() {
    return this._name;
}

Unit.prototype.getLevel = function() {
    return this._level;
}

Unit.prototype.isAlive = function() {
    if (this._health > 0)
    {
        return true;
    } else {
        return false;
    }
}

Unit.prototype.addHealth = function(health) {
    this._health += health;
    if (this._health > this._maxHealth) {
        this._health = this._maxHealth;
    }
}

Unit.prototype.takeDamage = function(amount) {
    this._health -= amount;
    if (this._health < 1) {
        this._health = 0;
    } else {
        this.earnExperience(500);
    }
}

Unit.prototype.earnExperience = function(amount) {
    if (this._level === 1) {
        this._xp += amount;
    } else {
        this._xp = this._xp + (amount / (1 + this._level*0.1));
    }
    if (this._xp >= 1000) {
        this.levelUp();
        this._xp -= 1000;
    }

}

Unit.prototype.levelUp = function() {
    this._level += 1;
    console.log(this._name + ' has gained a level!');
}


module.exports = Unit;