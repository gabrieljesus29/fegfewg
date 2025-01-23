//Funções avançadas
//function funcao(){
    //console.log(arguments[1])
//     let nomeCompleto = ''

//     for(let i=0; i<arguments.length; i++){
//        nomeCompleto = nomeCompleto + " " + arguments[i]
//     }

//     console.log(nomeCompleto)
// }

//funcao('Gabriel', 'de', 'jesus', 'de', 'araujo', 'souza')
//function nomeCompleto(){
//    console.log()
//}

//          ATIVIDADE
// function funcao(){
//     let soma = 0;
//     for(let i=0; i<arguments.length; i++){
//         soma += arguments[i]
//     }
//     console.log(soma);
// }


// funcao(10, 20, 30, 40)


// function funcao({nome, sobrenome, idade}){
//     console.log(nome, sobrenome, idade)
// }

// funcao({nome: 'Gabriel', sobrenome: 'Jesus', idade: 28})

// function soma(a,b){
//     console.log(a+b)
// }

// function soma2(a,b){
//     return a+b
// }

// const soma1Variavel = soma(10,5)
// const soma2Variavel = soma2(10,5)

// console.log(soma1Variavel, soma2Variavel)


// document.addEventListener('click', function(){
//     document.body.style.background = 'red'
// })


// function identificacao({nome, idade}){
//     if(idade < 18){
//        return false 
//     }
//     else{
//         return true
//     }
        
// }

// const estaAutorizado = identificacao({nome: 'Gabriel', idade: 29})
// console.log(estaAutorizado)





// function falaFrase(começo){
//     function falaResto(resto){
//         return começo + resto
//     }
//     return falaResto
// }

// const olaMundo = falaFrase('Ola')
// console.log(olaMundo('Mundo'))




// function criaMultiplicador(multiplicador){
//     function multiplicacao(n){
//         return n*multiplicador
//     }
//     return multiplicacao
// }

// function duplica(n){
//     return n * 2
// }
// function triplica(n){
//     return n*3
// }
// function quadriplica(n){
//     return n*4
// }

// console.log(duplica(2))

// const multiplicador = criaMultiplicador(3)
// console.log(multiplicador(10))


//              Escopo Lexo

// const nome = 'Renato'

// function falaNome(){
    
//     console.log(nome)
// }
// function usaFalanome(){
//     const nome = 'Diego'
//     falaNome()
// }
// usaFalanome()


//      Funções de Callback
function rand(min=1000, max=3000){
    const num = Math.random() * (max-min)+min
    return Math.floor(num)
}


function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if(callback) callback()
    }, rand())
}
function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if(callback) callback()
    }, rand())
}
function f3(callback){
    setTimeout(function(){
        console.log('f3')
        if(callback) callback()
    }, rand())
}

f1(f1Callback)
function f1Callback(){
    f2(f2Callback)
}
function f2Callback(){
    f3(f3Callbak)
}
function f3Callbak(){
    console.log('Olá Mundo')
}




// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log('Ola Mundo')
//         })
//     })
   
// })

// f2()
// f3()
// console.log('Ola Mundo')