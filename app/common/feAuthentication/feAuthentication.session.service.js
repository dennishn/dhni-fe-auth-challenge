(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('fe.Authentication')
		.service('feAuthenticationSessionService', feAuthenticationSessionService);

	/* @ngInject */
	function feAuthenticationSessionService($exceptionHandler, $localStorage, FE_AUTHENTICATION_SETTINGS) {
		/*jshint validthis: true */

		return {
			setToken: setToken,
			getToken: getToken,
			clearToken: clearToken,
			isTokenExpired: isTokenExpired
		};

		function setToken(guid, expires) {
			if(!guid) {
				throw new $exceptionHandler(
					'Unhandled fe.Authentication [Error: Missing GUID]',
					'A GUID is required when storing an Auth Token'
				);
			}
			if(!expires) {
				throw new $exceptionHandler(
					'Unhandled fe.Authentication [Error: Missing Expires]',
					'An expiration time is required when storing an Auth Token'
				);
			}

			var now = new Date();
			now = new Date(now.getTime() + expires).getTime();

			$localStorage[FE_AUTHENTICATION_SETTINGS.storagePrefix] = {
				'guid': guid,
				'expires': now
			}
		}

		function getToken() {
			return $localStorage[FE_AUTHENTICATION_SETTINGS.storagePrefix] || undefined;
		}

		function clearToken() {
			delete $localStorage[FE_AUTHENTICATION_SETTINGS.storagePrefix];
		}

		function isTokenExpired() {

			if(!$localStorage[FE_AUTHENTICATION_SETTINGS.storagePrefix]) {
				return true;
			}

			var now = Date.now();
			var tokenExpires = $localStorage[FE_AUTHENTICATION_SETTINGS.storagePrefix].expires;

			return (now - tokenExpires) > 0;

		}

	}

})();
