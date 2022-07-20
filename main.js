//Bringing in a complicated function from another module
import { backstory } from './backstory.js';

//A class for making monsters
class Monsters {
    constructor (race, type, size, alignment) {
        this.race = race;
        this.type = type;
        this.size = size;
        this.alignment = alignment;
        }
    get topLine() {
        return `${this.race}s are ${this.size} ${this.type}s, they are ${this.alignment}.`;
        }
    get bio() {
        return `${this.name} is a ${this.race}, ${this.topLine} 
    ${this.backstory}
    ${this.name} has ${this.hitpoints} hitpoints`
    }
}

let diceRoll = sides => Math.floor(Math.random()*sides+1);

let hitpoints = (dice, sides, modify) => {
    let dieCounter = 0
    let hp = 0
    while (dieCounter < dice){
        dieCounter++
        hp += diceRoll(sides);
    }
    return hp += modify
}

//Child Class of Monsters for a monster type
class Goblin extends Monsters {
    constructor(name, race, type, size, alignment){
        super(race, type, size, alignment)
            this.name = name;
            this.race = 'goblin';
            this.type = 'humaniod';
            this.size = 'small';
            this.alignment = 'neutral evil'
            this.backstory = backstory(); //This function is in another module, calling here means each Goblin gets a backstory
            this.hitpoints = hitpoints(2,6,0) //function takes dice 2 Sides D6 and modifier 0 to roll hitpoints
    }
}
//Another monster type
class Orc extends Monsters {
    constructor(name, race, type, size, alignment){
        super(race, type, size, alignment)
            this.name = name;
            this.race = 'orc';
            this.type = 'humaniod';
            this.size = 'medium';
            this.alignment = 'chaotic evil'
            this.backstory = backstory(); //This function is in another module
            this.hitpoints = hitpoints(2,8,6) //Rolls 2D8+6
    }
}

//creating some individual monsters
const steve = new Goblin('Steve')
const geoff = new Orc('Geoff');

console.log(geoff.bio)