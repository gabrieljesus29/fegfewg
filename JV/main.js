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


// let a = 'C'
// let b = 'A'
// let c = 'B'
// let aux = a

// a = b // a = 'A'
// b = c // b = 'B'
// c = aux // c = 'C'
// console.log(a,b,c)


// let nome_masculino = "Soraia da Silva"
// let nome_feminino = "Leonardo Campos"
// let todes = nome_masculino

// nome_masculino = nome_feminino
// nome_feminino = todes

// console.log(nome_masculino, nome_feminino)

//let a = 'A'
//let b = 'B'
//let c = 'C'

// const letras = ['B', 'C', 'A']

// let [a, b, c] = letras

// console.log(a,b,c)


//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//const primeiro_Numero = numeros[0]
// const [primeiro_Numero, segundo_Numero, ...qualquercoisa] = numeros

// console.log(primeiro_Numero)


// const nomes = ["Cesar", "Yan", "Pedro", "Guilherme", "Gabriel"]
// const sobrenomes = ["Figueiredo", "silva", "Vitor", "Vinicius", "Jesus"]

// let [nome] = nomes
// let [, sobrenome] = sobrenomes

// console.log(nome + sobrenome )

                                               // Estrutura de repetição, FOR

    // for(let i = 450; i>350; i = i - 1){
    //     console.log(i)
    // }



    // for(let i = 1; i<= 20; i++){
    //     if(i % 2 === 0){
    //        console.log(i) 
    //     }
        
    // }



    // const frutas = ["maçã", "Pera", "Uva"]
    // for(let i = 0; i< frutas.length; i++){
    //        console.log(frutas[i]) 
    //     }
        

// const elementos = [
//     {tag: 'p', texto: 'Frase 1'},
//     {tag: 'div', texto: 'Frase 2'},
//     {tag: 'footer', texto: 'Frase 3'},
//     {tag: 'section', texto: 'Frase 4'}    
//     ]

// const container = document.querySelector('.container')
// const div = document.createElement('div')

// for (let i = 0; i< elementos.length; i++){
// //    console.log(elementos[i].tag)
//     let tag = elementos[i].tag
//     let texto = elementos[i].texto
// //  let {tag, texto} = elementos[i]
//     let tagCriada = document.createElement(tag)
//     tagCriada.innerHTML = texto
//     div.appendChild(tagCriada)

//     }
// container.appendChild(div)



// const frutas = ["Maçã", "uva", "pera"]
// for (let i in frutas){
//     console.log(frutas[i])
// }

// const pessoa = {
//     nome: "Cesar",
//     sobrenome: "Gordo",
//     idade: 26
// }

// for (let i in pessoa){
//     console.log(pessoa[i])
// }

// const nome = ["luiz", "otavio", "henrique"]

// nomes.forEach(function(Valor, indice){
//     console.log(Valor, indice)
// })

// for(let i of nome){
//     console.log(i)
// }


//                While

// let i = 0;
// while(i<10){
//     console.log(i)
//     i = i + 1;
// }

// function aleatorio(min, max){
//     const resultado = Math.random() * (max - min) + min
//     return Math.floor(resultado)
// }

// let numAleatorio = aleatorio(1, 50)
// while(numAleatorio !== 10){
//     numAleatorio = aleatorio(1, 50)

//     if(numAleatorio === 2){
//         console.log("CHEGUEI NO 2 E VOU PARAR")
//         continue
//     }

//     console.log(numAleatorio)

// }


// Quest 1

// Quest 2

// Quest 3
