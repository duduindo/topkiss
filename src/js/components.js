//Rachet -> .table-view
var ListItemTableViewPreferencias = React.createClass({

	Click: function(event) {
		this.props.onClick(this.props.key);		

		//Modal Preferencias
		if( this.props.href === "#ModalEscolherLocaisPreferencias" ) {
			window.dataPreferencias.locais.nome = this.props.data.nome;
            window.dataPreferencias.locais.tipo = this.props.data.tipo;
            window.dataPreferencias.locais.id = Number(this.props.data.id);

            document.getElementById("nome-localEscolhidoPreferencias").textContent = this.props.data.nome;
		}
	},


	render: function() {
		return 	<li className="table-view-cell"> 					
					<a className="navigate-right" href={this.props.href} data-dados={this.props.dados} onClick={this.Click} >
                  		{this.props.data.nome}
                	</a>
				</li>;
	}
});




/* Preferencias -> Sexo */
var ComponentPreferenciasSexo = React.createClass({

	data : window.dataPreferencias.sexo,
	
	getInitialState: function() {		
		return { 
			currentHomens: 	this.data.masculino,  
			currentMulheres: 	this.data.feminino 
		}
	},

	handleChange: function(event) {
		var valor = event.target.value;
		var checar = event.target.checked;

		if( valor == "homens" ) {
			this.setState({ currentHomens:checar });			
			this.data.masculino = checar;
		}

		if( valor == "mulheres" ) {
			this.setState({ currentMulheres:checar });			
			this.data.feminino = checar;
		}

		//Gravando na Varivel Global
		window.dataPreferencias.sexo.masculino = this.data.masculino;
		window.dataPreferencias.sexo.feminino = this.data.feminino;
	},

	render: function() {
		var homens = this.state.currentHomens;
		var mulheres = this.state.currentMulheres;

		return (
				<ul className="table-view">
                  <li className="table-view-cell" >
                    <p className="color-black pull-left">Homens</p>
                    <input type="checkbox" className="checkbox pull-right marginRight10" checked={homens} name="mostrar" value="homens" onChange={this.handleChange} />                    
                  </li>
                  <li className="table-view-cell" >
                    <p className="color-black pull-left">Mulheres</p>
                    <input type="checkbox" className="checkbox pull-right marginRight10" checked={mulheres} name="mostrar" value="mulheres" onChange={this.handleChange} />
                  </li>                
                </ul>    
			);
	}

});

/* Preferencias -> Sorteio */
var ComponentPreferenciasSorteio = React.createClass({
	
	dataAtivo : window.dataPreferencias.ativo,
	dataDistancia : window.dataPreferencias.distancia.km,
	dataLocais : window.dataPreferencias.locais,

	getInitialState: function() {
		
		var toggle = this.toggleAtivos( this.dataAtivo );
		
		return {
			currentDistancia : toggle.distancia,
			currentLocais :  toggle.locais,
			currentKm : this.dataDistancia
		}
	},

	toggleAtivos: function(valor) {
		var data;

		if( valor == "distancia" ) {			
			data = { distancia:true, locais:false }			
		}

		if( valor == "locais" ) {
			data = { distancia:false, locais:true }			
		}

		window.dataPreferencias.ativo = valor;
		return data;
	},

	typeChange: function(event) {
		var valor = event.target.value;
		
		var toggle = this.toggleAtivos( valor );
		
		this.setState({ 
			currentDistancia : toggle.distancia,
			currentLocais :  toggle.locais
		 });
	},

	kmChange: function(event) {
		var valor = event.target.value;
		
		this.setState({
			currentKm : valor
		});

		window.dataPreferencias.distancia.km = Number(valor);
	},	

	render: function() {
		var nomeLocal = window.dataPreferencias.locais.nome || "Brasil todo";
		
		return (
				<div>
					
					<div className="inline-block col-100 paddingTop50" >
                	  <p className="color-black pull-left">Sorteio por distância:</p>
                	  <input type="radio" className="radio pull-right marginRight10" value="distancia" checked={this.state.currentDistancia} onChange={this.typeChange} />
                	</div>
                	
                	<div className="card">
                	  <ul className="table-view">
                	    <li className="table-view-cell">
                	      <input type="range" className="pull-left" name="km" value={this.state.currentKm} min="1" max="100" onChange={this.kmChange}  />
                	      <p className="color-black pull-right">{this.state.currentKm + 'km'}</p>
                	    </li>                                
                	  </ul>
                	</div>

                	
                	<div className="inline-block col-100 paddingTop50">
                	  <p className="color-black pull-left">Sorteio por locais:</p>
                	  <input type="radio" className="radio pull-right marginRight10" value="locais" checked={this.state.currentLocais}  onChange={this.typeChange} />
                	</div>
                	
                	<div className="card">
                	  <ul className="table-view">
                	    <li className="table-view-cell">
                	      <a className="padding10" href="#ModalEscolherLocaisPreferencias">
                	        <span className="fa fa-pencil pull-left"></span>
                	        <p className="color-black pull-left nome-localEscolhido" id="nome-localEscolhidoPreferencias">{nomeLocal}</p>
                	      </a>
                	    </li>                                
                	  </ul>
                	</div>
                </div>
			);
	}

});


