var homepageApp = angular.module('HomepageApp', []);
homepageApp.controller('homepageAppCtrl', function ($scope) {
  $scope.articles = articles;
  $scope.researchArticles = [];
  const tagCounts = {};
  $scope.tagArray = [];
  $scope.pageSize = 11;

  angular.forEach($scope.articles, function (article) {
    if (article.subject === 'research') {
      $scope.researchArticles.push(article);
    }
  });

  // TAG
  $scope.researchArticles.forEach((article) => {
    tagCounts[article.tag] ? tagCounts[article.tag]++ : (tagCounts[article.tag] = 1);
  });
  for (const [tag, count] of Object.entries(tagCounts)) {
    $scope.tagArray.push({ tag, count });
  }

  // save filter value to localstorage
  $scope.saveFilterValue = (tagName) => {
    localStorage.setItem('filterValue', tagName);
  };
});
