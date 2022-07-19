//Bringing in a complicated function from another module
import { backstory } from './backstory.js';

//A class for making monsters
class Monsters {
    constructor (type, size, alignment) {
        this.type = type;
        this.size = size;
        this.alignment = alignment;
        this.backstory = backstory(); //This function is in another module
        }
    get topLine() {
        return `A ${this.size} ${this.type}, they are ${this.alignment}.`;
        }
}
          
//creating some monsters
const goblin = new Monsters('humaniod', 'small', 'neutral evil');
const orc = new Monsters('humaniod', 'medium', 'chaotic evil');

console.log(`${goblin.topLine} 
${goblin.backstory}`)