/* Preferencias -> Local Ajax */
var ComponentPreferenciasLocal = React.createClass({
			
	getInitialState: function() {
		return {
			nome:'',
			tipo:'todos',
			jsonData: [{id:0, nome:"loading..."}]
		}
	},
	
	handleChange: function(event) {
		var valor = event.target.value;
		
		this.setState({
			nome:valor
		});		
	},

			
	setValueServer: function(e) {
      	if(e.which == 13 || e.target.nodeName == "BUTTON") {
      		this.componentWillMount();
      	}
    },
    	
	componentWillMount: function() {		
		if( this.state.nome.length > 0 ) {
			$.getJSON( window.servidor + "index.php?_jsonp=?", { "type":this.state.tipo, "data_client":this.state.nome, "TYPE_SEARCH":"LOCATION" }, function(data) {					
				if (this.isMounted()) {
					this.setState({
						jsonData: data
					});
				}
			}.bind(this));
		}   	
	},

	registerGlobalClick: function(event) {},

	render: function() {
		var results = this.state.jsonData;
				
		//Loca não encontrado
		if( results.length == 0 ) {
			return (
				<div className="content-padded">           	
        	    	<input type="search" placeholder="Estado, Cidade, Bairro, Escola ou Faculdades" onChange={this.handleChange} onKeyDown={this.setValueServer} />
        	    	<p className="btn-negative text-center"> Local não encontrado</p>

        	    	<ul className="table-view" >            		
        	    		{results.map(function(result, i) {        	    			
        	  				return (<ListItemTableViewPreferencias onClick={this.registerGlobalClick} key={result.id} data={result} href="#ModalEscolherLocaisPreferencias" dados={result.nome+","+result.tipo+","+result.id}  />);
        				}, this)}            		
        	    	</ul>
        	  	</div>
				);
		}

		//Local encontrado
		else if( results[0].id != 0 ) {
			return (
				<div className="content-padded">           	
        	    	<input type="search" placeholder="Estado, Cidade, Bairro, Escola ou Faculdades" onChange={this.handleChange} onKeyDown={this.setValueServer} />
        	    	        	    	
        	    	<ul className="table-view" >
        	    		{results.map(function(result, i) {        	    			
        	  				return (<ListItemTableViewPreferencias onClick={this.registerGlobalClick} key={result.id} data={result} href="#ModalEscolherLocaisPreferencias" dados={result.nome+","+result.tipo+","+result.id}  />);
        				}, this)}
        	    	</ul>
        	  	</div>
				);
		}


		else {
			return (
				<div className="content-padded">           	
        	    	<input type="search" placeholder="Estado, Cidade, Bairro, Escola ou Faculdades" onChange={this.handleChange} onKeyDown={this.setValueServer} />
        	  	</div>
				);
		}
	}

});





/*
	REACT DOM
*/
ReactDOM.render( <ComponentPreferenciasSexo />, document.getElementById("ComponentPreferenciasSexo") );
ReactDOM.render( <ComponentPreferenciasSorteio />, document.getElementById("ComponentPreferenciasSorteio") );
ReactDOM.render( <ComponentPreferenciasLocal />, document.getElementById("ComponentPreferenciasLocal") );




