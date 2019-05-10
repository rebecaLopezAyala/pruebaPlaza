

class FormValidator {
	constructor() {
		this.validatorMap = {
			username: this.validateUsername,

			email: this.validateEmail,
			ghostCard:this.validateGhostCard,
			address: this.validateAdress,
			phone: this.validatePhone,
			redemptionPhone: this.validateRedemptionPhone,
			paymentPhone: this.validatePaymentPhone,
			name: this.validateName,
			preferredName: this.validatePreferredName,
			company: this.validateCompany,
			documentNumber: this.validateDocumentNumber,
			number: this.validateNumber,
			pin: this.validatePin,
			ticketNumber: this.validateTicketNumber,
			reservationCode: this.validateReservationCode,
			softPassword: this.validateSoftPassword,
			visibleSoftPassword: this.validateSoftPassword,
			password: this.validatePassword,
			visiblePassword: this.validatePassword,
			cvv: this.validateCVV,
			lifeMilesNumber: this.validateLifeMilesNumber,
			signInInput: this.validateSignInInput,
			managePin: this.validatePin,
			redressNumber: this.validateRedressNumber,
			zipCode: this.validateZipCode
		};
	}

	validate(type, value, regex) {		
		if(regex){
			return this.validatorMap[type](value, regex)
		}else
			return this.validatorMap[type] ? this.validatorMap[type](value) : true;
	}

	

	validateUsername(value) {
		const re = /^[a-zA-Z0-9]+$/;
		return re.test(value);
	}

	//Password value == [a-z,A-Z,0-9,*,@,_ , -, . , # ].
	validatePassword(value) {
		const re = /^[a-zA-Z0-9*_.#@\-]+$/;
		return re.test(value);
	}

	// added custom validation for sign-in lifemiles number or email field
	validateSignInInput(value) {
		if (this.username(value) === false) {
			return this.lifeMilesNumber(value);
		}
		return this.username(value);
	}

	validateRedressNumber(value) {
		const re = /^\d{1,7}$/;
		return re.test(value);
	}

	validateZipCode(value, regex) {
		const re = regex !== "" ? new RegExp(regex) : /^\d{5}(?:[-\s]\d{4})?$/;
		return re.test(value);
	}

	validateEmail(value) {
		const re = /^([a-zA-Z0-9])([a-zA-Z0-9-_\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(value);
	}

	validatePhone(value) {
		const re = /^[0-9]{8,15}$/;
		return re.test(value);
	}

	validateRedemptionPhone(value) {
		const re = /^[0-9]{4,10}$/;
		return re.test(value);
	}

	validatePaymentPhone(value) {
		const re = /^[0-9]{8,15}$/;
		return re.test(value);
	}

	validateName(value) {
		const re = /^([-' a-zA-ZÀ-ÖØ-öø-ſ]+\s)*[-' a-zA-ZÀ-ÖØ-öø-ſ]+$/;
		return re.test(value);
	}

	validatePreferredName(value) {
		const re = /^([-'a-zA-ZÀ-ÖØ-öø-ſ]{1,12})$/;
		return re.test(value);
	}

	validateDocumentNumber(value)  {
		const re = /^([0-9|a-z|ñ|Ñ|A-Z]{2,})$/;
		return re.test(value);
	}

	validateCompany(value) {
		const re = /^([-'a-zA-ZÀ-ÖØ-öø-ſ.&]+\s)*[-'a-zA-ZÀ-ÖØ-öø-ſ.&]+$/;
		return re.test(value);
	}

	validateAdress(value, regex = '') {
		const re = regex ? regex : /^([-'a-zA-Z'-;#]+\s)*[-'a-zA-Z'-;#]+$/;
		return re.test(value);
	}

	validateNumber(value) {
		const re = /^\d+$/;
		return re.test(value);
	}

	validatePin(value) {
		const re = /^[0-9]{4}$/;
		return re.test(value);
	}

	validateTicketNumber(value) {
		const re = /^[0-9]{13}$/;
		return re.test(value);
	}

	validateReservationCode(value) {
		const re = /^([0-9|a-z|A-Z]{6})$/;
		return re.test(value);
	}

	validateCVV(value) {
		const re = /^[0-9]{3,4}$/;
		return re.test(value);
	}



	validateSoftPassword(value) {
		const re = /^.{1,}$/;
		return re.test(value);
	}

	validateLifeMilesNumber(value) {
		const re = /^[0-9]{1,11}$/;
		return re.test(value);
	}
	validateGhostCard(value){
		const re = /^239[0-9]{8}$/ ;
		return re.test(value);
	}
}

export default FormValidator;
