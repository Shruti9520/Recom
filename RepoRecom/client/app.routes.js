var app= angular.module('app', ['satellizer','ngToast','ngNotify','ngSanitize','ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/login", {
        templateUrl : "login.htm"
    })
    
});
