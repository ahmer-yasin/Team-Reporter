/**
 * Created by AHMER on 11/21/2014.
 */
panaReporter.controller('dashboardCtrl',function($scope,$location,userFactory){
    $scope.title = "dashboard";
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };
    $scope.user =userFactory.getUser();


})