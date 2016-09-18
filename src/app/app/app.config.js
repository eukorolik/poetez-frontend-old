import * as angular from 'angular';
import AppModule from './app.module';

function NgMaterialTheming($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange');
}

NgMaterialTheming.$inject = ['$mdThemingProvider'];

angular.module(AppModule)
  .config(NgMaterialTheming);

