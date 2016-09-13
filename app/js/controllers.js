angular.module('SportsApp.controllers',[]).
controller('playersController',function($scope){
  console.log("chindhi");
  $scope.playersList = [
  
            {
                Player : {

                    givenName: 'Virat',
                    familyName: 'Kohli'
                },
                post: "Batsmen(C)",
                SR: "SR:52"
            }, 

            {
                Player : {

                    givenName: 'Ashwin',
                    familyName: 'lambu'
                },
                post: "Allrounder",
                SR: "SR:40"
            },
            {
                Player : {

                    givenName: 'Anoop',
                    familyName: 'Gelchuda'
                },
                post: "Bowler/fadua batsmen",
                SR: "ECO:5.4"
            },
            {
                Player : {

                    givenName: 'Amti',
                    familyName: 'Kalu'
                },
                post: "Batsmen",
                SR: "SR:30"
            }   
  ];
}).

/*ODI TEAM Cotroller */

controller('odiTeamController',function($scope){
  console.log("chindhi1");
  $scope.playersList = [
  
            {
                Player : {

                    givenName: 'Anshul',
                    familyName: 'Anand'
                },
                post: "Batsmen(C)",
                SR: "SR:30"
            }, 

            {
                Player : {

                    givenName: 'Ashwin',
                    familyName: 'lambu'
                },
                post: "Allrounder",
                SR: "SR:40"
            },
            {
                Player : {

                    givenName: 'Anoop',
                    familyName: 'Gelchuda'
                },
                post: "Bowler/fadua batsmen",
                SR: "ECO:40"
            },
            {
                Player : {

                    givenName: 'Amti',
                    familyName: 'Kalu'
                },
                post: "Batsmen",
                SR: "SR:40"
            }   
  ];
}).

controller('footballController',function($scope){
  
  $scope.playersList = [
  
            {
                Player : {

                    givenName: 'Anshul',
                    familyName: 'Anand'
                },
                role: "Forward",
                Goals: 25
            }, 

            {
                Player : {

                    givenName: 'Robin',
                    familyName: 'Singh'
                },
                role: "Midfielder",
                Goals: 20
            },
            {
                Player : {

                    givenName: 'Sunil',
                    familyName: 'Chetri'
                },
                role: "Forward",
                Goals: 9
            },
            {
                Player : {

                    givenName: 'Subrata',
                    familyName: 'Pal'
                },
                role: "Goal Kepper",
                Goals: 0
            }   
  ];
}).


/*Live Scores....................................................... */

   controller('liveScoreController',function($scope,$log,$http){
  
  console.log("liveScore");
  $scope.liveScore = [];
  
                               
             $http.get('http://cricapi.com/api/cricket/').success(function(response){
              $log.info(response);
              $scope.liveScore = response.data; 

             });
   /*controller('liveScoreController',function($scope,$cricketAPIservice,$log){
  
  console.log("liveScore");
  $scope.liveScore = [];
  
                               
             $cricketAPIservice.getMatchlist().success(function(response){
              $log.info(response);
              $scope.liveScore = response.data; 

             });*/


            /*{
                MatchInfo : {

                    Teams: 'Ind Vs Aus',
                    MatchNo: '1st ODI',
                    Place:'Wankheda Stadium, Mumbai'
                },
                ScoreStatus:{
                    Score:'Ind 156/4 (27 Ovs)',
                    Status:'Ind opt to bat.'
                }
            }, 

            {
                MatchInfo : {

                    Teams: 'Ind Vs Aus',
                    MatchNo: '2nd ODI',
                    Place:'Wankheda Stadium, Mumbai'
                },
                ScoreStatus:{
                    Score:'Ind 170/4 (27 Ovs)',
                    Status:'Ind opt to bat.'
                }
            }*/

});






