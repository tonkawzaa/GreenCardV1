'use strict';

app.reigister = kendo.observable({
    onShow: function() {
        
    },
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
            /*
            occupation: '',
            citizenid: '',
            birthdate: '',
            mobile: '',
            gender: '',
            confirmpassword: '',
            password1: '',
            lastname: '',
            firstname: '',
            email: '',
            */
        },

        submit: function(e) {
            var validator = $("#signup2_form").data("kendoValidator");
            if (validator.validate()) {
                        //navigator.notification.alert(validator.validate());
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
                            if(result.data.access_token)
                            {
                                token = null ;
                                localStorage.clear();
                                localStorage.setItem("token",result.data.access_token);
                               // navigator.notification.alert(result.data.access_token);
                                token = result.data.access_token;
                                app.mobileApp.navigate('components/reigister/success.html');
                            }else
                            if(result.data.error_code=="SignupError01")
                            {
                                navigator.notification.alert("โปรดกรอกข้อมูลให้ครบ");
                            }else if(result.data.error_code=="SignupError02")
                            {
                                navigator.notification.alert("กรอก password ไม่ตรงกัน");
                            }else if(result.data.error_code=="SignupError03")
                            {
                                navigator.notification.alert("กรุณากรอก e-mail ให้ถูกต้อง");
                            }else if(result.data.error_code=="SignupError04")
                            {
                                navigator.notification.alert("มี e-mail ในระบบเรียบร้อยแล้ว");
                            }
                            
                            
                            
                        },
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("เชื่อมต่อผิดพลาด");
                            
                        }
                                });
                    }
        },
        
         toggleView: function(e) {
                mode = mode === 'signup' ? 'register' : 'signup';
                var activeView = mode === 'signup' ? '.signup1-view' : '.signup2-view';
                 var validator = $("#signup1_form").data("kendoValidator");
            
                    if (validator.validate()) {
                        //navigator.notification.alert(validator.validate());
                        $(activeView).show().siblings().hide();
                    }else{
                       navigator.notification.alert("โปรดกรอกข้อมูลให้ครบ");
                    }
                
            },
        termofuse: function() {
                app.mobileApp.navigate('components/termsofuse/view.html');
            },
         gohome: function() {
                app.mobileApp.navigate('components/home/view.html');
            },
        gowelcome: function() {
                app.mobileApp.navigate('components/welcome/view.html');
            },
    });

    parent.set('reigisterModel', reigisterModel);
})(app.reigister);

// START_CUSTOM_CODE_reigisterModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_reigisterModel