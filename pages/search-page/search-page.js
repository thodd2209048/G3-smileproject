var searchApp = angular.module('SearchApp', []);
searchApp.controller('searchAppCtrl', function ($scope) {
  $scope.filteredPosts = [];
  $scope.searchInput = '';
  $scope.articles = articles;

  $scope.pageSize = 10;
  $scope.currentPage = 1;
  $scope.numberOfPages = 1;
  $scope.isVisible = false;
  $scope.handleSearch = async function () {
    $scope.currentPage = 1;
    var searchText = $scope.searchInput.toLowerCase();
    $scope.filteredPosts = [];
    $scope.isVisible = true;
    angular.forEach($scope.articles, function (article) {
      if (article.title.toLowerCase().indexOf(searchText) !== -1) {
        $scope.filteredPosts.push(article);
      }
    });
    await $scope.filteredPosts;
    console.log($scope.filteredPosts);
    $scope.numberOfPages = Math.ceil($scope.filteredPosts.length / $scope.pageSize);
    console.log($scope.numberOfPages);
    $scope.$apply();
  };
});
