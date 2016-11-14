(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('topbar')
		.component('topbar', {
			bindings: {},
			templateUrl: 'common\topbar/topbar.template.html',
			controller: topbarController
		});

	/* @ngInject */
	function topbarController() {
		/*jshint validthis: true */
		var vm = this;
	};

})();
