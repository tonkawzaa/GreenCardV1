'use strict';

app.detailsproductsbyid = kendo.observable({
     onShow: function(e) {
        var item = e.view.params.id;
        //navigator.notification.alert(item);
               
        	$.ajax({
               type: "POST",
               url: "https://greenapi.odooportal.com/api/v1/product_by_id",
               contentType: "application/json",
               data: JSON.stringify({ id: item }),
               success: function(result) {
                            
                //navigator.notification.alert(result);
                      if(result.data.id){
                            
                             var product_by_id  = result.data;
                             kendo.bind($("#product_by_idview"),product_by_id);
                             kendo.bind($("#product_by_id_main_img"),product_by_id);
                           kendo.bind($("#product_by_id_desc_to_publish"),product_by_id);
                         
                           e.view.element.find("#scrollView_product_by_id").kendoMobileListView({
                			template: kendo.template($("#tmp").html()),
                			dataSource: result.data.certifications,           
                             });
                                    /*
                           e.view.element.find("#product_by_id_list_cert").kendoMobileScrollView({
                			template: kendo.template($("#product_by_id_list_cert_tmp").html()),
                			dataSource: result.data.certifications, 
                            contentHeight: 100,
                            enablePager: true,
                             });
                           
                          */
                          
                      }else{
                          navigator.notification.alert("ไม่พบสินค้า");
                          app.mobileApp.navigate('components/earn/view.html');
                      }

                   
                },

                error: function(result) {
                      navigator.notification.alert("ไม่พบสินค้า");
                      app.mobileApp.navigate('components/earn/view.html');
                         },
             });
         /*
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
                                navigator.notification.alert(result.data);
                                
                            },
                            error: function(result) {
                                  navigator.notification.alert(result);
                         },
                            });
                                        }
                        },
                }),
          
            
        });
         */
        //kendo.bind($('#radioshop'),data0);
        
        	
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
                            kendo.bind($("#headerdetailsproductsbyid"),result);
                        },
                        error: function(result) {
                            navigator.notification.alert(result);    
                        }
                });
         
      var detailsshopbyidModel = kendo.observable({
        
        fields: {
            selectedshop: 3,
        },

        }); 
        kendo.bind($('#radioselectedshopearnbyid'),detailsshopbyidModel);
         
         var confirmsdatabyid = {
                confirms: function() {
                    
                    //navigator.notification.alert(item);
                    //navigator.notification.alert(detailsshopbyidModel.fields.selectedshop);
                    
                  $.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/earn",
                        contentType: "application/json",
                		headers: {'Authorization' : header_token},
                        data: JSON.stringify({ product_id: item ,
                                               shop_id : detailsshopbyidModel.fields.selectedshop, }),
                        success: function(result) {                
                            //navigator.notification.alert(result);
                            
                            
                            if(result.data.new_points)
                            {
                                //navigator.notification.alert("detailsproductsuccess");
                                app.mobileApp.navigate('components/detailsproductsuccess/view.html');
                            }else
                            if(result.data.error_code=="EarnError01")
                            {
                                navigator.notification.alert("วันนี้คุณสะสมแต้มสินค้านี้ครบลิมิต");
                            }else if(result.data.error_code=="EarnError02")
                            {
                                navigator.notification.alert("เดือนนี้คุณสะสมแต้มสินค้านี้ครบลิมิต");
                            }else if(result.data.error_code=="EarnError03")
                            {
                                navigator.notification.alert("วันนี้สินค้าครบลิมิต");
                            }else if(result.data.error_code=="EarnError04")
                            {
                                navigator.notification.alert("เดือนนี้สินค้าครบลิมิต");
                            }
                        },
                        error: function(result) {
                            //navigator.notification.alert(result);    
                            navigator.notification.alert("ระบบผิดพลาด"); 
                        }
                    });
                    
                },
             gotoearn : function() {
                 app.mobileApp.navigate('components/earn/view.html');
                 },
        };
        kendo.bind($('#confirms_earnbyid'),confirmsdatabyid);
        kendo.bind($('#selectshopsearnbyid'),confirmsdatabyid);
      
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

// START_CUSTOM_CODE_detailsproductsbyid
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_detailsproductsbyid