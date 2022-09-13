respostas = [];

function limpar() {
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
}
function calcular() {
  let deslocamento = Number.parseFloat(document.getElementById("deslocamento").value);
  let tempo = Number.parseFloat(document.getElementById("tempo").value);
  let vm = deslocamento / tempo
  document.getElementById("vm").value = vm
}
console.log(resultado);