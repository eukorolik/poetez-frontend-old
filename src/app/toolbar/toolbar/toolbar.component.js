class ToolbarComponent {
}

ToolbarComponent.$inject = [];

export default {
  name: 'toolbar',
  instance: {
    template: require('./toolbar.component.pug'),
    controller: ToolbarComponent
  }
};
