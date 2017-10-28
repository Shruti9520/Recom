(function(angular) {
  'use strict';
angular.module('docsSimpleDirective', ['satellizer','ngToast','ngNotify','ngSanitize','ngRoute'])
  .controller('Controller', ['$scope', '$auth', '$location', 'ngNotify', function($scope, $auth, $location, ngNotify) {
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
  }])
  .directive('signInWithGithubButton', function() {
    return {
      template: '<button class="btn btn-block btn-login-github waves-effect waves-light" alt="sign in" ng-click="authenticate()">Sign in with github</button>'
    };
  });
})(window.angular);


