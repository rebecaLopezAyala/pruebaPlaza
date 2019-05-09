import Cookies from 'universal-cookie';

const AUTHENTICATION_COOKIE = "dra3j";

const COOKIE_OPTIONS = {
	path: "/",
	secure: false,
	httpOnly: false
};

export default class CookiesConfiguration {

	static selectCookieOptions(name) {
		const options = { };
		Object.keys(COOKIE_OPTIONS).forEach(item => {
			options[item] = COOKIE_OPTIONS[item];
		});

		const now = new Date();
		switch (name) {
			case 'defConf':
				now.setMonth( ( now.getMonth() + 1 ) + 6 );
				options.expires = now;
			break;	
			case 'lstpge':
				now.setDate( now.getDate() + 3 );
				options.expires = now;
			break;
			case 'bonusInfo':
				now.setDate( now.getDate() + 1 );
				options.expires = now;
			break;
			case 'ghostCardNumber':
				now.setDate( now.getDate() + 3 );
				options.expires = now;
			break;
			case AUTHENTICATION_COOKIE:
				if (this.getCookie("sgn_kml") == true) {
					now.setDate( now.getDate() + 7 );
				} else {
					now.setMinutes( now.getMinutes() + 20 );
				}
				options.expires = now;
			break;
			case 'emailStData':
				now.setDate( now.getDate() + 1 );
				options.expires = now;
			break;
			case 'userInfo':
				now.setDate( now.getDate() + 7 );
				options.expires = now;
			break;
			case 'creditCardCountry':
				now.setDate( now.getDate() + 3 );
				options.expires = now;
			break;
			case 'statusInfo':
				now.setDate( now.getDate() + 7 );
				options.expires = now;
			break;
			case "cookiePolicyAccepted":
				now.setMonth( ( now.getMonth() + 1 ) + 8 );
				options.expires = now;
			break;			
		}
		return options;
	}

	static setConfigurationCookies(object) {
		const cookies = new Cookies();
		const options = this.selectCookieOptions('defConf');

		if (typeof(object) == "object") {
			cookies.set('defConf', object, options);
		}
	}

	static changeConfigurationCookies(object) {
		const cookies = new Cookies();
		const confCookies = cookies.get("defConf");

		if (typeof(object) == "object") {
			for (let key of Object.keys(object)) {
				if (confCookies[key] !== undefined) {
					confCookies[key] = object[key];
				}
			}
		}
		cookies.set('defConf', confCookies);
	}

	static getConfigurationCookies() {
		const cookies = new Cookies();
		const defConf = cookies.get('defConf');

		if (defConf) {
			const successType = typeof defConf.language == 'string' && typeof defConf.currency == 'string';
			return (successType && defConf.language && defConf.currency) ? defConf : false;
		}
		return false;
	}

	static getCookiePolicyAccepted() {
		const cookies = new Cookies();
		return cookies.get('cookiePolicyAccepted') ? false : true;
	}

	static setCookiePolicyAccepted() {
		const cookies = new Cookies();
		cookies.set('cookiePolicyAccepted', true, this.selectCookieOptions("cookiePolicyAccepted"));
	}	

	static getCookie(name) {
		const cookies = new Cookies();
		return (cookies.get(name) !== undefined) ? cookies.get(name) : false;
	}

	static setCookie(name, value) {
		const cookies = new Cookies();
		cookies.set(name, value, this.selectCookieOptions(name));
	}	

	static removeCookie(name) {
		const cookies = new Cookies();

		if (cookies.get(name) != undefined) {
			cookies.remove(name, { path: "/" });
			return true;
		} else{
			return false;
		}
	}

	// Authentication cookie
	static setAuthenticationCookie(value) {
		const cookies = new Cookies();
		const options = this.selectCookieOptions(AUTHENTICATION_COOKIE);
		cookies.set(AUTHENTICATION_COOKIE, value, options);
	}

	static setAuthenticationCookieForHardLogin(value) {
		const cookies = new Cookies();
		const options = { };
		Object.keys(COOKIE_OPTIONS).forEach(item => {
			options[item] = COOKIE_OPTIONS[item];
		});
		const now = new Date();
		options.expires = now.setMinutes( now.getMinutes() + 20 );
		cookies.set(AUTHENTICATION_COOKIE, value, COOKIE_OPTIONS);
	}

	static updateAuthenticationCookie() {
		const jwt = this.getCookie(AUTHENTICATION_COOKIE);
		if (jwt) {
			this.setCookie(AUTHENTICATION_COOKIE, jwt, this.selectCookieOptions(AUTHENTICATION_COOKIE));
		}
	}
}
