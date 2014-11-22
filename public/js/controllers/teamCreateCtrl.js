/**
 * Created by AHMER on 11/22/2014.
 */
panaReporter.controller('teamCreateCtrl',function($scope,$http,userFactory){
    $scope.title = "Team Creater";
    $scope.user = userFactory.getUser();
    $scope.create = function(team){

        $http.post('/createTeam',{team:team,admin:$scope.user._id})
            .success(function(data){
                console.log(data);
                userFactory.setUser(data);
                alert('team Created')
            })
            .error(function(err){
                console.log(err);
                alert(err);
            })

    }
})