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
            /*
            password: 'password',
            email: 'top@gmail.com',*/
            password: '',
            email: '',
        },
        submit: function() {
            
            $.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/login",
                        contentType: "application/json",
                        data: JSON.stringify({ login: signinModel.fields.email,password: signinModel.fields.password }),
                        success: function(result) {
                            var token = null ;
                            localStorage.setItem("token",result.data.access_token);
                            //navigator.notification.alert(result.data.access_token);
                            app.mobileApp.navigate('components/welcome/view.html');
                            //token = result.data.access_token;
                        },
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ชื้อผู้เข้าใช้ หรือ รหัสไม่ถูกต้อง");
                            
                        }
                });
                
            
        },
        gohome: function() {
                app.mobileApp.navigate('components/home/view.html');
            },
        gotermofuse: function() {
                app.mobileApp.navigate('components/termsofuse/view.html');
            },
        goforgotpass: function() {
                app.mobileApp.navigate('components/forgotpass/view.html');
            },
    });

    parent.set('signinModel', signinModel);
})(app.signin);

// START_CUSTOM_CODE_signinModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_signinModel