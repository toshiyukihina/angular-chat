'use strict';

angular
  .module('angularChatApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/chatclient.html',
        controller: 'ChatClientCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
