var test = require('tape')

var Person = require('../amp-m')

test('person', function (t) {
  t.plan(1)

  var n = new Person({name: 'Gareth', greetingType: 'long'})
  t.equal(n.name, 'Gareth', 'Person.name === "Gareth"')
})