'use strict';

app.earn = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

(function(parent) {

    var earnModel = kendo.observable({
       
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

    parent.set('earnModel', earnModel);
})(app.earn);