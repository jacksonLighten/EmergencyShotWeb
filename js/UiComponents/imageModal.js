import riot from 'riot';

// DONE:10 create table dynamically

riot.tag('image-modal',

`<div class="ui active fullscreen modal">
  <i class="close icon"></i>
  <div class="header">
    {options.call.sinistro}
  </div>
  <div class="image content">
    <div class="ui big image">
      <img src="#">
    </div>
    <div class="description">
      {options.call.data}
      <div class="ui divider"></div>{options.call.horario}
      <div class="ui divider"></div>{options.call.endereco}
    </div>
  </div>
</div>`,

function constructor(options) {
  this.options = options;
  console.log(options);
  console.log("DFDFSDFSDFSDFSDFSD");
});