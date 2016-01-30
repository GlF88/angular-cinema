var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'template/page.html',
    controller: 'pageCtrl'
  });

  $routeProvider

  .when('/cart/:id', {
    templateUrl: 'template/cart.html',
    controller: 'cartCtrl'
  });

  $routeProvider

  .when('/page/:id', {
    templateUrl: 'template/page.html',
    controller: 'pageCtrl'
  })
})

app.controller('homeCtrl', function ($scope, $http, $rootScope) {
  $http.get('js/film.json').then(function(response) {
    $rootScope.movies = response.data;
  })
})

app.controller('defaultCtrl', function ($scope, $routeParams, $rootScope) {
  // $scope.countPagination = $rootScope.movies.length / numberPhilms; //тут считаем сколько должно быть страниц с фильмами
  // $scope.initPagination = [];
  // for (var initPaginationFor = 0; initPaginationFor < $scope.countPagination; initPaginationFor++) {
  //   $scope.initPagination[initPaginationFor] = initPaginationFor;
  // }
})

app.controller('pageCtrl', function ($scope, $routeParams, $rootScope) {
  $http.get('js/film.json').then(function(response) {
    $rootScope.movies = response.data;
  })
  $scope.philmArray = [];
  var countFor = 0;
  var numberPhilms = 4;
  for (var i = 0; i <= $rootScope.movies.length; i += numberPhilms) {
    countFor++;
    $scope.philmArray[countFor] = $rootScope.movies.slice(i, i + numberPhilms);
  }
  $scope.movies = $scope.philmArray[$routeParams.id];


})

app.controller('cartCtrl', function ($scope, $routeParams, $rootScope) {
  $rootScope.thisMovies = $rootScope.movies[$routeParams.id]
})
