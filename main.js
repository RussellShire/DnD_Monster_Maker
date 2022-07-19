//Arrays of statements to be joined to make a back story
const bsOpenPt1 = ['Despite being', 'After being', 'Because they were', 'Growing up']
const bsOpenPt2 = ['raised by', 'abandoned by', 'adopted by', 'trained by', 'schooled by', 'attacked by']
const bsAdjectives = ['incredible', 'terrifying', 'helpful', 'beautiful', 'hidious', 'brave', 'wild', 'intense', 'dangerous', 'aggresive', 'fantastic']
const bsProfession = ['clown', 'chef', 'idiot', 'shop keeper', 'solider', 'parent', 'criminal', 'teenager', 'farmer', 'acrobat', 'servant', 'wild animal', 'priest', 'teacher', 'grave digger']
const bsPastTenseAdj = ['struggled', 'fought bravely', 'flourished', 'failed', 'tried hard', 'learned']
const bsProfessionJoin = ['to become a', 'training as a', 'to avoid becoming a', 'to study as a']

//A function to return a random array
const randArray = array => array[Math.floor(Math.random() * array.length)]

//A function that randomly stitches together pieces of text to create a backstory
const backstory = () => `${randArray(bsOpenPt1)} ${randArray(bsOpenPt2)} ${randArray(bsAdjectives)} ${randArray(bsProfession)}s they ${randArray(bsPastTenseAdj)} ${randArray(bsProfessionJoin)} ${randArray(bsProfession)}, which led them here`
 
//A class for making monsters
class Monsters {
    constructor (type, size, alignment) {
        this.type = type;
        this.size = size;
        this.alignment = alignment;
        this.backstory = backstory();
        }
    get topLine() {
        return `A ${this.size} ${this.type}, they are ${this.alignment}.`;
        }
}
            
//creating some monsters
const goblin = new Monsters('humaniod', 'small', 'neutral evil');
const orc = new Monsters('humaniod', 'medium', 'chaotic evil');

console.log(`${goblin.topLine} ${goblin.backstory}`)
