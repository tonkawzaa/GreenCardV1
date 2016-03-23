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
                            
                navigator.notification.alert(result.data.certifications);
                            
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
         var data0 = kendo.observable({
            selectedfruit : "Gourmet",
            
            shopData: new kendo.data.DataSource({
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/shops",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (result) {
                                options.success(result.data);
                               // navigator.notification.alert(result.data);
                                
                            },
                            error: function(result) {
                                  navigator.notification.alert(result);
                         },
                            });
                                        }
                        },
                }),
          
            
        });
        kendo.bind($('#radioshop'),data0);
        	
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
                            kendo.bind($("#headerdetailsproducts"),result);
                        },
                        error: function(result) {
                            navigator.notification.alert(result);    
                        }
                });
         
         var confirmsdata = {
                confirms: function() {
                    
                    //navigator.notification.alert(item);
                    //navigator.notification.alert(data0.selectedfruit);
                    
                  $.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/points",
                        contentType: "application/json",
                		headers: {'Authorization' : header_token},
                        data: JSON.stringify({ product_id: item ,
                                               shop_id : data0.selectedfruit, }),
                        success: function(result) {                
                            navigator.notification.alert(result);
                        },
                        error: function(result) {
                            navigator.notification.alert(result);    
                        }
                    });
                    
                },
             gotoearn : function() {
                 app.mobileApp.navigate('components/earn/view.html');
                 },
        };
        kendo.bind($('#confirms_earn'),confirmsdata);
        kendo.bind($('#selectshops'),confirmsdata);
      
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