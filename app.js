var theApp = angular.module('theApp', []);


redApp.controller('TheCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.menutest = false;

	$scope.show = function() {
    $scope.menutest = !$scope.menutest;
  }



}]);