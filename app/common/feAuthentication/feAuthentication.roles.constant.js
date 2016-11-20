(function() {
	'use strict';

	/**
	 * @name APPLICATION_SETTINGS
	 * @description
	 *
	 * Common Application wide configuration settings ie. api keys or disabled features.
	 */
	angular
			.module('fe.Authentication')
			.constant('FE_AUTHENTICATION_ROLES', {
				'password': 'user',
				'facebook.com': 'admin'
			});

})();