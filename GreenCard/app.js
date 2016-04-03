'use strict';


(function() {
    var app = {
        data: {},
        

    }
    


    var bootstrap = function() {
        $(function() {
            
            var token,page_start;
            token = null;
        	token = localStorage.getItem("token");
            
            
            
            if(token != null){
            	page_start = 'components/welcome/view.html';
            }else{
               	page_start = 'components/home/view.html';
                   // page_start = 'components/earnbyid/view.html';
             };
            
            app.mobileApp = new kendo.mobile.Application(document.body, {
                skin: 'nova',
                transition: "fade",
                initial: page_start,
          
                
            });
        });
    };

    
    
    if (window.cordova) {
        document.addEventListener('deviceready', function() {
            if (navigator && navigator.splashscreen) {
                navigator.splashscreen.hide();
                
            }

            var element = document.getElementById('appDrawer');
            if (typeof(element) != 'undefined' && element !== null) {
                if (window.navigator.msPointerEnabled) {
                    $('#navigation-container').on('MSPointerDown', 'a', function(event) {
                        app.keepActiveState($(this));
                    });
                } else {
                    $('#navigation-container').on('touchstart', 'a', function(event) {
                        app.keepActiveState($(this));
                    });
                }
            }

            bootstrap();
        }, false);
    } else {
        bootstrap();
    }

    app.keepActiveState = function _keepActiveState(item) {
        var currentItem = item;
        $('#navigation-container li a.active').removeClass('active');
        currentItem.addClass('active');
    };

    window.app = app;

    app.isOnline = function() {
        if (!navigator || !navigator.connection) {
            return true;
        } else {
            return navigator.connection.type !== 'none';
        }
    };
    

    
}());






// START_CUSTOM_CODE_kendoUiMobileApp
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_kendoUiMobileApp