(function () {
"use strict";

angular.module('public')
.component('menuItem', {
  templateUrl: 'src/public/myinfo/myinfo.html',
  bindings: {
    menuItemm: '<'
  },
  controller: MenuItemmController
});
MenuItemmController.$inject = ['ApiPath'];
function MenuItemmController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
