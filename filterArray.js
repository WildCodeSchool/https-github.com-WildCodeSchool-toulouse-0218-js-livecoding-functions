const persons = [
	'Joe',
	'Jack',
	'John',
	'Mary',
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

console.log(filterArray(persons, isFirstLetterJ))
console.log(filterArray(persons, isFirstLetterM))
console.log(filterArray(persons, hasThreeLetters))
