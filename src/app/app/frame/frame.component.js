class FrameComponent {
}

FrameComponent.$inject = [];

export default {
  name: 'appFrame',
  instance: {
    template: require('./frame.component.html'),
    controller: FrameComponent
  }
};
