'use strict';

app.reigister = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_reigister
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_reigister
(function(parent) {
    var reigisterModel = kendo.observable({
        fields: {
            login: '',
        },
        submit: function() {}
    });

    parent.set('reigisterModel', reigisterModel);
})(app.reigister);

// START_CUSTOM_CODE_reigisterModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_reigisterModel