//let num1 = 9.8
//let num2 = Math.floor(num1)
//let num2 = Math.floor(num1)
//let num2 = Math.floor(num1)
//let maioValor = Math.min(1, 2, 3, 4, 10, 20, 8)

//const aleatoria = Math.floor(Math.random()*10)
//const aleatorio = Math.round(Math.random() * (100 - 0) + 0)


//console.log(Math.pow(5,2))

//recebe mumero

//const numero= prompt("Digite um numero: ")

//const numeroTitulo = document.getElementById('numero-titulo')
//const texto = document.getElementById('texto')

//numeroTitulo.innerHTML = numero

//texto.innerHTML += `<p> O número digitado foi ${numero} </p>`
//texto.innerHTML += `<p> Raiz quadrada: ${Math.pow(numero,0.5)} </p>`
//texto.innerHTML += `<p> Arredondado para cima: ${Math.ceil(numero)} </p>`
//texto.innerHTML += `<p> Arredondado para baixo: ${Math.floor(numero)} </p>`


//console.log(numeroTitulo)


//const nomes = ["Ti", "Ce", "Pe", "Gui"]
//for(let i=0; i< nomes.length-1; i++){
//    Texto.innerHTML += `<h1> ${nomes[i]} </h1>`

//texto.innerHTML += `<p> ${nomes[3]} </p>`




// Operadores lógicos

//&& -> AND -> E 
// || -> OR -> OU 
// ! -> NOT -> NÃO


//const usuario = 'programar123'
//const senha = '123456'

//const vaiLogar = usuario ==='programar123' && senha === '123456'

//console.log(vaiLogar)

// Operadores de curto circuito

//console.log(true && false)
//console.log('Tiago' && 0 && 12)

//FALSY false
//0
// '' "" ``
// null / undefined
//Nan

//console.log("null" || "0" && false)

//const corUsuario = null
//const corUtilizada = corUsuario || 'preto'

//console.log(corUtilizada)


//const a = 0
//const b = null
//const c = 'false'
//const d = false
//const e = NaN
//console.log(a || b || c || d || e )


//const usuario = "Tiago"
//const senha = 123456

//if (usuario === 'Tiago' && senha === 123456){
//    console.log('Usuario pode logar')}


//const hora = 4

//if (hora >= 6 && hora < 12){
//    console.log('Bom dia')
//} else if (hora >= 12 && hora <= 17){
//    console.log('Boa tarde')
//} else if (hora >= 18 && hora <= 23){
//    console.log('Boa noite')
//} else if ((hora >= 0 && hora == 24) || hora <=5){
//    console.log("Boa madrugada")
//} else{console.log("Valor invalido")}


//const pontosUsuario = 1000
//if(pontosUsuario >= 1000){
//    console.log("Usuaário VIP")
//} else {
//    console.log("Usuário Normal")
//}

//Operador ternario

//const nivelUsuario = pontosUsuario >= 1000? "Usuário VIP": "Usuário Normal"
//console.log (nivelUsuario)



// const dia_Semana = 1
// switch(dia_Semana){
//     case 0:
//         console.log("Domingo")
//         break;
//     case 1:
//         console.log("Segunda")
//         break;
//     case 2:
//         console.log("Terça")
//         break;
//     case 3:
//         console.log("Quarta")
//         break;
//     case 4:
//         console.log("Quinta")
//         break;
//      case 5:
//         console.log("Sexta")
//         break;
//      case 6:
//         console.log("Sabado")
//         break;
//     default:
//         console.log("Valor Invalido")
// }


let a = 'C'
let b = 'A'
let c = 'B'

a = b
b = c
c = a
console.log(a,b,c)