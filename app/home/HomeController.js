app.controller('HomeController',['$scope','$location','httpService', function HomeController($scope,$location,httpService) {
	$scope.news=[];
	
	$scope.$on('$viewContentLoaded', function(event, viewConfig)
	{
	});
  $scope.allnews={
	  "World":[
		  {
			"headline":"This is news 1 from Angular",
			"short_description":"Minutes ahead of the sentencing, Nassar apologized in court to his victims, who included Olympic gold-medal winning gymnasts Simone Biles, Aly Raisman, Gabby Douglas and McKayla Maroney but also",
			"media":false,
			"media_link":"",
			"author":"Sample Author",
			"date_published":"15th January, 2018"
		  },
		  {
			"headline":"This is news 2 from Angular",
			"short_description":"Minutes ahead of the sentencing, Nassar apologized in court to his victims, who included Olympic gold-medal winning gymnasts Simone Biles, Aly Raisman, Gabby Douglas and McKayla Maroney but also",
			"media":false,
			"media_link":"",
			"author":"Sample Author 2",
			"date_published":"22nd January, 2018"
		  },
		  {
			"headline":"Former U.S. gymnastics doctor gets up to 175 years in jail",
			"short_description":"Minutes ahead of the sentencing, Nassar apologized in court to his victims, who included Olympic gold-medal winning gymnasts Simone Biles, Aly Raisman, Gabby Douglas and McKayla Maroney but also",
			"media":true,
			"media_link":"",
			"author":"AFP",
			"date_published":"22nd January, 2018"
		  }
	  ],
	  "Politics":[
		  {
			"headline":"This is news 1 from Angular",
			"short_description":"Short description",
			"media":false,
			"media_link":"",
			"author":"Sample Author",
			"date_published":"15th January, 2018"
		  },
		  {
			"headline":"This is news 2 from Angular",
			"short_description":"Short description 2",
			"media":false,
			"media_link":"",
			"author":"Sample Author 2",
			"date_published":"22nd January, 2018"
		  }
	  ]
  };
}]);