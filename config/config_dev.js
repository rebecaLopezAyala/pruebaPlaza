const endpoints = {
  'loginLocation':'https://dev.lifemiles.net/lifemiles/geolocalization-ip',
  'gmapGeolocation':'https://maps.googleapis.com/maps/api/geocode/json?',
  'geolocation': 'https://https-api.apigurus.com/iplocation/v1.8/locateip',
  'getCurrencies': 'https://dev.lifemiles.net/lifemiles/get-currencies',
  'currencySymbol': 'https://dev.lifemiles.net/lifemiles/currency-symbol',
  'homepage': 'https://dev.lifemiles.net/lifemiles/home',
  'partnersSearch': 'https://dev.lifemiles.net/lifemiles/partners-search',
  'userLoginHttps': 'https://dev.lifemiles.net/lifemiles/account-user-login',
  'menuCountries': 'https://dev.lifemiles.net/lifemiles/general-countries-direct-communication',
  'extraUserInfo': 'https://dev.lifemiles.net/lifemiles/air-redemption-discount-voucher/',
  
  'renderLogin':'https://dev.lifemiles.net/lifemiles/lifemiles-account-sign-in',
  
  'oauth2Authorization': 'https://dev.lifemiles.net/integrator/v1/authentication/oauth/authorize',
  'oauth2Token': 'https://dev.lifemiles.net/integrator/v1/authentication/oauth/token',
  'oauth2Login': 'https://dev.lifemiles.net/integrator/v1/authentication/login',
  'autoLogin': 'https://dev.lifemiles.net/lifemiles/auto-login',
  'logout': 'https://dev.lifemiles.net/lifemiles/logout',
  'getCountries': 'https://dev.lifemiles.net/lifemiles/get-countries',
  'getStates': 'https://dev.lifemiles.net/lifemiles/get-states',
  'getCities': 'https://dev.lifemiles.net/lifemiles/get-cities',
  'getDeliveryStates': 'https://dev.lifemiles.net/lifemiles/get-delivery-states',
  'getDeliveryCities': 'https://dev.lifemiles.net/lifemiles/get-delivery-cities',
  'getGender': 'https://dev.lifemiles.net/lifemiles/get-gender', 
  'getPhoneNumber':'https://dev.lifemiles.net/lifemiles/get-phone-number',
  'getDocType': 'https://dev.lifemiles.net/lifemiles/get-document-type',
  'getTravelersInfo': 'https://dev.lifemiles.net/lifemiles/account-retrieve-member-info/',
  'getPreAffiliateInfo':'https://dev.lifemiles.net/lifemiles/account-retrieve-member-info-cipher',
  'retailIdCreate': 'https://dev.lifemiles.net/lifemiles/retail-id-create',
  'retailIdUpdate': 'https://dev.lifemiles.net/lifemiles/retail-id-update',
  'retailIdOption': 'https://dev.lifemiles.net/lifemiles/retail-id-options',
  'retailIdDocumentId': 'https://dev.lifemiles.net/lifemiles/retail-id-search-by-document',
  'retailIdLmNumber': 'https://dev.lifemiles.net/lifemiles/retail-id-search-by-lifemiles-number',   
  
  'aboutYou': 'https://dev.lifemiles.net/lifemiles/about',
  
  'renderContact': 'https://dev.lifemiles.net/lifemiles/contact',
  'contactRequest': 'https://dev.lifemiles.net/lifemiles/contact-email',
  
  'renderBecomePartner': 'https://dev.lifemiles.net/lifemiles/become-a-partner',
  'becomePartnerRequest': 'https://dev.lifemiles.net/lifemiles/become-a-partner-email',
  
  'drive': 'https://dev.lifemiles.net/lifemiles/drive',
  
  'eat': 'https://dev.lifemiles.net/lifemiles/eat',
  
  'emailSt': 'https://dev.lifemiles.net/lifemiles/single-transaction-decrypt-mail',
  
  'privacyPolice': 'https://dev.lifemiles.net/lifemiles/privacy-policy',
  
  'termsConditions': 'https://dev.lifemiles.net/lifemiles/terms-and-conditions',
  
  'helpCenter': 'https://dev.lifemiles.net/lifemiles/help-center',
  'google-api-autocomplete': 'https://dev.lifemiles.net/lifemiles/google-api-autocomplete',
  'help-center-airports':'https://dev.lifemiles.net/lifemiles/help-center-airports',
  
  'renderEnrollment': 'https://dev.lifemiles.net/lifemiles/enrollment',
  'enrollmentRequest': 'https://dev.lifemiles.net/lifemiles/request-enrollment',
  
  'accountOverview': 'https://dev.lifemiles.net/lifemiles/account-overview',
  'accountOverviewTransactions': 'https://dev.lifemiles.net/lifemiles/single-transaction-overview-transaction',
  'accountActivity': 'https://dev.lifemiles.net/lifemiles/account-activity',
  'accountActivityByMonth': ' https://dev.lifemiles.net/lifemiles/single-transaction-activity-date',
  'accountProfile': 'https://dev.lifemiles.net/lifemiles/account-profile',
  'updateProfile': 'https://dev.lifemiles.net/lifemiles/account-profile-update',
  'getEliteProfile': 'https://dev.lifemiles.net/lifemiles/account-profile-get-elite',
  'addReddressNumber': 'https://dev.lifemiles.net/lifemiles/account-redress-number',
  'addTravelPartner': 'https://dev.lifemiles.net/lifemiles/account-travel-partner',
  'renderManageCard': 'https://dev.lifemiles.net/lifemiles/manage-card',
  'updateCardState': 'https://dev.lifemiles.net/lifemiles/manage-card-update-state',
  'updateCardPin': 'https://dev.lifemiles.net/lifemiles/account-set-pin/',
  'getHeaderAccount': 'https://dev.lifemiles.net/lifemiles/account-header/',
  
  'getFavorites': 'https://private-4b1172-lifemiles.apiary-mock.com/account/levelUp',
  'getLevelUp': 'https://private-4b1172-lifemiles.apiary-mock.com/account/levelUp',
  'getPaymentModal': 'https://dev.lifemiles.net/lifemiles/account-payment-modal',
  'getSingleConfirmation': 'https://dev.lifemiles.net/lifemiles/account-activity-confirmation',
  'getAddLMNumber': 'https://private-f285c-lifemiles.apiary-mock.com/add-lm-number',
  'getAddLMNumberDetails': 'https://private-f285c-lifemiles.apiary-mock.com/add-lm-number/details',
  
  'renderMilesProcess': 'https://dev.lifemiles.net/lifemiles/miles-product-selection',
  
  'buyMilesRenderHttps': 'https://dev.lifemiles.net/lifemiles/buy-miles',
  'buyMilesPaymentHttps': 'https://dev.lifemiles.net/lifemiles/buy-miles-payment',
  'buyMilesConfirmationHttps': 'https://dev.lifemiles.net/lifemiles/buy-miles-confirmation',
  
  'milesTransferRecipient': 'https://dev.lifemiles.net/lifemiles/transfer-miles-recipient',
  'milesTransferAmount': 'https://dev.lifemiles.net/lifemiles/transfer-miles-amount',
  'milesTransferPayment': 'https://dev.lifemiles.net/lifemiles/transfer-miles-payment',
  'milesTransferConfirmation': 'https://dev.lifemiles.net/lifemiles/transfer-miles-confirmation',
  
  'multiplyMilesRender': 'https://dev.lifemiles.net/lifemiles/multiply-miles',
  'multiplyMilesPayment': 'https://dev.lifemiles.net/lifemiles/multiply-miles-payment',
  'multiplyMilesPrePaymentRender':'https://dev.lifemiles.net/lifemiles/multiply-miles-pre-payment/',
  'multiplyMilesConfirmation': 'https://dev.lifemiles.net/lifemiles/multiply-miles-confirmation',
  
  'rncRender': 'https://dev.lifemiles.net/lifemiles/request-new-card/',
  'rncSummary': 'https://dev.lifemiles.net/lifemiles/request-new-card-summary',
  'rncConfirmation':'https://dev.lifemiles.net/lifemiles/request-new-card-confirmation',
  
  'arBookerCoreData': 'https://dev.lifemiles.net/lifemiles/air-redemption-booker',
  'arHeaderData': 'https://dev.lifemiles.net/lifemiles/air-redemption-header',
  'arPublicCalendarData': 'https://dev.lifemiles.net/lifemiles/air-redemption-calendar-public',
  'arPrivateCalendarData': 'https://dev.lifemiles.net/lifemiles/air-redemption-calendar',
  'arValidateFlightLogin': 'https://dev.lifemiles.net/lifemiles/air-redemption-validate-flight-login',
  'arPublicFlightData': 'https://dev.lifemiles.net/lifemiles/air-redemption-flight-public',
  'arPrivateFlightData': 'https://dev.lifemiles.net/lifemiles/air-redemption-flight ',
  'arLifemilesAndMoney': 'https://dev.lifemiles.net/lifemiles/air-redemption-flexible-payment/',
  'arPricingPromotion': 'https://dev.lifemiles.net/lifemiles/air-redemption-pricing-promotion/',
  'arGetTravelers': 'https://dev.lifemiles.net/lifemiles/air-redemption-travelers/',
  'arRedeem': 'https://dev.lifemiles.net/lifemiles/air-redemption-redeem',
  'arConfirmation': 'https://dev.lifemiles.net/lifemiles/air-redemption-confirmation',

  'getWatchlist': 'https://dev.lifemiles.net/lifemiles/air-redemption-get-watchlist',
  'saveWatchlist': 'https://dev.lifemiles.net/lifemiles/air-redemption-save-watchlist',
  
  'renderFlyPartners': 'https://dev.lifemiles.net/lifemiles/fly-partners',
  'getAirlinePartner': 'https://dev.lifemiles.net/lifemiles/partners-airlines',
  'getHotelPartner': 'https://dev.lifemiles.net/lifemiles/partners-hotels',
  'getRetailerPartner': 'https://dev.lifemiles.net/lifemiles/partners-retailer',
  'renderFlyUpgrades':  'https://dev.lifemiles.net/lifemiles/fly-upgrades',
  'renderFlyBagagge':  'https://dev.lifemiles.net/lifemiles/fly-bagagge',  
  'renderFlyVIPLounges':  'https://dev.lifemiles.net/lifemiles/fly-lounges',
  'renderAVEliteProgram': 'https://dev.lifemiles.net/lifemiles/fly-avianca-elite',
  
  'generalError': 'https://private-4c4f50-homepage9.apiary-mock.com/error/general',
  'updateCreditCard':'https://dev.lifemiles.net/lifemiles/credit-card-on-file-update',
  'deleteCreditCard': 'https://dev.lifemiles.net/lifemiles/credit-card-on-file-delete',
  'addCreditCard': 'https://dev.lifemiles.net/lifemiles/credit-card-on-file-add',
  
  'ghostCards': 'https://dev.lifemiles.net/lifemiles/ghost-card-form',
  'ghostCardsConfirmation': 'https://dev.lifemiles.net/lifemiles/ghost-card-accrual',
  'ghostCardsEnrollment':'https://dev.lifemiles.net/lifemiles/ghost-card-enrollment',
  
  'resetPassword1': 'https://dev.lifemiles.net/lifemiles/step-one/retrieve',
  'resetPassword2': 'https://dev.lifemiles.net/lifemiles/account-security-question-retrieve',
  'resetPassword3': 'https://dev.lifemiles.net/lifemiles/account-security-question-send',
  'resetPasswordEnd': 'https://dev.lifemiles.net/lifemiles/step-three/retrieve',
  'resetPassSend': 'https://dev.lifemiles.net/lifemiles/account-security-question-reset/send',
  
  'privacyPolicyGDPR': 'https://private-4c4f50-homepage9.apiary-mock.com/privacyPolicyGDPR',
  'getCardDocType': 'https://private-4c4f50-homepage9.apiary-mock.com/integrator/v1/general/getCarddoctype',
  
  'getLanding': 'https://dev.lifemiles.net/lifemiles/club-lifemiles-subscription-landing',
  'paymentSubcription': 'https://dev.lifemiles.net/lifemiles/club-lifemiles-subscription-plan-info',
  'confirmationClubLifemiles':'https://dev.lifemiles.net/lifemiles/club-lifemiles-subscribe',
  'manageClubLifemiles':'https://dev.lifemiles.net/lifemiles/club-lifemiles-subscription-manage',
  'cancelClubLifemiles':'https://dev.lifemiles.net/lifemiles/club-lifemiles-subscription-cancellation',
  'changeCardClubLifemiles':'https://dev.lifemiles.net/lifemiles/club-lifemiles-card-change',
  
  'binRequest': 'https://dev.lifemiles.net/lifemiles/credit-card-on-file-bin-not-saved',
  
  'affiliationProcess':'https://private-4c4f50-homepage9.apiary-mock.com/affiliationProcess',
  'paymentCountries': 'https://dev.lifemiles.net/lifemiles/payment-countries',
  'paymentFranchises': 'https://dev.lifemiles.net/lifemiles/payment-franchises',
  'paymentStates': 'https://dev.lifemiles.net/lifemiles/payment-states',
  'paymentDocuments': 'https://dev.lifemiles.net/lifemiles/payment-documents',
  'travelerCompanion': 'https://dev.lifemiles.net/lifemiles/account-get-companions',
  
  'getIpUrl':'https://api.ipify.org?format=json',
  
  'stay-hotels': 'https://dev.lifemiles.net/lifemiles/stay-hotels',
  'stay-hotel-partners':'https://dev.lifemiles.net/lifemiles/stay-hotel-partners',
  'stay-things-to-do':'https://dev.lifemiles.net/lifemiles/stay-things-to-do',
  'getCreditCard':'https://dev.lifemiles.net/lifemiles/credit-card-get',
  'getCreditCardConvertPoint':'https://dev.lifemiles.net/lifemiles/credit-card-convert',
  'getCreditCardBenefits':'https://dev.lifemiles.net/lifemiles/credit-card-benefits',
  'getCreditCardApplication':'https://dev.lifemiles.net/lifemiles/credit-card-application',
  'getCreditCardLead': 'https://dev.lifemiles.net/lifemiles/credit-card-cobrand-generation',
  
  'shoppingPartners': 'https://dev.lifemiles.net/lifemiles/shop-shopping-partners',
  
  'dealsCategory': 'https://dev.lifemiles.net/lifemiles/deals-render/',
  'dealsAllDeals': 'https://dev.lifemiles.net/lifemiles/deals-all-deals',
  'dealsDetail': 'https://dev.lifemiles.net/lifemiles/deals-detail/',
  'dealsConfirmation': 'https://dev.lifemiles.net/lifemiles/deals-confirmation-page',
  'authenticatedDealsConfirmation': 'https://dev.lifemiles.net/lifemiles/deals-confirmation-page-restricted',
  'dealsYourDeals': 'https://dev.lifemiles.net/lifemiles/deals-your-deals/',

  'unsubscribe': 'https://dev.lifemiles.net/lifemiles/unsubscribe-step-one',
  'unsubscribeConfirmation': 'https://dev.lifemiles.net/lifemiles/unsubscribe-step-two/',
  'ofac':'https://dev.lifemiles.net/lifemiles/lac-get-laws-per-country/',
  'allLaws':'https://dev.lifemiles.net/lifemiles/lac-get-countries-per-law/',
  'privacyPolicyModal' : 'https://dev.lifemiles.net/lifemiles/terms-privacy-policy/',
  'gdprTerms':'https://dev.lifemiles.net/lifemiles/terms-with-laws',
  'maxTravelCompanion': 'https://dev.lifemiles.net/lifemiles/configuration-parameters-max-travel-partner/',
  'bonusSubscription2x1':'https://dev.lifemiles.net/lifemiles/promotion-landing-promo',
  'submitBonusSubscription2x1':'https://dev.lifemiles.net/lifemiles/promotion-subscription/',
  'dealsSearchData':'https://dev.lifemiles.net/lifemiles/deals-search/',
  "errorMessages": "http://localhost:1337/?co/?la/cms/v1/error/?cd/error-description.entity.json",
  
  'turboLanding':'https://dev.lifemiles.net/lifemiles/turbo-landing',
  'getTurboPayment': 'https://dev.lifemiles.net/lifemiles/turbo-payment',
  'turboPaymentConfirmation': 'https://dev.lifemiles.net/lifemiles/turbo-subscribe/',
  'turboWaitModal': 'https://dev.lifemiles.net/lifemiles/turbo-on-hold-cancel-modal',
  'turboCancelModal':'https://dev.lifemiles.net/lifemiles/turbo-cancel-modal',
  'turboSendCancel':'https://dev.lifemiles.net/lifemiles/turbo-subscription-cancellation/',
  'turboPausedModal':'https://dev.lifemiles.net/lifemiles/turbo-reactive-modal',
  'turboKnowMoreModal':'https://dev.lifemiles.net/lifemiles/turbo-know-more',
  'turboChangeCard':'https://dev.lifemiles.net/lifemiles/turbo-card-change',
  'turboReactiveSubscription':'https://dev.lifemiles.net/lifemiles/turbo-reactive-subscription',
  'turboSendSurvey':'https://dev.lifemiles.net/lifemiles/turbo-on-hold-subscribe',
  'turboChangePlan':'https://dev.lifemiles.net/lifemiles/turbo-change-plan-modal/',
  'turboChangePlanConfirm':'https://dev.lifemiles.net/lifemiles/turbo-change-plan',
  'turboSurveyCancel': 'https://dev.lifemiles.net/lifemiles/turbo-survey-cancel',
  
  'renderFlyRetro': 'https://dev.lifemiles.net/lifemiles/retro-landing',
  'updateFlyRetro': 'https://dev.lifemiles.net/lifemiles/retro-set-info',
  'iguama': 'https://dev.lifemiles.net/lifemiles/landing-iguama',

    
  //MyTrips
//MyTrips
  "myTripsLanding":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripsLanding",
  "myTripsDetails":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripsDetails",
  "myTripReservation":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripReservation",
  "myTripCancelModal":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripsCancelModal",

  //saua
  'upgrade-sections':'https://dev.lifemiles.net/lifemiles/saua-sections',
  'upgrade-traveler':'https://dev.lifemiles.net/lifemiles/saua-traveler',
  'upgrade-flight':'https://dev.lifemiles.net/lifemiles/saua-flight',
  'upgrade-redeem': 'https://dev.lifemiles.net/lifemiles/saua-redeem',
  'upgrade-ignore': 'https://dev.lifemiles.net/lifemiles/saua-ignore',
  'upgrade-confirm': 'https://dev.lifemiles.net/lifemiles/saua-confirm'
};

const envHost = 'https://dev.lifemiles.net/';

const if1Pw3 = "44qOoVTcE3jtu/JuzdGRMqg5vQRqL8r5YX6gZD4UDq+5PTgmew1AlVuCuAHEx/MGMuDCx0lvjgjS6pjar9pKj8TYHjxEpvJ/xtC41OwjV6aSeBggux8nkhu/+oGuZZIi0saNN2/VIyqlAzUtKudKJxMvVet4DfXOfx7ub29CHWU=";

const GMAPS_KEY = 'AIzaSyCqs8GLRLWlAHQMzFTkR360eAbfPIcaNyY';

module.exports = {  
  endpoints,
  envHost,
  if1Pw3,
  GMAPS_KEY
};