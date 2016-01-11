//Modernizr {cssvwunit: true, cssvhunit: true, csscalc: true, cssvmaxunit: true, cssvminunit: true}


/*
*
* EVENTS
*
*/

(function(){
    "use strict";

    //ONLOAD    
    var vw = window.innerWidth;
	var vh = window.innerHeight;
    var variables = {
        menu:{
            start:0,
            end:0
        },
        corpo:{
            start:0,
            move:0
        }
    }

	//page-index > section
	if( !window.Modernizr.csscalc || !window.Modernizr.cssvwunit ) {

		var pageIndex_section = document.querySelectorAll("#page-index > section:nth-of-type(1)")[0];
		pageIndex_section.style.width = vw + 'px';
		pageIndex_section.style.height = (vh-60) + 'px';
        pageIndex_section = null;
	} 
    else {
        vw = null;
        vh = null;
    }

    //localStorage.removeItem("preferencias");

    //Localstorage para variaveis globais
    setGlobalVariables();//function.js

    //Alterna menu    
    new On('click', '.alternar-menu', function(este, evento){        
    	new AbrirMenu(); 	
    });
    
    //Fecha menu
    new On('click', 'main > aside li', function(este, evento){    	
    	new FecharMenu();
    });

    
    //Fecha menu
    new On('touchstart', 'main > aside', function(este, evento){    	
    	if( evento.srcElement === este ){
    		new FecharMenu();
    		evento.preventDefault();
    	} 	
    });


    /*
    *   Abrir o menu com touch
    *   --- Touchstart e Touchend
    */    
    new On('touchstart', 'body', function(este, evento){ //Touchstart         
        variables.corpo.start = evento.touches[0].clientX;        
    });    
    new On('touchmove', 'body', function(este, evento){    //Touchend
        variables.corpo.move = evento.touches[0].clientX;
        
        if( variables.corpo.start > 0 && variables.corpo.start < 10 && variables.corpo.move > 30 ) {
            new AbrirMenu();
        }
    });


    /*
    *   Fechando o menu com touch
    *   --- Touchstart e Touchend
    */    
    new On('touchstart', 'main > aside > section', function(este, evento){ //Touchstart
        variables.menu.start = evento.touches[0].clientX;        
    });    
    new On('touchend', 'main > aside > section', function(este, evento){    //Touchend
        variables.menu.end = evento.changedTouches[0].clientX;    
        
        if( variables.menu.start > variables.menu.end+15 ) {
            este.parentNode.classList.remove("active");
        }

        variables.menu.start = 0;
        variables.menu.end = 0;
    });
    
    //Backup das variaveis globais
    new On('click', '.modal [href="#ModalPreferencias"]', function(este, evento){
        writeGlobalBackup();        
    });
    
    // Classe genérica para fechar o próprio elemento    
    new On('touchend', '.popover', function(este, evento){        
        este.style.display = 'none';
        este.classList.remove("visible");
        var backdrop = document.body.querySelector(".backdrop");
        backdrop.parentNode.removeChild(backdrop);
        backdrop = null;
    });

    
    //alert( window.innerHeight +" "+ window.innerWidth )

    //changeHash
    window.addEventListener('hashchange', function(event) {
        
    }, false);
    
    //Popstate
    window.addEventListener('popstate', function(event) {

    }, false);





})();
