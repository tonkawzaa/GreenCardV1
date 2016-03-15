'use strict';

app.reigister = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_reigister
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_reigister
(function(parent) {
    var  mode = 'signup';
    var token= null ;
    var reigisterModel = kendo.observable({
        fields: {
            occupation: '',
            citizenid: '1234567890',
            birthdate: '',
            mobile: '045281842',
            gender: '',
            confirmpassword: 'password',
            password1: 'password',
            lastname: 'lastname',
            firstname: 'firstname',
            email: 'top@gmail.com',
        },

        submit: function() {
             $.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/signup",
                        contentType: "application/json",
                        data: JSON.stringify({ login: reigisterModel.fields.email,
                                              firstname: reigisterModel.fields.firstname,
                                              lastname: reigisterModel.fields.lastname,
                                              password: reigisterModel.fields.password1,
                                              confirm_password: reigisterModel.fields.confirmpassword,
                                              mobile: reigisterModel.fields.mobile,
                                              gender: reigisterModel.fields.gender,      
                                              birth_date: kendo.toString(reigisterModel.fields.birthdate, "yyyy-MM-dd"),
                                             // birth_date: "1986-10-05",
                                              citizen_id: reigisterModel.fields.citizenid,
                                              occupation: reigisterModel.fields.occupation,
                                             }),
                        success: function(result) {
                            //navigator.notification.alert(result);
                            
                            token = null ;
                            localStorage.clear();
                            localStorage.setItem(token,result.data.access_token);
                            navigator.notification.alert(result.data.access_token);
                            //token = result.data.access_token;
                            
                        },
                        error: function(result) {
                            navigator.notification.alert(result);
                            
                        }
                });
        },
        
         toggleView: function() {
                mode = mode === 'signup' ? 'register' : 'signup';
                var activeView = mode === 'signup' ? '.signup1-view' : '.signup2-view';
                $(activeView).show().siblings().hide();
            },
        gohome: function() {
                app.mobileApp.navigate('components/home/view.html');
            },
    });

    parent.set('reigisterModel', reigisterModel);
})(app.reigister);

// START_CUSTOM_CODE_reigisterModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_reigisterModel