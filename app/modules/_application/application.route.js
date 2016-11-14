(function() {
	'use strict';

	/**
	 * @name application
	 * @description
	 *
	 * Root Application state configuration
	 */
	angular.module('application')
		/* @ngInject */
		.config(function($stateProvider) {

			var Application = {
				name: 'application',
				abstract: true,
				views: {
					'root@': {
						templateUrl: 'modules/_application/application.template.html',
						controller: 'Application',
						controllerAs: 'application'
					},
					'topbar@application': {
						templateUrl: 'modules/_application/topbar/topbar.template.html',
						controller: 'TopbarController',
						controllerAs: 'topbar'
					}
				}
			};

			$stateProvider.state(Application);
		});
})();
