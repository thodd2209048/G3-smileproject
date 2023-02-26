var researchApp = angular.module('ResearchApp', []);
researchApp.controller('researchCtrl', function ($scope) {
  $scope.articles = articles;
  $scope.researchArticles = [];
  angular.forEach($scope.articles, function (article) {
    if (article.subject === 'research') {
      $scope.researchArticles.push(article);
    }
  });
  console.log($scope.researchArticles);
  const tagCounts = {};
  $scope.researchArticles.forEach((article) => {
    if (tagCounts[article.tag]) {
      tagCounts[article.tag]++;
    } else {
      tagCounts[article.tag] = 1;
    }
  });
  $scope.tagArray = [];
  for (const [tag, count] of Object.entries(tagCounts)) {
    $scope.tagArray.push({ tag, count });
  }

  console.log($scope.tagArray);

  $scope.handleFilter = function (x) {
    $scope.researchFilter = x;
  };
  $scope.pageSize = 11;
  $scope.currentPage = 1;
  $scope.numberOfPages = Math.ceil($scope.researchArticles.length / $scope.pageSize);
});
