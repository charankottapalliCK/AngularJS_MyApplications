angular.module('myapp', [])
    .controller('mycontroller', function($scope, $http,$log) {
        $scope.getWeather = function() {
            var successCallBack = function(response){
                $log.info(response.hourly_forecast);
                console.log("SUCCESS");
                $scope.weathers= response.hourly_forecast;
            };
            var failureCallBack = function(response){
                $scope.error = response.data;
                $log.info(response);
            };
            var state=document.getElementById("state").value;
            var city = document.getElementById("city").value;
            $http({
                method:'GET',
                url: 'https://api.wunderground.com/api/4bbbc25f4f5946dd/hourly/q/' + state + '/' + city + '.json'})
                .then(successCallBack,failureCallBack);
        }
    });