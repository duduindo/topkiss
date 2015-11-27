
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
var CommentBox = React.createClass({



	getRange: function(index) {
		var valor = 10;
		console.log( index.target.value )
	},
	render: function() {
		var valor = 11;
		return (			
			<div>
				<div>Valor: {valor}</div>
				<input type="range" max="100" min="0" onChange={this.getRange} />				
			</div>			
			);
	}	
});

ReactDOM.render(  <CommentBox />, document.getElementById("root") );