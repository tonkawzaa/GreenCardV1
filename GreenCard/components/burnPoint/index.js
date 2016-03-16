'use strict';

app.burnPoint = kendo.observable({
    
    data: new kendo.data.DataSource({
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "GET",
                            url: "https://greenapi.odooportal.com/api/v1/event_gifts",
                            //data:  "{'sUsername':'admin@mail.com','sPassword':'13123','sUserID':'1539','sClubID':'1'}",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (result) {
                                options.success(result);
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

// START_CUSTOM_CODE_burnPoint
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_burnPoint