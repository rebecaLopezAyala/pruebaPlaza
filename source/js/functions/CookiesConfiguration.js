import Cookies from 'universal-cookie';


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
			case 'clientInfo':
				now.setMinutes( now.getMinutes() + 30 );
				options.expires = now;
			break;		
		}
		return options;
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
}
