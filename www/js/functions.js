

//Event on
var On = function(attr, selector, functions)
{	
	[].forEach.call(document.querySelectorAll(selector), function(el) {
	  el.addEventListener(attr, function(event) {
	    return functions(el, event);
	  })
	});
}


/* MANIPULAÇÕES NO MENU
---------------------------*/
//Altenar o Menu
var AltenarMenu = function()
{
	var menu = document.getElementsByClassName("menu")[0];    
    menu.classList.toggle("active");
}

//Altenar o Menu
var AbrirMenu = function()
{
	var menu = document.getElementsByClassName("menu")[0];    
    menu.classList.add("active");
}

//Somente fechar o Menu
var FecharMenu = function()
{
	var menu = document.getElementsByClassName("menu")[0];	
	menu.classList.remove("active");    
}

//WEB STORAGE
var Dados = function( name, value )
{	
	if( typeof(value) == "undefined" ) {
		return localStorage.getItem(name);
		return false;
	}

	localStorage.setItem(name, value);	
}


