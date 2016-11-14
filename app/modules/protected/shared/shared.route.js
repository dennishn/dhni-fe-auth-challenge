(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('shared')
		/* @ngInject */
		.config(function($stateProvider) {

			var Shared = {
				name: 'application.protected.shared',
				url: '/shared',
				views: {
					'page@application': {
						templateUrl: 'modules/protected/shared/shared.template.html',
						controller: 'SharedController',
						controllerAs: 'shared'
					}
				}
			};

			$stateProvider.state(Shared);
		});
})();
