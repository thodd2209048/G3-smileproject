var homepageApp = angular.module('HomepageApp', []);
homepageApp.controller('homepageAppCtrl', function ($scope, $interval) {
  $scope.articles = articles;
  $scope.researchArticles = [];
  $scope.patientEduArticles = [];
  $scope.productList = [];
  $scope.courseList = [];
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
      case 'products':
        $scope.productList.push(article);
        break;
      case 'course':
        $scope.courseList.push(article);
        break;
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

  // Counter
  timeEffect = 1500;
  endCountTime = 100;
  countTime = 0;
  $scope.counterArticle = 0;
  $scope.counterUser = 0;
  $scope.counterDoctor = 0;
  runCounter = () => {
    count = (endNumberArticle, endNumberUser, endNumberDoctor) => {
      if (countTime == endCountTime) {
        $interval.cancel(counter);
      } else {
        $scope.counterArticle += endNumberArticle / endCountTime;
        $scope.counterUser += endNumberUser / endCountTime;
        $scope.counterDoctor += endNumberDoctor / endCountTime;
        countTime++;
        // console.log($scope.counterArticle, $scope.counterUser, countTime);
      }
    };
    counter = $interval(function () {
      count(1050, 3519, 44);
    }, timeEffect / endCountTime);
  };

  $scope.counterItemShow = false;
  $scope.scrollPosition = 400;
  $scope.onScroll = function () {
    var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    $scope.counterItemShow = currentScrollPosition >= $scope.scrollPosition;
    if ($scope.counterItemShow) {
      window.removeEventListener('scroll', $scope.onScroll);
      runCounter();
    }
  };

  window.addEventListener('scroll', $scope.onScroll);
});
