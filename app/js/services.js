angular.module('SportsApp.services', [])
  .factory('cricketAPIservice', function($http,$log) {
    console.log("liveScore1");
    var cricketAPI = {};

    /* cricketAPI.getMatchlist = function() {
      return $http({
        method: 'GET', $http.get('http://cricapi.com/api/cricket/')
        url: 'http://cricapi.com/api/cricket/'
      });*/

    cricketAPI.getMatchlist = function() {
      return $http({
        method: 'GET', 
        url: 'http://cricapi.com/api/cricket/'
      }).then(function(response){
       $log.info(response);
      },
      function(reason){
        $scope.error = reason.data;
      
      });
    }

    

    return cricketAPI;
  });