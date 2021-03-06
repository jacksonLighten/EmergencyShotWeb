import riot from 'riot'

riot.tag('image-modal',

  `<div id="modal" class="ui fullscreen modal">
  <i class="close icon"></i>
  <div class="header">
    {options.call.sinistro}
  </div>
  <div class="image content">
    <div class="ui medium image">
      <img src="{options.call.midia}">
    </div>
    <div class="description">
      Data: {options.call.data}
      <div class="ui divider"></div>Horário: {options.call.horario}
      <div class="ui divider"></div>Endereço: {options.call.endereco}
    </div>
  </div>
</div>`,

  function constructor (options) {
    this.options = options
  })
