(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('login')
		/* @ngInject */
		.config(function($stateProvider) {

			var Login = {
				name: 'application.auth.login',
				url: '/login',
				views: {
					'tab': {
						templateUrl: 'modules/auth/login/login.template.html',
						controller: 'LoginController',
						controllerAs: 'login'
					}
				}
			};

			$stateProvider.state(Login);
		});
})();
