var test = require('tape')

var Person = require('../amp-m')

test('person', function (t) {
  t.plan(3)

  var n = new Person({name: 'Gareth', greetingType: 'short'})

  t.equal(n.name, 'Gareth', 'Person.name === "Gareth"')

  t.equal(n.greeting, 'hi', 'Short greeting')

  n.greetingType = 'long'

  t.equal(n.greeting, 'hi Gareth', 'Long greeting')
})