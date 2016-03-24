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
        },
        gohome: function() {
                app.mobileApp.navigate('components/home/view.html');
            },
    });

    parent.set('termsofuseModel', termsofuseModel);
})(app.termsofuse);
