const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});

// validation

var app = angular.module('SISUapp', []);
app.controller('SISU-ctrl', function ($scope) {
  var regexUsername = /^[a-zA-Z0-9_-]{3,16}$/;
  var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,}$/;
  // $scope.valid = false;
  $scope.isErrorSignInUsername = false;
  $scope.isErrorSignInPassWord = false;

  $scope.handleSubmitSignin = () => {
    $scope.isErrorSignInUsername = false;
    $scope.isErrorSignInPassWord = false;

    if ($scope.inputSignInUsername == undefined) {
      $scope.isErrorSignInUsername = true;
    }
    if ($scope.inputSigInPassword == undefined) {
      $scope.isErrorSignInPassWord = true;
    }
  };

  $scope.handleSubmitSignUp = () => {
    $scope.isErrorSignUpUserName = false;
    $scope.errorMessageSignupUsername = '';
    $scope.isErrorSignUpEmail = false;
    $scope.errorMessageSignupEmail = '';
    $scope.isErrorSignUpPassword = false;
    $scope.errorMessageSignupPassword = '';
    $scope.isErrorSignUpConfirmPassword = false;

    if ($scope.inputSignUpUsername == undefined) {
      $scope.isErrorSignUpUserName = true;
      $scope.errorMessageSignupUsername = 'Username is required.';
    } else if (!regexUsername.test($scope.inputSignUpUsername)) {
      $scope.isErrorSignUpUserName = true;
      $scope.errorMessageSignupUsername =
        'Username must contain of 3 to 16 characters including letters, numbers, underscores(_), or hyphens(-).';
    }

    if ($scope.inputSignUpEmail == undefined) {
      $scope.isErrorSignUpEmail = true;
      $scope.errorMessageSignupEmail = 'Email is required.';
    } else if (!regexEmail.test($scope.inputSignUpEmail)) {
      $scope.isErrorSignUpEmail = true;
      $scope.errorMessageSignupEmail = 'Email is invalid.';
    }

    if ($scope.inputSignUpPassword == undefined) {
      $scope.isErrorSignUpPassword = true;
      $scope.errorMessageSignupPassword = 'Password is required.';
    } else if (!regexPassword.test($scope.inputSignUpPassword)) {
      $scope.isErrorSignUpPassword = true;
      $scope.errorMessageSignupPassword =
        'Password must contain at least 6 characters, including upper and lowercase letters, numbers and not including space.';
    }

    if ($scope.inputSignUpConfirmPassword != $scope.inputSignUpPassword) {
      $scope.isErrorSignUpConfirmPassword = true;
      $scope.errorMessageSignupConfirmPassword = 'The passwords you entered do not match.';
    }
  };
});
