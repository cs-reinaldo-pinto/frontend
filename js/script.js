/*alert("Ola Naiara!");

var resposta = confirm("Deseja excluir?");
console.log(resposta);
*/
var a = 10;
var b = 12;

//alert(a % b);

function soma(a, b){

  return a + b;

}

console.log(soma(10,12));


document.getElementById("btn-calcular").onclick = function(){

  var valorA = document.getElementById("valor-a").value;
  var valorB = document.getElementById("valor-b").value;
  //console.log(parseInt(valorA)+parseInt(valorB));
  alert(parseInt(valorA)+parseInt(valorB));
}
