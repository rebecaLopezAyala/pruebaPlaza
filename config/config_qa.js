const endpoints = {
  'loginLocation':'https://qa.lifemiles.net/lifemiles/geolocalization-ip',
  'gmapGeolocation':'https://maps.googleapis.com/maps/api/geocode/json?',
  'geolocation': 'https://https-api.apigurus.com/iplocation/v1.8/locateip',
  'getCurrencies': 'https://qa.lifemiles.net/lifemiles/get-currencies',
  'currencySymbol': 'https://qa.lifemiles.net/lifemiles/currency-symbol',
  'homepage': 'https://qa.lifemiles.net/lifemiles/home',
  'partnersSearch': 'https://qa.lifemiles.net/lifemiles/partners-search',
  'userLoginHttps': 'https://qa.lifemiles.net/lifemiles/account-user-login',  
  'extraUserInfo': 'https://qa.lifemiles.net/lifemiles/air-redemption-discount-voucher/',
  'enrollment': 'https://qa.lifemiles.net/integrator/v1/account/enrollrequest',
  'menuCountries': 'https://qa.lifemiles.net/lifemiles/general-countries-direct-communication',
  
  'renderLogin':'https://qa.lifemiles.net/lifemiles/lifemiles-account-sign-in',
  
  'oauth2Authorization': 'https://qa.lifemiles.net/integrator/v1/authentication/oauth/authorize',
  'oauth2Token': 'https://qa.lifemiles.net/integrator/v1/authentication/oauth/token',
  'oauth2Login': 'https://qa.lifemiles.net/integrator/v1/authentication/login',
  'autoLogin': 'https://qa.lifemiles.net/lifemiles/auto-login',
  'logout': 'https://qa.lifemiles.net/lifemiles/logout',
  'getCountries':'https://qa.lifemiles.net/lifemiles/get-countries',
  'getStates': 'https://qa.lifemiles.net/lifemiles/get-states',
  'getCities': 'https://qa.lifemiles.net/lifemiles/get-cities',
  'getDeliveryStates': 'https://qa.lifemiles.net/lifemiles/get-delivery-states',
  'getDeliveryCities': 'https://qa.lifemiles.net/lifemiles/get-delivery-cities',
  'getDocType': 'https://qa.lifemiles.net/lifemiles/get-document-type',
  'getGender': 'https://qa.lifemiles.net/lifemiles/get-gender', 
  'getPhoneNumber':'https://qa.lifemiles.net/lifemiles/get-phone-number',
  'getTravelersInfo': 'https://qa.lifemiles.net/lifemiles/account-retrieve-member-info/',
  'getPreAffiliateInfo':'https://qa.lifemiles.net/lifemiles/account-retrieve-member-info-cipher',
  'retailIdCreate': 'https://qa.lifemiles.net/lifemiles/retail-id-create',
  'retailIdUpdate': 'https://qa.lifemiles.net/lifemiles/retail-id-update',
  'retailIdOption': 'https://qa.lifemiles.net/lifemiles/retail-id-options',
  'retailIdDocumentId': 'https://qa.lifemiles.net/lifemiles/retail-id-search-by-document',
  'retailIdLmNumber': 'https://qa.lifemiles.net/lifemiles/retail-id-search-by-lifemiles-number',   
  
  'aboutYou': 'https://qa.lifemiles.net/lifemiles/about',
  
  'renderContact': 'https://qa.lifemiles.net/lifemiles/contact',
  'contactRequest': 'https://qa.lifemiles.net/lifemiles/contact-email',
  
  'renderBecomePartner': 'https://qa.lifemiles.net/lifemiles/become-a-partner',
  'becomePartnerRequest': 'https://qa.lifemiles.net/lifemiles/become-a-partner-email',
  
  'drive': 'https://qa.lifemiles.net/lifemiles/drive',
  
  'eat': 'https://qa.lifemiles.net/lifemiles/eat',
  
  'emailSt': 'https://qa.lifemiles.net/lifemiles/single-transaction-decrypt-mail',
  
  'privacyPolice': 'https://qa.lifemiles.net/lifemiles/privacy-policy',
  
  'termsConditions': 'https://qa.lifemiles.net/lifemiles/terms-and-conditions',
  
  'helpCenter': 'https://qa.lifemiles.net/lifemiles/help-center',
  'google-api-autocomplete': 'https://qa.lifemiles.net/lifemiles/google-api-autocomplete',
  'help-center-airports':'https://qa.lifemiles.net/lifemiles/help-center-airports',
  
  'renderEnrollment': 'https://qa.lifemiles.net/lifemiles/enrollment',
  'enrollmentRequest': 'https://qa.lifemiles.net/lifemiles/request-enrollment',
  
  'accountOverview': 'https://qa.lifemiles.net/lifemiles/account-overview',
  'accountOverviewTransactions': 'https://qa.lifemiles.net/lifemiles/single-transaction-overview-transaction',
  'accountActivity': ' https://qa.lifemiles.net/lifemiles/account-activity',
  'accountActivityByMonth': ' https://qa.lifemiles.net/lifemiles/single-transaction-activity-date',
  'accountProfile': 'https://qa.lifemiles.net/lifemiles/account-profile',
  'updateProfile': 'https://qa.lifemiles.net/lifemiles/account-profile-update',
  'getEliteProfile': 'https://qa.lifemiles.net/lifemiles/account-profile-get-elite',
  'addReddressNumber': 'https://qa.lifemiles.net/lifemiles/account-redress-number',
  'addTravelPartner': 'https://qa.lifemiles.net/lifemiles/account-travel-partner',
  'renderManageCard': 'https://qa.lifemiles.net/lifemiles/manage-card',
  'updateCardState': 'https://qa.lifemiles.net/lifemiles/manage-card-update-state',
  'updateCardPin': 'https://qa.lifemiles.net/lifemiles/account-set-pin/',
  'getHeaderAccount': 'https://qa.lifemiles.net/lifemiles/account-header/',
  
  'getFavorites': 'https://private-4b1172-lifemiles.apiary-mock.com/account/levelUp',
  'getLevelUp': 'https://private-4b1172-lifemiles.apiary-mock.com/account/levelUp',
  'getPaymentModal': 'https://qa.lifemiles.net/lifemiles/account-payment-modal',
  'getSingleConfirmation': 'https://qa.lifemiles.net/lifemiles/account-activity-confirmation',
  'getAddLMNumber': 'https://private-f285c-lifemiles.apiary-mock.com/add-lm-number',
  'getAddLMNumberDetails': 'https://private-f285c-lifemiles.apiary-mock.com/add-lm-number/details',
  
  'renderMilesProcess': 'https://qa.lifemiles.net/lifemiles/miles-product-selection',
  
  'buyMilesRenderHttps': 'https://qa.lifemiles.net/lifemiles/buy-miles',
  'buyMilesPaymentHttps': 'https://qa.lifemiles.net/lifemiles/buy-miles-payment',
  'buyMilesConfirmationHttps': 'https://qa.lifemiles.net/lifemiles/buy-miles-confirmation',
  
  'milesTransferRecipient': 'https://qa.lifemiles.net/lifemiles/transfer-miles-recipient',
  'milesTransferAmount': 'https://qa.lifemiles.net/lifemiles/transfer-miles-amount',
  'milesTransferPayment': 'https://qa.lifemiles.net/lifemiles/transfer-miles-payment',
  'milesTransferConfirmation': 'https://qa.lifemiles.net/lifemiles/transfer-miles-confirmation',
  
  'multiplyMilesRender': 'https://qa.lifemiles.net/lifemiles/multiply-miles',
  'multiplyMilesPayment': 'https://qa.lifemiles.net/lifemiles/multiply-miles-payment',
  'multiplyMilesPrePaymentRender':'https://qa.lifemiles.net/lifemiles/multiply-miles-pre-payment/',
  'multiplyMilesConfirmation': 'https://qa.lifemiles.net/lifemiles/multiply-miles-confirmation',
  
  'rncRender': 'https://qa.lifemiles.net/lifemiles/request-new-card/',
  'rncSummary': 'https://qa.lifemiles.net/lifemiles/request-new-card-summary',
  'rncConfirmation':'https://qa.lifemiles.net/lifemiles/request-new-card-confirmation',
  
  'arBookerCoreData': 'https://qa.lifemiles.net/lifemiles/air-redemption-booker',
  'arHeaderData': 'https://qa.lifemiles.net/lifemiles/air-redemption-header',
  'arPublicCalendarData': 'https://qa.lifemiles.net/lifemiles/air-redemption-calendar-public',
  'arPrivateCalendarData': 'https://qa.lifemiles.net/lifemiles/air-redemption-calendar',
  'arValidateFlightLogin': 'https://qa.lifemiles.net/lifemiles/air-redemption-validate-flight-login',
  'arPublicFlightData': 'https://qa.lifemiles.net/lifemiles/air-redemption-flight-public',
  'arPrivateFlightData': 'https://qa.lifemiles.net/lifemiles/air-redemption-flight ',
  'arLifemilesAndMoney': 'https://qa.lifemiles.net/lifemiles/air-redemption-flexible-payment/',
  'arPricingPromotion': 'https://qa.lifemiles.net/lifemiles/air-redemption-pricing-promotion/',
  'arGetTravelers': 'https://qa.lifemiles.net/lifemiles/air-redemption-travelers/',
  'arRedeem': 'https://qa.lifemiles.net/lifemiles/air-redemption-redeem',
  'arConfirmation': 'https://qa.lifemiles.net/lifemiles/air-redemption-confirmation',

  'getWatchlist': 'https://qa.lifemiles.net/lifemiles/air-redemption-get-watchlist',
  'saveWatchlist': 'https://qa.lifemiles.net/lifemiles/air-redemption-save-watchlist',
  
  'renderFlyPartners': 'https://qa.lifemiles.net/lifemiles/fly-partners',
  'getAirlinePartner': 'https://qa.lifemiles.net/lifemiles/partners-airlines',
  'getHotelPartner': 'https://qa.lifemiles.net/lifemiles/partners-hotels',
  'getRetailerPartner': 'https://qa.lifemiles.net/lifemiles/partners-retailer',
  'renderFlyUpgrades':  'https://qa.lifemiles.net/lifemiles/fly-upgrades',
  'renderFlyBagagge':  'https://qa.lifemiles.net/lifemiles/fly-bagagge',  
  'renderFlyVIPLounges':  'https://qa.lifemiles.net/lifemiles/fly-lounges',
  'renderAVEliteProgram': 'https://qa.lifemiles.net/lifemiles/fly-avianca-elite',
  
  'generalError': 'https://private-4c4f50-homepage9.apiary-mock.com/error/general',
  'updateCreditCard':'https://qa.lifemiles.net/lifemiles/credit-card-on-file-update',
  'deleteCreditCard': 'https://qa.lifemiles.net/lifemiles/credit-card-on-file-delete',
  'addCreditCard': 'https://qa.lifemiles.net/lifemiles/credit-card-on-file-add',
  
  'ghostCards': 'https://qa.lifemiles.net/lifemiles/ghost-card-form',
  'ghostCardsConfirmation': 'https://qa.lifemiles.net/lifemiles/ghost-card-accrual',
  'ghostCardsEnrollment':'https://qa.lifemiles.net/lifemiles/ghost-card-enrollment',
  
  'resetPassword1': 'https://qa.lifemiles.net/lifemiles/step-one/retrieve',
  'resetPassword2': 'https://qa.lifemiles.net/lifemiles/account-security-question-retrieve',
  'resetPassword3': 'https://qa.lifemiles.net/lifemiles/account-security-question-send',
  'resetPasswordEnd': 'https://qa.lifemiles.net/lifemiles/step-three/retrieve',
  'resetPassSend': 'https://qa.lifemiles.net/lifemiles/account-security-question-reset/send',
  
  'privacyPolicyGDPR': 'https://private-4c4f50-homepage9.apiary-mock.com/privacyPolicyGDPR',
  'getCardDocType': 'https://private-4c4f50-homepage9.apiary-mock.com/integrator/v1/general/getCarddoctype',
  
  'getLanding': 'https://qa.lifemiles.net/lifemiles/club-lifemiles-subscription-landing',
  'paymentSubcription': 'https://qa.lifemiles.net/lifemiles/club-lifemiles-subscription-plan-info',
  'confirmationClubLifemiles':'https://qa.lifemiles.net/lifemiles/club-lifemiles-subscribe',
  'manageClubLifemiles':'https://qa.lifemiles.net/lifemiles/club-lifemiles-subscription-manage',
  'cancelClubLifemiles':'https://qa.lifemiles.net/lifemiles/club-lifemiles-subscription-cancellation',
  'changeCardClubLifemiles':'https://qa.lifemiles.net/lifemiles/club-lifemiles-card-change',
  
  'affiliationProcess':'https://private-4c4f50-homepage9.apiary-mock.com/affiliationProcess',  
  
  'binRequest': 'https://qa.lifemiles.net/lifemiles/credit-card-on-file-bin-not-saved',
  'paymentCountries': 'https://qa.lifemiles.net/lifemiles/payment-countries',
  'paymentFranchises': 'https://qa.lifemiles.net/lifemiles/payment-franchises',
  'paymentStates': 'https://qa.lifemiles.net/lifemiles/payment-states',
  'paymentDocuments': 'https://qa.lifemiles.net/lifemiles/payment-documents',
  'travelerCompanion': 'https://qa.lifemiles.net/lifemiles/account-get-companions',
  
  'getIpUrl':'https://api.ipify.org?format=json',
  
  'stay-hotels': 'https://qa.lifemiles.net/lifemiles/stay-hotels',
  'stay-hotel-partners':'https://qa.lifemiles.net/lifemiles/stay-hotel-partners',
  'stay-things-to-do':'https://qa.lifemiles.net/lifemiles/stay-things-to-do',
  'getCreditCard':'https://qa.lifemiles.net/lifemiles/credit-card-get',
  'getCreditCardConvertPoint':'https://qa.lifemiles.net/lifemiles/credit-card-convert',
  'getCreditCardBenefits':'https://qa.lifemiles.net/lifemiles/credit-card-benefits',
  'getCreditCardApplication':'https://qa.lifemiles.net/lifemiles/credit-card-application',
  'getCreditCardLead': 'https://qa.lifemiles.net/lifemiles/credit-card-cobrand-generation',
  
  'shoppingPartners': 'https://qa.lifemiles.net/lifemiles/shop-shopping-partners',
  
  'dealsCategory': 'https://qa.lifemiles.net/lifemiles/deals-render/',
  'dealsAllDeals': 'https://qa.lifemiles.net/lifemiles/deals-all-deals',
  'dealsDetail': 'https://qa.lifemiles.net/lifemiles/deals-detail/',
  'dealsConfirmation': 'https://qa.lifemiles.net/lifemiles/deals-confirmation-page',
  'authenticatedDealsConfirmation': 'https://qa.lifemiles.net/lifemiles/deals-confirmation-page-restricted',
  'dealsYourDeals': 'https://qa.lifemiles.net/lifemiles/deals-your-deals/',

  'unsubscribe': 'https://qa.lifemiles.net/lifemiles/unsubscribe-step-one',
  'unsubscribeConfirmation': 'https://qa.lifemiles.net/lifemiles/unsubscribe-step-two/',
  'ofac':'https://qa.lifemiles.net/lifemiles/lac-get-laws-per-country/',
  'allLaws':'https://qa.lifemiles.net/lifemiles/lac-get-countries-per-law/',
  'gdprTerms':'https://qa.lifemiles.net/lifemiles/terms-with-laws',
  'privacyPolicyModal' : 'https://qa.lifemiles.net/lifemiles/terms-privacy-policy/',
 
  'bonusSubscription2x1':'https://qa.lifemiles.net/lifemiles/promotion-landing-promo',
  'submitBonusSubscription2x1':'https://qa.lifemiles.net/lifemiles/promotion-subscription/',
  'maxTravelCompanion': 'https://qa.lifemiles.net/lifemiles/configuration-parameters-max-travel-partner/',
  'dealsSearchData':'https://qa.lifemiles.net/lifemiles/deals-search/',

  'errorMessages': 'http://192.168.66.252:1337/?co/?la/cms/v1/error/?cd/error-description.entity.json',

  
  'turboLanding':'https://qa.lifemiles.net/lifemiles/turbo-landing',
  'getTurboPayment': 'https://qa.lifemiles.net/lifemiles/turbo-payment',
  'turboPaymentConfirmation': 'https://qa.lifemiles.net/lifemiles/turbo-subscribe/',
  'turboWaitModal': 'https://qa.lifemiles.net/lifemiles/turbo-on-hold-cancel-modal',
  'turboCancelModal':'https://qa.lifemiles.net/lifemiles/turbo-cancel-modal',
  'turboSendCancel':'https://qa.lifemiles.net/lifemiles/turbo-subscription-cancellation/',
  'turboPausedModal':'https://qa.lifemiles.net/lifemiles/turbo-reactive-modal',
  'turboKnowMoreModal':'https://qa.lifemiles.net/lifemiles/turbo-know-more',
  'turboChangeCard':'https://qa.lifemiles.net/lifemiles/turbo-card-change',
  'turboReactiveSubscription':'https://qa.lifemiles.net/lifemiles/turbo-reactive-subscription',
  'turboSendSurvey':'https://qa.lifemiles.net/lifemiles/turbo-on-hold-subscribe',
  'turboChangePlan':'https://qa.lifemiles.net/lifemiles/turbo-change-plan-modal/',
  'turboChangePlanConfirm':'https://qa.lifemiles.net/lifemiles/turbo-change-plan',
  'turboSurveyCancel': 'https://qa.lifemiles.net/lifemiles/turbo-survey-cancel',

  'renderFlyRetro': 'https://qa.lifemiles.net/lifemiles/retro-landing',
  'updateFlyRetro': 'https://qa.lifemiles.net/lifemiles/retro-set-info',
  'iguama': 'https://qa.lifemiles.net/lifemiles/landing-iguama',

    
//MyTrips
  "myTripsLanding":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripsLanding",
  "myTripsDetails":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripsDetails",
  "myTripReservation":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripReservation",
  "myTripCancelModal":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripsCancelModal",

   //saua
   'upgrade-sections':'https://qa.lifemiles.net/lifemiles/saua-sections',
   'upgrade-traveler':'https://qa.lifemiles.net/lifemiles/saua-traveler',
   'upgrade-flight':'https://qa.lifemiles.net/lifemiles/saua-flight',
   'upgrade-redeem': 'https://qa.lifemiles.net/lifemiles/saua-redeem',
   'upgrade-ignore': 'https://qa.lifemiles.net/lifemiles/saua-ignore',
   'upgrade-confirm': 'https://qa.lifemiles.net/lifemiles/saua-confirm'
};
//saua


const envHost = 'https://qa.lifemiles.net/';

const if1Pw3 = "44qOoVTcE3jtu/JuzdGRMqg5vQRqL8r5YX6gZD4UDq+5PTgmew1AlVuCuAHEx/MGMuDCx0lvjgjS6pjar9pKj8TYHjxEpvJ/xtC41OwjV6aSeBggux8nkhu/+oGuZZIi0saNN2/VIyqlAzUtKudKJxMvVet4DfXOfx7ub29CHWU=";

const GMAPS_KEY = 'AIzaSyCqs8GLRLWlAHQMzFTkR360eAbfPIcaNyY';

module.exports = {
  endpoints,
  envHost,
  if1Pw3,
  GMAPS_KEY
};