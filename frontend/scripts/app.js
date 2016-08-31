console.log('start angular');

angular.module('app', [ 
   'ngStorage',
   'ngRoute',
   'angular-loading-bar'

])
   .constant('urls', {
       BASE: 'http://edurio.dev',
       BASE_API: 'http://api.edurio.dev'
   })
   .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

          console.log('routeProvider before ');

          $routeProvider.
           when('/', {
               templateUrl: 'partials/home.html',
               controller: 'HomeController'
           }).
           when('/signin', {
               templateUrl: 'partials/signin.html',
               controller: 'HomeController'
           }).
           when('/signup', {
               templateUrl: 'partials/signup.html',
               controller: 'HomeController'
           }).
           when('/restricted', {
               templateUrl: 'partials/restricted.html',
               controller: 'RestrictedController'
           }).
           otherwise({
               redirectTo: '/'
           });

           console.log('httpProvider before ');

           $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function ($q, $location, $localStorage) {
             return {
                 'request': function (config) {
                     config.headers = config.headers || {};
                     if ($localStorage.token) {
                         config.headers.Authorization = 'Bearer ' + $localStorage.token;
                     }
                     return config;
                 },
                 'responseError': function (response) {
                     if (response.status === 401 || response.status === 403) {
                         $location.path('/signin');
                     }
                     return $q.reject(response);
                 }
             };
          }]);
}]);
