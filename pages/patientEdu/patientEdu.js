var patientEduApp = angular.module('PatientEduApp', []);
patientEduApp.controller('patientEduCtrl', function ($scope) {
  $scope.articles = articles;
  $scope.patientEduArticles = [];

  // Lay rieng cac bai viet tuong ung voi muc research
  angular.forEach($scope.articles, function (article) {
    if (article.subject === 'patientEdu') {
      $scope.patientEduArticles.push(article);
    }
  });

  const tagCounts = {};
  $scope.tagArray = [];
  $scope.pageSize = 9;

  // Tao sanh sach tag cho cac bai viet trong researchArticle
  $scope.patientEduArticles.forEach((article) => {
    tagCounts[article.tag] ? tagCounts[article.tag]++ : (tagCounts[article.tag] = 1);
  });
  for (const [tag, count] of Object.entries(tagCounts)) {
    $scope.tagArray.push({ tag, count });
  }

  // Filter
  $scope.handleFilter = (tagName) => {
    $scope.filteredArticle = [];
    $scope.currentPage = 1;

    if (tagName === '') {
      $scope.filteredArticle = $scope.patientEduArticles;
    } else {
      angular.forEach($scope.patientEduArticles, function (article) {
        if (article.tag === tagName) {
          $scope.filteredArticle.push(article);
        }
      });
    }
    $scope.numberOfPages = Math.ceil($scope.filteredArticle.length / $scope.pageSize);
  };

  $scope.handleFilter(localStorage.getItem('filterValue'));
  setTimeout(localStorage.setItem('filterValue', ''), 300);
});
