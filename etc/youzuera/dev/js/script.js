/**
   	* VARIAVEIS GLOBAIS
   	* 
   	*/
var servidor = "http://192.168.2.100/topkiss/etc/youzuera/server/";
var limite = 1;
var Views = new ViewsMostrarArquivos();//views.js

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
	
};




function setViewMostrarArquivos ( json_data ) {
	"use strict";

	var data = json_data;

	//var v = Views.paginaIndex("1", "dudu", "021", "458 MB", "54848", "Um titulo aqui", "video", "http://192.168.2.100/topkiss/etc/youzuera/server/files/1.mp4" ,"http://192.168.2.100/topkiss/etc/youzuera/server/files/1.jpg");



	for(var n=0; n<json_data.length; n++) {
		//$("#page-inicio .page-content").append( v );	
		//Views.paginaIndex("1", "dudu", "021", "458 MB", "54848", "Um titulo aqui", "video", "http://192.168.2.100/topkiss/etc/youzuera/server/files/1.mp4" ,"http://192.168.2.100/topkiss/etc/youzuera/server/files/1.jpg");
		$("#page-inicio .page-content").append(
			Views.paginaIndex(
				data[n].id, 
				data[n].usuario, 
				data[n].tempo, 
				data[n].tamanho, 
				data[n].visualizacoes,
				data[n].titulo, 
				data[n].tipo, 
				data[n].url_file,
				data[n].url_preview)
		);//.page-content
	}	
};


/**
   	* AJAX
   	* 
   	*/
var getModalArquivos = function( tipo ) {	
	"use strict";

	if( typeof tipo == "undefined" ) {
		tipo = "all";
	}


 	$.getJSON( window.servidor + "mostrar_arquivos.php?_jsonp=?", { "type":tipo, "limit":limite }, function() {})
    .done(function( data ){     	
    	
    	console.log(data);
    	setViewMostrarArquivos(data);
    })
    .fail(function() {       
       alert("Erro:::");
    });
}





document.addEventListener('DOMContentLoaded', function(){
	getModalArquivos();
}, false);
