angular.module('app')
   .controller('HomeController', ['$rootScope', '$scope', '$location', '$localStorage', 'Auth',
       function ($rootScope, $scope, $location, $localStorage, Auth) {
           function successAuth(res) {
               $localStorage.token = res.token;
               window.location = "/";
           }

           $scope.signin = function () {
               console.log('signin');
               var formData = {
                   email: $scope.email,
                   password: $scope.password
               };

               Auth.signin(formData, successAuth, function () {
                   $rootScope.error = 'Invalid credentials.';
               })
           };

           $scope.signup = function () {
               console.log('signup');
               var formData = {
                   email: $scope.email,
                   password: $scope.password
               };

               Auth.signup(formData, successAuth, function () {
                   $rootScope.error = 'Failed to signup';
               })
           };

           $scope.logout = function () {
               console.log('logout');
               Auth.logout(function () {
                   window.location = "/"
               });
           };
           $scope.token = $localStorage.token;
           $scope.tokenClaims = Auth.getTokenClaims();
       }]).controller('RestrictedController', ['$rootScope', '$scope', 'Data', function ($rootScope, $scope, Data) {
       Data.getRestrictedData(function (res) {
           $scope.data = res.data;
       }, function () {
           $rootScope.error = 'Failed to fetch restricted content.';
       });
       Data.getApiData(function (res) {
           $scope.api = res.data;
       }, function () {
           $rootScope.error = 'Failed to fetch restricted API content.';
       });
   }]);