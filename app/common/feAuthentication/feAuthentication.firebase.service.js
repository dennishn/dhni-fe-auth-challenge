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
		.service('feFirebaseAuthenticationService', feFirebaseAuthenticationService);

	/* @ngInject */
	function feFirebaseAuthenticationService($exceptionHandler, $q, $firebaseAuth) {
		/*jshint validthis: true */

		var firebaseAuthenticationProvider = $firebaseAuth();

		firebaseAuthenticationProvider.$onAuthStateChanged(_onAuthStateChanged);

		var firebaseAuthState;

		var service = {
			signIn: signIn,
			signOut: signOut,
			register: register,
			unregister: unregister,
			isAuthenticated: isAuthenticated,
			waitForAuthentication: waitForAuthentication,
			requireSignIn: requireSignIn,
			getAuthObject: getAuthObject
		};

		return service;

		function signIn(provider, userObj) {
			if(!provider) {
				throw new $exceptionHandler(
					'Unhandled fe.Authentication [Error: Missing Provider]',
					'A Firebase Authentication provider is required (facebook, or credentials)'
				);
			}

			if(provider === 'credentials' && !userObj) {
				throw new $exceptionHandler(
					'Unhandled fe.Authentication [Error: Missing userObj]',
					'A userObj is required when using the "credentials" provider'
				);
			}

			switch (provider) {
				case 'facebook':
					return firebaseAuthenticationProvider.$signInWithPopup('facebook');
					break;
				case 'credentials':
					return firebaseAuthenticationProvider.$signInWithEmailAndPassword(userObj.email, userObj.password);
					break;
			}
		}

		function signOut() {
			return firebaseAuthenticationProvider.$signOut();
		}

		function register(userObj) {
			if(!userObj) {
				throw new $exceptionHandler(
					'Unhandled fe.Authentication [Error: Missing userObj]',
					'A userObj is required when creating a user'
				);
			}
			
			return firebaseAuthenticationProvider.$createUserWithEmailAndPassword(userObj.email, userObj.password);
		}
		
		function unregister() {
			if(firebaseAuthState) {
				return firebaseAuthState.getToken(true)
					.then(function() {
						return firebaseAuthState.delete();
					});
			}
		}

		function isAuthenticated() {

		}

		function waitForAuthentication() {
			return firebaseAuthenticationProvider.$waitForSignIn();
		}

		function getAuthObject() {
			return firebaseAuthenticationProvider.$getAuth();
		}

		function requireSignIn() {
			return firebaseAuthenticationProvider.$requireSignIn();
		}

		function _onAuthStateChanged(authObj) {
			if(authObj) {
				firebaseAuthState = authObj;
			} else {
				firebaseAuthState = undefined;
			}
		}

	}

})();
