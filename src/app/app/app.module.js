import * as angular from 'angular';

import {FrameComponent} from './frame';

export default angular.module('AppModule', [])
  .component(FrameComponent.name, FrameComponent.instance)
  .name;

