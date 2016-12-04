(function() {
	'use strict';

	angular.module('fe.Authentication')
		.run(run);

	/* @ngInject */
	function run(
		$log,
		$rootScope,
		$state,
		$location,
		$window,
		feAuthenticationService,
		feAuthenticationSessionService,
		FE_AUTHENTICATION_SETTINGS
	) {

		var didRunAuthenticationCheck = false;

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

			if(feAuthenticationSessionService.isTokenExpired() && feAuthenticationService.getUser()) {
				event.preventDefault();
				feAuthenticationService.signOut().then(function() {
					if(_isProtectedState(toState.name)) {
						$state.go(_determinePublicState(toState.name), toParams || {});
					}
				});
			}

			if(didRunAuthenticationCheck) {
				return;
			}

			event.preventDefault();

			feAuthenticationService.waitForAuthentication()
				.then(function(user) {
					didRunAuthenticationCheck = true;

					if(user) {
						$state.go(_determineProtectedState(toState.name), toParams || {});
					} else {
						$state.go(_determinePublicState(toState.name), toParams || {});
					}
				})
				.catch(function() {
					$state.go(FE_AUTHENTICATION_SETTINGS.redirectStates.default);
				});

		});

		$rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
			switch (error) {
				case 'AUTH_REQUIRED':
					$log.warn('Route Change aborted: AUTH_REQUIRED');
					break;
				case 'NOT_ALLOWED':
					$log.warn('Route Change aborted: NOT_ALLOWED');
					break;
				default:
					break;
			}
		});

		function _isProtectedState(toStateName) {
			return toStateName.indexOf(FE_AUTHENTICATION_SETTINGS.stateIdentifiers.protected) > -1;
		}
		function _determineProtectedState(toStateName) {
			return toStateName.indexOf(FE_AUTHENTICATION_SETTINGS.stateIdentifiers.protected) > -1
				? toStateName
				: FE_AUTHENTICATION_SETTINGS.redirectStates.protected;
		}
		function _determinePublicState(toStateName) {
			return toStateName.indexOf(FE_AUTHENTICATION_SETTINGS.stateIdentifiers.public) >  -1
				? toStateName
				: FE_AUTHENTICATION_SETTINGS.redirectStates.public;
		}
	}

})();
