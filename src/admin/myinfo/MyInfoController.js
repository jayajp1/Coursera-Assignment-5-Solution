(function() {

  angular.module('admin')
    .controller('myInfoController', MyInfoController)


  //MyInfoController.$inject = ['userService'];
  //function MyInfoController(userService) {

    MyInfoController.$inject = ['userList'];
    function MyInfoController(userList) {
  //  var MyInfoCtrl = this;
    //reg.completed=true;
    //  var x=userService.getUserList();
    console.log(userList);
      var $ctrl=this;
      $ctrl.userList=userList;
      console.log($ctrl.userList);
        /*
        signupCtrl.user.fname = " ";
        signupCtrl.user.lname = " ";
        signupCtrl.user.MobileNo = " ";
        signupCtrl.user.email = " ";
        signupCtrl.user.favitemname = " ";*/
    };

})();
