(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{191:function(t){t.exports=JSON.parse('{"app-name":"GoToWhere","app-desc":"Open city data map","app-license-message":"Licensed under GPLv3 License. This application is intented for educational researches, but NOT for commericial uses.","rotate-phone-message":"Please rotate your phone to portrait.<br />GoToWhere does not support mobile landscape mode currently.","rotate-phone-ignore-btn":"Ignore this message","startup-status-initializing":"Initializing...","startup-status-not-supported":"Your browser does not support GoToWhere scripts.","startup-status-loading-plugins":"Loading plugins...","startup-status-fetching-reference-db":"Downloading transit references...","startup-status-obtaining-db-version":"Obtaining database versions...","startup-status-preparing-update":"Preparing database update...","startup-status-checking-db-update":"Checking database update...","startup-status-validating-db":"Validating database...","startup-status-load-db-take-some-time":"Database update can take some time. Please wait and do not leave this screen.","startup-status-downloading-db":"Downloading database...","startup-status-loading-agency":"Loading agency data...","startup-status-updating-agency":"Updating agency data...","startup-status-loading-calendar":"Loading regular schedules data...","startup-status-updating-calendar":"Updating regular schedules data...","startup-status-loading-calendar_dates":"Loading specific schedules data...","startup-status-updating-calendar_dates":"Updating specific schedules data...","startup-status-loading-frequencies":"Loading frequency data...","startup-status-updating-frequencies":"Updating frequency data...","startup-status-loading-routes":"Loading routes data...","startup-status-updating-routes":"Updating routes data...","startup-status-loading-trips":"Loading trips data...","startup-status-updating-trips":"Updating trips data...","startup-status-loading-stops":"Loading stops data...","startup-status-updating-stops":"Updating stops data...","startup-status-loading-stop_time_paths":"Loading paths data...","startup-status-updating-stop_time_paths":"Updating paths data...","startup-status-loading-stop_times":"Loading stop times data...","startup-status-updating-stop_times":"Updating stop times data...","startup-status-loading-fare_attributes":"Loading fare attributes data...","startup-status-updating-fare_attributes":"Updating fare attributes data...","startup-status-loading-fare_rules":"Loading fare rules data...","startup-status-updating-fare_rules":"Updating fare rules data...","startup-status-init-map":"Initializing map...","startup-status-finish":"Finish!","updated-title":"Updated","updated-header":"Updated to $1","updated-desc":"You have just updated to version $1. These updates provide bug fixes and new features to the application. These are the changes made to the application:","updated-okay-btn":"OK","nav-plugins":"Plugins","nav-settings":"Settings","nav-about":"About","nav-feedback":"Feedback/Report","about-title":"About","about-desc":"GoToWhere is a platform and an interface for displaying open city data. It does not have any implementation of fetching city data itself. It requires plugins to tell GoToWhere how to get the city data and displaying it correctly.","error-plugins-title":"Plugin Error","error-plugins-desc":"The following plugin(s) errored on load. Please click on their names for more details and solutions:","plugin-closed-api-title":"Closed API","plugin-closed-api-confirm-message":"Do you still want to install this plugin?","plugin-closed-api-confirm-yes":"Yes","plugin-closed-api-confirm-no":"No","settings-title":"Settings","settings-option-yes":"Yes","settings-option-no":"No","settings-save-and-close-btn":"Save & Close","settings-apply-btn":"Apply","settings-invalid-value":"The value for \\"$1\\" is invalid.","settings-key-preferred-language":"Preferred Language","settings-key-preferred-language-desc":"Select your preferred UI language. Beware that some plugins might not support your selected language.","settings-key-min-nearby-transit-search-range":"Minimum nearby transit search range","settings-key-min-nearby-transit-search-range-desc":"Minimum range in metres to search for nearby transit. Must be less than 10000 m","settings-key-max-nearby-transit-to-be-displayed":"Maximum nearby transit to be displayed","settings-key-max-nearby-transit-to-be-displayed-desc":"Maxmium nearby transit to be displayed in the Home UI. Must be less than 100.","settings-key-use-cors-proxy":"Use CORS Proxy","settings-key-use-cors-proxy-desc":"For security reasons, browsers are not allowed to perform cross domain requests, aka CORS Policy. This will disallow plugins to fetch data from servers without required headers. This proxy is for adding Access-Control-Allow-Origin headers to server responses.","settings-key-cors-proxy-server":"CORS Proxy Server URL","settings-key-cors-proxy-server-desc":"It must be a secure URL starting with \\"https://\\" and ending with a slash \\"/\\".","settings-key-cors-check-bypass":"Bypass app\'s CORS Check","settings-key-cors-check-bypass-desc":"For development use only. This will bypass the app\'s internal CORS check, disable CORS proxy. Requests will only work if the web browser\'s CORS policy is disabled.","settings-key-show-debug-msg":"Show Debug Messages","settings-key-show-debug-msg-desc":"Enable to show all debug messages on screen. (Warning, Error Messages)","home-tab-transit":"Transit","home-tab-alerts":"Alerts","location-error":"Location Error","location-error-user-denied-location":"You have denied this app to obtain your current location. You can still use this app, but location is required to find nearby routes.<br />You can use the following steps to unblock location access:<br /><br /><a href=\\"https://stackoverflow.com/a/14444695\\" target=\\"_blank\\">iOS</a> | <a href=\\"https://support.google.com/chrome/answer/114662?co=GENIE.Platform%3DAndroid&hl=en\\" target=\\"_blank\\">Android</a>","location-error-could-not-get-location":"Could not get your current location. Please ensure you are in a open area while using this app.","location-error-unknown":"Unknown Error: $1","gtfs-view-alerts-title":"Alerts","transit-eta-no-timetable":"No service timetable.","transit-eta-not-in-service":"Not in service time.","transit-route-tab-route-list":"Route","transit-route-tab-timetable":"Timetable","transit-route-tab-other-routes":"Alternatives","transit-circular-path":"Circular","transit-calendar-header-timeslot":"Time Slot","transit-calendar-header-headway-min":"Interval (min)","transit-calendar-from-monday-to-sunday":"Monday to Sunday","transit-calendar-from-monday-to-sunday-dates":"Monday to Sunday","transit-calendar-from-monday-to-saturday":"Monday to Satuday","transit-calendar-from-monday-to-saturday-dates":"Monday to Satuday","transit-calendar-from-monday-to-friday":"Monday to Friday","transit-calendar-from-monday-to-friday-dates":"Monday to Friday","transit-calendar-from-monday-to-thursday":"Monday to Thursday","transit-calendar-from-monday-to-thursday-dates":"Monday to Thursday","transit-calendar-from-saturday-to-sunday":"Saturday to Sunday","transit-calendar-from-saturday-to-sunday-dates":"Saturday to Sunday","transit-calendar-on-saturday":"Only on Saturday","transit-calendar-on-saturday-dates":"Saturday","transit-calendar-on-sunday":"Only on Sunday","transit-calendar-on-sunday-dates":"Sunday","transit-searching-nearby-routes":"Searching for nearby routes...","transit-locating-your-location":"Getting your current location...","transit-eta-sort-all":"All","transit-eta-placeholder-search-for-transit":"Search for transit...","transit-eta":"Estimated Time Arrival","transit-eta-to":"To","transit-eta-metres":"m","transit-eta-route-not-available":"Not available to this route","transit-eta-route-not-available-short":"N/A","transit-eta-retrieving":"Retrieving...","transit-eta-retrieving-data":"Retrieving data...","transit-eta-no-eta-providers":"No ETA providers available. You can try to install plugins providing ETA for this company.","transit-eta-no-data-received":"No data received.","transit-eta-no-schedules-pending":"No schedules received from server.","transit-eta-no-schedules-pending-short":"No schedules","transit-eta-live":"Real-time","transit-eta-scheduled":"Scheduled","transit-eta-error-fetching-eta":"Could not fetch ETA data.","transit-eta-error-fetching-eta-short":"Failed","transit-eta-requesting-data":"Getting $1/$2 data...","transit-eta-transit-notice":"Transit Notice","transit-eta-arrived-left":"Arrived/Left","transit-eta-every-minutes":"Every $1 {{plural:$1|min|mins}}","transit-eta-minutes":"$1 {{plural:$1|min|mins}}","transit-eta-no-routes-found-10-km":"No routes are found in 10 km range.","transit-eta-no-routes-found-nearby-extended-range":"No routes $1 m nearby! The following routes are in $2 m range.","transit-eta-no-plugins-providing-transit-data":"You do not have any plugins providing transit data. Install one from the plugins manager.","transit-eta-alerts-affecting-stop":"$1 alerts affecting this stop.","transit-eta-view-alerts-affecting-stop":"View","plugin-closed-api-warning":"This plugin uses a Closed API. By using this plugin, you will take all the risks and responsibilities and the developer cannot be liable. Please read the plugin license for more details.","plugin-error-dependency-not-installed":"The package \\"$1\\" requires \\"$2\\" to be installed. You must install it in Plugin Manager in order to enable this plugin.","plugin-error-dependency-version-too-old":"The package \\"$1\\" requires a newer version of \\"$2\\" to be installed. You must install a new version in Plugin Manager in order to enable this plugin.","plugin-error-no-module-returned":"Error: No module returned from \\"$1\\"!","plugin-error-no-onload-function":"Error: \\"$1\\" does not contain onload function!","plugin-error-onload-function-error":"Error: \\"$1\\" returned error on onload function!","plugin-status-not-enabled":"Not enabled","plugin-error-could-not-fetch-info":"Could not fetch information from plugins server.","plugin-manager-title":"Plugins","plugin-manager-loading":"Loading...","plugin-manager-tab-all":"All","plugin-manager-tab-installed":"Installed","view-plugin-title":"Plugin Details","view-plugin-repos-cannot-find-package":"Could not find required package in repository.","view-plugin-details":"Details","view-plugin-details-name":"Name","view-plugin-details-fullname":"Full Name","view-plugin-details-author":"Author","view-plugin-details-version":"Version","view-plugin-details-github":"GitHub","view-plugin-details-package":"Package","view-plugin-details-description":"Description","view-plugin-installation":"Installation","view-plugin-installation-plugin-not-available":"This plugin is not available in this version of GoToWhere.","view-plugin-installation-not-installed":"Not installed","view-plugin-installation-installed-running":"Installed and running","view-plugin-installation-not-enabled":"Not enabled","view-plugin-installation-plugin-load-errors":"Plugin load errors ($1)","view-plugin-installation-unknown-status-code":"Unknown status code ($1)","view-plugin-installation-status":"Status","view-plugin-installation-message":"Message","view-plugin-installation-uninstall-and-restart-btn":"Uninstall and restart","view-plugin-installation-install-and-restart-btn":"Install and restart","error-plugins-summary-plugin-not-available":"Plugin Not Available","error-plugins-summary-plugin-load":"Plugin Load","error-plugins-summary-unknown-status-code":"Unknown status code","error-plugins-solution-plugin-not-available":"This plugin has been deprecated or removed from GoToWhere. It cannot be used in this version of GoToWhere. If you think this is a problem, report to the GitHub issue tracker.","error-plugins-solution-plugin-load":"Report the status code ($1) to the GitHub issue tracker.","error-plugins-solution-unknown-status-code":"Report the unknown status code ($1) to the GitHub issue tracker.","error-plugins-message":"Message:","error-plugins-solutions":"Solutions:","plugin-deprecated-auto-uninstall":"Plugin \\"$1\\" has been deprecated. It will be uninstalled automatically. You can safely ignore this message.","split-panel-back":"Back","split-panel-move-up":"Move Up","split-panel-move-down":"Move Down","getting-started-wizard-step-language":"Language","getting-started-wizard-step-plugins":"Plugins","getting-started-wizard-step-finish":"Finish","getting-started-wizard-step-language-welcome":"Welcome!","getting-started-wizard-step-language-desc":"It seems it is your first time to use this app! This wizard can help you to install city data plugins that is related to your region by going through a few steps.","getting-started-wizard-step-language-choose-language":"Choose your preferred language:","getting-started-wizard-step-language-input-language":"Language:","getting-started-wizard-step-language-help-translate":"You can help to translate the app to more languages!","getting-started-wizard-step-plugins-select":"Select","getting-started-wizard-step-plugins-select-region":"Please select your region to find and install related plugins:","getting-started-wizard-step-plugins-input-region":"Available Region(s):","getting-started-wizard-step-plugins-loading":"Loading...","getting-started-wizard-step-plugins-install-count":"$1 over $2 {{plural:$1|plugin|plugins}} will be installed.","getting-started-wizard-step-plugins-closed-api":"This plugin uses a Closed API.","getting-started-wizard-step-finish-finish-text":"Finish!","getting-started-wizard-step-finish-desc":"How fast it is! You are ready to use the app with tons of useful data showing on your device!","getting-started-wizard-step-finish-press-button":"By pressing the button below, $1 {{plural:$1|plugin|plugins}} will be installed on your device.","getting-started-wizard-step-finish-must-install":"<em>You must install at least 1 plugin to make the application work. Please go back and pick a region.</em>","getting-started-wizard-step-finish-get-started-btn":"Get Started","getting-started-please-wait":"Please Wait!","getting-started-please-wait-desc":"We are installing your plugins into your device! Just a moment and you will be able to access the world of city data!","getting-started-installing-plugins":"Installing plugin checksums...","getting-started-error":"Error","getting-started-error-plugin-network-error":"The following plugin(s) cannot be installed because of a network error. You may try to refresh the page to try again. If the problem persists, report it to the GitHub issue tracker.","getting-started-error-refresh-btn":"Refresh","getting-started-error-affected-plugins":"Affected plugins:"}')}}]);
//# sourceMappingURL=43.31ba54e706ad98b7aed4.js.map