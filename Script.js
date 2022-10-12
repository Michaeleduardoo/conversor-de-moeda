const button = document.getElementById("button-convert")
const select = document.getElementById("select-op")

const dolar = 5.29
const euro = 5.13
const bitcoin = 101.06

 const clickButton = () => {
    const inputReais = document.getElementById("input-value").value
    const currencyNumber = document.getElementById("currency-number")
    const currencytext = document.getElementById("currency-dolar")

    currencyNumber.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputReais)

    if(select.value === "US$ Dolar americano"){
        currencytext.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputReais / dolar)
    }

    if(select.value === "€ Euro"){
        currencytext.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputReais / euro)
    }

    if(select.value === "₿ Bitcoin"){
        currencytext.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BTC' }).format(inputReais / bitcoin)
    }
  
  

}


select.addEventListener("change", () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("imgs")

    if(select.value === "US$ Dolar americano" ){
        currencyName.innerHTML = "Dolar americano"
        currencyImg.src = "image/estados-unidos (1) 1.png"  
    }

    if(select.value === "€ Euro" ){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "image/euro.png"  
    }

    if(select.value === "₿ Bitcoin" ){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src="image/biti.png"
    }

    clickButton()
})

button.addEventListener("click", clickButton )