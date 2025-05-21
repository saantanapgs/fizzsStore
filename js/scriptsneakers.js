document.addEventListener('DOMContentLoaded', function() {
    const sneakers = document.querySelector(".sneakers");

    const sneakersData = [
        { id: 1, imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRWaosLZzKRBaQWB72HH1VtJ-hPHodLtNSZmq7xbCp-McUk2dC4byrytkH4P8ujXz7_qlsTTEJcJgkFUS65eOykeZPL_Ymn94JCRfpZzUn18hhgee36Jv8Dfg&usqp=CAE", titulo: "Air Jordan 4 Retrô", valor: 199.99, subcategory: "white" },
        { id: 2, imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQtrfwg4ZIENFBmE50bEDn98xSNqgEpIyGa2iaRKy9CWaEPBeUrNqmF1lYiazO03qWh9Lt53INfPx8X2RDCjjN2LDfDiMc-NBzgajIKanmjZPvlr0Uz05h2LuPZ&usqp=CAE", titulo: "Nike Air Max 90", valor: 169.99, subcategory: "white" },
        { id: 3, imagem: "https://magicfeet.vtexassets.com/arquivos/ids/250541/CD778-2-107-1-MF-1000X1000.jpg?v=638603880399700000", titulo: "Nike Court Mid 2", valor: 99.99, subcategory: "black" },
        { id: 4, imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSzUwnXPLenQ5RZXshcdciDlHwGkUWPaRIZ1BUGvpvWhY_8Z5QVt7v_xUD83lKBR8QFeNny7R1ty-kta1D2GWPlPA9hPcWzczElwTVb2qb-LJoxdqsYBVSOXw&usqp=CAE", titulo: "Nike Air Max Excee", valor: 129.99, subcategory: "black" },
        { id: 5, imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ-WmjctYvJDbY8xJd4xjTgefVmOVhoqN25VjiuNNhW1iN9k3coN-4E7uOBRW5ay9uETET4dhxnnsKQ79KDgpohAjqQT8GRYz2CMb4EvMHXy_FPJ8PqqqtF&usqp=CAE", titulo: "Nike Fly by Mid 3", valor: 139.99, subcategory: "white" },
        { id: 6, imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTvj3sjAZWzv_shy6spG6EmqZg5T6KLldZwC0Yz6NqG4xxgGblNesEATGf4bsTPkk_QNLgCNIBFyqLLgzfmqZNrNo9SmFF1Lgdi9UBNm4IFJDN97VNCJKzqYi0&usqp=CAE", titulo: "Nike Giannis Immortality 2", valor: 159.99, subcategory: "white" },
        { id: 7, imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRyAYOF3BEggMGjXl1eQki4hunTDz1ZR_4qUOAXErnBO-IGMRsmlbWhullvjMfRz5Mv0lo3uFy-SFTcopBqHK-03mmS-w1TPmNqI-mBrSvN0-WJMZRapr5yaQ&usqp=CAE", titulo: "Nike Kyrie 5 Sponge Bob", valor: 159.99, subcategory: "other" },
        { id: 8, imagem: "https://imgnike-a.akamaihd.net/360x360/01299315A8.jpg", titulo: "Nike Lebron XIX", valor: 179.99, subcategory: "white" },
        { id: 9, imagem: "https://imgnike-a.akamaihd.net/1300x1300/0285737TA10.jpg", titulo: "Nike Air Max 1", valor: 189.99, subcategory: "other" },
        { id: 10, imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQZz8nSVPPR7APStYyxvPyyD0YUd5RZS4nZ9rEIJoxQz6kM1ES0YpmlTbp0t63CNYFILHdXXQ0nO-9oN80I1bc-SJ34hdyKLz7OJmJSqe1oi5rRr3ymsqQA&usqp=CAE", titulo: "Nike Jordan Jumpman MVP", valor: 249.99, subcategory: "black" },
        { id: 11, imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxwqxJp8rwB2vtRiNZ3Qs3Wj5bkfPjAVY_erS4vggy4b_su_oXfITUixfkBN72ikXU0tjlCDWYbjR5TnPm6saGTJhxjHEYnyUbFi7YtjWRQWs259wjjaGOoQ&usqp=CAE", titulo: "Nike Full Force Low", valor: 199.99, subcategory: "white" },
        { id: 12, imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSYG1mKneOBA2-G3MxTRJpNq6QLtpnw6W8SgjFQU7sagHHc1k-gNVgyuQZbwuycMHg8_ZDw8BIkHCPeB6RnDYkjE2pDH0n73mG5rxZx2SVT9F3kOEfCwj1j&usqp=CAE", titulo: "Nike Air Max INTRLK Lite", valor: 99.99, subcategory: "white" },
        { id: 13, imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSvatZ_TO9czR6zBa6HS6Syfc_JwAo7nQJyDpNO6JzNS6kH_4cpB5YiaCBafGtBSJDqkuIpFvyOjQ9B4_AwMuKnF9agMcgP8jg0RSU2W3qGcT5KB197w_lcBA&usqp=CAE", titulo: "Air Max INTRLK", valor: 99.99, subcategory: "white" },
        { id: 14, imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzq91L3xXua4IILYNBE3-A5RWSnqbRSb7a-N_pGfCthyNDGr6VP8yVuFoo_bLsHNnk1X3Os1A3XaF89WqRGnv_FySnH8nvJwwGUDOCk2Q9rfyFvzTciBt8&usqp=CAE", titulo: "Nike KD Trey 5 X", valor: 99.99, subcategory: "white" },
        { id: 15, imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRAmEXsqW2N-0VK6WDZGMI2pv24Xi_XrScq4OfHoSFE7S9TJbNf2uig0Wz-ofu--QEzxWzkDhzYspSNYp6AXXEKcwNiWYmwznyj69ClMgsrkCPsyWmLv3V2yw&usqp=CAE", titulo: "Nike Air Max SC", valor: 149.99, subcategory: "white" },
        { id: 16, imagem: "https://images.tcdn.com.br/img/img_prod/1088654/zoom_freak_4_tb_white_black_1407_3_aac353f3b8181c3f1bd3ccdd09051da5.jpg", titulo: "Nike Zoom Freak 4 NRG", valor: 179.99, subcategory: "white" }
    ];

    function containersSneakers(sneaker) {
        if (!Array.isArray(sneaker)) {
            console.error("Os dados dos sneakers não estão em um formato válido.");
            return;
        }

        for (const elem of sneaker) {
            const divCard = document.createElement("div");
            divCard.setAttribute("class", "card");

            const divImgCard = document.createElement("div");
            divImgCard.setAttribute("class", "imgCard");

            const imgCard = document.createElement("img");
            imgCard.setAttribute("src", elem.imagem);

            divImgCard.appendChild(imgCard);

            const divTitulo = document.createElement("div");
            divTitulo.setAttribute("class", "titulo");
            divTitulo.innerHTML = elem.titulo;

            const divValor = document.createElement("div");
            divValor.setAttribute("class", "valor");
            divValor.innerHTML = `$ ${elem.valor.toFixed(2)}`;

            const divBtnComprar = document.createElement("div");
            divBtnComprar.setAttribute("class", "divBtnComprar");

            const btnComprar = document.createElement("button");
            btnComprar.setAttribute("class", "btnComprar");
            btnComprar.innerHTML = "Purchase";

            const divBtnCarrinho = document.createElement("div");
            divBtnCarrinho.setAttribute("class", "divBtnCarrinho");

            const imgBtnCarrinho = document.createElement("img");
            imgBtnCarrinho.setAttribute("src", "imgs/carrinho.png");
            imgBtnCarrinho.setAttribute("class", "imgBtnCarrinho");

            const btnCarrinho = document.createElement("button");
            btnCarrinho.setAttribute("class", "btnCarrinho");
            btnCarrinho.appendChild(imgBtnCarrinho);

            btnComprar.addEventListener("click", () => {
                realizarCompra(elem.id);
            });

            btnCarrinho.addEventListener("click", () => {
                animacaoAddCarrinho();
                addCarrinho(elem);
            });

            imgBtnCarrinho.addEventListener("click", () => {
                animacaoAddCarrinho();
                addCarrinho(elem);
            });

            divBtnCarrinho.appendChild(imgBtnCarrinho);
            divBtnComprar.appendChild(btnComprar);
            divBtnCarrinho.appendChild(btnCarrinho);

            divCard.appendChild(divImgCard);
            divCard.appendChild(divTitulo);
            divCard.appendChild(divValor);
            divCard.appendChild(divBtnComprar);
            divCard.appendChild(divBtnCarrinho);

            sneakers.appendChild(divCard);
        }
    }

    // Chama a função containersSneakers com os dados locais
    containersSneakers(sneakersData);

    // Função para simular a compra
    function realizarCompra(itemID) {
        window.location.href = "buying.html?id=" + itemID;
    }

    // Função para adicionar no carrinho
    function addCarrinho(sneaker) {
        let carrinhoItens = JSON.parse(localStorage.getItem('carrinhoItens')) || [];
        carrinhoItens.push(sneaker);
        localStorage.setItem('carrinhoItens', JSON.stringify(carrinhoItens));
    }

    function animacaoAddCarrinho() {
        const animacaoCarrinho = document.querySelector(".animacaoCarrinho");
        // Aqui pode colocar a animação de carrinho, se necessário
    }
});
