const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// validation

var app = angular.module('SISUapp', []);
app.controller('SISU-ctrl', function($scope){
    $scope.valid = false;
    $scope.submit = function(){
        $scope.valid = true;
    }
    $scope.close = function(){
        $scope.valid = false;
    }
});

