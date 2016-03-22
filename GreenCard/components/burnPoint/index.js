'use strict';

app.burnPoint = kendo.observable({
    
    data: new kendo.data.DataSource({
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "GET",
                            url: "https://greenapi.odooportal.com/api/v1/event_gifts",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (result) {
                                options.success(result.data);
                            }
                        });
                    }
            },
    }),
    
     data2: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/gifts",
                            contentType: "application/json; charset=utf-8",
                            data: JSON.stringify({ offset: 0,limit:20 }),
                            dataType: "json",
                            success: function (result) {
                                options.success(result.data);
                               // navigator.notification.alert(result.data);
                                
                            }
                        });
                    }
            },
    }),
    
        data3 : new kendo.data.DataSource({
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
                            
                            //result.set("data","55555" );
                            
                            kendo.unbind($("#headerburnPoint"));
                               kendo.bind($("#headerburnPoint"),result);
                            
                            
                            
                        },
                        error: function(result) {
                            navigator.notification.alert(result);    
                        }
                });
        
      
    },
    afterShow: function() {}
});

(function(parent) {
    

    var burnPointModel = kendo.observable({
       
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
        scrollviewClick: function() {
            	navigator.notification.alert("scrollviewClick");
        },
       
    });

    parent.set('burnPointModel', burnPointModel);
})(app.burnPoint);

// START_CUSTOM_CODE_burnPoint
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_burnPoint