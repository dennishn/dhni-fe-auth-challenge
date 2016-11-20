(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('application')
		.controller('TopbarController', Topbar);

	/* @ngInject */
	function Topbar() {
		/*jshint validthis: true */
		var vm = this;

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
