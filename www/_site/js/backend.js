/* Váriveis globais defalut
-------------------*/
window.preferencias = {

	"sexo": {
		"masculino":false,
		"feminino":true
	},

	"distancia": {
		"ativo":false,
		"km": 100
	},

	"locais": {
		"ativo":true,
		"nome": "Brasil todo",
		"tipo": 0,
		"local": 0
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
		preferenciasHTML();
	};


	//Caso não tenha Storage(preferencias), usar o padrão.
	var verifyStorage = function() {
		if( Dados("preferencias") == null ) { //Padrão
			Dados("preferencias", JSON.stringify(window.preferencias) );			
		}
		else {
			window.preferencias = JSON.parse( Dados("preferencias") );			
		}
	};


	//Do array para os valores dos inputs
	var preferenciasHTML = function () {

		//Genero
		elForm.mostrar[0].checked = window.preferencias.sexo.masculino;
		elForm.mostrar[1].checked = window.preferencias.sexo.feminino;

		//Locais ou distancia
		elForm.sorteio[0].checked = window.preferencias[ elForm.sorteio[0].value ]["ativo"];
		elForm.sorteio[1].checked = window.preferencias[ elForm.sorteio[1].value ]["ativo"];

		//A distancia em km
		elForm.km.value = window.preferencias[ elForm.sorteio[0].value ]["km"];		
		elForm.km.nextSibling.nextElementSibling.textContent = window.preferencias[ elForm.sorteio[0].value ]["km"] + "km"; //<p> Tag irmão

		//Local 
		elForm.getElementsByClassName("nome-localEscolhido")[0].textContent = window.preferencias.locais.nome;
		
	};

	initialization();


	
	/*	EVENTOS
	---------------*/

	//Botão fechar
    On('touchend', "#ModalPreferencias header a", function(este, evento){    	
    	    	
    	//Genero
    	window.preferencias.sexo.masculino = elForm.mostrar[0].checked; 
    	window.preferencias.sexo.feminino = elForm.mostrar[1].checked;

    	//Locais ou distancia
    	window.preferencias[ elForm.sorteio[0].value ]["ativo"] = elForm.sorteio[0].checked; //Distancia
		window.preferencias[ elForm.sorteio[1].value ]["ativo"] = elForm.sorteio[1].checked; //Local

		//A distancia em km
		window.preferencias[ elForm.sorteio[0].value ]["km"] = Number( elForm.km.value );		    	

    	Dados("preferencias", JSON.stringify(window.preferencias) );
    });

	
	//Selecionando local
	//data-escolhendoLocal="[ Nome, Tipo, Código do local]"
    On('touchend', "#ModalEscolherLocaisPreferencias [data-escolhendoLocal]", function(este, evento){  
    	var data = este.getAttribute("data-escolhendoLocal").split(",");
    	data[1] = Number( data[1] );
    	data[2] = Number( data[2] );

		window.preferencias.locais.nome  = data[0];
		window.preferencias.locais.tipo  = data[1];
		window.preferencias.locais.local = data[2];

		elForm.getElementsByClassName("nome-localEscolhido")[0].textContent = data[0];
	});

    
})(10);