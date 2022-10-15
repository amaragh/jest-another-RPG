const Potion = require('./Potion');
const Character = require('../lib/Character');

class Enemy {
    constructor(name,weapon) {
        super(name);
     
        this.weapon = weapon;
        this.potion = new Potion();

    
    };

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };
}

class Enemy extends Character{}
// Enemy.prototype = Object.create(Character.prototype);


module.exports = Enemy