(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('signup')
		/* @ngInject */
		.config(function($stateProvider) {

			var Signup = {
				name: 'application.auth.signup',
				url: '/signup',
				views: {
					'tab': {
						templateUrl: 'modules/auth/signup/signup.template.html',
						controller: 'SignupController',
						controllerAs: 'signup'
					}
				}
			};

			$stateProvider.state(Signup);
		});
})();
