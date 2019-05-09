const endpoints = {
  'loginLocation':'https://qas.lifemiles.com/lifemiles/geolocalization-ip',
  'gmapGeolocation':'https://maps.googleapis.com/maps/api/geocode/json?',
  'geolocation': 'https://https-api.apigurus.com/iplocation/v1.8/locateip', 
  'getCurrencies': 'https://qas.lifemiles.net/lifemiles/get-currencies',
  'currencySymbol': 'https://qas.lifemiles.net/lifemiles/currency-symbol',
  'homepage': 'https://qas.lifemiles.net/lifemiles/home',
  'partnersSearch': 'https://qas.lifemiles.net/lifemiles/partners-search',
  'userLoginHttps': 'https://qas.lifemiles.net/lifemiles/account-user-login',
  'extraUserInfo': 'https://qas.lifemiles.net/lifemiles/air-redemption-discount-voucher/',
  'enrollment': 'https://qas.lifemiles.net/integrator/v1/account/enrollrequest',
  'menuCountries': 'https://qas.lifemiles.net/lifemiles/general-countries-direct-communication',
  
  'renderLogin':'https://qas.lifemiles.net/lifemiles/lifemiles-account-sign-in',
  
  'oauth2Authorization': 'https://qas.lifemiles.net/integrator/v1/authentication/oauth/authorize',
  'oauth2Token': 'https://qas.lifemiles.net/integrator/v1/authentication/oauth/token',
  'oauth2Login': 'https://qas.lifemiles.net/integrator/v1/authentication/login',
  'autoLogin': 'https://qas.lifemiles.net/lifemiles/auto-login',
  'logout': 'https://qas.lifemiles.net/lifemiles/logout',
  'getCountries':'https://qas.lifemiles.net/lifemiles/get-countries',
  'getStates': 'https://qas.lifemiles.net/lifemiles/get-states',
  'getCities': 'https://qas.lifemiles.net/lifemiles/get-cities',
  'getDeliveryStates': 'https://qas.lifemiles.net/lifemiles/get-delivery-states',
  'getDeliveryCities': 'https://qas.lifemiles.net/lifemiles/get-delivery-cities',
  'getDocType': 'https://qas.lifemiles.net/lifemiles/get-document-type',
  'getGender': 'https://qas.lifemiles.net/lifemiles/get-gender', 
  'getPhoneNumber':'https://qas.lifemiles.net/lifemiles/get-phone-number',
  'getTravelersInfo': 'https://qas.lifemiles.net/lifemiles/account-retrieve-member-info/',
  'getPreAffiliateInfo':'https://qas.lifemiles.net/lifemiles/account-retrieve-member-info-cipher',
  'retailIdCreate': 'https://qas.lifemiles.net/lifemiles/retail-id-create',
  'retailIdUpdate': 'https://qas.lifemiles.net/lifemiles/retail-id-update',
  'retailIdOption': 'https://qas.lifemiles.net/lifemiles/retail-id-options',
  'retailIdDocumentId': 'https://qas.lifemiles.net/lifemiles/retail-id-search-by-document',
  'retailIdLmNumber': 'https://qas.lifemiles.net/lifemiles/retail-id-search-by-lifemiles-number',   
  
  'aboutYou': 'https://qas.lifemiles.net/lifemiles/about',
  
  'renderContact': 'https://qas.lifemiles.net/lifemiles/contact',
  'contactRequest': 'https://qas.lifemiles.net/lifemiles/contact-email',
  
  'renderBecomePartner': 'https://qas.lifemiles.net/lifemiles/become-a-partner',
  'becomePartnerRequest': 'https://qas.lifemiles.net/lifemiles/become-a-partner-email',
  
  'drive': 'https://qas.lifemiles.net/lifemiles/drive',
  
  'eat': 'https://qas.lifemiles.net/lifemiles/eat',
  
  'emailSt': 'https://qas.lifemiles.net/lifemiles/single-transaction-decrypt-mail',
  
  'privacyPolice': 'https://qas.lifemiles.net/lifemiles/privacy-policy',
  
  'termsConditions': 'https://qas.lifemiles.net/lifemiles/terms-and-conditions',
  
  'helpCenter': 'https://qas.lifemiles.net/lifemiles/help-center',
  'google-api-autocomplete': 'https://qas.lifemiles.net/lifemiles/google-api-autocomplete',
  'help-center-airports':'https://qas.lifemiles.net/lifemiles/help-center-airports',
  
  'renderEnrollment': 'https://qas.lifemiles.net/lifemiles/enrollment',
  'enrollmentRequest': 'https://qas.lifemiles.net/lifemiles/request-enrollment',
  
  'accountOverview': 'https://qas.lifemiles.net/lifemiles/account-overview',
  'accountOverviewTransactions': 'https://qas.lifemiles.net/lifemiles/single-transaction-overview-transaction',
  'accountActivity': ' https://qas.lifemiles.net/lifemiles/account-activity',
  'accountActivityByMonth': ' https://qas.lifemiles.net/lifemiles/single-transaction-activity-date',
  'accountProfile': 'https://qas.lifemiles.net/lifemiles/account-profile',
  'updateProfile': 'https://qas.lifemiles.net/lifemiles/account-profile-update',
  'getEliteProfile': 'https://qas.lifemiles.net/lifemiles/account-profile-get-elite',
  'addReddressNumber': 'https://qas.lifemiles.net/lifemiles/account-redress-number',
  'addTravelPartner': 'https://qas.lifemiles.net/lifemiles/account-travel-partner',
  'renderManageCard': 'https://qas.lifemiles.net/lifemiles/manage-card',
  'updateCardState': 'https://qas.lifemiles.net/lifemiles/manage-card-update-state',
  'updateCardPin': 'https://qas.lifemiles.net/lifemiles/account-set-pin/',
  'getHeaderAccount': 'https://qas.lifemiles.net/lifemiles/account-header/',
  
  'getFavorites': 'https://private-4b1172-lifemiles.apiary-mock.com/account/levelUp',
  'getLevelUp': 'https://private-4b1172-lifemiles.apiary-mock.com/account/levelUp',
  'getPaymentModal': 'https://qas.lifemiles.net/lifemiles/account-payment-modal',
  'getSingleConfirmation': 'https://qas.lifemiles.net/lifemiles/account-activity-confirmation',
  'getAddLMNumber': 'https://private-f285c-lifemiles.apiary-mock.com/add-lm-number',
  'getAddLMNumberDetails': 'https://private-f285c-lifemiles.apiary-mock.com/add-lm-number/details',
  
  'renderMilesProcess': 'https://qas.lifemiles.net/lifemiles/miles-product-selection',
  
  'buyMilesRenderHttps': 'https://qas.lifemiles.net/lifemiles/buy-miles',
  'buyMilesPaymentHttps': 'https://qas.lifemiles.net/lifemiles/buy-miles-payment',
  'buyMilesConfirmationHttps': 'https://qas.lifemiles.net/lifemiles/buy-miles-confirmation',
  
  'milesTransferRecipient': 'https://qas.lifemiles.net/lifemiles/transfer-miles-recipient',
  'milesTransferAmount': 'https://qas.lifemiles.net/lifemiles/transfer-miles-amount',
  'milesTransferPayment': 'https://qas.lifemiles.net/lifemiles/transfer-miles-payment',
  'milesTransferConfirmation': 'https://qas.lifemiles.net/lifemiles/transfer-miles-confirmation',
  
  'multiplyMilesRender': 'https://qas.lifemiles.net/lifemiles/multiply-miles',
  'multiplyMilesPayment': 'https://qas.lifemiles.net/lifemiles/multiply-miles-payment',
  'multiplyMilesPrePaymentRender':'https://qas.lifemiles.net/lifemiles/multiply-miles-pre-payment/',
  'multiplyMilesConfirmation': 'https://qas.lifemiles.net/lifemiles/multiply-miles-confirmation',
  
  'rncRender': 'https://qas.lifemiles.net/lifemiles/request-new-card/',
  'rncSummary': 'https://qas.lifemiles.net/lifemiles/request-new-card-summary',
  'rncConfirmation':'https://qas.lifemiles.net/lifemiles/request-new-card-confirmation',
  
  'arBookerCoreData': 'https://qas.lifemiles.net/lifemiles/air-redemption-booker',
  'arHeaderData': 'https://qas.lifemiles.net/lifemiles/air-redemption-header',
  'arPublicCalendarData': 'https://qas.lifemiles.net/lifemiles/air-redemption-calendar-public',
  'arPrivateCalendarData': 'https://qas.lifemiles.net/lifemiles/air-redemption-calendar',
  'arValidateFlightLogin': 'https://qas.lifemiles.net/lifemiles/air-redemption-validate-flight-login',
  'arPublicFlightData': 'https://qas.lifemiles.net/lifemiles/air-redemption-flight-public',
  'arPrivateFlightData': 'https://qas.lifemiles.net/lifemiles/air-redemption-flight ',
  'arLifemilesAndMoney': 'https://qas.lifemiles.net/lifemiles/air-redemption-flexible-payment/',
  'arPricingPromotion': 'https://qas.lifemiles.net/lifemiles/air-redemption-pricing-promotion/',
  'arGetTravelers': 'https://qas.lifemiles.net/lifemiles/air-redemption-travelers/',
  'arRedeem': 'https://qas.lifemiles.net/lifemiles/air-redemption-redeem',
  'arConfirmation': 'https://qas.lifemiles.net/lifemiles/air-redemption-confirmation',
  
  'renderFlyPartners': 'https://qas.lifemiles.net/lifemiles/fly-partners',
  'getAirlinePartner': 'https://qas.lifemiles.net/lifemiles/partners-airlines',
  'getHotelPartner': 'https://qas.lifemiles.net/lifemiles/partners-hotels',
  'getRetailerPartner': 'https://qas.lifemiles.net/lifemiles/partners-retailer',
  'renderFlyUpgrades':  'https://qas.lifemiles.net/lifemiles/fly-upgrades',
  'renderFlyBagagge':  'https://qas.lifemiles.net/lifemiles/fly-bagagge',  
  'renderFlyVIPLounges':  'https://qas.lifemiles.net/lifemiles/fly-lounges',
  'renderAVEliteProgram': 'https://qas.lifemiles.net/lifemiles/fly-avianca-elite',
  
  'generalError': 'https://private-4c4f50-homepage9.apiary-mock.com/error/general',
  'updateCreditCard':'https://qas.lifemiles.net/lifemiles/credit-card-on-file-update',
  'deleteCreditCard': 'https://qas.lifemiles.net/lifemiles/credit-card-on-file-delete',
  'addCreditCard': 'https://qas.lifemiles.net/lifemiles/credit-card-on-file-add',
  
  'ghostCards': 'https://qas.lifemiles.net/lifemiles/ghost-card-form',
  'ghostCardsConfirmation': 'https://qas.lifemiles.net/lifemiles/ghost-card-accrual',
  'ghostCardsEnrollment':'https://qas.lifemiles.net/lifemiles/ghost-card-enrollment',
  
  'resetPassword1': 'https://qas.lifemiles.net/lifemiles/step-one/retrieve',
  'resetPassword2': 'https://qas.lifemiles.net/lifemiles/account-security-question-retrieve',
  'resetPassword3': 'https://qas.lifemiles.net/lifemiles/account-security-question-send',
  'resetPasswordEnd': 'https://qas.lifemiles.net/lifemiles/step-three/retrieve',
  'resetPassSend': 'https://qas.lifemiles.net/lifemiles/account-security-question-reset/send',
  
  'privacyPolicyGDPR': 'https://private-4c4f50-homepage9.apiary-mock.com/privacyPolicyGDPR',
  'getCardDocType': 'https://private-4c4f50-homepage9.apiary-mock.com/integrator/v1/general/getCarddoctype',
  
  'getLanding': 'https://qas.lifemiles.net/lifemiles/club-lifemiles-subscription-landing',
  'paymentSubcription': 'https://qas.lifemiles.net/lifemiles/club-lifemiles-subscription-plan-info',
  'confirmationClubLifemiles':'https://qas.lifemiles.net/lifemiles/club-lifemiles-subscribe',
  'manageClubLifemiles':'https://qas.lifemiles.net/lifemiles/club-lifemiles-subscription-manage',
  'cancelClubLifemiles':'https://qas.lifemiles.net/lifemiles/club-lifemiles-subscription-cancellation',
  'changeCardClubLifemiles':'https://qas.lifemiles.net/lifemiles/club-lifemiles-card-change',
  
  'affiliationProcess':'https://private-4c4f50-homepage9.apiary-mock.com/affiliationProcess',  
  
  'binRequest': 'https://qas.lifemiles.net/lifemiles/credit-card-on-file-bin-not-saved',
  'paymentCountries': 'https://qas.lifemiles.net/lifemiles/payment-countries',
  'paymentFranchises': 'https://qas.lifemiles.net/lifemiles/payment-franchises',
  'paymentStates': 'https://qas.lifemiles.net/lifemiles/payment-states',
  'paymentDocuments': 'https://qas.lifemiles.net/lifemiles/payment-documents',
  'travelerCompanion': 'https://qas.lifemiles.net/lifemiles/account-get-companions',
  
  'getIpUrl':'https://api.ipify.org?format=json',
  
  'stay-hotels': 'https://qas.lifemiles.net/lifemiles/stay-hotels',
  'stay-hotel-partners':'https://qas.lifemiles.net/lifemiles/stay-hotel-partners',
  'stay-things-to-do':'https://qas.lifemiles.net/lifemiles/stay-things-to-do',
  'getCreditCard':'https://qas.lifemiles.net/lifemiles/credit-card-get',
  'getCreditCardConvertPoint':'https://qas.lifemiles.net/lifemiles/credit-card-convert',
  'getCreditCardBenefits':'https://qas.lifemiles.net/lifemiles/credit-card-benefits',
  'getCreditCardApplication':'https://qas.lifemiles.net/lifemiles/credit-card-application',
  'getCreditCardLead': 'https://qas.lifemiles.net/lifemiles/credit-card-cobrand-generation',
  
  'shoppingPartners': 'https://qas.lifemiles.net/lifemiles/shop-shopping-partners',
  
  'dealsCategory': 'https://qas.lifemiles.net/lifemiles/deals-render/',
  'dealsAllDeals': 'https://qas.lifemiles.net/lifemiles/deals-all-deals',
  'dealsDetail': 'https://qas.lifemiles.net/lifemiles/deals-detail/',
  'dealsConfirmation': 'https://qas.lifemiles.net/lifemiles/deals-confirmation-page',
  'authenticatedDealsConfirmation': 'https://qas.lifemiles.net/lifemiles/deals-confirmation-page-restricted',
  'dealsYourDeals': 'https://qas.lifemiles.net/lifemiles/deals-your-deals/',
  'submitBonusSubscription2x1':'https://qas.lifemiles.net/lifemiles/promotion-subscription/',

  'unsubscribe': 'https://qas.lifemiles.net/lifemiles/unsubscribe-step-one',
  'unsubscribeConfirmation': 'https://qas.lifemiles.net/lifemiles/unsubscribe-step-two/',
  'ofac':'https://qas.lifemiles.net/lifemiles/lac-get-laws-per-country/',
  'allLaws':'https://qas.lifemiles.net/lifemiles/lac-get-countries-per-law/',
  'gdprTerms':'https://qas.lifemiles.net/lifemiles/terms-with-laws',
  'privacyPolicyModal' : 'https://qas.lifemiles.net/lifemiles/terms-privacy-policy/',
  'maxTravelCompanion': 'https://qas.lifemiles.net/lifemiles/configuration-parameters-max-travel-partner/',

  'bonusSubscription2x1':'https://qas.lifemiles.net/lifemiles/promotion-landing-promo',
  'submitBonusSubscription2x1':'https://qas.lifemiles.net/lifemiles/promotion-subscription/',   
  'dealsSearchData':'https://qas.lifemiles.net/lifemiles/deals-search/',

  'errorMessages': 'http://192.168.66.252:1337/?co/?la/cms/v1/error/?cd/error-description.entity.json',

  
  'turboLanding':'https://qas.lifemiles.net/lifemiles/turbo-landing',
  'getTurboPayment': 'https://qas.lifemiles.net/lifemiles/turbo-payment',
  'turboPaymentConfirmation': 'https://qas.lifemiles.net/lifemiles/turbo-subscribe/',
  'turboWaitModal': 'https://qas.lifemiles.net/lifemiles/turbo-on-hold-cancel-modal',
  'turboCancelModal':'https://qas.lifemiles.net/lifemiles/turbo-cancel-modal',
  'turboSendCancel':'https://qas.lifemiles.net/lifemiles/turbo-subscription-cancellation/',
  'turboPausedModal':'https://qas.lifemiles.net/lifemiles/turbo-reactive-modal',
  'turboKnowMoreModal':'https://qas.lifemiles.net/lifemiles/turbo-know-more',
  'turboChangeCard':'https://qas.lifemiles.net/lifemiles/turbo-card-change',
  'turboReactiveSubscription':'https://qas.lifemiles.net/lifemiles/turbo-reactive-subscription',
  'turboSendSurvey':'https://qas.lifemiles.net/lifemiles/turbo-on-hold-subscribe',
  'turboChangePlan':'https://qas.lifemiles.net/lifemiles/turbo-change-plan-modal/',
  'turboChangePlanConfirm':'https://qas.lifemiles.net/lifemiles/turbo-change-plan',
  'turboSurveyCancel': 'https://qas.lifemiles.net/lifemiles/turbo-survey-cancel',

  'renderFlyRetro': 'https://qas.lifemiles.net/lifemiles/retro-landing',
  'updateFlyRetro': 'https://qas.lifemiles.net/lifemiles/retro-set-info',
  'iguama': 'https://qas.lifemiles.net/lifemiles/landing-iguama',

    
//MyTrips
  "myTripsLanding":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripsLanding",
  "myTripsDetails":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripsDetails",
  "myTripReservation":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripReservation",
  "myTripCancelModal":"https://private-f0d6b-homepage9.apiary-mock.com/account/myTripsCancelModal",
   //saua
   'upgrade-sections':'https://qas.lifemiles.net/lifemiles/saua-sections',
   'upgrade-traveler':'https://qas.lifemiles.net/lifemiles/saua-traveler',
   'upgrade-flight':'https://qas.lifemiles.net/lifemiles/saua-flight',
   'upgrade-redeem': 'https://qas.lifemiles.net/lifemiles/saua-redeem',
   'upgrade-ignore': 'https://qas.lifemiles.net/lifemiles/saua-ignore',
   'upgrade-confirm': 'https://qas.lifemiles.net/lifemiles/saua-confirm'
 };
  
  const envHost = 'https://qas.lifemiles.net/';

  const if1Pw3 = "44qOoVTcE3jtu/JuzdGRMqg5vQRqL8r5YX6gZD4UDq+5PTgmew1AlVuCuAHEx/MGMuDCx0lvjgjS6pjar9pKj8TYHjxEpvJ/xtC41OwjV6aSeBggux8nkhu/+oGuZZIi0saNN2/VIyqlAzUtKudKJxMvVet4DfXOfx7ub29CHWU=";

  const GMAPS_KEY = 'AIzaSyCqs8GLRLWlAHQMzFTkR360eAbfPIcaNyY';
  
  module.exports = {
    endpoints,
    envHost,
    if1Pw3,
    GMAPS_KEY
  };
  