var Person = require('./amp-m')

var person = new Person({name: 'Gareth', greetingType: 'long'})

console.log(person.name, person.greetingType, person.greeting)

person.greetingType = 'short'

console.log(person.name, person.greetingType, person.greeting)