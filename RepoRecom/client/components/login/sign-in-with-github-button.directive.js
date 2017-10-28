var app= angular.module('app', ['satellizer','ngToast','ngNotify','ngSanitize','ngRoute']);

app.directive('signInWithGithubButton', function() {
  return {
    restrict: "E",
    controller: function($scope, $auth, $location, ngNotify){

      $scope.authenticate = function() {
      	
      		$auth.authenticate('github')
		    	.then(function(response) {
		    		$location.path('/'); 
		  		})
		  		.catch(function(response) {
		    	
		    	 ngNotify.set('Authentication failed.', {
              type: 'error',
              sticky: true,
              button: true,
            });
		  		});

		  };
    },
    template: '<button class="btn btn-block btn-login-github waves-effect waves-light" alt="sign in" ng-click="authenticate()" >Sign in with github</button>'

  };
});