angular.module('SportsApp', [
	/*'SportsApp.services',*/
   'SportsApp.controllers',
  'ngRoute'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when('/player', {templateUrl: 'partials/player.html', controller:'playersController'}).
	when('/odiTeam',{templateUrl: 'partials/odiTeam.html', controller: 'odiTeamController'}).
	when('/football',{templateUrl:'partials/football.html', controller: 'footballController'}).
	when('/liveScore',{templateUrl:'partials/liveScore.html', controller: 'liveScoreController'}).
	when('/dropdown',{templateUrl:'partials/dropdown.html'}).
	otherwise({redirectTo: '#'});
}]);
