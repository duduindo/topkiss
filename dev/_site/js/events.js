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

	//page-index > section
	if( !window.Modernizr.csscalc || !window.Modernizr.cssvwunit ) {

		var pageIndex_section = document.querySelectorAll("#page-index > section:nth-of-type(1)")[0];
		pageIndex_section.style.width = vw + 'px';
		pageIndex_section.style.height = (vh-60) + 'px';
	}

    //Localstorage para variaveis globais
    setGlobalVariables();//function.js

    //Alterna menu    
    new On('click', '.alternar-menu', function(este, evento){        
    	new AltenarMenu(); 	
    });
    
    //Fecha menu
    new On('click', 'main > aside', function(este, evento){    	
    	new FecharMenu();	
    });
    
    //Fecha menu
    new On('touchstart', 'main > aside', function(este, evento){    	
    	if( evento.srcElement === este ){
    		new FecharMenu();
    		//evento.preventDefault();
    	} 	
    });
        
    //Alterando o paragráfo conforme o valor do 'range'
    new On('input', '#ModalPreferencias [type="range"]', function(este, evento){    	
    	var p = evento.target.nextElementSibling; //Detecta tag irmão
    	p.textContent = este.value + 'km.'; //Modifica o valor
    });
    
    
    // Classe genérica para fechar o próprio elemento    
    new On('touchend', '.popover', function(este, evento){        
        este.style.display = 'none';
        este.classList.remove("visible");
        var backdrop = document.body.querySelector(".backdrop");
        backdrop.parentNode.removeChild(backdrop);
    });
    
    //alert( window.innerHeight +" "+ window.innerWidth )
    
    //Função para Escolhendo Local
    var eventoEscolhendoLocalPreferencias = function () {
        new On('click', '[data-escolhendoLocal]', function(este, evento){        
            setDataEscolhendoLocalPreferencias( este.getAttribute("data-escolhendoLocal") );
        });
    };
    eventoEscolhendoLocalPreferencias();
    
    
    //Popstate
    window.addEventListener('popstate', function(event) {   		
    }, false);



})();
