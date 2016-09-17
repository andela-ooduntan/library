(function () {
  'use strict';

  angular.module('libraryApp')
    .controller('editController',
      ['$scope', 'LibService', '$stateParams', '$state',
        function($scope, LibService, $stateParams, $state) {
        $scope.book = {};
        $scope.saving = false;

        $scope.updateBookData = function () {
          LibService.update($stateParams, $scope.book)
            .$promise.then(function (data) {
              $state.go('home');
          }).catch(function (err) {
            console.log(err);
          });
        };

        $scope.init = function () {
          LibService.get($stateParams).$promise.then(function (data) {
            $scope.book = data.result[0]
          }).catch(function (err) {
            console.log(err);
          });
        }

        $scope.init();
      }]
    );

}());