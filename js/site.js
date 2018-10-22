//debugger;
var ar;
console.log(ar);
ar = ['h','o','l','a'];
console.log(ar);
console.warn("Longitud de ar: ", ar.length,ar);
console.log("Longitud de ar: "+ar.length+ar);

var miNombre = "fedesofT";

//debugger;
for(var i=0; i <miNombre.length; i++){
    console.log(miNombre[i],"=>",i);
}

console.log("-----------------------------------");
console.log("-----------------------------------");

//debugger;
var concatenar = '';
for(var i=0; i <miNombre.length; i++){
    if(i % 2 > 0){
        console.log(miNombre[i].toLowerCase(),"=>",i);        
        concatenar = concatenar + miNombre[i].toLowerCase();        
    } else{
        console.log(miNombre[i].toUpperCase(),"=>",i);
        concatenar = concatenar + miNombre[i].toUpperCase();
    }
}

console.log("-----------------------------------");
console.log(concatenar);

console.log("-------------FINAL----------------------");

function isPair(x){
    return x % 2 == 0 ? true: false;
}

//console.log(isPair(4));

function convetChar(c, isUp){
    return isUp?c.toUpperCase():c.toLowerCase();
}

function getLast(t){
    return t[t.length -1];
}

function mostrarTexto(t){
    var tmp='';
    for(var i=0; i<t.length; i++){
        tmp = tmp + convetChar(t[i],isPair(i));
        console.log(getLast(tmp), "=>",i);
    }
    console.log(tmp);
}

mostrarTexto('monica');
