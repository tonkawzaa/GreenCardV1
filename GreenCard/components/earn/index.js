'use strict';

app.earn = kendo.observable({
    
    scan: function() {
            cordova.plugins.barcodeScanner.scan(
                function(result) {
                    //navigator.notification.alert(result.text);
                    var item = result.text;
                    var navi_parameters = "components/detailsproducts/view.html?id="+item;
                    $.ajax({
                       type: "POST",
                       url: "https://greenapi.odooportal.com/api/v1/product_by_id",
                       contentType: "application/json",
                       data: JSON.stringify({ id: item }),
                       success: function(result) {
                                    
                        navigator.notification.alert(result);
                       //app.mobileApp.navigate(navi_parameters);             
                           
                        },
                        error: function(result) {
                              navigator.notification.alert("ไม่พบสินค้าในฐานข้อมูล");
                                 },
                     });
                   
                }, 
                function(error) {
                    	navigator.notification.alert(error);
                });
        },
    earnbyid: function() {
        
                //navigator.notification.alert("earnbyid");
                app.mobileApp.navigate("components/earnbyid/view.html");
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
                            kendo.bind($("#headerearnGreen"),result);  
                        },
                        error: function(result) {
                            navigator.notification.alert(result);    
                        }
                });
      
    },
    afterShow: function() {}
});

(function(parent) {
    

    var earnModel = kendo.observable({
       
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

    parent.set('earnModel', earnModel);
})(app.earn);
