'use strict';

app.earnbyid = kendo.observable({
    
    dataearnbyid1: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "Green 1" }),
                            dataType: "json",
                            success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid2: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "บริการสุขภาพ" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid3: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "เครื่องนุ่งห่ม" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid4: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "อิเล็กทรอนิกส์" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid5: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "เครื่องใช้ไฟฟ้าและแสงสว่าง" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid6: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "เครื่องใช้สำนักงาน" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid7: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "วัสดุก่อสร้าง" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid8: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "เครื่องใช้ในบ้านเรือน" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid9: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "การเดินทาง" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid10: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "โรงแรม" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid11: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "สถานที่ท่องเที่ยว" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid12: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "สถานีบริการ" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    
    
    onShow: function(e) {
         var header_token = null;
            
           	var token = null;
        	token = localStorage.getItem("token");
            header_token =  "Bearer "+token;
            //navigator.notification.alert(header_token);
            $.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/points",
                        contentType: "application/json",
                		headers: {'Authorization' : header_token},
                        success: function(result) {                
                            //navigator.notification.alert(result.data);
                            kendo.bind($("#headerearnbyid"),result);  
                            kendo.bind($("#headerearnbyid1"),result);
                            kendo.bind($("#headerearnbyid2"),result);
                            kendo.bind($("#headerearnbyid3"),result);
                            kendo.bind($("#headerearnbyid4"),result);
                            kendo.bind($("#headerearnbyid5"),result);
                            kendo.bind($("#headerearnbyid6"),result);
                            kendo.bind($("#headerearnbyid7"),result);
                            kendo.bind($("#headerearnbyid8"),result);
                            kendo.bind($("#headerearnbyid9"),result);
                            kendo.bind($("#headerearnbyid10"),result);
                            kendo.bind($("#headerearnbyid11"),result);
                            kendo.bind($("#headerearnbyid12"),result);
                        },
                        error: function(result) {
                            navigator.notification.alert(result);    
                        }
                });
                
             
        
      
    },
    afterShow: function() {}
});

(function(parent) {
    

    var earnbyidModel = kendo.observable({
       
        information: function() {
				app.mobileApp.navigate('components/information/view.html');
        },
         earn: function() {
				app.mobileApp.navigate('components/earn/view.html');
        }, 
        burnPoint: function() {
				app.mobileApp.navigate('components/burnPoint/view.html');
        },
         clickedImage1 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby1.html');
            },
        clickedImage2 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby2.html');
            },
        clickedImage3 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby3.html');
            },
        clickedImage4 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby4.html');
            },
        clickedImage5 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby5.html');
            },
        clickedImage6 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby6.html');
            },
        clickedImage7 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby7.html');
            },
        clickedImage8 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby8.html');
            },
        clickedImage9 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby9.html');
            },
        clickedImage10 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby10.html');
            },
        clickedImage11 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby11.html');
            },
        clickedImage12 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby12.html');
            },
       
    });

    parent.set('earnbyidModel', earnbyidModel);
})(app.earnbyid);