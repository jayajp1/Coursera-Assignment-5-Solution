(function() {

  angular.module('admin')
    .controller('signupController', signupController)


  signupController.$inject = ['userService'];
  function signupController(userService) {
    var signupCtrl = this;
    //reg.completed=true;
    signupCtrl.submit = function() {
      signupCtrl.completed = true;

      userService.addItem(
        signupCtrl.user.fname,
        signupCtrl.user.lname,
        signupCtrl.user.MobileNo,
        signupCtrl.user.email,
        signupCtrl.user.favitemname,"True");
      var x=userService.getUserList();
    //  console.log(x);

        
    };

  }

})();
