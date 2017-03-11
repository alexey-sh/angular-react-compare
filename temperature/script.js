(function(angular) {
  var app = angular.module('temperatureApp', []);
  app.controller('mainCtrl', function($scope) {
    $scope.temp = {
      celsius: undefined,
      fahrenheit: undefined
    };
    $scope.updateFahrenheit = function(celsius) {
      $scope.temp.fahrenheit = (celsius * 9 / 5) + 32;
    };
    $scope.updateCelsius = function(fahrenheit) {
      $scope.temp.celsius = (fahrenheit - 32) * 5 / 9;
    };
  });

  app.directive('boilingVerdict', function() {
    return {
      replace: true,
      template: "<p ng-show='temp >= 0 || temp <=0'>The water would <span ng-show='temp < 100'>not</span> boil.</p>",
      scope: {
        temp: '=boilingVerdict'
      }
    }
  });

  app.directive('temperatureInput', function() {
    return {
      templateUrl: 'temperature-input.html',
      replace: true,
      scope: {
        temperature: '=',
        onUpdateTemperature: '&',
        name: '=temperatureInput'
      }
    }
  });
})(angular);