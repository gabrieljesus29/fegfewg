//Promises
// function rand(min,max){
//     return Math.floor(Math.random()* (max-min) +min)
// }

// function esperaAI (msg, tempo, callback){
//     return new Promise((resolve,reject)=>{
//         setTimeout(
//             ()=>{
//                 console.log(msg)
//             }, tempo
//         )
//     })
//     // setTimeout(
//     //     ()=>{
//     //         console.log(msg)
//     //         // if (callback){callback()}
//     //     }, tempo
//     // )
// }

// // esperaAI("Frase 1", rand(1000,3000), function(){
// //     esperaAI("Frase 2", rand(1000,3000), function(){
// //         esperaAI("Frase 3", rand(1000,3000))
// // })})


      //aula 02

// function rand(min,max){
//     return Math.floor(Math.random()* (max-min) +min)
// }

// function esperaAI (msg, tempo){
//     return new Promise((resolve,reject)=>{
//         if(typeof msg !== 'string'){reject("Valor não aceito!")}
//         setTimeout(
//             ()=>{
//                 resolve(msg)
//             }, tempo
//         )
//     }) 
// }
// esperaAI("Frase 1", rand(1000, 3000))
// .then(
//     (resposta) =>{
//         console.log(resposta)
//         return esperaAI(2222, rand(1000, 3000))
//     }
// ).then(resposta=>{
//     console.log(resposta)
// })
// .catch(erro =>{
//     console.log(erro)
// })



        //aula 03

// function rand(min,max){
//     return Math.floor(Math.random()* (max-min) +min)
// }

// function esperaAI (msg, tempo){
//     return new Promise((resolve,reject)=>{
//         if(typeof msg !== 'string'){reject("Valor não aceito!")}
//         setTimeout(
//             ()=>{
//                 resolve(msg)
//             }, tempo
//         )
//     }) 
// }

// async function baixarPagina(){
//     const emCache = true

//     if(emCache){
//         return await Promise.resolve('Pagina em cache')
//     }
//     else{
//         return esperaAI('Baixei a pagina', 3000)
//     }
// }
// baixarPagina().then(resposta=>{
//     console.log(resposta)
// })
// .catch(erro=>{
//     console.log(erro)
// })

document.getElementById('loginForm').addEventListener('submit', 
    function(event){
        event.preventDefault()
  
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
      const emailError = document.getElementById('emailError')
      const passwordError = document.getElementById('passwordError')
      const loader = document.getElementById('loader')
  
      loader.style.display = 'flex';
  
      setTimeout(()=>{
        loader.style.display = 'none';
  
        const validEmail = "gabriel@email.com"
        const validPassword = '123456'
    
        if(email !== validEmail || password !== validPassword){
          emailError.style.display = 'block'
          passwordError.style.display = 'block'
        }
        else(
          alert("Login realizado com sucesso!")
        )}, 2000)
  })
