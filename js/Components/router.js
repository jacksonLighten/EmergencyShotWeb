import page from 'page'
import dispatcher from './dispatcher.js'
import ACTION from './ACTION.js'

// Router should be the one initializing store and dispatcher?
// Store should be only one to all app or divided
// A network of store gives space to cyclic dependencies if handle by developer
// While one store with immutability and Virtual DOM
// One store downside is to many logic to just one component
// Router should be inside store? since store is the one handling logic

export default {
  initialize: function () {
    page.base('/#!')

    page('/', this.map)
    page('/table', this.table)
    page()

    dispatcher.dispatch(ACTION.ON_SELECT_FILTER, {'value': 6})
  },

  map: function () {
    dispatcher.dispatch(ACTION.ON_ROUTE_CHANGE, {'show_map': true})
  },

  table: function () {
    dispatcher.dispatch(ACTION.ON_ROUTE_CHANGE, {'show_map': false})
  }
}
