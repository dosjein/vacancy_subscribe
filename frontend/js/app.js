// Polling for the sake of my intern tests
var interval = setInterval(function() {
    if(document.readyState === 'complete') {
    	APP.start();
        clearInterval(interval);
        done();
    }    
}, 100);

APP = {
	start : function(){
		new Vue({
		    el: '#app',
		    data: {
		        message: 'Vacancy Subscribe Started'
		    }
		})		
	}

};

