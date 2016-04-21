(function() {
  'use strict';

  angular
    .module("storeFront")
    .controller("loginController", loginController);

  function loginController (){
    this.username = "Liz";
    this.date = new Date(); 
  }

}());
