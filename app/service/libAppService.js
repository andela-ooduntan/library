(function () {
  'use strict';

  angular.module('libraryApp')
    .factory('LibService', function ($resource) {
      return $resource('/library/:id', {id: '@id'},
        {
          update: {
            method: 'PUT'
          }
        });
  });
}());