var AmpersandModel = require('ampersand-model')


module.exports = AmpersandModel.extend({
  props: {
    name: 'string',
    greetingType: ['string', true, 'long']
  },
  derived: {
    greeting: {
      deps: ['name', 'greetingType'],
      fn: function () {
        if (this.greetingType === 'short') {
          return 'hi'
        } else {
          return 'hi ' + this.name
        }
      }
    }
  }
})
