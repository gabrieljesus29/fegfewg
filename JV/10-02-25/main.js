// Filter, Map e Reduce


// const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 27]

// function callbackFilter(valor, indice, array){
//     // return valor > 10
//     console.log(valor,indice, array)
// }

// const numerosFiltrados = numeros.filter(callbackFilter)
// console.log(numerosFiltrados)

// return pessoas com nomes com mais de 5 letras
// pessoas com 35 anos ou mais
// return pessoas que terminam com letra a

// const pessoas = [
//     {nome: 'José', idade: 30},
//     {nome: "Maria", idade: 52},
//     {nome: "João", idade: 35},
//     {nome: "Leticia", idade: 22},
//     {nome: "Gabriella", idade: 19},
//     {nome: "Wallace", idade: 47}
// ]

// const pessoas_com_nome_grande = pessoas.filter(
//     function(valor,indice,array){
//         // console.log(valor.nome.length>5)
//         return valor.nome.length>5
//     }
// )

// console.log(pessoas_com_nome_grande)

// const pessoas_com_idade_maior35 = pessoas.filter(
//     function(valor,indice,array){
//         // console.log(valor.nome.length>5)
//         return valor.idade>=35
//     }
// )

// console.log(pessoas_com_idade_maior35)

// const pessoas_fim_letra_A = pessoas.filter(
//     pessoa => pessoa.nome.toLocaleLowerCase().endsWith("a")
// )

// console.log(pessoas_fim_letra_A)


//const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 10, 27]
// const numeros = ['Tiago']

//modificar os elementos do nosso array

// const numerosEmDobro = numeros.map(function(valor, indice, array){
//     console.log(valor, indice, array)
// })

// const numerosEmDobro = numeros.map(function(valor, indice, array){
//     return `César -> ${valor}`
// })

// console.log(numerosEmDobro)

//

// const pessoas = [
//     {nome: 'José', idade: 29},
//     {nome: 'Maria', idade: 23},
//     {nome: 'Eduardo', idade: 19},
//     {nome: 'Leticia', idade: 33},
//     {nome: 'Rosana', idade: 55},
//     {nome: 'Audinez', idade: 60}
// ]

// const pessoasSemNomes = pessoas.map(function(valor,){
//     delete valor.nome
//     return valor
// })

// const comIds = pessoas.map(function(valor, indice){
//     return {id: indice+1, ...valor}
// })

//console.log(pessoasSemNomes)
//console.log(comIds)

// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 15, 27]

// const total = numeros.reduce(
//     function(acumulador, valor, indice, array){
        //console.log(acumulador)
        //return acumulador = acumulador + valor
        //if(valor % 2 !==0){
//         acumulador.push(valor*2)
//         return acumulador
//         },[])
        

// console.log(total)


//retorna a pessoa mas veia
const pessoas = [
        {nome: 'José', idade: 29},
        {nome: 'Maria', idade: 23},
        {nome: 'Eduardo', idade: 19},
        {nome: 'Leticia', idade: 33},
        {nome: 'Rosana', idade: 55},
        {nome: 'Audinez', idade: 60}
]

const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade){
        return acumulador
    } else{
        return valor
    }
})

console.log(pessoaMaisVelha)
