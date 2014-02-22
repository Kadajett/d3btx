var app = angular.module("app", []);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.controller("AppCtrl", function($http, $scope){
  $scope.price = 0;

  var priceCall = function(){

	$http.jsonp("https://coinbase.com/api/v1/prices/spot_rate?callback=JSON_CALLBACK&currency=USD" )
  .success(function(data){
    $scope.price = data.amount;
    // alert("success!");
    console.log(data.amount);
  }).
  error(function(data, status){
    alert("Oh Shit!" + " " + status);

  });
  
}

setInterval(function(){priceCall()}, 3000);





  // window.jsonp_callback = function(){

  // }

	// $http({method: 'get', url: 'www.coinbase.com/api/v1/currencies/exchange_rates?cors=true'}).
	// success(function(data, status, headers, config) {
 //      console.log(data);
      
 //    }).
 //    error(function(data, status, headers, config) {	
 //      console.log(data);
      
 //    });
});