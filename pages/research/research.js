var researchApp = angular.module('ResearchApp', []);
researchApp.controller('researchCtrl', function ($scope) {
  $scope.articles = articles;
  $scope.researchArticles = [];

  // Lay rieng cac bai viet tuong ung voi muc research
  angular.forEach($scope.articles, function (article) {
    if (article.subject === 'research') {
      $scope.researchArticles.push(article);
    }
  });

  const tagCounts = {};
  $scope.tagArray = [];
  $scope.pageSize = 11;

  // Tao sanh sach tag cho cac bai viet trong researchArticle
  $scope.researchArticles.forEach((article) => {
    tagCounts[article.tag] ? tagCounts[article.tag]++ : (tagCounts[article.tag] = 1);
  });
  for (const [tag, count] of Object.entries(tagCounts)) {
    $scope.tagArray.push({ tag, count });
  }

  // Tao chuc nang filter
  $scope.handleFilter = function (x) {
    // set lai gia tri filter
    $scope.selectedTag = x;
    // reset lai danh sach bai viet duoc filter
    $scope.filteredArticles = [];
    // Dua current page ve trang 1
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
    // Tao phan prev - next
    $scope.numberOfPages = Math.ceil($scope.filteredArticles.length / $scope.pageSize);
  };

  // Bat dau trang web voi filter theo gia tri luu trong localStorage
  $scope.handleFilter(localStorage.getItem('filterValue'));
  // Sau 0.3s thi xoa gia tri trong localStorage
  setTimeout(localStorage.setItem('filterValue', ''), 300);
});
