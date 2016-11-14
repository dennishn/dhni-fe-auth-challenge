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
	function Application() {
		/*jshint validthis: true */
		var vm = this;

		activate();

		function activate() {

		}

		vm.routeDiscovery = [
			'application.index',
			'application.auth.login',
			'application.auth.signup',
			'application.protected.shared',
			'application.protected.users',
			'application.protected.admins'
		]

	}

})();
