(function() {
	'use strict';

	/**
	 * @name APPLICATION_SETTINGS
	 * @description
	 *
	 * Common Application wide configuration settings ie. api keys or disabled features.
	 */
	angular
			.module('APPLICATION_SETTINGS', [])
			.constant('APPLICATION_SETTINGS', {
				nStack: {
					appId: 'jFq6JTmL2HykVEjxx4VHskcKrBGbULsmQf4H',
					apiKey: 'XMDpfPtBceuLU8RKamtbJuTqooPHJujRaDBt'
				},
				firebase: {
					apiKey: 'AIzaSyBV3CqdwudjH2xSfTI6Qr3WVbo4pWeoPsw',
					authDomain: 'fe-auth-challenge.firebaseapp.com'
				},
				authentication: {
					provider_roles: {
						'facebook': 1,
						'credentials': 0
					}
				}
			});

})();