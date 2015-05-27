angular.module('lldtApp.services', [])

.factory('HomeService', ['$http', function ($http) {
  return {
    people: function () {
      return $http.get('people');
    }
  };
}]);