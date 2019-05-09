const endpoints = {
  'loginLocation':'https://www.lifemiles.com/lifemiles/geolocalization-ip',
  'gmapGeolocation':'https://maps.googleapis.com/maps/api/geocode/json?',
  'geolocation': 'https://https-api.apigurus.com/iplocation/v1.8/locateip',
  'getCurrencies': 'https://www.lifemiles.com/lifemiles/get-currencies',
  'currencySymbol': 'https://www.lifemiles.com/lifemiles/currency-symbol',
  'homepage': 'https://www.lifemiles.com/lifemiles/home',
  'menuCountries': 'https://www.lifemiles.com/lifemiles/general-countries-direct-communication',
  'partnersSearch': 'https://www.lifemiles.com/lifemiles/partners-search',
  'userLoginHttps': 'https://www.lifemiles.com/lifemiles/account-user-login',
  'extraUserInfo': 'https://www.lifemiles.com/lifemiles/air-redemption-discount-voucher/',
  
  'renderLogin':'https://www.lifemiles.com/lifemiles/lifemiles-account-sign-in',
  
  'oauth2Authorization': 'https://www.lifemiles.com/integrator/v1/authentication/oauth/authorize',
  'oauth2Token': 'https://www.lifemiles.com/integrator/v1/authentication/oauth/token',
  'oauth2Login': 'https://www.lifemiles.com/integrator/v1/authentication/login',
  'autoLogin': 'https://www.lifemiles.com/lifemiles/auto-login',
  'logout': 'https://www.lifemiles.com/lifemiles/logout',
  'getCountries':'https://www.lifemiles.com/lifemiles/get-countries',
  'getStates': 'https://www.lifemiles.com/lifemiles/get-states',
  'getCities': 'https://www.lifemiles.com/lifemiles/get-cities',
  'getDeliveryStates': 'https://www.lifemiles.com/lifemiles/get-delivery-states',
  'getDeliveryCities': 'https://www.lifemiles.com/lifemiles/get-delivery-cities',
  'getDocType': 'https://www.lifemiles.com/lifemiles/get-document-type',
  'getGender': 'https://www.lifemiles.com/lifemiles/get-gender', 
  'getPhoneNumber':'https://www.lifemiles.com/lifemiles/get-phone-number',
  'getTravelersInfo': 'https://www.lifemiles.com/lifemiles/account-retrieve-member-info/',
  'getPreAffiliateInfo':'https://www.lifemiles.com/lifemiles/account-retrieve-member-info-cipher',
  'retailIdCreate': 'https://www.lifemiles.com/lifemiles/retail-id-create',
  'retailIdUpdate': 'https://www.lifemiles.com/lifemiles/retail-id-update',
  'retailIdOption': 'https://www.lifemiles.com/lifemiles/retail-id-options',
  'retailIdDocumentId': 'https://www.lifemiles.com/lifemiles/retail-id-search-by-document',
  'retailIdLmNumber': 'https://www.lifemiles.com/lifemiles/retail-id-search-by-lifemiles-number',   
  
  'aboutYou': 'https://www.lifemiles.com/lifemiles/about',
  
  'renderContact': 'https://www.lifemiles.com/lifemiles/contact',
  'contactRequest': 'https://www.lifemiles.com/lifemiles/contact-email',
  
  'renderBecomePartner': 'https://www.lifemiles.com/lifemiles/become-a-partner',
  'becomePartnerRequest': 'https://www.lifemiles.com/lifemiles/become-a-partner-email',
  
  'drive': 'https://www.lifemiles.com/lifemiles/drive',
  
  'eat': 'https://www.lifemiles.com/lifemiles/eat',
  
  'emailSt': 'https://www.lifemiles.com/lifemiles/single-transaction-decrypt-mail',
  
  'privacyPolice': 'https://www.lifemiles.com/lifemiles/privacy-policy',
  
  'termsConditions': 'https://www.lifemiles.com/lifemiles/terms-and-conditions',
  
  'helpCenter': 'https://www.lifemiles.com/lifemiles/help-center',
  'google-api-autocomplete': 'https://www.lifemiles.com/lifemiles/google-api-autocomplete',
  'help-center-airports':'https://www.lifemiles.com/lifemiles/help-center-airports',
  
  'renderEnrollment': 'https://www.lifemiles.com/lifemiles/enrollment',
  'enrollmentRequest': 'https://www.lifemiles.com/lifemiles/request-enrollment',
  
  'accountOverview': 'https://www.lifemiles.com/lifemiles/account-overview',
  'accountOverviewTransactions': 'https://www.lifemiles.com/lifemiles/single-transaction-overview-transaction',
  'accountActivity': 'https://www.lifemiles.com/lifemiles/account-activity',
  'accountActivityByMonth': 'https://www.lifemiles.com/lifemiles/single-transaction-activity-date',
  'accountProfile': 'https://www.lifemiles.com/lifemiles/account-profile',
  'updateProfile': 'https://www.lifemiles.com/lifemiles/account-profile-update',
  'getEliteProfile': 'https://www.lifemiles.com/lifemiles/account-profile-get-elite',
  'addReddressNumber': 'https://www.lifemiles.com/lifemiles/account-redress-number',
  'addTravelPartner': 'https://www.lifemiles.com/lifemiles/account-travel-partner',
  'renderManageCard': 'https://www.lifemiles.com/lifemiles/manage-card',
  'updateCardState': 'https://www.lifemiles.com/lifemiles/manage-card-update-state',
  'updateCardPin': 'https://www.lifemiles.com/lifemiles/account-set-pin/',
  'getHeaderAccount': 'https://www.lifemiles.com/lifemiles/account-header/',
  
  'getFavorites': 'https://private-4b1172-lifemiles.apiary-mock.com/account/levelUp',
  'getLevelUp': 'https://private-4b1172-lifemiles.apiary-mock.com/account/levelUp',
  'getPaymentModal': 'https://www.lifemiles.com/lifemiles/account-payment-modal',
  'getSingleConfirmation': 'https://www.lifemiles.com/lifemiles/account-activity-confirmation',
  'getAddLMNumber': 'https://private-f285c-lifemiles.apiary-mock.com/add-lm-number',
  'getAddLMNumberDetails': 'https://private-f285c-lifemiles.apiary-mock.com/add-lm-number/details',
  
  'renderMilesProcess': 'https://www.lifemiles.com/lifemiles/miles-product-selection',
  
  'buyMilesRenderHttps': 'https://www.lifemiles.com/lifemiles/buy-miles',
  'buyMilesPaymentHttps': 'https://www.lifemiles.com/lifemiles/buy-miles-payment',
  'buyMilesConfirmationHttps': 'https://www.lifemiles.com/lifemiles/buy-miles-confirmation',
  
  'milesTransferRecipient': 'https://www.lifemiles.com/lifemiles/transfer-miles-recipient',
  'milesTransferAmount': 'https://www.lifemiles.com/lifemiles/transfer-miles-amount',
  'milesTransferPayment': 'https://www.lifemiles.com/lifemiles/transfer-miles-payment',
  'milesTransferConfirmation': 'https://www.lifemiles.com/lifemiles/transfer-miles-confirmation',
  
  'multiplyMilesRender': 'https://www.lifemiles.com/lifemiles/multiply-miles',
  'multiplyMilesPayment': 'https://www.lifemiles.com/lifemiles/multiply-miles-payment',
  'multiplyMilesPrePaymentRender':'https://www.lifemiles.com/lifemiles/multiply-miles-pre-payment/',
  'multiplyMilesConfirmation': 'https://www.lifemiles.com/lifemiles/multiply-miles-confirmation',
  
  'rncRender': 'https://www.lifemiles.com/lifemiles/request-new-card/',
  'rncSummary': 'https://www.lifemiles.com/lifemiles/request-new-card-summary',
  'rncConfirmation':'https://www.lifemiles.com/lifemiles/request-new-card-confirmation',
  
  'arBookerCoreData': 'https://www.lifemiles.com/lifemiles/air-redemption-booker',
  'arHeaderData': 'https://www.lifemiles.com/lifemiles/air-redemption-header',
  'arPublicCalendarData': 'https://www.lifemiles.com/lifemiles/air-redemption-calendar-public',
  'arPrivateCalendarData': 'https://www.lifemiles.com/lifemiles/air-redemption-calendar',
  'arValidateFlightLogin': 'https://www.lifemiles.com/lifemiles/air-redemption-validate-flight-login',
  'arPublicFlightData': 'https://www.lifemiles.com/lifemiles/air-redemption-flight-public',
  'arPrivateFlightData': 'https://www.lifemiles.com/lifemiles/air-redemption-flight ',
  'arLifemilesAndMoney': 'https://www.lifemiles.com/lifemiles/air-redemption-flexible-payment/',
  'arPricingPromotion': 'https://www.lifemiles.com/lifemiles/air-redemption-pricing-promotion/',
  'arGetTravelers': 'https://www.lifemiles.com/lifemiles/air-redemption-travelers/',
  'arRedeem': 'https://www.lifemiles.com/lifemiles/air-redemption-redeem',
  'arConfirmation': 'https://www.lifemiles.com/lifemiles/air-redemption-confirmation',

  'getWatchlist': 'https://www.lifemiles.com/lifemiles/air-redemption-get-watchlist',
  'saveWatchlist': 'https://www.lifemiles.com/lifemiles/air-redemption-save-watchlist',
  
  'renderFlyPartners': 'https://www.lifemiles.com/lifemiles/fly-partners',
  'getAirlinePartner': 'https://www.lifemiles.com/lifemiles/partners-airlines',
  'getHotelPartner': 'https://www.lifemiles.com/lifemiles/partners-hotels',
  'getRetailerPartner': 'https://www.lifemiles.com/lifemiles/partners-retailer',
  'renderFlyUpgrades':  'https://www.lifemiles.com/lifemiles/fly-upgrades',
  'renderFlyBagagge':  'https://www.lifemiles.com/lifemiles/fly-bagagge',  
  'renderFlyVIPLounges':  'https://www.lifemiles.com/lifemiles/fly-lounges',
  'renderAVEliteProgram': 'https://www.lifemiles.com/lifemiles/fly-avianca-elite',
  
  'generalError': 'https://private-4c4f50-homepage9.apiary-mock.com/error/general',
  'updateCreditCard':'https://www.lifemiles.com/lifemiles/credit-card-on-file-update',
  'deleteCreditCard': 'https://www.lifemiles.com/lifemiles/credit-card-on-file-delete',
  'addCreditCard': 'https://www.lifemiles.com/lifemiles/credit-card-on-file-add',
  
  'ghostCards': 'https://www.lifemiles.com/lifemiles/ghost-card-form',
  'ghostCardsConfirmation': 'https://www.lifemiles.com/lifemiles/ghost-card-accrual',
  'ghostCardsEnrollment':'https://www.lifemiles.com/lifemiles/ghost-card-enrollment',
  
  'resetPassword1': 'https://www.lifemiles.com/lifemiles/step-one/retrieve',
  'resetPassword2': 'https://www.lifemiles.com/lifemiles/account-security-question-retrieve',
  'resetPassword3': 'https://www.lifemiles.com/lifemiles/account-security-question-send',
  'resetPasswordEnd': 'https://www.lifemiles.com/lifemiles/step-three/retrieve',
  'resetPassSend': 'https://www.lifemiles.com/lifemiles/account-security-question-reset/send',
  
  'privacyPolicyGDPR': 'https://private-4c4f50-homepage9.apiary-mock.com/privacyPolicyGDPR',
  'getCardDocType': 'https://private-4c4f50-homepage9.apiary-mock.com/integrator/v1/general/getCarddoctype',
  
  'getLanding': 'https://www.lifemiles.com/lifemiles/club-lifemiles-subscription-landing',
  'paymentSubcription': 'https://www.lifemiles.com/lifemiles/club-lifemiles-subscription-plan-info',
  'confirmationClubLifemiles':'https://www.lifemiles.com/lifemiles/club-lifemiles-subscribe',
  'manageClubLifemiles':'https://www.lifemiles.com/lifemiles/club-lifemiles-subscription-manage',
  'cancelClubLifemiles':'https://www.lifemiles.com/lifemiles/club-lifemiles-subscription-cancellation',
  'changeCardClubLifemiles':'https://www.lifemiles.com/lifemiles/club-lifemiles-card-change',
  
  'affiliationProcess':'https://private-4c4f50-homepage9.apiary-mock.com/affiliationProcess',
  
  'binRequest': 'https://www.lifemiles.com/lifemiles/credit-card-on-file-bin-not-saved',
  'paymentCountries': 'https://www.lifemiles.com/lifemiles/payment-countries',
  'paymentFranchises': 'https://www.lifemiles.com/lifemiles/payment-franchises',
  'paymentStates': 'https://www.lifemiles.com/lifemiles/payment-states',
  'paymentDocuments': 'https://www.lifemiles.com/lifemiles/payment-documents',
  'travelerCompanion': 'https://www.lifemiles.com/lifemiles/account-get-companions',
  
  'getIpUrl':'https://api.ipify.org?format=json',
  
  'stay-hotels': 'https://www.lifemiles.com/lifemiles/stay-hotels',
  'stay-hotel-partners':'https://www.lifemiles.com/lifemiles/stay-hotel-partners',
  'stay-things-to-do':'https://www.lifemiles.com/lifemiles/stay-things-to-do',
  'getCreditCard':'https://www.lifemiles.com/lifemiles/credit-card-get',
  'getCreditCardConvertPoint':'https://www.lifemiles.com/lifemiles/credit-card-convert',
  'getCreditCardBenefits':'https://www.lifemiles.com/lifemiles/credit-card-benefits',
  'getCreditCardApplication':'https://www.lifemiles.com/lifemiles/credit-card-application',
  'getCreditCardLead': 'https://www.lifemiles.com/lifemiles/credit-card-cobrand-generation',
  
  'shoppingPartners': 'https://www.lifemiles.com/lifemiles/shop-shopping-partners',
  
  'dealsCategory': 'https://www.lifemiles.com/lifemiles/deals-render/',
  'dealsAllDeals': 'https://www.lifemiles.com/lifemiles/deals-all-deals',
  'dealsDetail': 'https://www.lifemiles.com/lifemiles/deals-detail/',
  'dealsConfirmation': 'https://www.lifemiles.com/lifemiles/deals-confirmation-page',
  'authenticatedDealsConfirmation': 'https://www.lifemiles.com/lifemiles/deals-confirmation-page-restricted',
  'dealsYourDeals': 'https://www.lifemiles.com/lifemiles/deals-your-deals/',

  'unsubscribe': 'https://www.lifemiles.com/lifemiles/unsubscribe-step-one',
  'unsubscribeConfirmation': 'https://www.lifemiles.com/lifemiles/unsubscribe-step-two/',
  'ofac':'https://www.lifemiles.com/lifemiles/lac-get-laws-per-country/',
  'allLaws':'https://www.lifemiles.com/lifemiles/lac-get-countries-per-law/',
  'gdprTerms':'https://www.lifemiles.com/lifemiles/terms-with-laws',
  'privacyPolicyModal' : 'https://www.lifemiles.com/lifemiles/terms-privacy-policy/',
  'maxTravelCompanion': 'https://www.lifemiles.com/lifemiles/configuration-parameters-max-travel-partner/',

  'bonusSubscription2x1':'https://www.lifemiles.com/lifemiles/promotion-landing-promo',
  'submitBonusSubscription2x1':'https://www.lifemiles.com/lifemiles/promotion-subscription/',
  'dealsSearchData':'https://www.lifemiles.com/lifemiles/deals-search/',
  
  "errorMessages": "http://localhost:1337/?co/?la/cms/v1/error/?cd/error-description.entity.json",

  
  'turboLanding':'https://www.lifemiles.com/lifemiles/turbo-landing',
  'getTurboPayment': 'https://www.lifemiles.com/lifemiles/turbo-payment',
  'turboPaymentConfirmation': 'https://www.lifemiles.com/lifemiles/turbo-subscribe/',
  'turboWaitModal': 'https://www.lifemiles.com/lifemiles/turbo-on-hold-cancel-modal',
  'turboCancelModal':'https://www.lifemiles.com/lifemiles/turbo-cancel-modal',
  'turboSendCancel':'https://www.lifemiles.com/lifemiles/turbo-subscription-cancellation/',
  'turboPausedModal':'https://www.lifemiles.com/lifemiles/turbo-reactive-modal',
  'turboKnowMoreModal':'https://www.lifemiles.com/lifemiles/turbo-know-more',
  'turboChangeCard':'https://www.lifemiles.com/lifemiles/turbo-card-change',
  'turboReactiveSubscription':'https://www.lifemiles.com/lifemiles/turbo-reactive-subscription',
  'turboSendSurvey':'https://www.lifemiles.com/lifemiles/turbo-on-hold-subscribe',
  'turboChangePlan':'https://www.lifemiles.com/lifemiles/turbo-change-plan-modal/',
  'turboChangePlanConfirm':'https://www.lifemiles.com/lifemiles/turbo-change-plan',
  'turboSurveyCancel': 'https://www.lifemiles.com/lifemiles/turbo-survey-cancel',

  'lmApp': 'https://www.lifemiles.com/lifemiles/landing-lifemiles-app',
  'renderFlyRetro': 'https://www.lifemiles.com/lifemiles/retro-landing',
  'updateFlyRetro': 'https://www.lifemiles.com/lifemiles/retro-set-info',
  'iguama': 'https://www.lifemiles.com/lifemiles/landing-iguama',

    
//MyTrips
  "myTripsLanding":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripsLanding",
  "myTripsDetails":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripsDetails",
  "myTripReservation":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripReservation",
  "myTripCancelModal":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripsCancelModal",
  
  // saua
   'upgrade-sections':'https://www.lifemiles.com/lifemiles/saua-sections',
   'upgrade-traveler':'https://www.lifemiles.com/lifemiles/saua-traveler',
   'upgrade-flight':'https://www.lifemiles.com/lifemiles/saua-flight',
   'upgrade-redeem': 'https://www.lifemiles.com/lifemiles/saua-redeem',
   'upgrade-ignore': 'https://www.lifemiles.com/lifemiles/saua-ignore',
   'upgrade-confirm': 'https://www.lifemiles.com/lifemiles/saua-confirm'
};

const envHost = 'https://www.lifemiles.com/';

const if1Pw3 = "ALFew1HfOa7lunUMTISPqOlYepLgfZnbSoAf+H6Z2v+tG/XwRJWyIZUVFSe2WjLc1tzB8wx7vvQhVI9BYAajznsBqYpZhxJ+8CLieB9ZtDCgTgwtkVrWq4TzYCkDMTEMqm09xqoqXqcGlir9yXoBCQDFOYpwQ+fUY/jT/Mg2VAjzbo9fszhjb5oyzF+t+LeIukbkdJ17qtswfOizrEFOQ1YHAYj/t2hXQCrLa6YaURrQSlr6lxUEssjzg7qblKgyRovroRJULW1ZQcMRBcD5o6n/QokHtWr1/ijZbFA65JAcx2Rpvc9F9BCHzfgizp7iker/ojEUTfcSR4zwcprZXP0=";

const GMAPS_KEY = 'AIzaSyAd6ItDHw72q7ARf0euhnkS5-ayLC5opW4';

module.exports = {
  endpoints,
  envHost,
  if1Pw3,
  GMAPS_KEY
};