(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('fe.Authentication')
		.factory('feAuthenticationUser', User);

	/* @ngInject */
	function User(FE_AUTHENTICATION_ROLES, $exceptionHandler, feFirebaseAuthenticationService) {
		/*jshint validthis: true */

		var USER_INTERFACE = {
			uid: '',
			displayName: '',
			providerId: '',
			photoURL: '',
			email: ''
		};

		var CURRENT_ROLE = 'user';

		var User = function(data) {

			var d = data.hasOwnProperty('user') ? data.user : data;

			for(var key in d.providerData[0]) {
				if(d.providerData[0].hasOwnProperty(key) && USER_INTERFACE.hasOwnProperty(key)) {
					this[key] = d.providerData[0][key];
				}
			}

			this['role'] = CURRENT_ROLE = FE_AUTHENTICATION_ROLES[this.providerId];

		};

		User.prototype.updateProfile = function(profileData) {
			var firebaseUser = feFirebaseAuthenticationService.getAuthObject();

			for(var key in profileData) {
				if(profileData.hasOwnProperty(key) && this.hasOwnProperty(key)) {
					this[key] = profileData[key];
				}
			}

			return firebaseUser.updateProfile(profileData);
		};

		User.prototype.is = function(role) {
			return CURRENT_ROLE === role;
		};
		User.prototype.can = function(role) {
			return this['role'] === role;
		}

		User.prototype.setRole = function(role) {
			if(this['providerId'] !== 'facebook.com') {
				return;
			}
			CURRENT_ROLE = role;
		};

		User.prototype.getRole = function() {
			return CURRENT_ROLE;
		};

		return User;

	}

})();
