//import Unit from "./Unit";

const Unit = require('./Unit');
const Doctor = require('./Doctor');
const Soldier = require('./Soldier');
const Heavy = require('./Heavy');
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

