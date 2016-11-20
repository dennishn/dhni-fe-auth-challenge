(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('avatar')
		.component('avatar', {
			bindings: {
				user: '<',
				onLogout: '&'
			},
			templateUrl: 'common/avatar/avatar.template.html',
			controller: avatarController
		});

	/* @ngInject */
	function avatarController() {
		/*jshint validthis: true */
		var vm = this;

		vm.toggleRole = toggleRole;

		function toggleRole() {
			vm.user.setRole(
				vm.user.getRole() === 'admin' ? 'user' : 'admin'
			);
		}

	};

})();
