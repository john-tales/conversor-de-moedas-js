



const convertButton = document.querySelector(".convert-button")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencySelected = document.querySelector(".currency-select")
    const dolartoday = 5.2
    const eurotoday = 6.2
    const libratody = 7.2
    const bitcointoday = 352096.00

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
        //new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(
          //  number,
          
        
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
convertButton.addEventListener("click", convertValues) 