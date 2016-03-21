'use strict';

app.detailsgifts = kendo.observable({
     onShow: function(e) {
        var item = e.view.params.id;  
        var activeView = '.details-view';
         $(activeView).show().siblings().hide();
        
        var data1 = {
            title: item,
            submit: function() {
                //navigator.notification.alert(item);
                var header_token = null;
        		var token = null;
            
                token = localStorage.getItem("token");
                header_token =  "Bearer "+token;
                //navigator.notification.alert(header_token);
                
           		 $.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/burn",
                        contentType: "application/json",
                		headers: {'Authorization' : header_token},
                		data: JSON.stringify({ gift_id: item }),
                        success: function(result) {
                            //navigator.notification.alert(result.data);
                            kendo.bind($('#sumitgift_code'),result.data);
                        },
                        error: function(result) {
                            navigator.notification.alert(result.error_message);    
                        }
                }); 
                var activeView = '.sumit-view';
                $(activeView).show().siblings().hide();
            },
            cancel: function() {
        			//navigator.notification.alert("Y R U cancle");
                	app.mobileApp.navigate('components/burnPoint/view.html');
  
    		},
            close_func :function() {
                var activeView = '.details-view';
        		 $(activeView).show().siblings().hide();
            },
            
        };
        kendo.bind($('#submitfunc'),data1);
        kendo.bind($('#close_func'),data1);
        //kendo.bind($('#data1Content'),data1);
          
            $.ajax({
                  type: "POST",
                  url: "https://greenapi.odooportal.com/api/v1/gift_by_id",
                  data: JSON.stringify({ id: item }),
                  contentType: "application/json; charset=utf-8",
                  dataType: "json",
                  success: function (result) {
                      
                      //navigator.notification.alert(result.data.image_mobile)
                      
                      var detailsgifts = result.data;
                      kendo.bind($('#data2Content'),detailsgifts);
                      kendo.bind($('#sumitContent'),detailsgifts);
                      
                      var image64 = {
                                image_mobile: "data:image/jpeg;base64,"+result.data.image_mobile,
                                    }
                          //result.data;
                      kendo.bind($('#divshowimage'),image64);
                      kendo.bind($('#sumitshowimage'),image64);
                            				}
                    }); 
        

    },

    afterShow: function() {}
});
