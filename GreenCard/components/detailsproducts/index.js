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
                            
                //navigator.notification.alert(result.data.id);
                            if(result.data.id){
                                
                                 var product_by_barcode  = result.data;
                                 kendo.bind($("#detailsproducts_main_img"),product_by_barcode);
                                 kendo.bind($("#detailsproductsview"),product_by_barcode);
                                 kendo.bind($("#detailsproducts_desc_to_publish"),product_by_barcode);
                                       
                                e.view.element.find("#scrollView_detailsproducts").kendoMobileListView({
                            	template: kendo.template($("#scrollView_detailsproducts_tmp").html()),
                                dataSource: result.data.certifications,          
                                });
                                
                            }else{
                                navigator.notification.alert("ไม่พบสินค้าในฐานข้อมูล");
                                app.mobileApp.navigate('components/earn/view.html');
                            }
               
                   
                   
              },
                
                	
                error: function(result) {
                      //navigator.notification.alert(result.error_message);
                    navigator.notification.alert("ไม่พบสินค้าในฐานข้อมูล");

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
        	*/
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
              var detailsshop_detailsproducts_Model = kendo.observable({
        
        fields: {
            selectedshop: 3,
        },

        }); 
        kendo.bind($('#radioselectedshop_detailsproducts'),detailsshop_detailsproducts_Model);
         
         var confirmsdata = {
                confirms: function() {
                    
                    //navigator.notification.alert(item);
                    //navigator.notification.alert(detailsshop_detailsproducts_Model.fields.selectedshop);
                    
               $.ajax({
               type: "POST",
               url: "https://greenapi.odooportal.com/api/v1/product_by_barcode",
               contentType: "application/json",
               data: JSON.stringify({ barcode: item }),
               success: function(result) {
                   var product_id=result.data.id;
                  // navigator.notification.alert(product_id);
                            
                      $.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/earn",
                        contentType: "application/json",
                		headers: {'Authorization' : header_token},
                        data: JSON.stringify({ product_id: product_id ,
                                               shop_id : detailsshop_detailsproducts_Model.fields.selectedshop, }),
                        success: function(result) {                
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
                            navigator.notification.alert("ระบบผิดพลาด")    
                        }
                     });

               
               },
                
                	
                error: function(result) {
                      navigator.notification.alert(result.error_message);

                         },
                 });
               /*
                 
                    */
                    
                },
             gotoearn : function() {
                 app.mobileApp.navigate('components/earn/view.html');
                 },
        };
                    
        kendo.bind($('#confirms_earn'),confirmsdata);
        //kendo.bind($('#selectshops'),confirmsdata);
      
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