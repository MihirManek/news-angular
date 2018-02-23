/**
 * Created by Jarvis on 1/26/2018.
 */
angular.module('app.routes',['ngRoute'])
    .config(config);
function config ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "app/Home/_home.html",
            controller : "HomeController"
        })
        .when("/category/:category?/:page?",{
            templateUrl : "app/Category/_category.html",
            controller : "CategoryController"
        })
        .otherwise({redirectTo:'/'});
}