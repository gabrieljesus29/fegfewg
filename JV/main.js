//let num1 = 9.8
//let num2 = Math.floor(num1)
//let num2 = Math.floor(num1)
//let num2 = Math.floor(num1)
//let maioValor = Math.min(1, 2, 3, 4, 10, 20, 8)

//const aleatoria = Math.floor(Math.random()*10)
//const aleatorio = Math.round(Math.random() * (100 - 0) + 0)


//console.log(Math.pow(5,2))

//recebe mumero

const numero= prompt("Digite um numero: ")

const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero
texto.innerHTML = `<p> O número digitado foi ${numero} </p>`
//console.log(numeroTitulo)