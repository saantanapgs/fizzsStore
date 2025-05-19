document.addEventListener('DOMContentLoaded', function() {
    const sneakers = document.querySelector(".sneakers")

    function containersSneakers(sneaker){
        if (!Array.isArray(sneaker)) {
            console.error("Os dados da API não estão em um formato válido.");
            return;
        }
        
        for(const elem of sneaker) {
            const divCard = document.createElement("div")
            divCard.setAttribute("class", "card")

            const divImgCard = document.createElement("div")
            divImgCard.setAttribute("class", "imgCard")
            
            const imgCard = document.createElement("img")
            imgCard.setAttribute("src", elem.imagem)

            divImgCard.appendChild(imgCard)

            const divTitulo = document.createElement("div")
            divTitulo.setAttribute("class", "titulo")
            divTitulo.innerHTML = elem.titulo

            const divValor = document.createElement("div")
            divValor.setAttribute("class", "valor")
            divValor.innerHTML = `$ ${elem.valor.toFixed(2)}`

            const divBtnComprar = document.createElement("div")
            divBtnComprar.setAttribute("class", "divBtnComprar")

            const btnComprar = document.createElement("button")
            btnComprar.setAttribute("class", "btnComprar")
            btnComprar.innerHTML = "Purchase"

            const divBtnCarrinho = document.createElement("div")
            divBtnCarrinho.setAttribute("class", "divBtnCarrinho")

            const imgBtnCarrinho = document.createElement("img")
            imgBtnCarrinho.setAttribute("src", "imgs/carrinho.png")
            imgBtnCarrinho.setAttribute("class", "imgBtnCarrinho")

            const btnCarrinho = document.createElement("button")
            btnCarrinho.setAttribute("class", "btnCarrinho")
            btnCarrinho.appendChild(imgBtnCarrinho)


            btnComprar.addEventListener("click", () => {
                realizarCompra(elem.id)
            })

           btnCarrinho.addEventListener("click", () => {
                animacaoAddCarrinho()
                addCarrinho(elem)
            }) 

            imgBtnCarrinho.addEventListener("click", () => {
                animacaoAddCarrinho()
                addCarrinho(elem)
            })

            divBtnCarrinho.appendChild(imgBtnCarrinho)
            divBtnComprar.appendChild(btnComprar)
            divBtnCarrinho.appendChild(btnCarrinho)

            divCard.appendChild(divImgCard)
            divCard.appendChild(divTitulo)
            divCard.appendChild(divValor)
            divCard.appendChild(divBtnComprar)
            divCard.appendChild(divBtnCarrinho)

            sneakers.appendChild(divCard)
        }
    }
    
    function buscaApi() {
        fetch('https://98b7188d-bbc2-47cc-8359-39de648fa3ab-00-20xw8bphaskcz.picard.replit.dev/sneakers')
            .then(res => res.json())
            .then(data => {
                const sneakers = data.sneakers
                console.log("Dados da API:", sneakers)
                containersSneakers(sneakers)
                localStorage.setItem('sneakers', JSON.stringify(data))
            })
            .catch(error => console.log("ERROR TRYING TO FIND API:", error))
    }

    buscaApi()
})

function animacaoAddCarrinho () {
    const animacaoCarrinho = document.querySelector(".animacaoCarrinho")
}

function realizarCompra (itemID) {
    window.location.href = "buying.html?id=" + itemID
}

function addCarrinho(sneaker) {
    let carrinhoItens = JSON.parse(localStorage.getItem('carrinhoItens')) || []
    carrinhoItens.push(sneaker)
    localStorage.setItem('carrinhoItens', JSON.stringify(carrinhoItens))
}
