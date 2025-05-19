document.addEventListener('DOMContentLoaded', () => {
    
    const carrinhoItens = JSON.parse(localStorage.getItem('carrinhoItens'))

    if(carrinhoItens && carrinhoItens.length > 0){
        exibirCarrinho(carrinhoItens)
    }
})

function exibirCarrinho (itens) {
    const itensCarrinho = document.querySelector('#itensCarrinho')

    itensCarrinho.innerHTML = ''

        for (let i = 0; i < itens.length; i++) {
            const sneaker = itens[i]
            const areaProdutos = document.createElement('div')
            areaProdutos.setAttribute('class', 'areaProdutos')

            const divImgProduto = document.createElement('div')
            divImgProduto.setAttribute('class', 'divImgProduto')

            const imgProduto = document.createElement('img')
            imgProduto.setAttribute('class', 'imgProduto')
            imgProduto.setAttribute('src', sneaker.imagem)

            divImgProduto.appendChild(imgProduto)

            const infoProduto = document.createElement('div')
            infoProduto.setAttribute('class', 'infoProduto')

            const titulo = document.createElement('div')
            titulo.setAttribute('class', 'titulo')
            titulo.innerHTML = sneaker.titulo

            const valor = document.createElement('div')
            valor.setAttribute('class', 'valor')
            valor.innerHTML = `$${sneaker.valor.toFixed(2)}`

            const divBtnRemover = document.createElement('div')
            divBtnRemover.setAttribute('class', 'divBtnRemover')

            const imgBtnRemover = document.createElement('img')
            imgBtnRemover.setAttribute('class', 'imgBtnRemover')
            imgBtnRemover.setAttribute('src', 'imgs/remove.png')

            const btnRemover = document.createElement('button')
            btnRemover.setAttribute('class', 'btnRemover')
            btnRemover.setAttribute('data-indice', i)
            btnRemover.appendChild(imgBtnRemover)
            
            btnRemover.addEventListener("click", (event) => {
                const indice = event.currentTarget.getAttribute('data-indice')
                removerItemCarrinho(indice)
            }) 



            areaProdutos.appendChild(divBtnRemover)
            divBtnRemover.appendChild(btnRemover)
            areaProdutos.appendChild(divImgProduto)
            areaProdutos.appendChild(infoProduto)
            infoProduto.appendChild(titulo)
            infoProduto.appendChild(valor)

            itensCarrinho.appendChild(areaProdutos)
        }

        

        if (itens.length === 0) {
                const carrinhoVazio = document.createElement('div')
                carrinhoVazio.setAttribute('class', 'divMsgEmpty')
                carrinhoVazio.textContent = "Don't have any items in the bag"
                document.body.appendChild(carrinhoVazio)
        }
        if (itens.length > 0) {
            const btnFinalizar = document.createElement('button')
            btnFinalizar.setAttribute('id', 'btnFinalizarCompra')
            btnFinalizar.textContent = 'Finalizar Compra'
            btnFinalizar.addEventListener('click', () => {
            window.location.href = 'completepurchase.html'
         })

        document.body.appendChild(btnFinalizar)
        }
}       

function limparItensCarrinho() {
    localStorage.removeItem('carrinhoItens')
    const itensCarrinho = document.querySelector('#itensCarrinho')
    itensCarrinho.innerHTML = ' '
}

function removerItemCarrinho(indice) {
    let carrinhoItens = JSON.parse(localStorage.getItem('carrinhoItens')) || []
    carrinhoItens.splice(indice, 1)
    localStorage.setItem('carrinhoItens', JSON.stringify(carrinhoItens))
    exibirCarrinho(carrinhoItens)
}