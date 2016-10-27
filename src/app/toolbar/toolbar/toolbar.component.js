import {NotificationMenuComponent} from '../notification-menu';

class ToolbarComponent {
  styles = require('./toolbar.component.scss');
  constructor($document, $mdSidenav, $mdDialog) {
    this.$document = $document;
    this.$mdSidenav = $mdSidenav;
    this.$mdDialog = $mdDialog;
  }

  get isNotificationMenuEmpty() {
    return true;
  }

  get isNotificationMenuUnread() {
    return false;
  }

  get isNotificationMenuDisabled() {
    return false;
  }

  toggleMenu() {
    this.$mdSidenav('menu-left').toggle();
  }

  openNotification() {
    this.$mdDialog.show({
      controller: NotificationMenuComponent.instance.controller,
      template: NotificationMenuComponent.instance.template,
      controllerAs: '$ctrl',
      parent: this.$document.find('body'),
      //targetEvent: ev,
      clickOutsideToClose:true,
      //fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
  }
}

ToolbarComponent.$inject = ['$document','$mdSidenav', '$mdDialog'];

export default {
  name: 'toolbar',
  instance: {
    template: require('./toolbar.component.pug'),
    controller: ToolbarComponent
  }
};
