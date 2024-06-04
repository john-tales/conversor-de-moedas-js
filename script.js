



const convertButton = document.querySelector(".convert-button")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencySelected = document.querySelector(".currency-select")
    const dolartoday = 5.2
    const eurotoday = 6.2
    
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConvertd = document.querySelector(".currency-value")

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

        

} 
convertButton.addEventListener("click", convertValues) 