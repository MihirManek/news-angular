/**
 * Created by Jarvis on 1/26/2018.
 */
app.controller('CategoryController',['$scope','$location','$routeParams','httpService','$window', function CategoryController($scope,$location,$routeParams,httpService,$window) {
    $scope.available_categories={
        '':{
            "country": "in"
        },
        'top stories': {
            "country": "in"
        },
        'sports':{
            "category":"sports",
            "country": "in"
        },
        'technology':{
            "category":"technology",
            "country": "in"
        },
        'business':{
            "category":"business",
            "country": "in"
        },
        'entertainment':{
            "category":"entertainment",
            "country": "in"
        },
        'science':{
            "category":"science",
            "country": "in"
        },
        'health':{
            "category":"health",
            "country": "in"
        }
    };
    $scope.data={
        "email":"",
        "password":"asd"
    };
    $scope.category=$routeParams.category || "";
    $scope.page=$routeParams.page || 1;
    $scope.categoryRaw=$scope.category;
    $scope.category=$scope.category.replace('-',' ');
    $scope.exception=false;
    if(!($scope.category in $scope.available_categories)){
        $scope.exception=true;
    }
    $scope.$on('$viewContentLoaded', function(event, viewConfig)
    {
        if(!$scope.exception)
        {
            $window.scrollTo(0, 0);
            $scope.data=$scope.available_categories[$scope.category];
            $scope.data.page=$scope.page;
            httpService.hitUrl($scope.data).then(function(data){
                $scope.news= data.data.articles;
            });
        }
    });


}]);