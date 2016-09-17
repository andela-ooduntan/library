(function () {
  'use strict';

  angular.module('libraryApp')
    .controller('homeController',
      ['$scope', 'LibService',function($scope, LibService) {

        $scope.book = {};
        $scope.bookList = [];
        $scope.saving = false;

          $scope.addBookToStore = function () {
            $scope.saving = true;

            LibService.save($scope.book).$promise.then(function (result) {
              $scope.saving = false;
              console.log(result);
              $scope.bookList.splice(0, 0, result.result)
              $scope.saveResult = 'Book saved successfully';
            }).catch(function (err) {
              $scope.saving = false;
              console.log(err);
              $scope.saveResult = err;
            });
          }

          $scope.init = function () {
            LibService.get().$promise.then(function (data) {
              $scope.bookList = data.result;
              console.log(data.result)
            }).catch(function (error) {
              console.log(error);
            });
          }

          $scope.deleteBook = function (index) {
            var bookId = $scope.bookList[index]._id;

            LibService.delete({id: bookId}).$promise.then(function (result) {
              console.log(result);
              $scope.bookList.splice(index, 1);
            }).catch(function (err) {
              console.log(err)
            })
          }

        $scope.init();
      }]
    );

}());