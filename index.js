(function() {
  'use strict';

  var div = document.createElement('div');

  div.setAttribute('data-ng-controller', 'HttpCtrl');

  angular.module('angular-http-exposed', [])
  .service('httpService', ['$http', function($http) {
    return { http: $http };
  }])
  .controller('HttpCtrl', ['httpService', function(httpService) {
    window.http = httpService.http;
  }]);

  angular.bootstrap(div, ['angular-http-exposed']);
}());
