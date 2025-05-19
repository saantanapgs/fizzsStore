const consultedCep = document.querySelector('#cep')
const btnCheck = document.querySelector("#btnCheck")
    
const loadData = (data) => {
    const inputPlace = document.querySelector("#place")
    const inputNeighbor = document.querySelector("#neighborhood")
    const inputCEP = document.querySelector("#complement")
    const inputNumber = document.querySelector("#number")
    const inputCity = document.querySelector("#city")
    const inputState = document.querySelector("#uf")
    
    btnCheck.classList.remove('divEnde')

    inputPlace.value = data.logradouro
    inputNeighbor.value = data.bairro
    inputCity.value = data.cidade
    inputState.value = data.estado

}
    btnCheck.addEventListener("click", () =>{ 
        const endPoint = `https://api.postmon.com.br/v1/cep/${consultedCep}`
    
        fetch(endPoint)
            .then(response => response.json())
            .then(data => console.log(data))
            .then(data => {
                loadData(data)
            }).catch(error => console.error("ERROR 404", error))
    })
