/* Váriveis globais defalut
-------------------*/
window.servidor = "http://192.168.2.100/topkiss/server/";

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
		"tipo": "",
		"local": 0
	}
};


/*	PREFERÊNCIAS
---------------------*/
(function(){
	"use strict";

	var elMain;
	var elForm;
	var clickLocal;

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

	//Resultado da pesquisa na localização
	/*
	<li class="table-view-cell">
      <a class="navigate-right" data-escolhendoLocal="São Paulo, 1, 23" href="#ModalEscolherLocaisPreferencias">
        São paulo
      </a>
    </li>
	*/
	window.ResultadoLocais = function ( Qts, arNome, arData ) {

		var elParent = document.querySelector("#ModalEscolherLocaisPreferencias ul.table-view");

		if( typeof(arData) != "object" ) {
			alert("arData não é Array!");
			return false;
		}

		elParent.innerHTML = "";//Zerando

		var li = [];
		var a  = [];
		var aText = [];

		for(var n=0; n < Qts; n++) {
			li[n] = document.createElement("li");
			a[n] = document.createElement("a");
			aText[n] = document.createTextNode( arNome[n] );

			li[n].classList.add("table-view-cell");
			a[n].classList.add("navigate-right");
			a[n].setAttribute("data-escolhendolocal", arData[n] );			
			a[n].href = "#ModalEscolherLocaisPreferencias";
			a[n].appendChild( aText[n] );			

			li[n].appendChild(a[n]);
			elParent.appendChild(li[n]);
		}

		//Evento
		On('touchend', "#ModalEscolherLocaisPreferencias [data-escolhendolocal]", function(este, evento){    	
    		var data = este.getAttribute("data-escolhendolocal").split(",");    		
    		data[2] = Number( data[2] );
	
			window.preferencias.locais.nome  = data[0];
			window.preferencias.locais.tipo  = data[1];
			window.preferencias.locais.local = data[2];
	
			elForm.getElementsByClassName("nome-localEscolhido")[0].textContent = data[0];
		});
	}

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


    //Selecionando o tipo para o modal #ModalEscolherLocaisPreferencias   
    On('touchend', "#PopoverTipoLocalPreferencia [data-tipoLocal]", function(este, evento){
    	document.getElementById("ModalEscolherLocaisPreferencias").setAttribute("data-tipoLocal", este.getAttribute("data-tipoLocal") );
	});
	
	
	//Procurando local	
    On('click', "#ModalEscolherLocaisPreferencias form button", function(este, evento){
    	var elIdParent = document.getElementById("ModalEscolherLocaisPreferencias");      	
    	var elText = este.parentNode.querySelector("[type=\"search\"]");
    	var elParentResult = este.parentNode.parentNode.getElementsByTagName("ul")[0];

    	//tipo, data_client
    	var locais = getServerProcurandoLocais( elIdParent.getAttribute("data-tipoLocal"), elText.value );

    	

    	//console.log( elText.value )
    	//ResultadoLocais( elParentResult, 3, ["São Paulo", "São Paulo", "São Paulo"] , ["São Paulo, Cidade, 33", "São Paulo, Cidade, 33", "São Paulo, Cidade, 33"] );

    	
	});
    
})();