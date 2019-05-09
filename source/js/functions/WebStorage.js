
import moment from 'moment';

export default class WebStorage {
	/**
	 *  Methods to handle the last searched places by the client
	 */
	static getLastSearchedPlaces(pageCalled) {
		let recentlySearched = [];
		
		if (typeof(Storage) !== "undefined") {
			recentlySearched = localStorage.getItem(pageCalled);

			if (recentlySearched) {
				try {
					const today = moment();
					
					recentlySearched = JSON.parse(recentlySearched);
					// Validación: las fechas no pueden ser anteriores a la fecha actual
					if(pageCalled == "recentlyFlySearched") {						
						recentlySearched = recentlySearched.filter(item => {
							const selectedDates = item.selectedDates;
							const isInvalid = selectedDates && selectedDates.some(item => {
								const itemDate = moment(item);
								if (!itemDate.isValid()) {
									return true;
								}
								return itemDate.isBefore(today);
							});

							return !isInvalid;
						});
					}
				} catch(error) {
					recentlySearched = [];
				}
			} else {
				recentlySearched = [];
			}
		}
		return recentlySearched;
	}

	static saveLastSearchedPlace(recentlySearched, pageCalled) {
			let savedStatus = false;

			if (typeof(Storage) !== 'undefined') {
					try {
							localStorage.setItem(pageCalled, JSON.stringify(recentlySearched));
							savedStatus = true;
					} catch(error) {}
			}

			return savedStatus;
	}

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
