import * as angular from 'angular';
import NgMaterialModule from 'angular-material';

import {ToolbarComponent} from './toolbar';

export default angular.module('ToolbarModule', [
  NgMaterialModule
])
  .component(ToolbarComponent.name, ToolbarComponent.instance)
  .name;

