const firstPhrases = ['went to the bank', 'took a badger out a bore hole', 'ran a fox down with a kitchen fork']
const secondPhrases = ['threw a dinasour out a window.', 'went flying backwards like a tornado in a wirl pool.', 'there was a great big esparagus cruching up potatoes.', 'was sad no more.', 'loved the smell of lemon grass.']
const joinWords = ['and', 'because', 'also', 'then', 'upon completion it', 'next']
const beginingPhrases = ['Once upon a time,', 'There once was a elephant then,', 'In 1994,', 'When i was a baby,', 'This was the start of something wonderful,']
const person = ['you', 'i', 'you and me', 'them', 'all of them', 'that girl down the chippy', 'the lad from bunderberg']

const allArrays = [beginingPhrases, person, firstPhrases, joinWords, secondPhrases]
const sentanceFormat = []

function randomIndex(arr) {
    return Math.floor(Math.random() * arr.length)
}

for(let i = 0; i < allArrays.length; i++) {
    sentanceFormat.push( allArrays[i][randomIndex(allArrays[i])] )
}

console.log(sentanceFormat.join(' '))
