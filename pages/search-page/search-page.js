var searchApp = angular.module('SearchApp', []);
searchApp.controller('searchAppCtrl', function ($scope) {
  $scope.filteredPosts = [];
  $scope.searchInput = '';
  $scope.articles = [
    {
      date: '2013-01-13',
      title:
        'Validation of data mining models by comparing with conventional methods for dental age estimation in Korean juveniles and young adults',
      subject: 'research',
      tag: 'data-mining',
      img: '/pages/research-article/article-0001/public/figure/fig1.webp',
      des: 'Teeth are known to be the most accurate age indicators of human body and are frequently applied in forensic age estimation. We aimed to validate data mining-based dental age estimation, by comparing the accuracy of the estimation and classification performance of 18-year thresholds with conventional methods and with data mining-based age estimatio.',
      author: 'Akiko Kumagai, Seoi Jeong, Daeyoun Kim, Hyoun-Joong Kong, Sehyun Oh & Sang-Seob Lee',
      link: '/pages/research-article/article-0001/article-0001.html',
    },
    {
      date: '2022-10-14',
      title: 'Diagnostic performance of convolutional neural networks for dental sexual dimorphism',
      subject: 'research',
      tag: 'diagnostic',
      img: '/pages/research-article/article-0002/public/figure/figure2.1.webp',
      des: 'Convolutional neural networks (CNN) led to important solutions in the field of Computer Vision. More recently, forensic sciences benefited from the resources of artificial intelligence, especially in procedures that normally require operator-dependent steps.',
      author:
        'Ademir Franco, Lucas Porto, Dennis Heng, Jared Murray, Anna Lygate, Raquel Franco, Juliano Bueno, Marilia Sobania, Márcio M. Costa, Luiz R. Paranhos, Scheila Manica & André Abade',
      link: '/pages/research-article/article-0002/article-0002.html',
    },
    {
      date: '2023-01-13',
      title:
        'Boosting algorithm improves the accuracy of juvenile forensic dental age estimation in southern China population',
      subject: 'research',
      tag: 'diagnostic',
      img: '/pages/research-article/article-0003/public/figure/fig1.webp',
      des: 'The classification performance of the 18-year threshold was also similar between the conventional method and the data mining models. Thus, conventional methods can be replaced by data mining models in forensic age estimation using second and third molar maturity of Korean juveniles and young adults.',
      author: 'Akiko Kumagai, Seoi Jeong, Daeyoun Kim, Hyoun-Joong Kong, Sehyun Oh & Sang-Seob Lee',
      link: '/pages/research-article/article-0003/article-0001.html',
    },

    {
      date: '2021-08-17',
      title:
        'Population affinity and variation of sexual dimorphism in three-dimensional facial forms: comparisons between Turkish and Japanese populations',
      subject: 'research',
      tag: 'data-mining',
      img: '/pages/research-article/article-0004/public/figure/fig1.webp',
      des: 'The classification performance of the 18-year threshold was also similar between the conventional method and the data mining models. Thus, conventional methods can be replaced by data mining models in forensic age estimation using second and third molar maturity of Korean juveniles and young adults.',
      author: 'Akiko Kumagai, Seoi Jeong, Daeyoun Kim, Hyoun-Joong Kong, Sehyun Oh & Sang-Seob Lee',
      link: '/pages/research-article/article-0004/article-0001.html',
    },
    // FAKE
    {
      date: '2023-01-13',
      title:
        'Boosting algorithm improves the accuracy of juvenile forensic dental age estimation in southern China population',
      subject: 'research',
      tag: 'diagnostic',
      img: '/pages/research-article/article-0003/public/figure/fig1.webp',
      des: 'The classification performance of the 18-year threshold was also similar between the conventional method and the data mining models. Thus, conventional methods can be replaced by data mining models in forensic age estimation using second and third molar maturity of Korean juveniles and young adults.',
      author: 'Akiko Kumagai, Seoi Jeong, Daeyoun Kim, Hyoun-Joong Kong, Sehyun Oh & Sang-Seob Lee',
      link: '/pages/research-article/article-0003/article-0001.html',
    },
    {
      date: '2023-01-13',
      title:
        'Boosting algorithm improves the accuracy of juvenile forensic dental age estimation in southern China population',
      subject: 'research',
      tag: 'diagnostic',
      img: '/pages/research-article/article-0003/public/figure/fig1.webp',
      des: 'The classification performance of the 18-year threshold was also similar between the conventional method and the data mining models. Thus, conventional methods can be replaced by data mining models in forensic age estimation using second and third molar maturity of Korean juveniles and young adults.',
      author: 'Akiko Kumagai, Seoi Jeong, Daeyoun Kim, Hyoun-Joong Kong, Sehyun Oh & Sang-Seob Lee',
      link: '/pages/research-article/article-0003/article-0001.html',
    },
    {
      date: '2023-01-13',
      title:
        'Boosting algorithm improves the accuracy of juvenile forensic dental age estimation in southern China population',
      subject: 'research',
      tag: 'diagnostic',
      img: '/pages/research-article/article-0003/public/figure/fig1.webp',
      des: 'The classification performance of the 18-year threshold was also similar between the conventional method and the data mining models. Thus, conventional methods can be replaced by data mining models in forensic age estimation using second and third molar maturity of Korean juveniles and young adults.',
      author: 'Akiko Kumagai, Seoi Jeong, Daeyoun Kim, Hyoun-Joong Kong, Sehyun Oh & Sang-Seob Lee',
      link: '/pages/research-article/article-0003/article-0001.html',
    },
    {
      date: '2023-01-13',
      title:
        'Boosting algorithm improves the accuracy of juvenile forensic dental age estimation in southern China population',
      subject: 'research',
      tag: 'diagnostic',
      img: '/pages/research-article/article-0003/public/figure/fig1.webp',
      des: 'The classification performance of the 18-year threshold was also similar between the conventional method and the data mining models. Thus, conventional methods can be replaced by data mining models in forensic age estimation using second and third molar maturity of Korean juveniles and young adults.',
      author: 'Akiko Kumagai, Seoi Jeong, Daeyoun Kim, Hyoun-Joong Kong, Sehyun Oh & Sang-Seob Lee',
      link: '/pages/research-article/article-0003/article-0001.html',
    },
    {
      date: '2023-01-13',
      title:
        'Boosting algorithm improves the accuracy of juvenile forensic dental age estimation in southern China population',
      subject: 'research',
      tag: 'diagnostic',
      img: '/pages/research-article/article-0003/public/figure/fig1.webp',
      des: 'The classification performance of the 18-year threshold was also similar between the conventional method and the data mining models. Thus, conventional methods can be replaced by data mining models in forensic age estimation using second and third molar maturity of Korean juveniles and young adults.',
      author: 'Akiko Kumagai, Seoi Jeong, Daeyoun Kim, Hyoun-Joong Kong, Sehyun Oh & Sang-Seob Lee',
      link: '/pages/research-article/article-0003/article-0001.html',
    },
    {
      date: '2023-01-13',
      title:
        'Boosting algorithm improves the accuracy of juvenile forensic dental age estimation in southern China population',
      subject: 'research',
      tag: 'diagnostic',
      img: '/pages/research-article/article-0003/public/figure/fig1.webp',
      des: 'The classification performance of the 18-year threshold was also similar between the conventional method and the data mining models. Thus, conventional methods can be replaced by data mining models in forensic age estimation using second and third molar maturity of Korean juveniles and young adults.',
      author: 'Akiko Kumagai, Seoi Jeong, Daeyoun Kim, Hyoun-Joong Kong, Sehyun Oh & Sang-Seob Lee',
      link: '/pages/research-article/article-0003/article-0001.html',
    },
    {
      date: '2023-01-13',
      title:
        'Boosting algorithm improves the accuracy of juvenile forensic dental age estimation in southern China population',
      subject: 'research',
      tag: 'diagnostic',
      img: '/pages/research-article/article-0003/public/figure/fig1.webp',
      des: 'The classification performance of the 18-year threshold was also similar between the conventional method and the data mining models. Thus, conventional methods can be replaced by data mining models in forensic age estimation using second and third molar maturity of Korean juveniles and young adults.',
      author: 'Akiko Kumagai, Seoi Jeong, Daeyoun Kim, Hyoun-Joong Kong, Sehyun Oh & Sang-Seob Lee',
      link: '/pages/research-article/article-0003/article-0001.html',
    },
    {
      date: '2023-01-13',
      title:
        'Boosting algorithm improves the accuracy of juvenile forensic dental age estimation in southern China population',
      subject: 'research',
      tag: 'diagnostic',
      img: '/pages/research-article/article-0003/public/figure/fig1.webp',
      des: 'The classification performance of the 18-year threshold was also similar between the conventional method and the data mining models. Thus, conventional methods can be replaced by data mining models in forensic age estimation using second and third molar maturity of Korean juveniles and young adults.',
      author: 'Akiko Kumagai, Seoi Jeong, Daeyoun Kim, Hyoun-Joong Kong, Sehyun Oh & Sang-Seob Lee',
      link: '/pages/research-article/article-0003/article-0001.html',
    },
  ];

  $scope.pageSize = 10;
  $scope.currentPage = 1;
  $scope.numberOfPages = 1;
  $scope.isVisible = false;
  $scope.handleSearch = async function () {
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
