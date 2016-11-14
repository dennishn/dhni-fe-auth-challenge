(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('users')
		/* @ngInject */
		.config(function($stateProvider) {

			var Users = {
				name: 'application.protected.users',
				url: '/users',
				views: {
					'page@application': {
						templateUrl: 'modules/protected/users/users.template.html',
						controller: 'UsersController',
						controllerAs: 'users'
					}
				}
			};

			$stateProvider.state(Users);
		});
})();