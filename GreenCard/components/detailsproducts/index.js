'use strict';

app.detailsproducts = kendo.observable({
    onShow: function(e) {
        var item = e.view.params.id;
        //navigator.notification.alert(item);
        
        	$.ajax({
               type: "POST",
               url: "https://greenapi.odooportal.com/api/v1/product_by_barcode",
               contentType: "application/json",
               data: JSON.stringify({ barcode: item }),
               success: function(result) {
                            
                //navigator.notification.alert(result.data);
                            
                     var product_by_barcode  = result.data;
                     kendo.bind($("#view1"),product_by_barcode);
                   
                   e.view.element.find("#scrollView").kendoMobileListView({
        			template: kendo.template($("#tmp").html()),
        			dataSource: result.data.certifications,
                     });
                             },
                
                	
                error: function(result) {
                      navigator.notification.alert(result.error_message);

                         },
             });
        
        	
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
    afterShow: function() {},
    
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

// START_CUSTOM_CODE_detailsproducts
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_detailsproducts