
import moment from 'moment';

export default class WebStorage {
	/**
	 *  Methods to handle the last searched places by the client
	 */

	static saveItem(name, value) {
		let savedStatus = false;

		if (typeof(Storage) !== 'undefined') {
			try {
				localStorage.setItem(name, value);
				savedStatus = true;
			} catch(error) {
				savedStatus = false;
			}
		}
		return savedStatus;
	}

	static getItem(name) {
		if (typeof(Storage) !== 'undefined') {
			return localStorage.getItem(name);
		}
		return undefined;
	}

	static removeItem(name) {
		localStorage.removeItem(name);
	}
}
