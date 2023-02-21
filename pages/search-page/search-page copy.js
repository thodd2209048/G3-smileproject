var app = angular.module('searchApp', []);
app.controller('searchAppCtrl', function ($scope) {
  $scope.articles = [
    {
      date: '2015-03-25',
      title: 'Guyton and Hall Textbook of Medical Physiology',
      tag: 'philosophy',
      img: 'https://cdn-amz.woka.io/images/I/81PuuHnVj-L._SR476,476_.jpg',
      des: "The 13th edition of Guyton and Hall Textbook of Medical Physiology continues this bestselling title's long tradition as the world’s foremost medical physiology textbook. Unlike other textbooks on this topic, this clear and comprehensive guide has a consistent, single-author voice and focuses on the content most relevant to clinical and pre-clinical students. The detailed but lucid text is complemented by didactic illustrations that summarize key concepts in physiology and pathophysiology.",
      author: 'John E. Hall',
      link: '#',
    },
    {
      date: '2012-03-20',
      title: 'Boron & Boulpaep Medical Physiology',
      tag: 'physiology',
      img: 'https://kbimages1-a.akamaihd.net/e486d9d7-cc90-4724-87c3-91d82200739f/1200/1200/False/medical-physiology-e-book.jpg',
      des: "Boron and Boulpaep's Medical Physiology is a book that highlights the important principles of human physiology, which are presented in a concise and clear manner. The text is easy to read, and it explains complex topics with ease. The book covers all aspects of physiology, from the molecular and cellular level to the organ and system level.",
      author: 'Walter F. Boron, Emile L. Boulpaep',
    },

    {
      date: '2018-02-01',
      title: "Costanzo's Physiology",
      tag: 'physiology',
      img: 'https://images-na.ssl-images-amazon.com/images/I/51BLlE3wm2L._SX389_BO1,204,203,200_.jpg',
      des: "Costanzo's Physiology is a comprehensive and well-illustrated book that presents the principles of physiology in a clear and concise manner. The book covers all aspects of physiology, from the cellular and molecular level to the organ and system level. It also includes clinical correlations that help students understand the relevance of physiology to clinical practice.",
      author: 'Linda S. Costanzo',
    },

    {
      date: '2019-01-01',
      title: "Ganong's Review of Medical Physiology",
      tag: 'physiology',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41-vPFDrGcL._SX329_BO1,204,203,200_.jpg',
      des: "Ganong's Review of Medical Physiology is a concise and well-organized review of the important principles of human physiology. The book is easy to read and includes many helpful illustrations and tables. It covers all aspects of physiology, from the cellular and molecular level to the organ and system level. The book is an excellent resource for students and healthcare professionals who want to review the basics of physiology.",
      author: 'Kim E. Barrett, Susan M. Barman, Scott Boitano, Heddwen L. Brooks',
    },

    {
      date: '2017-03-31',
      title: 'Berne & Levy Physiology',
      tag: 'physiology',
      img: 'https://images-na.ssl-images-amazon.com/images/I/51cpM56t0JL._SX395_BO1,204,203,200_.jpg',
      des: 'Berne & Levy Physiology is a comprehensive textbook that covers all aspects of human physiology. The book is well-organized and easy to read, with helpful illustrations and tables throughout. The text covers everything from the cellular and molecular level to the organ and system level, and it includes clinical correlations that help students understand the relevance of physiology to clinical practice.',
      author: 'Bruce M. Koeppen, Bruce A. Stanton',
    },
  ];

  $scope.handleSearch = function (input) {
    $scope.searchValue = input;
  };
});
