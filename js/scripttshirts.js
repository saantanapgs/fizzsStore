document.addEventListener('DOMContentLoaded', function() {
    const tshirts = document.querySelector('.tshirts')

    function containerTshirts(tshirt){
        if(!Array.isArray(tshirt)){
            console.error('Os dados da API  não estão em um formato válido.')
            return
        }

        for(const elem of tshirt){
            const divCard = document.createElement('div')
            divCard.setAttribute('class', 'card')

            const divImgCard = document.createElement('div')
            divImgCard.setAttribute('class', 'imgCard')

            const imgCard = document.createElement('img')
            imgCard.setAttribute('src', elem.imagemT)

            divImgCard.appendChild(imgCard)

            const divTitle = document.createElement('div')
            divTitle.setAttribute('class', 'title')
            divTitle.innerHTML = elem.tituloT

            const divPrice = document.createElement('div')
            divPrice.setAttribute('class', 'price')
            divPrice.innerHTML = `$${elem.valorT.toFixed(2)}`

            const divBtnPurchase = document.createElement('div')
            divBtnPurchase.setAttribute('class', 'divBtnPurchase')

            const btnPurchase = document.createElement('button')
            btnPurchase.setAttribute('class', 'btnPurchase')
            btnPurchase.innerHTML = 'Purchase'
            
            const divBtnBag = document.createElement('div')
            divBtnBag.setAttribute('class', 'divBtnBag')
            
            const imgBtnBag = document.createElement('img')
            imgBtnBag.setAttribute('class', 'imgBtnBag')
            imgBtnBag.setAttribute('src', 'imgs/carrinho.png')

            const btnBag = document.createElement('button')
            btnBag.setAttribute('class', 'btnBag')
            btnBag.appendChild(imgBtnBag)

            btnPurchase.addEventListener('click', () => {
                realizarCompra(elem.id)
            })

            btnBag.addEventListener('click', () => {
                animacaoAddCarrinho()
                realizarCompra(elem)
            })

            imgBtnBag.addEventListener('click', () => {
                animacaoAddCarrinho()
                realizarCompra(elem)
            })

            divBtnPurchase.appendChild(btnPurchase)
            divBtnBag.appendChild(btnBag)
            divBtnBag.appendChild(imgBtnBag)

            divCard.appendChild(divImgCard)
            divCard.appendChild(divTitle)
            divCard.appendChild(divPrice)
            divCard.appendChild(divBtnPurchase)
            divCard.appendChild(divBtnBag)

            tshirts.appendChild(divCard)
        }
    }
    function findApi() {
        fetch('https://98b7188d-bbc2-47cc-8359-39de648fa3ab-00-20xw8bphaskcz.picard.replit.dev/tshirts')
        .then(res => res.json())
        .then(data => {
            const tshirts = data.tshirts
            console.log('Api Data:', tshirts)
            containerTshirts(tshirts)
            localStorage.setItemm('tshirts', json.stringify(data))
        })
        .catch(error => console.log('ERROR TRYING TO FIND API: ', error))
    }

    findApi()
})
function animacaoAddCarrinho () {
    const animacaoCarrinho = document.querySelector(".animacaoCarrinho")
}

function realizarCompra (itemID) {
    window.location.href = "buying.html?id=" + itemID
}