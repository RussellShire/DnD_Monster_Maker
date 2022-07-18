let monsters = class {
    constructor (type, size, alignment, backstory) {
        this.type = type;
        this.size = size;
        this.alignment = alignment;
        }
        get topLine() {
            return `A ${this.size} ${this.type}, they are ${this.alignment}.`;
        }
    }
            

const goblin = new monsters('humaniod', 'small', 'neutral evil');
const orc = new monsters('humaniod', 'medium', 'chaotic evil');

console.log(goblin.topLine)
//monsters.forEach(monster => console.log(monster.name))
