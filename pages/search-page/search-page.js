var app = angular.module('searchApp', []);
app.controller('searchAppCtrl', function ($scope) {
  $scope.handleSearch = function (input) {
    $scope.searchValue = input;
  };

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
  ];
});
