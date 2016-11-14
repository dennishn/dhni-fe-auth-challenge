(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('admins')
		/* @ngInject */
		.config(function($stateProvider) {

			var Admins = {
				name: 'application.protected.admins',
				url: '/admins',
				views: {
					'page@application': {
						templateUrl: 'modules/protected/admins/admins.template.html',
						controller: 'AdminsController',
						controllerAs: 'admins'
					}
				}
			};

			$stateProvider.state(Admins);
		});
})();
