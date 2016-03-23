'use strict';

app.earnbyid = kendo.observable({
    
    dataid1: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "Green 1" }),
                            dataType: "json",
                            success: function (result) {
                                //navigator.notification.alert(result.data);
                                 options.success(result.data);
                                },
                                   
                                
                             
                        error: function(result) {
                            navigator.notification.alert(result);    
                                                },
                          });
                    },
            },
    }),
    
    
    onShow: function(e) {
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
         clickedImage1 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby1.html');
            },
       
    });

    parent.set('earnbyidModel', earnbyidModel);
})(app.earnbyid);