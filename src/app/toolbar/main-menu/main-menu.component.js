class MainMenuComponent {
  styles = require('./main-menu.component.scss');
  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav;
  }

  toggleMenu() {
    this.$mdSidenav('menu-left').toggle();
  }
}

MainMenuComponent.$inject = ['$mdSidenav'];

export default {
  name: 'mainMenu',
  instance: {
    template: require('./main-menu.component.pug'),
    controller: MainMenuComponent
  }
};
