(function() {
'use strict';

angular.module('admin')
.config(routeConfig);
/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('admin', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('admin.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('admin.signup', {
      url: '/signup',
      templateUrl: 'src/admin/signup/signup.html',
      controller: 'signupController',
      controllerAs: 'signupCtrl'
  /*    resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }*/
    })
    .state('admin.myinfo', {
      url: '/myinfo',
      templateUrl: 'src/admin/myinfo/myinfo.html',
      controller: 'myInfoController',
      controllerAs: 'MyInfoCtrl',
     resolve: {
        userList: ['$stateParams','userService', function ($stateParams,userService) {
          return userService.getUserList();
        }]
      }
    });
}
})();
