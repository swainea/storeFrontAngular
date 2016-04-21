(function() {
  'use strict';

  angular
    .module('storeFront')
    .controller( 'StoreController', StoreController );

  StoreController.$inject = ["storeInventory"];

  var tax = 0.0575;

  function StoreController(storeInventory){
    console.log('storeInventory is', storeInventory);
    this.inventory = storeInventory.data;
    this.tax = tax;

    this.newItem = {
      name: "",
      price: "",
      quantity: "",
      color: "",
      discount: "",
    };

    this.sortOrder = "quantity";

    this.save = function saveItem(form){
      if (form.$valid){
        this.inventory.push(this.newItem);
        storeInventory.save(this.inventory);
        this.newItem = {
          name: "",
          price: "",
          quantity: "",
          color: "",
          discount: ""
        };
        form.$setPristine();
        form.$setUntouched();
      } else {
        console.log('invalid information');

      }
    };

    this.increment = function increment (item){
      item.quantity = item.quantity + 1;
    };

    this.decrement = function decrement (item){
      if ( item.quantity === 0 ){
        item.quantity = 0;
      } else {
        item.quantity = item.quantity - 1;
      }
    };


  }

}());
