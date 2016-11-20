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
		.service('ApplicationStateService', ApplicationState);

	/* @ngInject */
	function ApplicationState($firebaseAuth, $exceptionHandler) {
		/*jshint validthis: true */

		var STATE = {
			IS_LOADING: false
		};

		var service = {
			get: get,
			set: set
		};

		return service;

		function get(state) {
			if(state && STATE.hasOwnProperty(state)) {
				return STATE[state];
			} else {
				return STATE;
			}
		}

		function set(key, value) {
			if(!key || !value) {
				throw new $exceptionHandler('[ApplicationState] key and value is required');
			}
			if(!STATE.hasOwnProperty(key)) {
				throw new $exceptionHandler('[ApplicationState] property ' + key + ' does not exist in the state');
			}

			STATE[key] = value;
			return STATE[key];
		}

	}

})();
