(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{203:function(t){t.exports=JSON.parse('{"app-name":"去邊㗎","app-desc":"開放城市數據地圖","app-license-message":"於GPLv3條款下授權使用程式，此應用程式旨在用於教育研究，但不可用於商業用途。","rotate-phone-message":"請將手機轉為縱向模式。<br /> 應用程式目前不支援手機橫向模式。","rotate-phone-ignore-btn":"忽略這訊息","startup-status-initializing":"初始化中...","startup-status-not-supported":"您的瀏覽器不支援應用程式的程式碼。","startup-status-loading-plugins":"正在加載插件...","startup-status-fetching-reference-db":"正在下載交通參考資料...","startup-status-obtaining-db-version":"正在獲取資料庫版本...","startup-status-preparing-update":"正在準備資料庫更新...","startup-status-checking-db-update":"正在檢查資料庫更新...","startup-status-validating-db":"正在檢查資料庫...","startup-status-load-db-take-some-time":"資料庫更新需要時間, 請等待和不要離開畫面。","startup-status-downloading-db":"正在下載資料庫...","startup-status-loading-agency":"正在載入服務類別數據...","startup-status-updating-agency":"正在更新服務類別數據...","startup-status-loading-calendar":"正在載入常規服務日數據...","startup-status-updating-calendar":"正在更新常規服務日數據...","startup-status-loading-calendar_dates":"正在載入指定服務日數據...","startup-status-updating-calendar_dates":"正在更新指定服務日數據...","startup-status-loading-frequencies":"正在載入發車間隔數據...","startup-status-updating-frequencies":"正在更新發車間隔數據...","startup-status-loading-routes":"正在載入路線數據...","startup-status-updating-routes":"正在更新路線數據...","startup-status-loading-trips":"正在載入路段數據...","startup-status-updating-trips":"正在更新路段數據...","startup-status-loading-stops":"正在載入站點數據...","startup-status-updating-stops":"正在更新站點數據...","startup-status-loading-stop_time_paths":"正在載入路徑數據...","startup-status-updating-stop_time_paths":"正在更新路徑數據...","startup-status-loading-stop_times":"正在載入時間點數據...","startup-status-updating-stop_times":"正在更新時間點數據...","startup-status-loading-fare_attributes":"正在載入票價屬性數據...","startup-status-updating-fare_attributes":"正在更新票價屬性數據...","startup-status-loading-fare_rules":"正在載入票價規則數據...","startup-status-updating-fare_rules":"正在更新票價規則數據...","startup-status-init-map":"初始化地圖...","startup-status-finish":"完成！","updated-title":"已更新","updated-header":"已更新到 $1","updated-desc":"您剛剛已更新到版本 $1。 這些更新主要修復錯誤和提供新功能, 以下是更新所做的變更：","updated-okay-btn":"明白","nav-plugins":"插件","nav-settings":"設定","nav-github":"GitHub","nav-about":"關於","nav-feedback":"按這裡建議/報告問題","about-title":"關於","about-desc":"去邊㗎 (GoToWhere) 是利用地圖，用於顯示開放城市數據一個平台。 應用程式本身無法自已尋找和存取任何城市數據，用戶需要安裝不同的插件去讓應用程式存取和正確顯示城市數據。","error-plugins-title":"插件錯誤","error-plugins-desc":"以下插件在加載時出錯，請按插件名稱以獲取更多詳細錯誤訊息和解決方法：","plugin-closed-api-title":"非開放數據","plugin-closed-api-confirm-message":"您仍然想安裝此插件嗎？","plugin-closed-api-confirm-yes":"是","plugin-closed-api-confirm-no":"否","settings-title":"設定","settings-option-yes":"是","settings-option-no":"否","settings-save-and-close-btn":"儲存及關閉","settings-apply-btn":"套用","settings-invalid-value":"\\"$1\\"的設定不正確。","settings-key-preferred-language":"首選語言","settings-key-preferred-language-desc":"選擇您首選語言。 請注意: 某些插件可能不支援您所選擇的語言。","settings-key-min-nearby-transit-search-range":"附近公交最短搜索範圍 (米)","settings-key-min-nearby-transit-search-range-desc":"附近公交最短的搜索範圍，必須少於10000米 (10公里)。","settings-key-max-nearby-transit-to-be-displayed":"最大可顯示的附近公交數量","settings-key-max-nearby-transit-to-be-displayed-desc":"搜索到的附近公交最大可顯示的數量，必須少於100。","settings-key-use-cors-proxy":"使用CORS代理伺服器 (非開放數據用)","settings-key-use-cors-proxy-desc":"出於安全原因，大部分瀏覽器都不允許執行跨域存取（也稱為CORS）。 這將禁止插件從服務器存取非開放數據，CORS代理伺服器能夠解決這個問題。","settings-key-cors-proxy-server":"CORS代理伺服器網址","settings-key-cors-proxy-server-desc":"它必須是一個以\\"https://\\"開頭並以\\"/\\"結尾的網址。","settings-key-cors-check-bypass":"繞過應用程式的內部CORS檢查","settings-key-cors-check-bypass-desc":"僅供開發使用。 這將繞過應用程式的內部CORS檢查，和停止使用CORS代理伺服器。 只有禁用了瀏覽器CORS設定的情況下，才能存取非開放數據。","settings-key-show-debug-msg":"顯示除錯訊息","settings-key-show-debug-msg-desc":"在屏幕上顯示所有除錯訊息。 （警告，錯誤訊息）","home-tab-transit":"交通","home-tab-navigation":"導航 (測試中)","location-from-location-short":"從","location-from-location-long":"出發地","location-to-location-short":"往","location-to-location-long":"目的地","location-move-to-desired-location":"把座標移動到想要的位置","location-move-to-desired-location-confirm-btn":"確定","location-error":"無法獲取當前位置","location-error-user-denied-location":"您選擇了不允許網站獲取您的當前位置。 您仍然可以正常使用程式的其他功能，但是如要搜尋附近的路線，則需要您的當前位置。<br />您可以嘗試用以下步驟重新允許網站獲取您的當前位置：<br /><br /><a href=\\"https://stackoverflow.com/a/14444695\\" target=\\"_blank\\">iOS</a> | <a href=\\"https://support.google.com/chrome/answer/114662?co=GENIE.Platform%3DAndroid&hl=en\\" target=\\"_blank\\">Android</a>","location-error-could-not-get-location":"無法獲取您的當前位置。 請確保您在廣闊或GPS能覆蓋的地方，然後再試。","location-error-unknown":"不明錯誤： $1","gtfs-view-alerts-title":"通知","navigate-walk-distance":"步行約 $1 米","transit-eta-no-timetable":"沒有服務時間表","transit-eta-not-in-service":"不在服務時間","transit-route-tab-route-list":"路徑","transit-route-tab-timetable":"時間表","transit-route-tab-other-routes":"其他路線","transit-circular-path":"循環線","transit-calendar-header-timeslot":"時段","transit-calendar-header-headway-min":"班次 (分鐘)","transit-calendar-from-monday-to-sunday":"從星期一至星期日提供服務","transit-calendar-from-monday-to-sunday-dates":"星期一至星期日","transit-calendar-from-monday-to-saturday":"從星期一到星期六提供服務","transit-calendar-from-monday-to-saturday-dates":"星期一到星期六","transit-calendar-from-monday-to-friday":"從星期一到星期五提供服務","transit-calendar-from-monday-to-friday-dates":"星期一到星期五","transit-calendar-from-monday-to-thursday":"從星期一至星期四提供服務","transit-calendar-from-monday-to-thursday-dates":"星期一至星期四","transit-calendar-from-saturday-to-sunday":"從星期六至星期日提供服務","transit-calendar-from-saturday-to-sunday-dates":"星期六至星期日","transit-calendar-on-saturday":"只在星期六提供服務","transit-calendar-on-saturday-dates":"星期六","transit-calendar-on-sunday":"只在星期日提供服務","transit-calendar-on-sunday-dates":"星期日","transit-searching-nearby-routes":"正在搜尋附近的路線...","transit-locating-your-location":"正在取得您的當前位置...","transit-eta-sort-all":"全部","transit-eta-placeholder-search-for-transit":"搜尋交通工具...","transit-eta":"預計到達時間","transit-eta-to":"往","transit-eta-metres":"米","transit-eta-route-not-available":"此路線不能用預計到達時間","transit-eta-route-not-available-short":"不適用","transit-eta-retrieving":"存取中...","transit-eta-retrieving-data":"存取中...","transit-eta-no-eta-providers":"沒有插件提供數據, 您可以嘗試安裝能夠為該路線提供到達時間的插件。","transit-eta-no-data-received":"沒有接收到數據","transit-eta-no-schedules-pending":"到站數據未有下一班的排程","transit-eta-no-schedules-pending-short":"未有下一班","transit-eta-live":"實時","transit-eta-scheduled":"預定","transit-eta-error-fetching-eta":"無法獲取預計到達時間數據。","transit-eta-error-fetching-eta-short":"失敗","transit-eta-requesting-data":"正在存取 $1/$2 的數據...","transit-eta-transit-notice":"通知","transit-eta-arrived-left":"已到達/離開","transit-eta-every-minutes":"每$1分鐘","transit-eta-minutes":"$1分鐘","transit-eta-no-routes-found-10-km":"在10公里範圍內找不到任何路線。","transit-eta-no-routes-found-nearby-extended-range":"在$1米範圍內找不到任何路線，以下路線為$2米範圍內的路線。","transit-eta-no-plugins-providing-transit-data":"您沒有任何提供公交運輸數據的插件。","transit-eta-alerts-affecting-stop":"這站有 $1 個通知","transit-eta-view-alerts-affecting-stop":"查看","plugin-closed-api-warning":"該插件使用封閉的API存取非開放數據。 當使用此插件，您將承擔所有風險和責任，並且開發人員將不承擔任何責任。 請閱讀插件的授權條款以獲取更多資訊。","plugin-error-dependency-not-installed":"插件\\"$1\\"需要安裝\\"$2\\"才能使用。 請在\\"插件管理\\"中安裝相關插件。","plugin-error-dependency-version-too-old":"插件\\"$1\\"需要安裝更新版本的\\"$2\\"才能使用。 請在\\"插件管理\\"中安裝相關插件。","plugin-error-no-module-returned":"錯誤: 插件\\"$1\\"沒有回值模組!","plugin-error-no-onload-function":"錯誤: \\"$1\\"插件沒有onload function!","plugin-error-onload-function-error":"錯誤: \\"$1\\" 插件初始化失敗!","plugin-status-not-enabled":"未啟用","plugin-error-could-not-fetch-info":"無法從伺服器獲取插件資料","plugin-manager-title":"插件管理","plugin-manager-loading":"載入中...","plugin-manager-tab-all":"全部","plugin-manager-tab-installed":"已安裝","view-plugin-title":"插件資料","view-plugin-repos-cannot-find-package":"在資料庫中找不到插件。","view-plugin-details":"詳細資料","view-plugin-details-name":"名稱","view-plugin-details-fullname":"全名","view-plugin-details-author":"作者","view-plugin-details-version":"版本","view-plugin-details-github":"GitHub","view-plugin-details-package":"插件名","view-plugin-details-description":"詳細說明","view-plugin-installation":"安裝","view-plugin-installation-plugin-not-available":"此插件在此版本的GoToWhere中不能使用。","view-plugin-installation-not-installed":"未安裝","view-plugin-installation-installed-but-could-not-start-up-correctly":"已安裝，但未能正常啟動。","view-plugin-installation-installed-running":"已安裝和已啟動","view-plugin-installation-not-enabled":"未啟用","view-plugin-installation-plugin-load-errors":"插件載入錯誤 ($1)","view-plugin-installation-unknown-status-code":"不明狀態碼 ($1)","view-plugin-installation-status":"狀態","view-plugin-installation-message":"訊息","view-plugin-installation-uninstall-and-restart-btn":"解除安裝並重新啟動","view-plugin-installation-install-and-restart-btn":"安裝並重新啟動","error-plugins-summary-plugin-not-available":"插件不能使用","error-plugins-summary-plugin-load":"插件載入錯誤","error-plugins-summary-unknown-status-code":"不明狀態碼","error-plugins-solution-plugin-not-available":"該插件已被棄用或從GoToWhere中刪除，不能在此版本的GoToWhere使用。 如果您認為這是一個問題，請在GitHub報告問題。","error-plugins-solution-plugin-load":"在GitHub報告問題和狀態代碼（$1）。","error-plugins-solution-unknown-status-code":"在GitHub報告問題和狀態代碼（$1）。","error-plugins-message":"訊息:","error-plugins-solutions":"解決方法:","plugin-deprecated-auto-uninstall":"插件 \\"$1\\" 已經不能使用 或 被其他插件取代, 將會自動解除安裝這插件。您可以忽略這訊息。","split-panel-back":"返回","split-panel-move-up":"推上","split-panel-move-down":"推下","getting-started-wizard-step-language":"語言","getting-started-wizard-step-plugins":"插件","getting-started-wizard-step-finish":"完成","getting-started-wizard-step-language-welcome":"歡迎！","getting-started-wizard-step-language-desc":"看來這是您第一次使用此應用程式！ 該嚮導可以通過幾個步驟，協助您安裝與您所在地區相關的城市數據插件。","getting-started-wizard-step-language-choose-language":"選擇您首選語言：","getting-started-wizard-step-language-input-language":"語言：","getting-started-wizard-step-language-help-translate":"您可以協助將應用程式翻譯成更多語言！","getting-started-wizard-step-plugins-select":"選擇","getting-started-wizard-step-plugins-select-region":"請選擇您所在的地區以查找並安裝相關插件：","getting-started-wizard-step-plugins-input-region":"可用地區：","getting-started-wizard-step-plugins-loading":"載入中...","getting-started-wizard-step-plugins-install-count":"將從$2個可用插件中安裝$1個插件。","getting-started-wizard-step-plugins-closed-api":"該插件使用封閉的API存取非開放數據。","getting-started-wizard-step-finish-finish-text":"完成!","getting-started-wizard-step-finish-desc":"您現在可以享受大量城市數據的世界了！","getting-started-wizard-step-finish-press-button":"將會在按下按扭之後安裝$1個插件。","getting-started-wizard-step-finish-must-install":"<em>您必須至少安裝1個插件才能使應用程式正常運作。</em>","getting-started-wizard-step-finish-get-started-btn":"開始使用","getting-started-please-wait":"請稍等！","getting-started-please-wait-desc":"我們正在安裝您的插件。","getting-started-installing-plugins":"正在安裝插件...","getting-started-error":"錯誤","getting-started-error-plugin-network-error":"由於網絡問題，無法安裝以下插件。 您可以嘗試刷新頁面以重試。 如果問題仍然存在，請在GitHub報告問題。","getting-started-error-refresh-btn":"刷新頁面","getting-started-error-affected-plugins":"無法安裝以下插件:"}')}}]);
//# sourceMappingURL=46.9555e78e32fc0f9a4330.js.map