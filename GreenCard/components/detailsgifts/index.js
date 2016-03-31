'use strict';

app.detailsgifts = kendo.observable({
     onShow: function(e) {
        var viewparams = e.view.params; 
        var item = viewparams.id; 
        var requiredpoints = viewparams.requiredpoints;
        
         var datapoint = {
             point : requiredpoints,
         }
         
         
         //navigator.notification.alert(requiredpoints);
         //navigator.notification.alert(item);
         kendo.bind($("#detailsgiftspoint"),datapoint);
        var activeView = '.details-view';
         $(activeView).show().siblings().hide();
         
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
                            
                          
                            kendo.bind($("#headerdetailsgifts"),result);
                            kendo.bind($("#headerdetailsgiftssumit"),result);
                        },
                        error: function(result) {
                            navigator.notification.alert(result);    
                        },
                });
         
        
        
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
                            
                             if(result.data.new_points)
                            {
                                kendo.bind($('#sumitgift_code'),result.data);
                                var activeView = '.sumit-view';
                                $(activeView).show().siblings().hide();
                                
                            }else
                            if(result.data.error_code=="BurnError01")
                            {
                                navigator.notification.alert("วันนี้คุณรับสิทธิ์สินค้านี้ครบลิมิต");
                            }else if(result.data.error_code=="BurnError02")
                            {
                                navigator.notification.alert("เดือนนี้คุณรับสิทธิ์สินค้านี้ครบลิมิต");
                            }else if(result.data.error_code=="BurnError03")
                            {
                                navigator.notification.alert("วันนี้รับสิทธิ์ครบลิมิต");
                            }else if(result.data.error_code=="BurnError04")
                            {
                                navigator.notification.alert("เดือนนี้รับสิทธิ์ครบลิมิต");
                            }else if(result.data.error_code=="BurnError05")
                            {
                                navigator.notification.alert("แต้มของท่านไม่พอ");
                            }
                            
                            
                            
                            //var newDate = kendo.timezone.convert(result.data.create_date, date.getTimezoneOffset(), "Etc/UTC");
                           
                        },
                        error: function(result) {
                            //navigator.notification.alert(result);    
                            navigator.notification.alert("ข้อมูลผิดพลาด");    
                            app.mobileApp.navigate('components/burnPoint/view.html');
                        }
                }); 
                
            },
            cancel: function() {
        			//navigator.notification.alert("Y R U cancle");
                	app.mobileApp.navigate('components/burnPoint/view.html');
  
    		},
            close_func :function() {
                /*
                var activeView = '.details-view';
        		 $(activeView).show().siblings().hide();
                */
                app.mobileApp.navigate('components/burnPoint/view.html');
            },
            
        };
        kendo.bind($('#submitfunc'),data1);
        kendo.bind($('#close_func'),data1);
        kendo.bind($('#data1Content'),data1);
          
            $.ajax({
                  type: "POST",
                  url: "https://greenapi.odooportal.com/api/v1/gift_by_id",
                  data: JSON.stringify({ id: item }),
                  contentType: "application/json; charset=utf-8",
                  dataType: "json",
                  success: function (result) {
                      
                      //navigator.notification.alert(result.data)
                      
                      var detailsgifts = result.data;
                      kendo.bind($('#data2Content'),detailsgifts);
                      kendo.bind($('#sumitContent'),detailsgifts);
                    
                            				},
                error: function(result) {
                            navigator.notification.alert("ไม่พบรหัส gift");    
                            app.mobileApp.navigate('components/burnPoint/view.html');
                        }
                    }); 
        

    },

    afterShow: function() {}
});

(function(parent) {
    

    var detailsgiftsModel = kendo.observable({
       
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
            navigator.notification.alert("clickedImage");
             //app.mobileApp.navigate('components/earnbyid/earnby1.html');
        },
  
       
    });

    parent.set('detailsgiftsModel', detailsgiftsModel);
})(app.detailsgifts);
