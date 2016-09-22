import * as angular from 'angular';

import {ToolbarModule} from '../toolbar';
import {FrameComponent} from './frame';

export default angular.module('AppModule', [
  ToolbarModule
])
  .component(FrameComponent.name, FrameComponent.instance)
  .name;

