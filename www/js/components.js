

/* Preferencias -> Sexo */
var ComponentPreferenciasSexo = React.createClass({

	data : window.dataPreferencias.sexo,
	
	getInitialState: function() {		
		return { 
			checkHomens: 	this.data.masculino,  
			checkMulheres: 	this.data.feminino 
		}
	},

	handleChange: function(event) {
		var valor = event.target.value;
		var checar = event.target.checked;

		if( valor == "homens" ) {
			this.setState({ checkHomens:checar });			
			this.data.masculino = checar;
		}

		if( valor == "mulheres" ) {
			this.setState({ checkMulheres:checar });			
			this.data.feminino = checar;
		}

		//Gravando na Varivel Global
		window.dataPreferencias.sexo.masculino = this.data.masculino;
		window.dataPreferencias.sexo.feminino = this.data.feminino;
	},

	render: function() {
		var homens = this.state.checkHomens;
		var mulheres = this.state.checkMulheres;

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



/* Preferencias -> Distancia */
var ComponentPreferenciasDistancia = React.createClass({

	dataDistancia : window.dataPreferencias.distancia,
	dataLocais : window.dataPreferencias.locais,
	dataAtivo : window.dataPreferencias.ativo,
	
	getInitialState: function() {		
		
	},

	handleChange: function(event) {
			
	},

	render: function() {
		var inputRadio = "distancia";

		return (
				<div>
					<div className="inline-block col-100 paddingTop50" >
                	  <p className="color-black pull-left">Sorteio por distância:</p>
                	  <input type="radio" className="radio pull-right marginRight10" name="sorteio" value={inputRadio} />
                	</div>
                	
                	<div className="card">
                	  <ul className="table-view">
                	    <li className="table-view-cell">
                	      <input type="range" className="pull-left" name="km" value="100" min="1" max="100" />
                	      <p className="color-black pull-right">100km</p>
                	    </li>                                
                	  </ul>
                	</div>
                </div>
			);
	}

});




/*
	REACT DOM
*/
ReactDOM.render( <ComponentPreferenciasSexo />, document.getElementById("ComponentPreferenciasSexo") );
ReactDOM.render( <ComponentPreferenciasDistancia />, document.getElementById("ComponentPreferenciasDistancia") );