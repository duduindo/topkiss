/* Váriveis globais defalut
-------------------*/
window.preferencias = {

	"sexo": {
		"masculino":false,
		"feminino":true
	},

	"distancia": {
		"escolhido":true,
		"km": 10
	},

	"local": {
		"escolhido":false,
		"tipo": 0,
		"local": 10
	}
};


/*	PREFERÊNCIAS
---------------------*/
(function(){
	"use strict";

	var elMain;
	var elForm;

	var initialization = function () {
		elMain = document.getElementById("ModalPreferencias");
		elForm = elMain.getElementsByTagName("form")[0];

		verifyStorage();
		console.info( elForm.value )
	};

	var verifyStorage = function() {
		if( Dados("preferencias") == null ) {
			Dados("preferencias", JSON.stringify(window.preferencias) );			
		}
		else {			
			window.preferencias = JSON.parse( Dados("preferencias") );			
		}
	};




	initialization();

	//Botão fechar
    On('touchend', "#ModalPreferencias header a", function(este, evento){    	
    	
    });

})();