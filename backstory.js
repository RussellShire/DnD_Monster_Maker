const bsOpenPt1 = ['Despite being', 'After being', 'Because they were', 'Growing up']
const bsOpenPt2 = ['raised by', 'abandoned by', 'adopted by', 'trained by', 'schooled by', 'attacked by']
const bsAdjectives = ['incredible', 'terrifying', 'helpful', 'dangerous', 'aggresive', 'fantastic']
const bsProfession = ['clown', 'chef', 'solider', 'parent', 'criminal', 'teenager', 'farmer', 'acrobat', 'servant', 'wild animal', 'priest', 'teacher', 'grave digger']
const bsPastTenseAdj = ['struggled', 'fought bravely', 'flourished', 'failed', 'tried hard', 'learned']
const bsProfessionJoin = ['to become a', 'to train as a', 'to avoid becoming a', 'to study as a']

const randArray = array => array[Math.floor(Math.random() * (array.length-1))]

const backstory = () => console.log(`${randArray(bsOpenPt1)} ${randArray(bsOpenPt2)} ${randArray(bsAdjectives)} ${randArray(bsProfession)}s they ${randArray(bsPastTenseAdj)} ${randArray(bsProfessionJoin)} ${randArray(bsProfession)}, which led them here`)
 
backstory()
