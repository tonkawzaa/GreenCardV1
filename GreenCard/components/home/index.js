'use strict';

app.home = kendo.observable({
    onShow: function() {},
    afterShow: function() {},
    login: function() {
        			navigator.notification.alert("login");
  
    },
     register: function() {
        			navigator.notification.alert("register");
  
    },
});
kendo.bind($('#submitfunc'),app.home);
// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_home