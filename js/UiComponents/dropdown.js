import riot from 'riot'
import dispatcher from '../Components/dispatcher.js'
import ACTION from '../Components/ACTION.js'

riot.tag('dropdown',

  `<div onclick="{onSelectFilter}" class="ui floating labeled icon disabled dropdown button">
  <i class="filter icon"></i>
  <span class="text">Até 6 horas atrás</span>
  <div class="menu">
    <div class="header">
      Chamadas de até
    </div>
    <div class="divider"></div>
    <div class="item">
      <span class="description">hora atrás</span>
      <span class="text">1</span>
    </div>
    <div class="item">
      <span class="description">horas atrás</span>
      <span class="text">2</span>
    </div>
    <div class="item">
      <span class="description">horas atrás</span>
      <span class="text">3</span>
    </div>
    <div class="item">
      <span class="description">horas atrás</span>
      <span class="text">4</span>
    </div>
    <div class="item">
      <span class="description">horas atrás</span>
      <span class="text">5</span>
    </div>
    <div class="item active selected" data-value="default">
      <span class="description">horas atrás</span>
      <span class="text">6</span>
    </div>

  </div>
</div>`,
  function constructor (options) {
    this.options = options
    this.value = ''

    this.onSelectFilter = function onSelectFilter () {
      let selected = window.$('.selected > .text')
      let newValue = selected.first().text()

      if (newValue && newValue !== this.value) {
        this.value = newValue

        dispatcher.dispatch(ACTION.ON_SELECT_FILTER, {'value': this.value})
      }
    }

    this.on('mount', function () {
      window.$('.ui.dropdown').dropdown()
    })
  })
