function ViewsMostrarArquivos() {
	"use strict";
};
ViewsMostrarArquivos.prototype.paginaIndex = function( id, usuario, tempo, tamanho, visualizacoes, titulo, tipo, url_arquivo, url_preview ) {


	var html_video = '<!-- COMBO 1 -->\
          <article class="main-preview" data-file-status="play" data-file-type="video" data-file="'+ url_arquivo +'" data-file-id="'+ id +'" >\
            <div class="combo-preview" onclick="play(this)">\
              <img src="'+ url_preview +'" alt="">\
              <div class="main-status">\
                <div class="preview-status">\
                  <div class="preview-status-play">\
                    <i class="material-icons">&#xE037;</i>\
                  </div>\
                  <div class="preview-status-load">\
                    <progress value="22" max="100"></progress>\
                    <i class="material-icons">&#xE5CD;</i>\
                  </div>\
                  <div class="preview-status-down">\
                    <i class="material-icons">&#xE154;</i> <span>1,2 MB</span>\
                  </div>\
                </div>\
                <div class="preview-tempo">\
                  <div><i class="material-icons">&#xE04B;</i> <span>'+ tamanho +'</span></div>\
                  <div><i class="material-icons">&#xE2C3;</i> <span>'+ tempo +'</span></div>\
                </div>\
              </div>\
            </div> <!-- ./combo-preview -->\
            \
            <div class="mdl-grid mdl-grid--no-spacing">\
              <div class="mdl-cell mdl-cell--12-col"><span>teste</span></div>\
              <div class="mdl-cell mdl-cell--2-col mdl-cell--5-col-tablet" style="line-height: 30px;"><span>'+ visualizacoes +' <small>visualizações</small></span></div>\
              <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet text-right">\
                <button class="mdl-button mdl-js-button mdl-button--icon" data-modal="#modal-denunciar">\
                  <i class="material-icons">&#xE3A0;</i>\
                </button>\
                <button class="mdl-button mdl-js-button mdl-button--icon">\
                  <i class="material-icons">&#xE80D;</i>\
                </button>\
                <button class="mdl-button mdl-js-button mdl-button--icon">\
                  <i class="material-icons">&#xE87D;</i>\
                </button>\
                <button class="mdl-button mdl-js-button mdl-button--icon">\
                  <i class="material-icons">&#xE2C4;</i>\
                </button>\
              </div>\
              <div class="mdl-cell mdl-cell--12-col" style="line-height: 30px;">\
                <span>\
                  <a data-modal="#modal-perfil">'+ usuario +'</a>\
                </span>\
              </div>\
            </div>\
          </article>\
          <!-- ./COMBO 1 -->';


    if( tipo === "video" ) {
    	return html_video;
    }

};

//var v = new ViewsMostrarArquivos();
//v.paginaIndex("1", "dudu", "021", "458 MB", "54848", "Um titulo aqui", "video", "http://192.168.2.100/topkiss/etc/youzuera/server/files/1.mp4" ,"http://192.168.2.100/topkiss/etc/youzuera/server/files/1.jpg");
//				id, usuario, tempo, tamanho, visualizacoes, titulo, tipo, url_arquivo, url_preview


var a = '<!-- COMBO 1 -->\
          <article class="main-preview" data-file-status="play" data-file-type="video" data-file="files/1.mp4" data-file-id="{{ i }}" >\
            <div class="combo-preview" onclick="play(this)">\
              <img src="files/1.jpg" alt="">\
              <div class="main-status">\
                <div class="preview-status">\
                  <div class="preview-status-play">\
                    <i class="material-icons">&#xE037;</i>\
                  </div>\
                  <div class="preview-status-load">\
                    <progress value="22" max="100"></progress>\
                    <i class="material-icons">&#xE5CD;</i>\
                  </div>\
                  <div class="preview-status-down">\
                    <i class="material-icons">&#xE154;</i> <span>1,2 MB</span>\
                  </div>\
                </div>\
                <div class="preview-tempo">\
                  <div><i class="material-icons">&#xE04B;</i> <span>00:56</span></div>\
                  <div><i class="material-icons">&#xE2C3;</i> <span>1,2 MB</span></div>\
                </div>\
              </div>\
            </div> <!-- ./combo-preview -->\
            \
            <div class="mdl-grid mdl-grid--no-spacing">\
              <div class="mdl-cell mdl-cell--12-col"><span>teste</span></div>\
              <div class="mdl-cell mdl-cell--2-col mdl-cell--5-col-tablet" style="line-height: 30px;"><span>1215515 <small>visualizações</small></span></div>\
              <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet text-right">\
                <button class="mdl-button mdl-js-button mdl-button--icon" data-modal="#modal-denunciar">\
                  <i class="material-icons">&#xE3A0;</i>\
                </button>\
                <button class="mdl-button mdl-js-button mdl-button--icon">\
                  <i class="material-icons">&#xE80D;</i>\
                </button>\
                <button class="mdl-button mdl-js-button mdl-button--icon">\
                  <i class="material-icons">&#xE87D;</i>\
                </button>\
                <button class="mdl-button mdl-js-button mdl-button--icon">\
                  <i class="material-icons">&#xE2C4;</i>\
                </button>\
              </div>\
              <div class="mdl-cell mdl-cell--12-col" style="line-height: 30px;">\
                <span>\
                  <a data-modal="#modal-perfil">Fulano</a>\
                </span>\
              </div>\
            </div>\
          </article>\
          <!-- ./COMBO 1 -->';