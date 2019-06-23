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



//Doctor - create from Unit
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


//Soldier - create from Unit
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



//Heavy - create from Unit
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





//create 2 armies
var redDoctor = new Doctor(50, 'Red Doctor');
var redSoldier = new Soldier(100, 'Red Soldier');
var redHeavy = new Heavy(150, 'Red Heavy');
var blueDoctor = new Doctor(50, 'Blue Doctor');
var blueSoldier = new Soldier(100, 'Blue Soldier');
var blueHeavy = new Heavy(150, 'Blue Heavy');

//start fight
redSoldier.handAttack(blueSoldier);
blueDoctor.heal(blueSoldier);
redHeavy.machineGunAttack(blueHeavy, 3);
blueHeavy.handAttack(redSoldier);
blueHeavy.machineGunAttack(redDoctor, 4);
redDoctor.heal(redDoctor);
redSoldier.handAttack(blueSoldier);
blueDoctor.heal(blueSoldier);
redHeavy.machineGunAttack(blueHeavy, 3);
blueHeavy.handAttack(redSoldier);
blueHeavy.machineGunAttack(redDoctor, 4);
redDoctor.heal(redDoctor);
//who has survived?
console.log ('Red Soldier Alive - ' + redSoldier.isAlive());
console.log ('Red Doctor Alive - ' + redDoctor.isAlive());
console.log ('Red Heavy Alive - ' + redHeavy.isAlive());
console.log ('Blue Soldier Alive - ' + blueSoldier.isAlive());
console.log ('Blue Doctor Alive - ' + blueDoctor.isAlive());
console.log ('Blue Heavy Alive - ' + blueHeavy.isAlive());

