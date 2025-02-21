// Classes -> Fução Fábrica e Função Construir
//Promises (promessas) -> Evolução das Funções

// class Pessoa {
//     constructor(nome,sobrenome){
//         this.nome = nome
//         this.sobrenome = sobrenome
//     }

//     falar(){
//         console.log(`${this.nome} está falando`)
//     }
//     comer(){
//         console.log(`${this.nome} está comendo`)
//     }
//     beber(){
//         console.log(`${this.nome} está bebendo`)
//     }

// }

// const pessoa1 = new Pessoa('Willian', 'Soares')
// const pessoa2 = new Pessoa('Joana', 'Silva')
// const pessoa3 = new Pessoa('Jonas', 'Timóteo')
// const pessoa4 = new Pessoa('Wagner', 'Santos')
// console.log(pessoa1.nome)
// pessoa1.falar()
// pessoa2.comer()
// pessoa3.beber()


// const _velocidade = Symbol('velocidade')

// class carro{
//     constructor(nome){
//         this.nome = nome
//         this[_velocidade] = 0
//     }
//     get velocidade(){
//         return this[_velocidade]
//     }
//     set velocidade(valor){
//         if(valor=>100 || valor <= 0){return}
//         this[_velocidade] = valor
//     }

//     acelerar(){
//         if(this[_velocidade] >= 100){
//             return
//         }
//         this[_velocidade] = this[_velocidade] + 10;
//     }

//     desacelerar(){
//         if(this[_velocidade] <=0){
//             return
//         }
//         this[_velocidade] = this[_velocidade] -10;
//     }
// }

// const carr01 = new carro('Fusca')
// carr01.velocidade = 1500;
// console.log(carr01)

// class DispositivoEletronico{
//     constructor(nome){
//         this.nome = nome
//         this.ligado = false
//     }

//     ligar(){
//         if(this.ligado){
//             console.log('Dispositivo já ligado')
//             return
//         }
//         this.ligado = true

//     }

//     desligar(){
//         if(!this.ligado){
//             console.log('Dispositivo já desligado')
//             return
//         }
//         this.ligado = false

//     }
// }

// const celular = new DispositivoEletronico('Celular')
// celular.ligar()
// celular.desligar()
// celular.desligar()

// class Smartphone extends DispositivoEletronico{
//     constructor(nome, cor){
//         super(nome)
//         this.cor = cor
//     }

//     ligar(){
//         console.log('Alterei o metodo ligar do PAI')
//     }

//     falaOi(){
//         console.log('Estou falando Oi!')
//     }

//     static fazerRecall(){
//         console.log('Estou fazendo o RECALL')
//     }

// }

// const iphone = new Smartphone('Iphone 16 pro max', 'rosa')
// iphone.ligar()
// console.log(iphone)
//Smartphone.fazerRecall()





// class Tablet extends DispositivoEletronico{
//     constructor(nome){
//         super(nome)
//         this.temwifi=false
//     }
// }


