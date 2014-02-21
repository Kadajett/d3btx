var app = angular.module("app", []);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.controller("AppCtrl", function($http){
	$http.jsonp("https://coinbase.com/api/v1/prices/spot_rate?currency=USD&callback=JSON_CALLBACK")
  .success(function(data){

    debugger;
  })
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