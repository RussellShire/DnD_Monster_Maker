//Bringing in a complicated function from another module
import { backstory } from './backstory.js';

//A class for making monsters
class Monsters {
    constructor (race, type, size, alignment) {
        this.race = race;
        this.type = type;
        this.size = size;
        this.alignment = alignment;
        this.backstory = backstory(); //This function is in another module
        }
    get topLine() {
        return `${this.race}s: Are ${this.size} ${this.type}s, they are ${this.alignment}.`;
        }
}
          
//creating some monsters
const goblin = new Monsters('Goblin', 'humaniod', 'small', 'neutral evil');
const orc = new Monsters('Orc', 'humaniod', 'medium', 'chaotic evil');

console.log(`${goblin.topLine} 
${goblin.backstory}`)

console.log(`${orc.topLine} 
${orc.backstory}`)

