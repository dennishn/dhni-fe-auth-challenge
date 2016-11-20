(function () {
	'use strict';

	/**
	 * @name application
	 * @description
	 *
	 * Root Application Controller
	 */
	angular
		.module('application')
		.controller('Application', Application);

	/* @ngInject */
	function Application($scope, $state, feAuthenticationService) {
		/*jshint validthis: true */
		var vm = this;

		vm.logout = logout;

		$scope.$watch(function () {
			return feAuthenticationService.getUser();
		}, function (user) {
			vm.user = user;
		});

		function logout() {
			feAuthenticationService.signOut()
				.then(function() {
					console.info('User Signed out');
					vm.authObj = null;
					$state.go('application.index');
				})
				.catch(function(e) {
					console.error(e);
				});
		}

	}

})();
