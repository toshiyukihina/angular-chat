'use strict';

angular.module('angularChatApp')
  .factory('ChatService', function () {
    var service = {};
    service.connect = function() {
      if (service.ws) {
        return;
      }
      var ws = new WebSocket('ws://localhost:3000/socket');
      ws.onopen = function() {
        service.callback('Succeeded to open a connection.');
      };
      ws.onerror = function(event) {
        console.error(event);
        service.callback('Failed to open a connection.');
      };
      ws.onmessage = function(event) {
        console.debug(event.data);
        service.callback(event.data);
      };
      service.ws = ws;
    };
    service.send = function(message) {
      service.ws.send(message);
    };
    service.subscribe = function (callback) {
      service.callback = callback;
    };
    return service;
  });
