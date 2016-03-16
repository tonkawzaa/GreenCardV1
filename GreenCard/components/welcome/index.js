'use strict';

app.welcome = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
(function(parent) {
    var token= null ;
    var welcomeModel = kendo.observable({
       
        submit: function() {
       
        },
        logout: function() {
            //localStorage.removeItem(token);
            localStorage.clear();
            
        	token = localStorage.getItem(token);
            navigator.notification.alert(token);
        },
        showtoken: function() {
            //localStorage.removeItem(token);
            token = null;
        	token = localStorage.getItem(token);
            navigator.notification.alert(token);
        },
        viewpoint: function() {
            var point = null;
            var header_token = null;
            
            token = null;
        	token = localStorage.getItem(token);
            header_token =  "Bearer "+token;
            //navigator.notification.alert(header_token);
            $.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/points",
                        contentType: "application/json",
                		headers: {'Authorization' : header_token},
                        success: function(result) {
                            
                            navigator.notification.alert(result.data);
                            
                     
                        },
                        error: function() {
                            navigator.notification.alert("Unfortunately,");
                            
                        }
                });
            
        },
        information: function() {
				app.mobileApp.navigate('components/information/view.html');
        },
         earn: function() {
				app.mobileApp.navigate('components/earn/view.html');
        }, 
        burnPoint: function() {
				app.mobileApp.navigate('components/burnPoint/view.html');
        },
    });

    parent.set('welcomeModel', welcomeModel);
})(app.welcome);

// START_CUSTOM_CODE_welcome
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_welcome