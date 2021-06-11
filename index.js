const produtos = require("./database")

const entrada = require("readline-sync")

produtos.sort((a, b) => a.preco - b.preco)
const carrinho =[]

console.log("---------------------------------")
console.log("Bem vindo ao carrinho de compras!")
console.log("          Débora Tavares         ")
console.log("---------------------------------")

const procurarCategoria = entrada.question("Voce deseja fazer busca por categoria? (S/N): ")

    if (procurarCategoria.toLocaleUpperCase()==='S'){
        console.log("----------------------------")
        console.log("     As categorias sao:     ");
        console.log("Casa, Informatica, Higiene, Bebida, Alimento");
        console.log("----------------------------")
       
    const selecionar = entrada.question("Deseja qual categoria? ");
        const selecionare = produtos.filter(produtos => produtos.categoria === selecionar)
        console.table(selecionare)

    } else {
        console.log('Esses são nossos produtos disponiveis:')
        console.table(produtos)
    }
    console.log("-----------------------------------------------")

    const array = new Array()
    class pedido {
    constructor(array) {
        this.produto = array
        this.subtotal = 0
        this.total = 0
        this.itenstotal = 0
    }}


do {
var procurarId = parseInt(entrada.question("Digite o id do produto desejado: "))

   var produtoE = produtos.find(produtos => produtos.id === procurarId)

var procurarQ = parseInt(entrada.question("Digite a quantidade do produto desejado: "))
console.log("Incluido no carrinho.")

var continuar = entrada.question("Deseja continuar comprando? (S/N): ")

    } while (continuar === 's')

    const produtosCarrinho = { ...produtoE, quantidade: procurarQ}
    carrinho.push(produtosCarrinho)

    class pedir {
        constructor(carrinho){
          this.produto = carrinho
          this.subtotal = 0
        }
        calcSubtotal() {
          this.subtotal = this.produto.reduce((acumulador, produtos) => acumulador + (produtos.preco * produtos.quantidade), 0)
        }
    
      }
    
    
    const order = new pedir (carrinho)
    console.table(order.produto)
    
    order.calcSubtotal()
    console.log(`Valor do pedido: R$ ${order.subtotal.toFixed(2)}.`)
    
    
    console.log('Obrigada por vir!')
    
    console.log('------------------------------------')