

// validation

var app = angular.module('FGapp', []);
app.controller('FG-ctrl', function($scope){
    $scope.valid = false;
    $scope.submit = function(){
        $scope.valid = true;
    }
    $scope.close = function(){
        $scope.valid = false;
    }
});