'use strict';

app.earnbyid = kendo.observable({
    onShow: function() {
         var header_token = null;
            
           	var token = null;
        	token = localStorage.getItem("token");
            header_token =  "Bearer "+token;
            //navigator.notification.alert(header_token);
            $.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/points",
                        contentType: "application/json",
                		headers: {'Authorization' : header_token},
                        success: function(result) {                
                            //navigator.notification.alert(result.data);
                            kendo.bind($("#headerGreen"),result);  
                        },
                        error: function(result) {
                            navigator.notification.alert(result);    
                        }
                });
      
    },
    afterShow: function() {}
});

(function(parent) {
    

    var earnbyidModel = kendo.observable({
       
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

    parent.set('earnbyidModel', earnbyidModel);
})(app.earnbyid);
// START_CUSTOM_CODE_earnby
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_earnby