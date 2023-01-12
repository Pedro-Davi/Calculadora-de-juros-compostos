let capital = document.getElementById("capital")
let porcentagemJuros = document.getElementById("juros-pct")
let tempoRendimento = document.getElementById("rendimento")
let montante = document.getElementById("result")

const button = document.querySelector("button")

button.addEventListener("click", () =>{
    if (validateEquation() !== true){
    let result = capital.value*(1+porcentagemJuros.value/100)**tempoRendimento.value
    montante.innerHTML = `R$ ${result.toFixed(2).replace('.', ',')}`
    }
})

function validateEquation(){
  if (capital.value.length == 0){
    alert("Por favor, insira o valor do capital.")
  
  } else if (porcentagemJuros.value.length == 0){
    alert("Por favor, insira a taxa de juros ao mês para que seja calculado o montante, o valor abaixo contém apenas o capital inicial.")
  
  } else if (tempoRendimento.value.length == 0){
    alert("Insira a quantidade de meses para que seja calculado o montante, o valor abaixo contém apenas o capital inicial.") 
  
  }
}
