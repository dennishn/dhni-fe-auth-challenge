(function() {
	'use strict';

	angular.module('fe.Authentication')
		.config(configure);

	/* @ngInject */
	function configure(APPLICATION_SETTINGS) {
		firebase.initializeApp(APPLICATION_SETTINGS.firebase);
	}

})();
