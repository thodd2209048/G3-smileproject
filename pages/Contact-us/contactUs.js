var feedbackFormApp = angular.module('FeedbackForm', []);
feedbackFormApp.controller('feedbackCtrl', function ($scope) {
  $scope.errorNameShow = false;
  $scope.errorEmailShow = false;
  $scope.errorMessageShow = false;
  var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  $scope.submitStatus = false;

  $scope.submitForm = () => {
    $scope.errorNameShow = false;
    $scope.errorEmailShow = false;
    $scope.errorMessageShow = false;
    $scope.errorEmailMessage = '';

    if ($scope.nameInput == undefined) {
      $scope.errorNameShow = true;
    }
    if ($scope.messageInput == undefined) {
      $scope.errorMessageShow = true;
    }
    if ($scope.emailInput == undefined) {
      $scope.errorEmailMessage = 'Email is required.';
    } else if (!regexEmail.test($scope.emailInput)) {
      $scope.errorEmailMessage = 'Invalid email address.';
    }
    if (!$scope.errorNameShow && !$scope.errorMessageShow && !$scope.errorEmailMessage) {
      $scope.submitStatus = true;
    }
    console.log($scope.emailInput);
  };
});
