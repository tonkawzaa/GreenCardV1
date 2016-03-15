'use strict';

app.signin = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_signin
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_signin
(function(parent) {
    var signinModel = kendo.observable({
        fields: {
            password: '',
            email: '',
        },
        submit: function() {}
    });

    parent.set('signinModel', signinModel);
})(app.signin);

// START_CUSTOM_CODE_signinModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_signinModel