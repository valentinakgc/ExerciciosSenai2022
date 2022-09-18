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
  document.getElementById("vm").innerHTML = vm
  respostas.push({dsl: deslocamento, tmp: tempo, vm: vm})
  historico()
}
console.log(resultado);


function historico() {
  let fim = document.getElementById("historico")
  fim.innerHTML = ''
  for(let resposta of respostas) {
    fim.innerHTML += `<li>Deslocamento: ${resposta.dsl} <br> Tempo: ${resposta.tmp} <br> Resposta: ${resposta.vm}</li>`
  }
}
