(function() {
	'use strict';

	/**
	 * @name dhni-fe-auth-challenge
	 * @description
	 *
	 * Root Application Module
	 */
	angular
		.module('dhni-fe-auth-challenge', [
			'DEBUG_ENV',
			'API_ENDPOINTS',
			'APPLICATION_SETTINGS',
			'ui.router',
			'ngStorage',
			'config',
			'application',
			'index',
			/* ---> Do not delete this comment (ngImports) <--- */
	]);
})();
