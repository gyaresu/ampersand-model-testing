import {create} from 'urlify'
import State from 'ampersand-state'

const urlify = create()

export default State.extend({
  props: {
    link: 'string'
  },
  derived: {
    linkified: {
      deps: ['link'],
      fn () {
        return urlify(this.link)
      }
    }
  }
})
