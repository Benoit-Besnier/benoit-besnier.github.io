/**
 * Created by Benoit on 05/08/2017.
 */

var AppController = angular.module('AppController', []);

AppController.controller('View', ['$scope',
   function ($scope) {
        $scope.profile = {
            firstname : "Benoit",
            surname : "Besnier"
        }
   }
]);