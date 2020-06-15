(function () {
"use strict";

angular.module('common')
.service('userService', userService);

function userService() {
  var service = this;
  // List of shopping items
  var register=false;
  var userList = [];
  service.addItem = function(fname, lname, MobileNo, email, favitemname,register) {
    var item = {
      fname: fname,
      lname: lname,
      MobileNo: MobileNo,
      email: email,
      favitemname: favitemname,
      register:register
    };
    userList.push(item);
  //  console.log(userList);
  };

  service.getUserList = function() {
    return userList;
    console.log(userList);
  };
}
})();
