/**
 * @file
 *  Related JavaScript.
 */

/**
 * Declare the app.
 */
var s5_app = angular.module('s5_app', []);

/**
 * Declare the controller that adds the default value to scope var.
 */
s5_app.controller('s5_ctrl', function s5_ctrl($scope) {
  $scope.s5model = 'Initial text';
  $scope.s5setCommon = function() {
    alert('Called');
    $scope.s5model = 'Initial text';
  }
});

/**
 * A directive to bind event to element, creating a behavior.
 */
s5_app.directive('s5', function() {
  return {
    restrict: 'C',
    scope: {
      initext: '@',
    },
    link: function($scope, $elem, $attrs) {
      $scope.s5model = $scope.initext;
    },
    template: '<input type="text" ng-model="s5model"> {{s5model}}'
  }
});


/**
 * We need to bootstrap the app manually to the container by id, since we have
 *  more tha one app on the same page.
 */
angular.element(document).ready(function() {
  angular.bootstrap(document.getElementById("s5_container"),['s5_app']);
});