var getServerProcurandoLocaisData;
var servidor = "http://192.168.2.100/topkiss/server/";

//Event on
var On = function(attr, selector, functions)
{	
	if( typeof selector == "string" ) {
		[].forEach.call(document.querySelectorAll(selector), function(el) {
	  			el.addEventListener(attr, function(event) {
	    		return functions(el, event);
	  		});
		});		
	}

	else {
		[].forEach.call(selector, function(el) {
	  			el.addEventListener(attr, function(event) {
	    		return functions(el, event);
	  		});
		});
	}
};


/* MANIPULAÇÕES NO MENU
---------------------------*/
//Altenar o Menu
var AltenarMenu = function()
{
	var menu = document.getElementsByClassName("menu")[0];    
    menu.classList.toggle("active");
};

//Altenar o Menu
var AbrirMenu = function()
{
	var menu = document.getElementsByClassName("menu")[0];    
    menu.classList.add("active");
};

//Somente fechar o Menu
var FecharMenu = function()
{
	var menu = document.getElementsByClassName("menu")[0];	
	menu.classList.remove("active");    
};

//WEB STORAGE
var Dados = function( name, value )
{	
	if( typeof(value) == "undefined" ) {
		return localStorage.getItem(name);		
	}
	else {
		localStorage.setItem(name, value);
	}	
};


//WEB STORAGE p/ VARIAVEIS GLOBAIS
var setGlobalVariables = function() {

	// PREFERENCIA
	if( Dados("preferencias") === null ) { //Padrão
		Dados("preferencias", JSON.stringify(window.dataPreferencias) );			
	}
	else {
		window.dataPreferencias = JSON.parse( Dados("preferencias") );			
	}
};


//Listando os locais AJAX
// ul === setElementParent
var setLocaisList = function( setJson, setElementParent ) {
	var ar = [];

	//{nome:"Rio de Janeiro", tipo:1, local:19}, {nome:"São Paulo", tipo:1, local:23}

	var formatArray = function () {
		for(var n=0; n<setJson.length; n++) {
			console.log( setJson[n]  )
		}
	};

	formatArray();

};



//data-escolhendoLocal="São Paulo, 1, 23"
var setDataEscolhendoLocalPreferencias = function ( attribute ) {
	var arData = attribute.split(",");
	var nome = String(arData[0]);
	var tipo = Number(arData[1]);
	var local = Number(arData[2]);

	window.dataPreferencias.locais.nome = nome;
	window.dataPreferencias.locais.tipo = tipo;
	window.dataPreferencias.locais.local = local;

	//#nome-localEscolhidoPreferencias
	document.getElementById("nome-localEscolhidoPreferencias").textContent = nome;
};



//Procurando locais no servidor
var getServerProcurandoLocais = function ( tipo, data_client )
{	
	$.getJSON( window.servidor + "index.php?_jsonp=?", { "type":tipo, "data_client":data_client, "TYPE_SEARCH":"LOCATION" }, function() {})
    .done(function( data ){ 

    	console.log(data);

    	//setLocaisList(data,  document.querySelectorAll("#ModalEscolherLocaisPreferencias .table-view") );
    })
    .fail(function() {       
       alert("Erro: getServerProcurandoLocais");
    });
};