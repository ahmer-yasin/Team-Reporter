/**
 * Created by AHMER on 11/21/2014.
 */
var panaReporter = angular.module('panaReporter',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/login',{
                templateUrl:'../views/login.html',
                controller:'loginCtrl'
            })
            .when('/signUp',{
                templateUrl:'../views/signUp.html',
                controller:'signUpCtrl'
            })
            .when('/dashboard',{
                templateUrl:'../views/dashboard.html',
                controller:'dashboardCtrl'
            })
            .when('/createTeam',{
                templateUrl:'../views/createTeam.html',
                controller:'teamCreateCtrl'
            })
            .when('/profile',{
                templateUrl:'../views/profile.html',
                controller:'profileCtrl'
            }) .when('/myTeam',{
                templateUrl:'../views/MyTeam.html',
                controller:'dashboardCtrl'
            })
            .otherwise({redirectTo:'/login'});
    });