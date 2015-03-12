angular.module('recipeApp.shoppingList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/shoppingList', {
    templateUrl: 'views/shoppingList/shoppingList.html',
    controller: 'shoppingListCtrl'
  });
}])

.controller('shoppingListCtrl', [function() {

}]);
