class NotificationMenuComponent {
  styles = require('./notification-menu.component.scss');

  constructor() {
    console.log(this.styles);
  }

  get isNotificationEmpty() {
    return true;
  }

  get isNotificationUnread() {
    return false;
  }

}

NotificationMenuComponent.$inject = [];

export default {
  name: 'notificationMenu',
  instance: {
    template: require('./notification-menu.component.pug'),
    controller: NotificationMenuComponent
  }
};
