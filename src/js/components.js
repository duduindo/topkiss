window.teste = [
				{nome:"Rio de Janeiro", tipo:1, local:19},
				{nome:"São Paulo", tipo:1, local:23}
				]

//Rachet -> .table-view
var ListItemTableViewPreferencias = React.createClass({
	render: function() {
		return 	<li className="table-view-cell"> 					
					<a className="navigate-right" href="#ModalEscolherLocaisPreferencias">
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

		return data;
	},

	writeGlobalVar: function() {

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
	},	

	render: function() {		
		
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
                	        <p className="color-black pull-left nome-localEscolhido" id="nome-localEscolhidoPreferencias">Brasil todo</p>
                	      </a>
                	    </li>                                
                	  </ul>
                	</div>
                </div>
			);
	}

});

/* Escolhendo Local Preferencias */
var ComponentEscolheLocalPreferencias = React.createClass({


	render: function (){
		var ar = window.teste;

		return (
			<ul className="table-view">
				{ar.map(function(ar){
					return <ListItemTableViewPreferencias key={ar.local} data={ar} />
				})}
        		
			</ul>
			);
	}

});



/*
	REACT DOM
*/
ReactDOM.render( <ComponentPreferenciasSexo />, document.getElementById("ComponentPreferenciasSexo") );
ReactDOM.render( <ComponentPreferenciasSorteio />, document.getElementById("ComponentPreferenciasSorteio") );

ReactDOM.render( <ComponentEscolheLocalPreferencias />, document.getElementById("ComponentEscolheLocalPreferencias") );