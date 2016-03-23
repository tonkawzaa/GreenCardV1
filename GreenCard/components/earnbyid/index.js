'use strict';

app.earnbyid = kendo.observable({
    data2 : new kendo.data.DataSource({
        type: "odata",
        transport: {
            read: {
                url: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products"
            }
        },
    }),
     clickedImage : function()
            {
        navigator.notification.alert("clickedImage");
            },
   
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
                            kendo.bind($("#headerearnbyid"),result);  
                            kendo.bind($("#headerearnbyid1"),result);
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
         clickedImage : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby1.html');
            },
       
    });

    parent.set('earnbyidModel', earnbyidModel);
})(app.earnbyid);