(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('protected')
		/* @ngInject */
		.config(function($stateProvider) {

			var Protected = {
				name: 'application.protected',
				url: '/app',
				abstract: true,
				views: {
					'application@application': {
						templateUrl: 'modules/protected/protected.template.html',
						controller: 'ProtectedController',
						controllerAs: 'protected'
					}
				},
				resolve: {
					canActivate: function(feAuthenticationService) {
						return feAuthenticationService.requireSignIn();
					}
				}
			};

			$stateProvider.state(Protected);
		});
})();
