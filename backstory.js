const bsOpenPt1 = ['Despite being', 'After being', 'Because they were', 'Growing up', 'Coming of age', 'Entering their youth']
const bsOpenPt2 = ['raised by', 'attacked by', 'robbed by', 'abandoned by', 'adopted by', 'trained by', 'schooled by', 'attacked by', 'influenced by']
const bsAdjectives = ['incredible', 'terrifying','unhelpful', 'helpful', 'beautiful', 'hidious', 'brave', 'wild', 'interesting', 'flamboyant', 'nervous', 'intense', 'dangerous', 'aggresive', 'fantastic']
const bsProfession = ['clown', 'drunk', 'labourer', 'sailor', 'lawyer', 'guard', 'chef', 'idiot', 'shop keeper', 'solider', 'parent', 'criminal', 'teenager', 'farmer', 'acrobat', 'servant', 'animal', 'priest', 'teacher', 'grave digger']
const bsPastTenseAdj = ['struggled', 'fought bravely', 'failed', 'tried hard', 'learned', 'overcame adversity', 'cheated their way']
const bsProfessionJoin = ['to become a', 'to graduate as a', 'to avoid becoming a', 'to study as a']

const randArray = array => array[Math.floor(Math.random() * array.length)]

const backstory = () => 
    `${randArray(bsOpenPt1)} ${randArray(bsOpenPt2)} ${randArray(bsAdjectives)} ${randArray(bsProfession)}s they ${randArray(bsPastTenseAdj)} ${randArray(bsProfessionJoin)} ${randArray(bsAdjectives)} ${randArray(bsProfession)}, which led them here`
 
export {backstory}