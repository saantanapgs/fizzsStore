document.addEventListener('DOMContentLoaded', () =>{
    
    const dadosSneakers = [
        {
            "id": 1,
            "img1": "imgs-buying/airjordan4-img1.jpeg",
            "img2": "imgs-buying/airjordan4-img2.jpeg",
            "img3": "imgs-buying/airjordan4-img3.jpeg",
            "img4": "imgs-buying/airjordan4-img4.jpeg",
            "titulo": "Air Jordan 4 Retrô",
            "descricao": "The Air Jordan 4 Retro University Blue Sneakers - CT8527-400 are the perfect shoes for sneaker and fashion lovers. With a classic and elegant design, it is ideal for both casual use and physical activities. Its premium leather finish and Nike Air technology guarantee exceptional comfort and durability. The university blue coloring adds a touch of sophistication to the model. Don't miss the opportunity to purchase this icon of sneakerhead culture at Sportline Store and feel the difference that a quality product can make in your life!",
            "valor": 199.99
        },
        {
            "id": 2,
            "img1": "imgs-buying/airmax90-img1.webp",
            "img2": "imgs-buying/airmax90-img2.webp",
            "img3": "imgs-buying/airmax90-img3.webp",
            "img4": "imgs-buying/airmax90-img4.webp",
            "titulo": "Nike Air Max 90",
            "descricao": "Nothing is as stylish, comfortable and approved: the Nike Air Max 90 stays true to its roots with the iconic waffle outsole, stitched overlays and classic TPU details. Fresh details offer a modern look, while Max Air cushioning adds comfort to your journey.",
            "valor": 169.99
        },
        {
            "id": 3,
            "img1": "imgs-buying/courtmid2-img1.webp",
            "img2": "imgs-buying/courtmid2-img2.webp",
            "img3": "imgs-buying/courtmid2-img3.webp",
            "img4": "imgs-buying/courtmid2-img4.webp",
            "titulo": "Nike Court Borough Mid 2",
            "descricao": "STAR COMFORT.Look like a star off the court in the Nike Court Borough Mid 2. The classic high-neck style features durable leather for a premium look and feel. Padding around the tongue and ankle provides extra comfort.BenefitsLeather is durable and easy to clean.Traditional laces provide a secure fit.Grooves in the outsole make it flexible.Padding around the tongue and ankle provide extra comfort.Product DetailsConstruction with cupsole for a classic look.",
            "valor": 99.99
        },
        {
            "id": 4,
            "img1": "imgs-buying/excee-img1.avif",
            "img2": "imgs-buying/excee-img2.avif",
            "img3": "imgs-buying/excee-img3.avif",
            "img4": "imgs-buying/excee-img4.avif",
            "titulo": "Nike Air Max Excee",
            "descricao": "The premium men's Nike Air Max axis sneaker pays homage to the past, especially the 1990s, but at the same time looks to the future. Subtle design lines and signature branding are reminiscent of iconic pieces like the Air Max 97 or Air Max 98, while a new take on the Max Air element brings cool wind to comfort through cushioning.",
            "valor": 129.99
        },
        {
            "id": 5,
            "img1": "imgs-buying/flymid3-img1.avif",
            "img2": "imgs-buying/flymid3-img2.avif",
            "img3": "imgs-buying/flymid3-img3.avif",
            "img4": "imgs-buying/flymid3-img4.avif",
            "titulo": "Nike Fly by Mid 3",
            "descricao": "Show your best on the court in the Nike Fly By Mid 3 Men's Shoe. These basketball shoes are made from quality material and use cutting-edge technology. The upper features a modern and urban design, giving versatility and attitude to the sporty look, being produced in soft, textured material, as well as breathability points in strategic locations. EVA midsole provides lightweight, resilient cushioning that can be used on and off the court; The rubber outsole offers durable traction and containment for multi-directional movements, so you can change your game strategy without losing stability and speed. Surprise your opponents and get your Nike men's sneakers now!",
            "valor": 139.99
        },
        {
            "id": 6,
            "img1": "imgs-buying/giannis2-img1.avif",
            "img2": "imgs-buying/giannis2-img2.avif",
            "img3": "imgs-buying/giannis2-img3.avif",
            "img4": "imgs-buying/giannis2-img4.avif",
            "titulo": "Nike Giannis Immortality 2",
            "descricao": "The great Giannis is well represented in this beautiful Nike model. And the Immortality 3 tennis is ideal for you who are a fan of this player. It has a synthetic, textile and mesh upper, its midsole is EVA and the outsole is rubberized. It also has a flexible tongue, the insole is injected and the lining has padded reinforcement. Buy your Nike Giannis Immortality 3 sneakers right now!",
            "valor": 159.99
        },
        {
            "id": 7, 
            "img1": "imgs-buying/kyrie5-img1.webp",
            "img2": "imgs-buying/kyrie5-img2.webp",
            "img3": "imgs-buying/kyrie5-img3.webp",
            "img4": "imgs-buying/kyrie5-img4.webp",
            "titulo": "Nike Kyrie 5 Sponge Bob",
            "descricao": "The Nike Kyrie 5 Spongebob Squarepants is part of a themed collection made by Nike and Nickelodeon from the famous television series “SpongeBob SquarePants”. The collection consists of three Kyrie 5 models and two Kyrie Low 2s. The main cast of the series served as inspiration for the creation of the sneakers' design, the series' characters were portrayed: SpongeBob, Patrick, Squidward, Mr. Krabs and Sandy. This specific sneaker, the Kyrie 5 Spongebob, features an upper with pores and a yellow color, with a red and brown sole to represent SpongeBob's outfit. To complete the design we have a swoosh inspired by the style of the series and Nickelodeon logos on the straps.",
            "valor": 159.99
        },
        {
            "id": 8,
            "img1": "imgs-buying/lebronxix-img1.avif",
            "img2": "imgs-buying/lebronxix-img2.avif",
            "img3": "imgs-buying/lebronxix-img3.avif",
            "img4": "imgs-buying/lebronxix-img4.avif",
            "titulo": "Nike Lebron XIX",
            "descricao": "When the stakes are high and the pressure is on, LeBron thrives. The LeBron XIX harnesses that energy with a snug fit and updated cushioning system. The inside is tight and held together by a sculpted overlay that the laces pass through to help prevent the foot from moving around inside the shoe. Padded pods around the collar and tongue add comfort while reducing weight, giving players the feeling of security and confidence to give their all when the match is on the line.",
            "valor": 179.99
        },
        {
            "id": 9,
            "img1": "imgs-buying/airmax1-img1.webp",
            "img2": "imgs-buying/airmax1-img2.webp",
            "img3": "imgs-buying/airmax1-img3.webp",
            "img4": "imgs-buying/airmax1-img4.webp",
            "titulo": "Nike Air Max 1",
            "descricao": "Meet the leader of the pack. Walking on clouds above the noise, the Air Max 1 combines timeless design with cushioned comfort. Sporting a fast-paced look, wavy mudguard and Nike Air, this classic icon burst onto the scene in 1987 and remains the soul of the franchise to this day.",
            "valor": 189.99
        },
        {
            "id": 10,
            "img1": "imgs-buying/jumpman-img1.avif",
            "img2": "imgs-buying/jumpman-img2.avif",
            "img3": "imgs-buying/jumpman-img3.avif",
            "img4": "imgs-buying/jumpman-img4.avif",
            "titulo": "Nike Jordan Jumpman MVP",
            "descricao": "We didn't invent the remix - but considering the material we can sample, this is what you need. We fired up the SP-12 and took elements from the AJ6, 7 and 8, turning them into a completely new shoe that celebrates MJ's first 3-peat championship. With details in leather, fabric and nubuck, these sneakers honor a legacy while encouraging you to build your own.",
            "valor": 249.99
        },
        {
            "id": 11,
            "img1": "imgs-buying/fullforcelow-img1.avif",
            "img2": "imgs-buying/fullforcelow-img2.avif",
            "img3": "imgs-buying/fullforcelow-img3.avif",
            "img4": "imgs-buying/fullforcelow-img4.avif",
            "titulo": "Nike Full Force Low",
            "descricao": "A new shoe with old-school appeal - your retro dreams just came true. This understated design references the classic AF1 and then leans into '80s style with throwback stitching and varsity-inspired colors. But not everything has to be a throwback - modern comfort and durability make them easy to wear anytime, anywhere. The time has come to put it on and go full force.",
            "valor": 199.99
        },
        {
            "id": 12,
            "img1": "imgs-buying/intrlklite-img1.avif",
            "img2": "imgs-buying/intrlklite-img2.avif",
            "img3": "imgs-buying/intrlklite-img3.avif",
            "img4": "imgs-buying/intrlklite-img4.avif",
            "titulo": "Nike Air Max INTRLK Lite",
            "descricao": "REVOLUTIONIZED HERITAGE. You need to feel the sensation to be the sensation. Meet the Nike Air Max INTRLK Lite. Revamped Air cushioning ushers in a new chapter of comfort with more agility and the perfect level of bounce. Lightweight, easy-to-match materials stand up to prolonged use. Finishing it off, the Waffle-inspired outsole adds true Nike style.",
            "valor": 99.99
        },
        {
            "id": 13,
            "img1": "imgs-buying/intrlksport-img1.webp",
            "img2": "imgs-buying/intrlksport-img2.webp",
            "img3": "imgs-buying/intrlksport-img3.webp",
            "img4": "imgs-buying/intrlksport-img4.webp",
            "titulo": "Air Max INTRLK Sportsweart",
            "descricao": "Men's Nike Air Max INTRLK Shoe As one of the world's most respected sports brands, Nike constantly looks to its own roots to inspire its current collections. In this way, the Air Max INTRLK has Stacked Air cushioning that turns the page on comfort, with greater responsiveness and the perfect amount of bounce. BENEFITS - Revolutionary Air technology - Foam in the midsole provides lasting comfort - Waffle-inspired outsole brings true Nike spirit PRODUCT DETAILS - Cord eyelets create a modern look - Rubber outsole provides traction and durability",
            "valor": 99.99
        },
        {
            "id": 14,
            "img1": "imgs-buying/niketrey-img1.webp",
            "img2": "imgs-buying/niketrey-img2.webp",
            "img3": "imgs-buying/niketrey-img3.webp",
            "img4": "imgs-buying/niketrey-img4.webp",
            "titulo": "Nike KD Trey 5 X",
            "descricao": "The KD Trey 5X Basketball Shoe lets you soar across the court before hitting the basket like KD, with its lightweight upper and comfortable support system. The midfoot strap offers pleasant support to put on a show in attack and defense, to chain together victories while benefiting from an infallible grip. A dynamic stride Zoom Air unit in the forefoot provides a responsive feel. The collar is made with materials that provide an ideal feeling of comfort, while the resistant material at the tip is designed to guarantee support and performance. With a rubber element on the side, it adds a dark touch inspired by the player nicknamed “Slim Reaper”. On the tongue loop, the KD number “7” and Roman numeral “X” marking the 10th version of the KD Trey 5 infuse this shoe with an unmistakable signature look.",
            "valor": 99.99
        },
        {
            "id": 15,
            "img1": "imgs-buying/airmaxsc-img1.webp",
            "img2": "imgs-buying/airmaxsc-img2.webp",
            "img3": "imgs-buying/airmaxsc-img3.webp",
            "img4": "imgs-buying/airmaxsc-img4.webp",
            "titulo": "Nike Air Max SC",
            "descricao": "With its familiar design lines, traditional aesthetic and visible Air Max cushioning, the Nike Air Max SC is the perfect way to finish off any look. Soft leather and lightweight mesh fabrics add depth and durability, while pops of color and a colorful Air unit in the heel brighten your day with every step.",
            "valor": 149.99
        },
        {
            "id": 16,
            "img1": "imgs-buying/zoomfreak4-img1.webp",
            "img2": "imgs-buying/zoomfreak4-img2.webp",
            "img3": "imgs-buying/zoomfreak4-img3.webp",
            "img4": "imgs-buying/zoomfreak4-img4.webp",
            "titulo": "Nike Zoom Freak 4 NRG",
            "descricao": "Men's Nike Zoom Freak 4 NGR Shoes Smooth and responsive, the Nike Zoom Freak 4 NGR sneakers are ready to accompany you! Constructed with a low-top silhouette, the Zoom Freak sports a breathable mesh base paired with a contoured, padded collar that's taller at the back to fit comfortably. It comes with a soft and smooth Zoom Air midsole, ideal for you to have harmony in every step on or off the court! Details include an innovative lateral design, with lightweight foam integrated into the outer side of the midsole, providing a secure feel for long-lasting performance.",
            "valor": 179.99
        }
]
function exibirDadosSneakers(id) {
    const sneaker = dadosSneakers.find(item => item.id === id)
    if(!sneaker){
        console.error("Can't find sneaker")
        return
    }
    const imgsPrincipais = document.querySelectorAll(".imgsPrincipais")
    for(let i = 0; i < imgsPrincipais.length; i++){
        imgsPrincipais[i].src = sneaker[`img${i+ 1}`]
    }
    document.querySelector('.titulo').textContent = sneaker.titulo
    document.querySelector('.valor').textContent = `$${sneaker.valor.toFixed(2)}`
    document.querySelector('.descricao').textContent = sneaker.descricao

    const finalizarCompraBtn = document.querySelector('.finalizarCompra')
    finalizarCompraBtn.setAttribute('data-sneaker-id', sneaker.id)  
    
    finalizarCompraBtn.addEventListener('click', function() {
        const sneakerID = this.getAttribute('data-sneaker-id')
        realizarPagamento(sneakerID)
    })
    
    const finalizarCompraCarrinho = document.querySelector(".finalizarCompraCarrinho")
    finalizarCompraCarrinho.addEventListener("click", () => {
        animacaoAddCarrinho()
    })

    const imgCarrinhoFinalizar = document.querySelector(".imgCarrinhoFinalizar")
    imgCarrinhoFinalizar.addEventListener("click", () => {
        animacaoAddCarrinho()
    })
}

    const urlParams = new URLSearchParams(window.location.search)
    const sneakerID = parseInt(urlParams.get('id'))

        if(!isNaN(sneakerID)){
            exibirDadosSneakers(sneakerID)
        }else{
            console.error("Sneaker ID didn't find in URL")
        }
})

function animacaoAddCarrinho () {
    const animacaoCarrinho = document.querySelector(".animacaoCarrinho")
    animacaoCarrinho.classList.remove('ocultarSpan')
}

function realizarPagamento (itemID) {
    window.location.href = "completepurchase.html?id=", itemID
}