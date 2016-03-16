'use strict';

app.information = kendo.observable({
    
    data: new kendo.data.DataSource({
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/cert_types",
                            contentType: "application/json; charset=utf-8",
                            data: JSON.stringify({ offset: 1,limit:50 }),
                            success: function(result) {
                            options.success(result);
                            navigator.notification.alert(result.data);   
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
    
   
    
    onShow: function() {
        /*
        var bookstemplate = "<div>#: points #</div><div>#: id #</div><div>#: name #</div> <div><img style='width:100%;' src='data:image/png;base64,#: image_small #' /></div> ";
        
                 $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/cert_types",
                            data: JSON.stringify({ offset: 1, limit:50 }),
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                           success: function(result) {
                            //navigator.notification.alert(result);
                               
                               
                                  e.view.element.find("#listview").kendoMobileListView({
                                  template : $("#books-template"),
                                 dataSource: result.data,
        							});
                        		},
                       		 error: function(result) {
                            navigator.notification.alert(result.error_message);    
                        		}
                        });
        */
       
    },
    afterShow: function() {}
    

});
kendo.bind($('#grid'),app.information);

