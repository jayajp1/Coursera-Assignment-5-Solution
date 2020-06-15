(function() {
"use strict";

/**
 * Restaurant module that includes the admin module as a dependency
 */
angular.module('restaurant', ['admin'])
.config(config);

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {
  // If user goes to a path that doesn't exist, redirect to admin root
  $urlRouterProvider.otherwise('/');
}

})();
