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
			.constant('FE_AUTHENTICATION_SETTINGS', {
				storagePrefix: 'DHNI_FE_AUTH',
				redirectStates: {
					'protected': 'application.protected.shared',
					'public': 'application.index',
					'default': 'application.index'
				},
				stateIdentifiers: {
					'protected': 'protected',
					'public': 'auth'
				},
				session: {
					expires: 3600000
				}
			});

})();