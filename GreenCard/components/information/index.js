'use strict';

app.information = kendo.observable({
    
    data: new kendo.data.DataSource({
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/cert_types",
                            contentType: "application/json; charset=utf-8",
                            data: JSON.stringify({ offset: 0,limit:20 }),
                            success: function(result) {
                            options.success(result);
                            //navigator.notification.alert(result.data);   
                        },
                        error: function(result) {
                            navigator.notification.alert(result.error_message);    
                        }
                        });
                    }
            },
        schema: {
            data: "data"
        }
    }),
    
    data2 : new kendo.data.DataSource({
        type: "odata",
        transport: {
            read: {
                url: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products"
            }
        },
    }),
    
   
    
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
                            kendo.unbind($("#headerinformation"));
                               kendo.bind($("#headerinformation"),result);
                        },
                        error: function(result) {
                            navigator.notification.alert(result);    
                        }
                });
       
        
    },
    afterShow: function() {}
    

});

(function(parent) {

    var informationModel = kendo.observable({
       
        information: function() {
				app.mobileApp.navigate('components/information/view.html');
        },
         earn: function() {       	
				app.mobileApp.navigate('components/earn/view.html');
        }, 
        burnPoint: function() {
				app.mobileApp.navigate('components/burnPoint/view.html');
        },
         destroyListView: function() {	
            	navigator.notification.alert("destroyListView");
        },
       
    });

    parent.set('informationModel', informationModel);
})(app.information);
