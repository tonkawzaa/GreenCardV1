'use strict';

app.forgotpass = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_forgotpass
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_forgotpass
(function(parent) {
    var forgotpassModel = kendo.observable({
        fields: {
            reemail: '',
        },
        submit: function() {
            if(forgotpassModel.fields.reemail!='')
                {
                    navigator.notification.alert("ตรวจสอบใน e-mail ด้วย");
                }else{
                    navigator.notification.alert("กรุณาใส่ e-mail");
                }
            
        },
        gosignin: function() {
                app.mobileApp.navigate('components/signin/view.html');
            },
    });

    parent.set('forgotpassModel', forgotpassModel);
})(app.forgotpass);

// START_CUSTOM_CODE_forgotpassModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_forgotpassModel