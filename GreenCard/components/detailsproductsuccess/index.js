'use strict';

app.detailsproductsuccess = kendo.observable({
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
                            kendo.bind($("#headerdetailsproductsuccess"),result);  
                        },
                        error: function(result) {
                            navigator.notification.alert(result);    
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
    afterShow: function() {},
});

(function(parent) {
    

    var detailsproductsuccessModel = kendo.observable({
       
        
       
    });

    parent.set('detailsproductsuccessModel', detailsproductsuccessModel);
})(app.earn);