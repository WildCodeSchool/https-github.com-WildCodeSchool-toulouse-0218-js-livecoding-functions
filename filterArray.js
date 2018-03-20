const persons = [
	'Joe',
	'Jack',
	'John',
	'Mary',
  'Oliver',
	'Zoe'
]

// Deuxième étape :
// On passe une fonction de filtrage en paramètre
// Il faut absolument passer une fonction comme deuxième paramètre
function filterArray(anArray, filterFunc) {
  let results = []
  for(item of anArray) {
    if(filterFunc(item)) {
      results.push(item)
    }
  }
  return results
}

function isFirstLetterJ(item) {
  return item[0] === 'J'
}

function isFirstLetterM(item) {
  return item[0] === 'M'
}

function hasThreeLetters(item) {
  return item.length === 3
}

function hasLetterO(item) {
  return item.includes('o') ||
    item.includes('O')
}

console.log(filterArray(persons, isFirstLetterJ))
console.log(filterArray(persons, isFirstLetterM))
console.log(filterArray(persons, hasThreeLetters))
console.log(filterArray(persons, hasLetterO))

const withAtLeast4Letters = filterArray(
  persons,
  // function(item) {
  //   return item.length >= 4
  // }
  item => item.length >= 4
)
console.log(withAtLeast4Letters)