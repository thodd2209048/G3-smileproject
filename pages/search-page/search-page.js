var searchApp = angular.module('SearchApp', []);
searchApp.controller('searchAppCtrl', function ($scope) {
  $scope.filteredPosts = [];
  $scope.searchInput = '';
  $scope.articles = articles;

  $scope.pageSize = 10;
  $scope.currentPage = 1;
  $scope.numberOfPages = 1;
  $scope.isVisible = false;
  $scope.isNotFoundVisible = false;
  $scope.isResultVisible = false;
  $scope.handleSearch = async function () {
    $scope.currentPage = 1;
    $scope.isResultVisible = true;
    $scope.isVisible = false;
    $scope.isNotFoundVisible = false;
    var searchText = $scope.searchInput.toLowerCase();
    $scope.filteredPosts = [];

    angular.forEach($scope.articles, function (article) {
      if (article.title.toLowerCase().indexOf(searchText) !== -1) {
        $scope.filteredPosts.push(article);
      }
    });
    await $scope.filteredPosts;
    console.log($scope.filteredPosts);
    $scope.numberOfPages = Math.ceil($scope.filteredPosts.length / $scope.pageSize);
    if ($scope.filteredPosts.length != 0) {
      $scope.isVisible = true;
    } else {
      $scope.isNotFoundVisible = true;
    }

    $scope.$apply();
    console.log('visible:', $scope.isVisible);
    console.log('not found:', $scope.isNotFoundVisible);
  };
});
