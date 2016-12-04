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
	function Auth(ApplicationStateService, $scope, feAuthenticationService, $state, $log) {
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

		$scope.$watch(function formPendingSubscriber() {
			return ApplicationStateService.get('IS_SUBMITTING');
		}, function formPendingSubscription(isSubmitting) {
			vm.isSubmitting = isSubmitting;
		});

		function signInWithFacebook() {
			ApplicationStateService.set('IS_SUBMITTING', true);

			feAuthenticationService.signIn('facebook', true)
				.then(_signInSucces)
				.catch(_signInError)
				.finally(_signInFinally);
		}

		function signInWithEmailAndPassword(user) {
			ApplicationStateService.set('IS_SUBMITTING', true);

			feAuthenticationService.signIn('credentials', vm.remember, user)
				.then(_signInSucces)
				.catch(_signInError)
				.finally(_signInFinally);
		}

		function signUpWithEmailAndPassword(user) {
			ApplicationStateService.set('IS_SUBMITTING', true);

			feAuthenticationService.signUp(user)
				.then(_signInSucces)
				.catch(_signInError)
				.finally(_signInFinally);
		}

		function _signInSucces(user) {
			$state.go('application.protected.shared');
		}

		function _signInError(error) {
			vm.error = error;
			vm.user = {};
			vm.credentialsForm.$setUntouched();
			vm.credentialsForm.$setPristine();
		}

		function _signInFinally() {
			ApplicationStateService.set('IS_SUBMITTING', false);
		}

	}

})();
