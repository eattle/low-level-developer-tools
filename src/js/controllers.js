angular.module('lldtApp.controllers', [])

.controller('PermissionController', ['$scope', 'PermissionService', function ($scope, PermissionService) {
  $scope.message = '사용자 권한을 검사하고 있습니다.';
  $scope.isRoot = false;
  PermissionService = PermissionService;
  PermissionService.isRoot(function (err, result) {
    if (err) {
      $scope.message = '사용자 권한을 검사하는 도중 오류가 발생하였습니다.';
      return;
    }
    if (result === true) {
      $scope.isRoot = true;
      return;
    }
    $scope.message = '루트 권한으로 다시 실행하여 주십시오.';
  });
}])

.controller('HomeController', function () {})
.controller('DocController', function () {})
.controller('FormatController', function () {});