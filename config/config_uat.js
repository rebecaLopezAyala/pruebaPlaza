const endpoints = {
  'loginLocation':'https://uat.lifemiles.net/lifemiles/geolocalization-ip',
  'gmapGeolocation':'https://maps.googleapis.com/maps/api/geocode/json?',
  'geolocation': 'https://https-api.apigurus.com/iplocation/v1.8/locateip',
  'getCurrencies': 'https://uat.lifemiles.net/lifemiles/get-currencies',
  'currencySymbol': 'https://uat.lifemiles.net/lifemiles/currency-symbol',
  'homepage': 'https://uat.lifemiles.net/lifemiles/home',
  'menuCountries': 'https://uat.lifemiles.net/lifemiles/general-countries-direct-communication',
  'partnersSearch': 'https://uat.lifemiles.net/lifemiles/partners-search',
  'userLoginHttps': 'https://uat.lifemiles.net/lifemiles/account-user-login',
  'extraUserInfo': 'https://uat.lifemiles.net/lifemiles/air-redemption-discount-voucher/',
  
  'renderLogin':'https://uat.lifemiles.net/lifemiles/lifemiles-account-sign-in',
  
  'oauth2Authorization': 'https://uat.lifemiles.net/integrator/v1/authentication/oauth/authorize',
  'oauth2Token': 'https://uat.lifemiles.net/integrator/v1/authentication/oauth/token',
  'oauth2Login': 'https://uat.lifemiles.net/integrator/v1/authentication/login',
  'autoLogin': 'https://uat.lifemiles.net/lifemiles/auto-login',
  'logout': 'https://uat.lifemiles.net/lifemiles/logout',
  'getCountries':'https://uat.lifemiles.net/lifemiles/get-countries',
  'getStates': 'https://uat.lifemiles.net/lifemiles/get-states',
  'getCities': 'https://uat.lifemiles.net/lifemiles/get-cities',
  'getDeliveryStates': 'https://uat.lifemiles.net/lifemiles/get-delivery-states',
  'getDeliveryCities': 'https://uat.lifemiles.net/lifemiles/get-delivery-cities',
  'getDocType': 'https://uat.lifemiles.net/lifemiles/get-document-type',
  'getGender': 'https://uat.lifemiles.net/lifemiles/get-gender', 
  'getPhoneNumber':'https://uat.lifemiles.net/lifemiles/get-phone-number',
  'getTravelersInfo': 'https://uat.lifemiles.net/lifemiles/account-retrieve-member-info/',
  'getPreAffiliateInfo':'https://uat.lifemiles.net/lifemiles/account-retrieve-member-info-cipher',
  'retailIdCreate': 'https://uat.lifemiles.net/lifemiles/retail-id-create',
  'retailIdUpdate': 'https://uat.lifemiles.net/lifemiles/retail-id-update',
  'retailIdOption': 'https://uat.lifemiles.net/lifemiles/retail-id-options',
  'retailIdDocumentId': 'https://uat.lifemiles.net/lifemiles/retail-id-search-by-document',
  'retailIdLmNumber': 'https://uat.lifemiles.net/lifemiles/retail-id-search-by-lifemiles-number',   
  
  'aboutYou': 'https://uat.lifemiles.net/lifemiles/about',
  
  'renderContact': 'https://uat.lifemiles.net/lifemiles/contact',
  'contactRequest': 'https://uat.lifemiles.net/lifemiles/contact-email',
  
  'renderBecomePartner': 'https://uat.lifemiles.net/lifemiles/become-a-partner',
  'becomePartnerRequest': 'https://uat.lifemiles.net/lifemiles/become-a-partner-email',
  
  'drive': 'https://uat.lifemiles.net/lifemiles/drive',
  
  'eat': 'https://uat.lifemiles.net/lifemiles/eat',
  
  'emailSt': 'https://uat.lifemiles.net/lifemiles/single-transaction-decrypt-mail',
  
  'privacyPolice': 'https://uat.lifemiles.net/lifemiles/privacy-policy',
  
  'termsConditions': 'https://uat.lifemiles.net/lifemiles/terms-and-conditions',
  
  'helpCenter': 'https://uat.lifemiles.net/lifemiles/help-center',
  'google-api-autocomplete': 'https://uat.lifemiles.net/lifemiles/google-api-autocomplete',
  'help-center-airports':'https://uat.lifemiles.net/lifemiles/help-center-airports',
  
  'renderEnrollment': 'https://uat.lifemiles.net/lifemiles/enrollment',
  'enrollmentRequest': 'https://uat.lifemiles.net/lifemiles/request-enrollment',
  
  'accountOverview': 'https://uat.lifemiles.net/lifemiles/account-overview',
  'accountOverviewTransactions': 'https://uat.lifemiles.net/lifemiles/single-transaction-overview-transaction',
  'accountActivity': ' https://uat.lifemiles.net/lifemiles/account-activity',
  'accountActivityByMonth': ' https://uat.lifemiles.net/lifemiles/single-transaction-activity-date',
  'accountProfile': 'https://uat.lifemiles.net/lifemiles/account-profile',
  'updateProfile': 'https://uat.lifemiles.net/lifemiles/account-profile-update',
  'getEliteProfile': 'https://uat.lifemiles.net/lifemiles/account-profile-get-elite',
  'addReddressNumber': 'https://uat.lifemiles.net/lifemiles/account-redress-number',
  'addTravelPartner': 'https://uat.lifemiles.net/lifemiles/account-travel-partner',
  'renderManageCard': 'https://uat.lifemiles.net/lifemiles/manage-card',
  'updateCardState': 'https://uat.lifemiles.net/lifemiles/manage-card-update-state',
  'updateCardPin': 'https://uat.lifemiles.net/lifemiles/account-set-pin/',
  'getHeaderAccount': 'https://uat.lifemiles.net/lifemiles/account-header/',
  
  'getFavorites': 'https://private-4b1172-lifemiles.apiary-mock.com/account/levelUp',
  'getLevelUp': 'https://private-4b1172-lifemiles.apiary-mock.com/account/levelUp',
  'getPaymentModal': 'https://uat.lifemiles.net/lifemiles/account-payment-modal',
  'getSingleConfirmation': 'https://uat.lifemiles.net/lifemiles/account-activity-confirmation',
  'getAddLMNumber': 'https://private-f285c-lifemiles.apiary-mock.com/add-lm-number',
  'getAddLMNumberDetails': 'https://private-f285c-lifemiles.apiary-mock.com/add-lm-number/details',
  
  'renderMilesProcess': 'https://uat.lifemiles.net/lifemiles/miles-product-selection',
  
  'buyMilesRenderHttps': 'https://uat.lifemiles.net/lifemiles/buy-miles',
  'buyMilesPaymentHttps': 'https://uat.lifemiles.net/lifemiles/buy-miles-payment',
  'buyMilesConfirmationHttps': 'https://uat.lifemiles.net/lifemiles/buy-miles-confirmation',
  
  'milesTransferRecipient': 'https://uat.lifemiles.net/lifemiles/transfer-miles-recipient',
  'milesTransferAmount': 'https://uat.lifemiles.net/lifemiles/transfer-miles-amount',
  'milesTransferPayment': 'https://uat.lifemiles.net/lifemiles/transfer-miles-payment',
  'milesTransferConfirmation': 'https://uat.lifemiles.net/lifemiles/transfer-miles-confirmation',
  
  'multiplyMilesRender': 'https://uat.lifemiles.net/lifemiles/multiply-miles',
  'multiplyMilesPayment': 'https://uat.lifemiles.net/lifemiles/multiply-miles-payment',
  'multiplyMilesPrePaymentRender':'https://uat.lifemiles.net/lifemiles/multiply-miles-pre-payment/',
  'multiplyMilesConfirmation': 'https://uat.lifemiles.net/lifemiles/multiply-miles-confirmation',
  
  'rncRender': 'https://uat.lifemiles.net/lifemiles/request-new-card/',
  'rncSummary': 'https://uat.lifemiles.net/lifemiles/request-new-card-summary',
  'rncConfirmation':'https://uat.lifemiles.net/lifemiles/request-new-card-confirmation',
  
  'arBookerCoreData': 'https://uat.lifemiles.net/lifemiles/air-redemption-booker',
  'arHeaderData': 'https://uat.lifemiles.net/lifemiles/air-redemption-header',
  'arPublicCalendarData': 'https://uat.lifemiles.net/lifemiles/air-redemption-calendar-public',
  'arPrivateCalendarData': 'https://uat.lifemiles.net/lifemiles/air-redemption-calendar',
  'arValidateFlightLogin': 'https://uat.lifemiles.net/lifemiles/air-redemption-validate-flight-login',
  'arPublicFlightData': 'https://uat.lifemiles.net/lifemiles/air-redemption-flight-public',
  'arPrivateFlightData': 'https://uat.lifemiles.net/lifemiles/air-redemption-flight ',
  'arLifemilesAndMoney': 'https://uat.lifemiles.net/lifemiles/air-redemption-flexible-payment/',
  'arPricingPromotion': 'https://uat.lifemiles.net/lifemiles/air-redemption-pricing-promotion/',
  'arGetTravelers': 'https://uat.lifemiles.net/lifemiles/air-redemption-travelers/',
  'arRedeem': 'https://uat.lifemiles.net/lifemiles/air-redemption-redeem',
  'arConfirmation': 'https://uat.lifemiles.net/lifemiles/air-redemption-confirmation',

  'getWatchlist': 'https://uat.lifemiles.net/lifemiles/air-redemption-get-watchlist',
  'saveWatchlist': 'https://uat.lifemiles.net/lifemiles/air-redemption-save-watchlist',
  
  'renderFlyPartners': 'https://uat.lifemiles.net/lifemiles/fly-partners',
  'getAirlinePartner': 'https://uat.lifemiles.net/lifemiles/partners-airlines',
  'getHotelPartner': 'https://uat.lifemiles.net/lifemiles/partners-hotels',
  'getRetailerPartner': 'https://uat.lifemiles.net/lifemiles/partners-retailer',
  'renderFlyUpgrades':  'https://uat.lifemiles.net/lifemiles/fly-upgrades',
  'renderFlyBagagge':  'https://uat.lifemiles.net/lifemiles/fly-bagagge',  
  'renderFlyVIPLounges':  'https://uat.lifemiles.net/lifemiles/fly-lounges',
  'renderAVEliteProgram': 'https://uat.lifemiles.net/lifemiles/fly-avianca-elite',
  
  'generalError': 'https://private-4c4f50-homepage9.apiary-mock.com/error/general',
  'updateCreditCard':'https://uat.lifemiles.net/lifemiles/credit-card-on-file-update',
  'deleteCreditCard': 'https://uat.lifemiles.net/lifemiles/credit-card-on-file-delete',
  'addCreditCard': 'https://uat.lifemiles.net/lifemiles/credit-card-on-file-add',
  
  'ghostCards': 'https://uat.lifemiles.net/lifemiles/ghost-card-form',
  'ghostCardsConfirmation': 'https://uat.lifemiles.net/lifemiles/ghost-card-accrual',
  'ghostCardsEnrollment':'https://uat.lifemiles.net/lifemiles/ghost-card-enrollment',
  
  'resetPassword1': 'https://uat.lifemiles.net/lifemiles/step-one/retrieve',
  'resetPassword2': 'https://uat.lifemiles.net/lifemiles/account-security-question-retrieve',
  'resetPassword3': 'https://uat.lifemiles.net/lifemiles/account-security-question-send',
  'resetPasswordEnd': 'https://uat.lifemiles.net/lifemiles/step-three/retrieve',
  'resetPassSend': 'https://uat.lifemiles.net/lifemiles/account-security-question-reset/send',
  
  'privacyPolicyGDPR': 'https://private-4c4f50-homepage9.apiary-mock.com/privacyPolicyGDPR',
  'getCardDocType': 'https://private-4c4f50-homepage9.apiary-mock.com/integrator/v1/general/getCarddoctype',
  
  'getLanding': 'https://uat.lifemiles.net/lifemiles/club-lifemiles-subscription-landing',
  'paymentSubcription': 'https://uat.lifemiles.net/lifemiles/club-lifemiles-subscription-plan-info',
  'confirmationClubLifemiles':'https://uat.lifemiles.net/lifemiles/club-lifemiles-subscribe',
  'manageClubLifemiles':'https://uat.lifemiles.net/lifemiles/club-lifemiles-subscription-manage',
  'cancelClubLifemiles':'https://uat.lifemiles.net/lifemiles/club-lifemiles-subscription-cancellation',
  'changeCardClubLifemiles':'https://uat.lifemiles.net/lifemiles/club-lifemiles-card-change',
  
  'affiliationProcess':'https://private-4c4f50-homepage9.apiary-mock.com/affiliationProcess',
  
  'binRequest': 'https://uat.lifemiles.net/lifemiles/credit-card-on-file-bin-not-saved',
  'paymentCountries': 'https://uat.lifemiles.net/lifemiles/payment-countries',
  'paymentFranchises': 'https://uat.lifemiles.net/lifemiles/payment-franchises',
  'paymentStates': 'https://uat.lifemiles.net/lifemiles/payment-states',
  'paymentDocuments': 'https://uat.lifemiles.net/lifemiles/payment-documents',
  'travelerCompanion': 'https://uat.lifemiles.net/lifemiles/account-get-companions',
  
  'getIpUrl':'https://api.ipify.org?format=json',
  
  'stay-hotels': 'https://uat.lifemiles.net/lifemiles/stay-hotels',
  'stay-hotel-partners':'https://uat.lifemiles.net/lifemiles/stay-hotel-partners',
  'stay-things-to-do':'https://uat.lifemiles.net/lifemiles/stay-things-to-do',
  'getCreditCard':'https://uat.lifemiles.net/lifemiles/credit-card-get',
  'getCreditCardConvertPoint':'https://uat.lifemiles.net/lifemiles/credit-card-convert',
  'getCreditCardBenefits':'https://uat.lifemiles.net/lifemiles/credit-card-benefits',
  'getCreditCardApplication':'https://uat.lifemiles.net/lifemiles/credit-card-application',
  'getCreditCardLead': 'https://uat.lifemiles.net/lifemiles/credit-card-cobrand-generation',
  
  'shoppingPartners': 'https://uat.lifemiles.net/lifemiles/shop-shopping-partners',
  
  'dealsCategory': 'https://uat.lifemiles.net/lifemiles/deals-render/',
  'dealsAllDeals': 'https://uat.lifemiles.net/lifemiles/deals-all-deals',
  'dealsDetail': 'https://uat.lifemiles.net/lifemiles/deals-detail/',
  'dealsConfirmation': 'https://uat.lifemiles.net/lifemiles/deals-confirmation-page',
  'authenticatedDealsConfirmation': 'https://uat.lifemiles.net/lifemiles/deals-confirmation-page-restricted',
  'dealsYourDeals': 'https://uat.lifemiles.net/lifemiles/deals-your-deals/',

  'unsubscribe': 'https://uat.lifemiles.net/lifemiles/unsubscribe-step-one',
  'unsubscribeConfirmation': 'https://uat.lifemiles.net/lifemiles/unsubscribe-step-two/',
  'ofac':'https://uat.lifemiles.net/lifemiles/lac-get-laws-per-country/',
  'allLaws':'https://uat.lifemiles.net/lifemiles/lac-get-countries-per-law/',
  'gdprTerms':'https://uat.lifemiles.net/lifemiles/terms-with-laws',
  'privacyPolicyModal' : 'https://uat.lifemiles.net/lifemiles/terms-privacy-policy/',
  'maxTravelCompanion': 'https://uat.lifemiles.net/lifemiles/configuration-parameters-max-travel-partner/',

  'bonusSubscription2x1':'https://uat.lifemiles.net/lifemiles/promotion-landing-promo',
  'submitBonusSubscription2x1':'https://uat.lifemiles.net/lifemiles/promotion-subscription/',
  'dealsSearchData':'https://uat.lifemiles.net/lifemiles/deals-search/',

  'errorMessages': 'http://192.168.66.252:1337/?co/?la/cms/v1/error/?cd/error-description.entity.json',
  
  'turboLanding':'https://uat.lifemiles.net/lifemiles/turbo-landing',
  'getTurboPayment': 'https://uat.lifemiles.net/lifemiles/turbo-payment',
  'turboPaymentConfirmation': 'https://uat.lifemiles.net/lifemiles/turbo-subscribe/',
  'turboWaitModal': 'https://uat.lifemiles.net/lifemiles/turbo-on-hold-cancel-modal',
  'turboCancelModal':'https://uat.lifemiles.net/lifemiles/turbo-cancel-modal',
  'turboSendCancel':'https://uat.lifemiles.net/lifemiles/turbo-subscription-cancellation/',
  'turboPausedModal':'https://uat.lifemiles.net/lifemiles/turbo-reactive-modal',
  'turboKnowMoreModal':'https://uat.lifemiles.net/lifemiles/turbo-know-more',
  'turboChangeCard':'https://uat.lifemiles.net/lifemiles/turbo-card-change',
  'turboReactiveSubscription':'https://uat.lifemiles.net/lifemiles/turbo-reactive-subscription',
  'turboSendSurvey':'https://uat.lifemiles.net/lifemiles/turbo-on-hold-subscribe',
  'turboChangePlan':'https://uat.lifemiles.net/lifemiles/turbo-change-plan-modal/',
  'turboChangePlanConfirm':'https://uat.lifemiles.net/lifemiles/turbo-change-plan',
  'turboSurveyCancel': 'https://uat.lifemiles.net/lifemiles/turbo-survey-cancel',

  
  'turboLanding':'https://uat.lifemiles.net/lifemiles/turbo-landing',
  'getTurboPayment': 'https://uat.lifemiles.net/lifemiles/turbo-payment',
  'turboPaymentConfirmation': 'https://uat.lifemiles.net/lifemiles/turbo-subscribe/',
  'turboWaitModal': 'https://uat.lifemiles.net/lifemiles/turbo-on-hold-cancel-modal',
  'turboCancelModal':'https://uat.lifemiles.net/lifemiles/turbo-cancel-modal',
  'turboSendCancel':'https://uat.lifemiles.net/lifemiles/turbo-subscription-cancellation/',
  'turboPausedModal':'https://uat.lifemiles.net/lifemiles/turbo-reactive-modal',
  'turboKnowMoreModal':'https://uat.lifemiles.net/lifemiles/turbo-know-more',
  'turboChangeCard':'https://uat.lifemiles.net/lifemiles/turbo-card-change',
  'turboReactiveSubscription':'https://uat.lifemiles.net/lifemiles/turbo-reactive-subscription',
  'turboSendSurvey':'https://uat.lifemiles.net/lifemiles/turbo-on-hold-subscribe',
  'turboChangePlan':'https://uat.lifemiles.net/lifemiles/turbo-change-plan-modal/',
  'turboChangePlanConfirm':'https://uat.lifemiles.net/lifemiles/turbo-change-plan',
  'turboSurveyCancel': 'https://uat.lifemiles.net/lifemiles/turbo-survey-cancel',

  'lmApp': 'https://uat.lifemiles.net/lifemiles/landing-lifemiles-app',

  'renderFlyRetro': 'https://uat.lifemiles.net/lifemiles/retro-landing',
  'updateFlyRetro': 'https://uat.lifemiles.net/lifemiles/retro-set-info',
  'iguama': 'https://uat.lifemiles.net/lifemiles/landing-iguama',
 
//MyTrips
  "myTripsLanding":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripsLanding",
  "myTripsDetails":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripsDetails",
  "myTripReservation":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripReservation",
  "myTripCancelModal":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripsCancelModal",

   //saua
   'upgrade-sections':'https://uat.lifemiles.net/lifemiles/saua-sections',
   'upgrade-traveler':'https://uat.lifemiles.net/lifemiles/saua-traveler',
   'upgrade-flight':'https://uat.lifemiles.net/lifemiles/saua-flight',
   'upgrade-redeem': 'https://uat.lifemiles.net/lifemiles/saua-redeem',
   'upgrade-ignore': 'https://uat.lifemiles.net/lifemiles/saua-ignore',
   'upgrade-confirm': 'https://uat.lifemiles.net/lifemiles/saua-confirm'
};

const envHost = 'https://uat.lifemiles.net/';

const if1Pw3 = "44qOoVTcE3jtu/JuzdGRMqg5vQRqL8r5YX6gZD4UDq+5PTgmew1AlVuCuAHEx/MGMuDCx0lvjgjS6pjar9pKj8TYHjxEpvJ/xtC41OwjV6aSeBggux8nkhu/+oGuZZIi0saNN2/VIyqlAzUtKudKJxMvVet4DfXOfx7ub29CHWU=";

const GMAPS_KEY = 'AIzaSyCqs8GLRLWlAHQMzFTkR360eAbfPIcaNyY';

module.exports = {
  endpoints,
  envHost,
  if1Pw3,
  GMAPS_KEY
};