'use strict';

angular.module('angularChatApp')
  .controller('ChatClientCtrl', ['$scope', function ($scope) {
    $scope.msgs = [];
    var Socket = 'MozWebSocket' in window ? MozWebSocket : WebSocket;
    var ws = new Socket('ws://localhost', 3000);
    ws.onopen = function() {
      console.log('socket opened.');
    };
    ws.onclose = function(event) {
      console.log('Closed - code:' + event.code + ', reason:' + event.reason + ', wasClean' + event.wasClean);
    };
    ws.onerror = function(event) {
      console.log('Error - code:' + event.code + ', reason:' + event.reason + ', wasClean' + event.wasClean);
    };
    ws.onmessage = function(event) {
      console.log(event.data);
    };
    $scope.send = function(msg) {
      console.log(msg);
      ws.send(msg);
      $scope.msgs.push(msg);
      $scope.msg = '';
    };
  }]);
