//Modernizr {cssvwunit: true, cssvhunit: true, csscalc: true, cssvmaxunit: true, cssvminunit: true}


/*
*
* EVENTS
*
*/




"use strict";



if ('addEventListener' in document) {

    

	//ONLOAD
    document.addEventListener('DOMContentLoaded', function(event) {
        
        var vw = window.innerWidth;
		var vh = window.innerHeight;
	
		//page-index > section
		if( !Modernizr.csscalc || !Modernizr.cssvwunit ) {
	
			var pageIndex_section = document.querySelectorAll("#page-index > section:nth-of-type(1)")[0];
			pageIndex_section.style.width = vw + 'px';
			pageIndex_section.style.height = (vh-60) + 'px';
		}

        //Localstorage para variaveis globais
        setGlobalVariables();//function.js

    }, false);


    //Alterna menu    
    On('click', '.alternar-menu', function(este, evento){        
    	AltenarMenu(); 	
    });

    //Fecha menu
    On('click', 'main > aside', function(este, evento){    	
    	FecharMenu();	
    });

	//Fecha menu
    On('touchstart', 'main > aside', function(este, evento){    	
    	if( evento.srcElement === este ){
    		FecharMenu();
    		//evento.preventDefault();
    	} 	
    });
        
    //Alterando o paragráfo conforme o valor do 'range'
    On('input', '#ModalPreferencias [type="range"]', function(este, evento){    	
    	var p = evento.target.nextElementSibling; //Detecta tag irmão
    	p.textContent = este.value + 'km.'; //Modifica o valor
    });


    // Classe genérica para fechar o próprio elemento    
    On('touchend', '.popover', function(este, evento){        
        este.style.display = 'none';
        este.classList.remove("visible");
        var backdrop = document.body.querySelector(".backdrop");
        backdrop.parentNode.removeChild(backdrop);
    });

    //alert( window.innerHeight +" "+ window.innerWidth )

    //Função para Escolhendo Local
    var eventoEscolhendoLocalPreferencias = function () {
        return On('click', '[data-escolhendoLocal]', function(este, evento){        
            setDataEscolhendoLocalPreferencias( este.getAttribute("data-escolhendoLocal") )
        });
    }
    eventoEscolhendoLocalPreferencias();
   

    //Popstate
    window.addEventListener('popstate', function(event) {   		
	}, false);

}


