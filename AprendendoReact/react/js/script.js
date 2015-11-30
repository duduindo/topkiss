
//Tutorial 1
//ReactDOM.render( <h1>110</h1>, document.getElementById("root")	 );


//Função/Classe
//PEGANDO O VALOR DO INPUT.
// var CommentBox = React.createClass({

// 	getRange: function(index) {
// 		console.log( index.target.value )
// 	},
	
// 	render: function() {
// 		return (			
// 			<div>
// 				<input type="range" max="100" min="0" onChange={this.getRange} />				
// 			</div>			
// 			);
// 	}	
// });

// ReactDOM.render(  <CommentBox />, document.getElementById("root") );



//Função/Classe
//PEGANDO O VALOR DO INPUT.
// var CommentBox = React.createClass({

// 	valores: {
// 		'km':0
// 	},

// 	getRange: function(index) {
// 		var valor = index.target.value;
// 		this.valores.km = valor;
// 	},
// 	render: function() {		
// 		return (			
// 			<div>
// 				<div>  </div>
// 				<input type="range" max="100" min="0" onChange={this.getRange} />				
// 			</div>			
// 			);
// 	}	
// });

// ReactDOM.render(  <CommentBox />, document.getElementById("root") );

var CommentBox2 = React.createClass({
	
  	render: function() {
		
		return (
			<b>10</b>
			);
  }
});

var CommentBox = React.createClass({

	getInitialState: function() {
		return {value: 'Hello!'};
  	},
  	handleChange: function(event) {
  		var valor = event.target.value;

  		if( valor.length < 1 ) {
  			valor = 0;
  		}
  		else {
  			valor = event.target.value;
  		}
		this.setState({value: valor});	
  	},
  	render: function() {
		var value = this.state.value;
		return (
			<div>
				<div>{value}</div>
				<input type="text" value={value} onChange={this.handleChange} />
				<CommentBox2 />
			</div>
			);
  }
});



ReactDOM.render(  <CommentBox /> , document.getElementById("root") );