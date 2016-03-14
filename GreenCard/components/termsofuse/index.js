'use strict';

app.termsofuse = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_termsofuse
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_termsofuse
(function(parent) {
    var termsofuseModel = kendo.observable({
        fields: {},
        submit: function() {},
        cancel: function() {
            
        }
    });

    parent.set('termsofuseModel', termsofuseModel);
})(app.termsofuse);

// START_CUSTOM_CODE_termsofuseModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_termsofuseModel