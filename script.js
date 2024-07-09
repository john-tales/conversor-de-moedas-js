



const convertButton = document.querySelector(".convert-button")
const currencySelected = document.querySelector(".currency-select")

const dolartoday = 5.2
const eurotoday = 6.2
const libratody = 7.2
const bitcointoday = 352096.00
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const currencyValueConvertd = document.querySelector(".currency-value")

function convertValues(){
    
    const inputCurrencyValue = document.querySelector(".input-currency").value

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "brl"
    }).format(inputCurrencyValue)

    
     

        if(currencySelected.value == "dolar"){
            currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-us",{
                style: "currency",
                currency: "usd"
        }).format(inputCurrencyValue / dolartoday) 
        }

        if(currencySelected.value == "euro"){
            currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE",{
                style: "currency",
                currency: "eur"
            }).format(inputCurrencyValue / eurotoday)     
        }
          
        if(currencySelected.value == "libra"){
            currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-GB",{
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libratody)     
        }

        if(currencySelected.value == "bitcoin"){
            currencyValueConvertd.innerHTML = new Intl.NumberFormat("BTC",{
                style: "currency",
                currency: "btc"
            }).format(inputCurrencyValue / bitcointoday)     
        }
        
}


function changecurrency(){
    const currencyName = document.getElementById("currency-name")
    const imgcurrency = document.querySelector(".imgcurrency")

    if (currencySelected.value == "dolar") {

        currencyName.innerHTML="Dolar americano"
        imgcurrency.src="./assets/Bandera-circular-de-Estados-Unidos.png"
        
    }

    if (currencySelected.value == "euro") {

        currencyName.innerHTML="Euro"
        imgcurrency.src="./assets/euro.png"
        
    }

    if (currencySelected.value == "libra") {

        currencyName.innerHTML="libra"
        imgcurrency.src="./assets/libra 1.png"
        
    }

    if (currencySelected.value == "bitcoin") {

        currencyName.innerHTML="Bitcoin"
        imgcurrency.src="./assets/bitcoin 1.png"
        
    }
}






currencySelected.addEventListener("change", changecurrency)
convertButton.addEventListener("click", convertValues) 

