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





/**
   	* FUNCÇÕES
   	* 
   	*/

function play( self_element ) {
	"use strict";

	var el 		= self_element.parentNode;//parent
	var status 	= el.getAttribute("data-file-status");
	var type 	= el.getAttribute("data-file-type");	
	var file 	= el.getAttribute("data-file");

	var el_player = document.getElementById("modal-visualizando");

	//Abrir o player para abrir
	if( status == "play" && type == "video" ) {		
		el_player.querySelector("video").src = file;
		el_player.querySelector("video").play();
		el_player.classList.add("is-visible");

		//Ao clicar em fechar, vai dar um stop no vídeo
		el_player.addEventListener('click', function(){
			el_player.querySelector("video").pause();			
		}, false);
		
	}

	if( status == "down" && type == "video" ) {
		var down = new download( file );
	}

};


function download( url ) {
	"use strict";


};



