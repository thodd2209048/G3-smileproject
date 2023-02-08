var app = angular.module('signUp-app', []);
app.controller('signUp-ctrl', function($scope){
    $scope.valid = false;
    $scope.submit = function(){
        $scope.valid = true;
    }
    $scope.close = function(){
        $scope.valid = false;
    }
});