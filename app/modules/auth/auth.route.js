(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('auth')
		/* @ngInject */
		.config(function($stateProvider) {

			var Auth = {
				name: 'application.auth',
				url: '/a',
				abstract: true,
				views: {
					'page@application': {
						templateUrl: 'modules/auth/auth.template.html',
						controller: 'AuthController',
						controllerAs: 'auth'
					}
				}
			};

			$stateProvider.state(Auth);
		});
})();
