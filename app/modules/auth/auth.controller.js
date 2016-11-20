(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('auth')
		.controller('AuthController', Auth);

	/* @ngInject */
	function Auth(feAuthenticationService, $state, $log) {
		/*jshint validthis: true */
		var vm = this;

		vm.user = {
			email: undefined,
			password: undefined,
			displayName: undefined
		};

		vm.remember = false;

		vm.signInWithFacebook = signInWithFacebook;
		vm.signInWithEmailAndPassword = signInWithEmailAndPassword;
		vm.signUpWithEmailAndPassword = signUpWithEmailAndPassword;

		function signInWithFacebook() {
			feAuthenticationService.signIn('facebook', true)
				.then(function(user) {
					$log.info('User Signed in through Facebook', user);
					$state.go('application.protected.shared');
				})
				.catch(function(e) {
					console.error(e);
				});
		}

		function signInWithEmailAndPassword() {
			feAuthenticationService.signIn('credentials', vm.remember, vm.user)
				.then(function(user) {
					$log.info('User Signed in through Credentials', user);
					$state.go('application.protected.shared');
				})
				.catch(function(e) {
					console.error(e);
				});
		}

		function signUpWithEmailAndPassword() {
			feAuthenticationService.signUp(vm.user)
				.then(function(user) {
					console.info('User Created', user);
				})
				.catch(function(e) {
					console.error(e);
				});
		}

		// TODO: Handle Signin/Out callbacks shared

	}

})();
