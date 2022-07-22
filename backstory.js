const bsOpenPt1 = ['Despite being', 'After being', 'Because they were', 'Growing up', 'Coming of age', 'Entering their youth']
const bsOpenPt2 = ['raised by', 'attacked by', 'robbed by', 'abandoned by', 'adopted by', 'trained by', 'schooled by', 'attacked by', 'influenced by']
const bsAdjectives = ['incredible', 'terrifying','unhelpful', 'helpful', 'beautiful', 'hidious', 'brave', 'wild', 'interesting', 'flamboyant', 'nervous', 'intense', 'dangerous', 'aggresive', 'fantastic']
const bsProfession = ['clown', 'drunk', 'labourer', 'sailor', 'lawyer', 'guard','programmer', 'chef', 'idiot', 'shop keeper', 'solider', 'parent', 'criminal', 'teenager', 'farmer', 'acrobat', 'servant', 'animal', 'priest', 'teacher', 'grave digger']
const bsPastTenseAdj = ['struggled', 'fought bravely', 'failed', 'tried hard', 'learned', 'overcame adversity', 'cheated their way']
const bsProfessionJoin = ['to become', 'to graduate as', 'to avoid becoming', 'to study as']
const bsEnd = ['which led them here', 'so here they are', 'and now they are here', 'and that is why they are here', 'a tragic tale that led them here', 'which is why you find them here']

const randArray = array => array[Math.floor(Math.random() * array.length)]

const backstory = () => { 
    //ensures adjectives aren't repeated by setting uses as variables and rerolling the second one until they don't match
    const firstAdjective = randArray(bsAdjectives)
    let professionAdjective = randArray(bsAdjectives)
    while (firstAdjective === professionAdjective){
        professionAdjective = randArray(bsAdjectives)
    }
    //ensures professions aren't repeated by setting uses as variables and rerolling the second one until they don't match
    const firstProfession = randArray(bsProfession)
    let secondProfession = randArray(bsProfession)
    while (firstProfession === secondProfession){
        secondProfession = randArray(bsProfession)
    }
    //finds the first letter of adjective that comes before an 'a' and sets 'a' to 'an' for vowels
    const profAdjLetter = professionAdjective[0]
    let article = ''
    if (profAdjLetter === 'a' || profAdjLetter === 'e' || profAdjLetter === 'o' || profAdjLetter === 'i' || profAdjLetter === 'u'){
        article = 'an';
    } else {
        article = 'a';
    }

    return `${randArray(bsOpenPt1)} ${randArray(bsOpenPt2)} ${firstAdjective} ${firstProfession}s they ${randArray(bsPastTenseAdj)} ${randArray(bsProfessionJoin)} ${article} ${professionAdjective} ${secondProfession}, ${randArray(bsEnd)}`
}

export {backstory}