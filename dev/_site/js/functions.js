
var getServerProcurandoLocaisData;
var servidor = "http://192.168.2.100/topkiss/server/";
var historico = [];

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
    menu = null;    
};

//Altenar o Menu
var AbrirMenu = function()
{
	var menu = document.getElementsByClassName("menu")[0];    
    menu.classList.add("active");
    menu = null;
};

//Somente fechar o Menu
var FecharMenu = function()
{
	var menu = document.getElementsByClassName("menu")[0];	
	menu.classList.remove("active");  
	menu = null;
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

	name = null;
	value = null;
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

//VARIAVEIS GLOBAIS p/ WEB STORAGE
var writeGlobalBackup = function() {

	Dados("preferencias", JSON.stringify(window.dataPreferencias) );
};







//Procurando locais no servidor
var getServerProcurandoLocais = function ( tipo, data_client )
{
	//loading
	setLocaisListLoading( document.querySelector("#ModalEscolherLocaisPreferencias .table-view") );

	//Ajax
	$.getJSON( window.servidor + "index.php?_jsonp=?", { "type":tipo, "data_client":data_client, "TYPE_SEARCH":"LOCATION" }, function() {})
    .done(function( data ){ 
    	
    	//Listando
    	setLocaisList(data,  document.querySelector("#ModalEscolherLocaisPreferencias .table-view"), "#ModalEscolherLocaisPreferencias" );
    })
    .fail(function() {       
       alert("Erro: getServerProcurandoLocais");
    });
};