'use strict';

angular.module('angularChatApp')
  .controller('ChatClientCtrl', ['$scope', 'ChatService', function ($scope, ChatService) {
    $scope.messages = [];

    ChatService.subscribe(function(message) {
      $scope.messages.push(message);
      $scope.$apply();
    });

    $scope.connect = function() {
      ChatService.connect();
    };

    $scope.send = function() {
      ChatService.send($scope.text);
      $scope.text = '';
    };
  }]);
