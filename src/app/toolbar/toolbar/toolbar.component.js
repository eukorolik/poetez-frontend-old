class ToolbarComponent {

  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav;
  }

  get isNotificationEmpty() {
    return true;
  }

  get isNotificationUnread() {
    return false;
  }

  get isNotificationDisabled() {
    return false;
  }

  toggleMenu() {
    this.$mdSidenav('menu-left').toggle();
  }
}

ToolbarComponent.$inject = ['$mdSidenav'];

export default {
  name: 'toolbar',
  instance: {
    template: require('./toolbar.component.pug'),
    controller: ToolbarComponent
  }
};
