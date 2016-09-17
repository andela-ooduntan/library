(function () {
  'use strict';

  angular.module('libraryApp')
    .controller('searchCntrl', ['$scope', '$stateParams', 'LibService',
      function ($scope, $stateParams, LibService) {
        $scope.searchTerm = $stateParams.q
        LibService.get($stateParams).$promise.then(function (data) {
          $scope.searchResult = data.result;
        }).catch(function (err) {
          console.log(err);
        });
  }]);
}());