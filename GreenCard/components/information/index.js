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
    
   
    
    onShow: function() {},
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
       
    });

    parent.set('informationModel', informationModel);
})(app.information);
