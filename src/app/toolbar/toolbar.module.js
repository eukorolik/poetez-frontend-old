import * as angular from 'angular';
import NgMaterialModule from 'angular-material';

import {ToolbarComponent} from './toolbar';
import {MainMenuComponent} from './main-menu'
import {NotificationMenuComponent} from './notification-menu'

export default angular.module('ToolbarModule', [
  NgMaterialModule
])
  .component(ToolbarComponent.name, ToolbarComponent.instance)
  .component(MainMenuComponent.name, MainMenuComponent.instance)
  .component(NotificationMenuComponent.name, NotificationMenuComponent.instance)
  .name;

