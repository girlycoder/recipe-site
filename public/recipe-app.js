// Declare app level module which depends on views, and components
angular.module('recipeApp', [
  'ngRoute',
  'recipeApp.recipeList',
  'recipeApp.shoppingList'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/recipeList'});
}]);
