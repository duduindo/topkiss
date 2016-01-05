;(function() {
	"use strict";


/**
   * Fechando menu
   * => function
   * => @private
   */
var fecharMenu = function(){	
	var elements = [".mdl-layout__drawer", ".mdl-layout__obfuscator"];
	for(var n=0; n<elements.length; n++) {
		document.querySelector( elements[n] ).classList.remove("is-visible");
	}
};




/**
   * Abrindo modal   
   * => event 
   */
document.querySelector("[data-modal]").addEventListener('click', function(){	
	var id = this.getAttribute("data-modal");
	document.querySelector( id ).classList.add("is-visible");

	fecharMenu();
}, false);




/**
   * Fechando modal 
   * => event  
   */
document.querySelector("#modal-favoritos header i").addEventListener('click', function(){
	console.log( this.parentNode.parentNode.classList.remove("is-visible") );
}, false);



}());