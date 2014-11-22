/**
 * Created by AHMER on 11/22/2014.
 */
panaReporter.controller('profileCtrl',function($scope,userFactory){
    $scope.title = "Profile";
    $scope.user = userFactory.getUser();
})