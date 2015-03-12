angular.module('recipeApp.recipeList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipeList', {
    templateUrl: 'views/recipeList/recipeList.html',
    controller: 'recipeCtrl'
  });
}])

.controller('recipeCtrl', function($scope) {

  $scope.mainRecipes = [
      [
        {
          img_url: "/img/burrito-1.jpg",
          title: "Breakfast Burrito",
          test: "lame"
        },
        {
          img_url: "/img/burrito-2.jpg",
          title: "Breakfast Burrito",
          test: "lame1"
        },
        {
          img_url: "/img/burrito-3.jpg",
          title: "Breakfast Burrito",
          test: "lame2"
        }
      ],
      [
        {
          img_url: "/img/burrito-1.jpg",
          title: "Breakfast Burrito",
          test: "lame"
        },
        {
          img_url: "/img/burrito-2.jpg",
          title: "Breakfast Burrito",
          test: "lame1"
        },
        {
          img_url: "/img/burrito-3.jpg",
          title: "Breakfast Burrito",
          test: "lame2"
        }
      ],
      [
        {
          img_url: "/img/burrito-1.jpg",
          title: "Breakfast Burrito",
          test: "lame"
        },
        {
          img_url: "/img/burrito-2.jpg",
          title: "Breakfast Burrito",
          test: "lame1"
        },
        {
          img_url: "/img/burrito-3.jpg",
          title: "Breakfast Burrito",
          test: "lame2"
        }
      ]


    ];

});
