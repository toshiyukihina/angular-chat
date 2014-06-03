'use strict';

angular.module('angularChatApp')
  .controller('ChatClientCtrl', ['$scope', 'ChatService', function ($scope, ChatService) {
    $scope.messages = [];
    $scope.url = 'ws://localhost:3000/socket'; // Default URL

    ChatService.subscribe(function(message) {
      $scope.messages.unshift(message);
      $scope.$apply();
    });

    $scope.connect = function() {
      ChatService.connect($scope.url);
    };

    $scope.disconnect = function() {
      ChatService.disconnect();
    };

    $scope.send = function() {
      ChatService.send($scope.text);
      $scope.text = '';
    };

    $scope.closed = function() {
      return ChatService.closed();
    };
  }]);
