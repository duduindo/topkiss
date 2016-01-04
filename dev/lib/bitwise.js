function add(x, y){
    do{
        a=x&y;
        b=x^y;
        x=a<<1;
        y=b;
    }while(a);
    return b;
}



function negate(x){	
    return add(~x,1);
}
 
function sub(x,y){	
    return add(x,negate(y));
}


function mul(x, y){	
    var m=1; var z =0;
    if(x<0){
        x=negate(x);
        y=negate(y);
    }
 
    while(x>=m && y) {
        if (x &m) z=add(y,z);
        y <<= 1; m<<= 1;
    }
    return z;
}

function divide(x,y){
    var c=0; var sign=0;
 
    if(x<0){
        x=negate(x);
        sign^=1;
    }
     
    if(y<0){
        y=negate(y);
        sign^=1;
    }
 
    if(y!=0){
        while(x>=y){
            x=sub(x,y);
            ++c;
        }
    }
    if(sign){
        c=negate(c);
    }
    return c;
}



/*
 function botoes_pesquisando()
{
	var tipos = document.getElementById("modulacao_tipo");
	var nome = document.getElementById("modulacao_texto");
	var uls = document.getElementById("modulacao_ul");
		
	var not_json = Get(servidor+"locais.php?tipo="+tipos.value+"&nome="+nome.value);
	
	var not_json = Get(servidor+"locais.php?nome=&tipo=1");

	var a = new Array();
	var d = new Array();
	var b = not_json.split(',');

	var multi = 0;
	var c = 0;

	var len = b.length/3;

	for(n=0; n<len; n++){	
		multi = n*3;
		c = b.splice(0,3);
		d[(n+1)] = c;
	}
	
	
}
 * */