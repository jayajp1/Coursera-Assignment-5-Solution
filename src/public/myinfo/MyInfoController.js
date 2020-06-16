(function() {

  angular.module('public')
    .controller('myInfoController', MyInfoController)


//MyInfoController.$inject = ['userService'];
//function MyInfoController(userService) {

    MyInfoController.$inject = ['user'];
    function MyInfoController(user) {
  //  var MyInfoCtrl = this;
    //reg.completed=true;
  //  var x=userService.getUserList();
  //  console.log(userList);
    //  console.log(x);
      var $ctrl=this;
  //    var data=userService.getUserList();
  //    console.log(data);
      $ctrl.user=user;
      console.log($ctrl.user);
      $ctrl.signUp=false;
      //$ctrl.userList=userList;
      $ctrl.favoriteitemname;

      console.log($ctrl.signUp);
    //console.log(user);
     if($ctrl.user){
        console.log(user);
          $ctrl.signUp=true;
          $ctrl.fname=$ctrl.user.fname;
          $ctrl.lname=$ctrl.user.lname;
          $ctrl.email=$ctrl.user.email;
          $ctrl.MobileNo=$ctrl.user.MobileNo;
          $ctrl.favitemname=$ctrl.user.favitemname;
          $ctrl.favoriteitemname=$ctrl.user.favoriteitemname;
      }
      else{
        $ctrl.signUp=false;
      }
//      console.log($ctrl.signUp);

        /*
        signupCtrl.user.fname = " ";
        signupCtrl.user.lname = " ";
        signupCtrl.user.MobileNo = " ";
        signupCtrl.user.email = " ";
        signupCtrl.user.favitemname = " ";*/
    };

})();
