/**
 * Created by asantha on 6/9/2017.
 */
/**
 * Created by asantha on 6/7/2017.
 */
angular.module('starter.services', [])

  .factory('MagazineService',function($http){

    var magazineFactory = {};

    magazineFactory.get_magazines = function(token){

      return $http.get('https://weddingglance.herokuapp.com/mobile_api/all_magazines',{headers:{"x-access-token": token}});
    }

    return magazineFactory;
  })

  .factory('CustomerService',function($http){

    var customerFactory = {};

    customerFactory.get_customer_profile = function(token,cid){

      return $http.get('https://weddingglance.herokuapp.com/mobile_api/get_profile',{headers: {"x-access-token": token},params: {"customer": cid}});

    }

    customerFactory.get_customer_category = function(token,category){

      return $http.get('https://weddingglance.herokuapp.com/mobile_api/get_customer',{headers: {"x-access-token": token},params: {"category": category}})
    }

    return customerFactory;
  })

  .factory('AuthService',function($http){

    var authFactory = {};

    authFactory.login = function (data) {

      return $http.post('https://weddingglance.herokuapp.com/mobile_api/login',"",{headers: {"username": data.username,"password": data.password,'Content-Type': 'application/json'}});
    }

    return authFactory;
  });


