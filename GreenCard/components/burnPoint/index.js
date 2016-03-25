'use strict';

app.burnPoint = kendo.observable({
    
    
    eventgiftsdata: new kendo.data.DataSource({
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "GET",
                            url: "https://greenapi.odooportal.com/api/v1/event_gifts",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (result) {
                                //navigator.notification.alert(result);
                                options.success(result.data);
                                
                            }
                        });
                    }
            },
       // serverPaging: true,
         pageSize: 4,
    }),
    /*
     data2: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/gifts",
                            contentType: "application/json; charset=utf-8",
                            data: JSON.stringify({ offset: 0,limit:20 }),
                            dataType: "json",
                            success: function (result) {
                                options.success(result.data);
                               // navigator.notification.alert(result.data);
                                
                            }
                        });
                    }
            },
    }),
    
        data3 : new kendo.data.DataSource({
        type: "odata",
        transport: {
            read: {
                url: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products"
            }
        },
    }),
    */
    
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
                            
                            //result.set("data","55555" );
                            
                            kendo.unbind($("#headerburnPoint"));
                               kendo.bind($("#headerburnPoint"),result);
                        },
                        error: function(result) {
                            navigator.notification.alert(result);    
                        },
                });
                
            $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/gifts",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (result) {
                               // navigator.notification.alert(result.data);
                                e.view.element.find("#giftslist").kendoMobileListView({
        			            template: kendo.template($("#giftslisttmp").html()),
        			            dataSource: result.data,
                                    });
                                
                             },
                        error: function(result) {
                            navigator.notification.alert(result);    
                        },
                  });
        
        
      
    },
    afterShow: function() {}
});

(function(parent) {
    

    var burnPointModel = kendo.observable({
       
        information: function() {
				app.mobileApp.navigate('components/information/view.html');
        },
         earn: function() {
				app.mobileApp.navigate('components/earn/view.html');
        }, 
        burnPoint: function() {
				app.mobileApp.navigate('components/burnPoint/view.html');
        },
        
        clickedImage : function()
        {
            navigator.notification.alert("clickedImage");
             //app.mobileApp.navigate('components/earnbyid/earnby1.html');
        },
  
       
    });

    parent.set('burnPointModel', burnPointModel);
})(app.burnPoint);
