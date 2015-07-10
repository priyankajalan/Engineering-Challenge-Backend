var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl', function($scope, $http) {
    console.log("hello from controller");

//This function is used to automatically refresh the page
    var refresh = function(){
        //Data request from mongodb database
    	$http.get('/foodlist').success(function(response){
    	console.log("I got the data I requested");
        //Received data response
    	$scope.foodlist = response;
      });
    };
    
//Add the data received from the input box to the server
    $scope.addfood = function(){
    	console.log($scope.food);
        //Sending the data from the input box to the server
    	$http.post('/foodlist',$scope.food).success(function(response){
    		console.log(response);
            //Calling the refresh function so that the page automatically refreshes
    		refresh();
    	});
    };   

});


