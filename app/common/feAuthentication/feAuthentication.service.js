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
		.service('feAuthenticationService', feAuthenticationService);

	/* @ngInject */
	function feAuthenticationService(
		FE_AUTHENTICATION_SETTINGS,
		$q,
		$log,
		$exceptionHandler,
		feFirebaseAuthenticationService,
		feAuthenticationSessionService,
		feAuthenticationUser
	) {
		/*jshint validthis: true */

		var USER;

		return {
			signIn: signIn,
			signOut: signOut,
			signUp: signUp,
			waitForAuthentication: waitForAuthentication,
			requireSignIn: requireSignIn,
			requireRole: requireRole,
			getUser: getUser
		};

		function signIn(provider, remember, userObj) {
			
			var deferred = $q.defer();
			
			feFirebaseAuthenticationService.signIn(provider, userObj)
				.then(function(result) {
					USER = new feAuthenticationUser(result);

					if(remember) {
						feAuthenticationSessionService.setToken(USER.uid, FE_AUTHENTICATION_SETTINGS.session.expires);
					} else {
						feAuthenticationSessionService.clearToken();
					}

					deferred.resolve(USER);
				})
				.catch(function(error) {
					$log.error(error);
					deferred.reject(error);
				});
			
			return deferred.promise;
			
		}
		
		function signOut() {

			var deferred = $q.defer();

			feFirebaseAuthenticationService.signOut()
				.then(function() {
					USER = undefined;
					feAuthenticationSessionService.clearToken();
					deferred.resolve(undefined);
				});

			return deferred.promise;

		}
		
		function signUp(userObj) {
			if(!userObj) {
				throw new $exceptionHandler(
					'Unhandled fe.Authentication [Error: Missing userObj]',
					'A userObj is required when creating a user'
				);
			}

			var deferred = $q.defer();

			feFirebaseAuthenticationService.register(userObj)
				.then(function(result) {
					USER = new feAuthenticationUser(result);

					return USER.updateProfile({
						displayName: userObj.displayName
					});
				})
				.then(function() {
					deferred.resolve(USER);
				})
				.catch(function(error) {
					$log.error(error);
					deferred.reject(error);
				});

			return deferred.promise;

		}

		function waitForAuthentication() {

			var deferred = $q.defer();

			feFirebaseAuthenticationService.waitForAuthentication()
				.then(function(result) {
					if(result) {
						USER = new feAuthenticationUser(result);
					} else {
						USER = undefined;
					}
					deferred.resolve(USER);
				})
				.catch(function(error) {
					$log.error(error);
					deferred.reject(error);
				});

			return deferred.promise;

		}

		function requireSignIn() {
			return feFirebaseAuthenticationService.requireSignIn();
		}

		function requireRole(role) {

			var deferred = $q.defer();

			feFirebaseAuthenticationService.requireSignIn()
				.then(function(result) {

					if(!USER) {
						USER = new feAuthenticationUser(result);
					}

					if(!USER.is(role)) {
						deferred.reject('NOT_ALLOWED');
					} else {
						deferred.resolve(true);
					}
				})
				.catch(function(error) {
					$log.error(error);
					deferred.reject(error);
				});

			return deferred.promise;

		}

		function getUser() {
			return USER || undefined;
		}

	}

})();
