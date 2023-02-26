var researchApp = angular.module('ResearchApp', []);
researchApp.controller('researchCtrl', function ($scope) {
  $scope.articles = articles;
  $scope.researchArticles = [];
  angular.forEach($scope.articles, function (article) {
    if (article.subject === 'research') {
      $scope.researchArticles.push(article);
    }
  });
  console.log('research:', $scope.researchArticles);
  // $scope.filteredArticles = $scope.researchArticles;
  const tagCounts = {};
  $scope.tagArray = [];
  $scope.pageSize = 11;
  // $scope.currentPage = 1;

  // TAG
  $scope.researchArticles.forEach((article) => {
    tagCounts[article.tag] ? tagCounts[article.tag]++ : (tagCounts[article.tag] = 1);
  });
  for (const [tag, count] of Object.entries(tagCounts)) {
    $scope.tagArray.push({ tag, count });
  }

  // FILTER
  console.log('tag', $scope.tagArray);
  $scope.handleFilter = function (x) {
    $scope.selectedTag = x;
    $scope.filteredArticles = [];
    $scope.currentPage = 1;
    if (x === '') {
      $scope.filteredArticles = $scope.researchArticles;
    } else {
      angular.forEach($scope.researchArticles, function (article) {
        if (article.tag === x) {
          $scope.filteredArticles.push(article);
        }
      });
    }

    $scope.numberOfPages = Math.ceil($scope.filteredArticles.length / $scope.pageSize);
  };
  $scope.handleFilter('');
});
