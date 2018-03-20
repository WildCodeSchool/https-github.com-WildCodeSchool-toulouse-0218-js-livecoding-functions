const persons = [
	'Joe',
	'Jack',
	'John',
	'Mary',
	'Zoe'
]

// Renvoyer les prénoms qui commencent par J
function filterArray(anArray) {
  let results = []
  for(item of anArray) {
    if(item[0] === 'J') {
      results.push(item)
    }
  }
  return results
}

console.log(filterArray(persons))
// ['Joe', 'Jack', 'John']