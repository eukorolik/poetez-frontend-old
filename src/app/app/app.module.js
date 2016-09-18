import * as angular from 'angular';
import NgMaterialModule from 'angular-material';

import {FrameComponent} from './frame';

export default angular.module('AppModule', [NgMaterialModule])
  .component(FrameComponent.name, FrameComponent.instance)
  .name;
