'use strict';

app.termsofuse = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

(function(parent) {
    var termsofuseModel = kendo.observable({
        fields: {},
        submit: function() {
            app.mobileApp.navigate('components/reigister/view.html');
        },
        cancel: function() {
        }
    });

    parent.set('termsofuseModel', termsofuseModel);
})(app.termsofuse);
