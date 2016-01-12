/*
	PERFIL -> Ranking
*/
var ComponentPerfilRanking = React.createClass({

	getInitialState: function() {
		return {
			nomeEstado: 'loading..',
			nomeCidade: 'loading..',
			nomeBairro: 'loading..',
			nomeEscola: 'loading..',
			nomeGps: 'loading..',
			rankTodo: 'loading..',
			rankEstado: 'loading..',
			rankCidade: 'loading..',
			rankBairro: 'loading..',
			rankEscola: 'loading..',
			rankGps: 'loading..',
			jsonData: [{id:0, nome:"loading..."}]
		}
	},

	componentWillMount: function() {		
		$.getJSON( window.servidor + "index.php?_jsonp=?", { "data_client":"9223372036854775807", "TYPE_SEARCH":"GETINFOFULL" }, function(data) {					
			if (this.isMounted()) {
				this.setState({
					jsonData: data
				});				
			}
		}.bind(this));
	},

	render: function() {

		return (
			<ul className="table-view">
        		
      		</ul>
      	);
	}

});


ReactDOM.render( <ComponentPerfilRanking />, document.getElementById("ComponentPerfilRanking") );




