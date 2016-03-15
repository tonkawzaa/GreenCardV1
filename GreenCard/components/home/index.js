'use strict';

app.home = kendo.observable({
    onShow: function() {},
    afterShow: function() {},
    login: function() {
        			//navigator.notification.alert("login");
        	app.mobileApp.navigate('components/signin/view.html');
  
    },
     register: function() {
        			//navigator.notification.alert("register");
         			app.mobileApp.navigate('components/termsofuse/view.html');
  
    },
});
kendo.bind($('#submitfunc'),app.home);
//app = new kendo.mobile.Application(document.body, { layout: "main", transition: "fade" });
// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_home