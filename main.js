//Bringing in a complicated function from another module
import { backstory } from './backstory.js';

//Defining the DOM elements
const button = document.getElementById('submit'),
    output = document.getElementById('output'),
    nameInput = document.getElementById('name'),
    typeInput = document.querySelector('#monster-select');

// Form data collection, technically not currently being used, but could be used for persistence in the future
let monsterName = '',
    monsterType = '';

//Event listener for 'make me a monster' button
button.onclick = e => {
    e.preventDefault()
    console.log(nameInput.value)
    if (nameInput.value === ''){
        nameInput.placeholder = 'Enter a name'
    } else {
        monsterName = nameInput.value
        nameInput.value = ''
        nameInput.placeholder = 'Name another monster'
        monsterType = typeInput.value
        // outputs to the view
        outputBio();       
    }
}

// Switch to select appropriate monster factory
const outputBio = () => {
    switch (monsterType){
        case 'orc': 
            output.innerText = orcFactory(monsterName).bio
            break;
        case 'goblin':
            output.innerText = goblinFactory(monsterName).bio
            break;
    }
}

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

// Functions for making attributes of individual monsters
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

//Making Orcs as a factory function
const orcFactory = (name = 'Da ork with no name') => {
    const orc = new Orc(name);
    return orc;
}

//Goblin Factory function
const goblinFactory = (name = 'Sneaky Git') => {
    const goblin = new Goblin(name);
    return goblin;
}

// playing with a class to store created monsters
/*class Waaaagh { 
    constructor(boss) {
        this.boss = boss; //an Orc
        this.boyz = []; //[Orc]
    }
    addBoy(boy){
        this.boyz.push(boy);
    }
    warcry(){
        console.log(`${this.boss.name} screams 'WAAAAAGH!'`)
        this.boyz.forEach(boy => {
            console.log(`${boy.name} screams 'Waaagh'`)
        })
    }
}*/


//output.innerText = goblinFactory('Russell').bio

/*const ghazkull = orcFactory('Ghazkull')
const waaaagh = new Waaaagh(ghazkull)
waaaagh.warcry()

waaaagh.addBoy(orcFactory('Geoff'));
waaaagh.addBoy(orcFactory('Snub'));
waaaagh.addBoy(orcFactory('Tim'));
waaaagh.addBoy(orcFactory('Spanner'));

waaaagh.warcry()

console.log(waaaagh.boyz.map(boy => boy.name))*/