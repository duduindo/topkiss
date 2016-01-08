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
   * Loop modals  
   * => event 
   */
for(var n=0; n<document.querySelectorAll("[data-modal]").length; n++ ) {

	/**
   		* Abrindo modal   
   		* => event 
   		*/
	document.querySelectorAll("[data-modal]")[n].addEventListener('click', function(){

		var id = this.getAttribute("data-modal");
		document.querySelector( id ).classList.add("is-visible");	
		fecharMenu();

	}, false);

}//.for


for(var n=0; n<document.querySelectorAll(".modal").length; n++ ) {

		
	/**
   	* Fechando modal 
   	* => event  
   	*/
	document.querySelectorAll(".modal header > i")[n].addEventListener('click', function(){
		this.parentNode.parentNode.classList.remove("is-visible");
	}, false);

}//.for






}());