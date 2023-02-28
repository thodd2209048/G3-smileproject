var homepageApp = angular.module('HomepageApp', []);
homepageApp.controller('homepageAppCtrl', function ($scope) {
  $scope.articles = articles;
  $scope.researchArticles = [];
  $scope.patientEduArticles = [];
  highlightId = 22;
  $scope.notHighlightArticles = [];
  const tagCounts = {};
  $scope.tagArray = [];
  $scope.pageSize = 11;

  // Lay bai viet co id = highlightId
  $scope.highlightArticle = $scope.articles.find((item) => item.id == highlightId);

  //Lay phan danh sach bai viet khong gom highlightId
  $scope.notHighlightArticles = $scope.articles.filter((item) => item.id != highlightId);

  // Sap xep lai mang theo thoi gian
  $scope.notHighlightArticles.sort((a, b) => b.date.localeCompare(a.date));

  angular.forEach($scope.notHighlightArticles, function (article) {
    switch (article.subject) {
      case 'research':
        $scope.researchArticles.push(article);
        break;
      case 'patientEdu':
        $scope.patientEduArticles.push(article);
        break;
    }
  });

  console.log('patientEduArticles', $scope.patientEduArticles);
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
