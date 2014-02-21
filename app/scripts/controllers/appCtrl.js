var app = angular.module("app", []);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.controller("AppCtrl", function($http){
// 	$http.get("www.coinbase.com/api/v1/currencies/exchange_rates")
// 	.success(function(data){
// 		console.log(data);
// 	});


	$http({method: 'html', url: 'http://api.bitcoincharts.com/v1/markets.json'}).
	success(function(data, status, headers, config) {
      console.log(JSON.parse(data));
      
    }).
    error(function(data, status, headers, config) {	
      console.log(data);
      
    });
});