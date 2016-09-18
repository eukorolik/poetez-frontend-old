class FrameComponent {

}

FrameComponent.$inject = [];

export default {
  name: 'appFrame',
  instance: {
    template: require('./frame.component.pug'),
    controller: FrameComponent
  }
};
