const button = document.getElementById('converter-button')
const select = document.getElementById('select')


const convertValues = async () => {

  const inputReais = document.getElementById('input-real').value
  const realValueText = document.getElementById('real-value-text')
  const currencyDolar = document.getElementById('currency-dolar')

 const data = await fetch
("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
  console.log(data)
 

  const dolar   = data.USDBRL.high
  const euro    = data.EURBRL.high
  const bitcoin = data.BTCBRL.high

  realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format((inputReais));



  if (select.value === "$ Dólar Americano") {
    currencyDolar.innerHTML = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }
    ).format((inputReais / dolar));
  }


if (select.value === "€ Euro") {
  
  currencyDolar.innerHTML = new Intl.NumberFormat('de-DE',
    { style: 'currency', currency: 'EUR' }
  ).format((inputReais/euro));

}

if (select.value === "₿ Bitcoin") {
  
  currencyDolar.innerHTML = new Intl.NumberFormat('de-DE',
      
    { maximumFractionDigits:7, style: 'currency', currency: 'BTC' }
  ).format((inputReais / (bitcoin*1000)))

} 

}

changeTextAndImg = () => {

  const currencyName = document.getElementById('dolar-footName')

  const imgs = document.getElementById('img-flags')

  if (select.value === '€ Euro') {
    currencyName.innerHTML = "Euro"
    imgs.src = "./assets/euro-flag.png"

  }

  if (select.value === '$ Dólar Americano') {
    currencyName.innerHTML = "Dólar Americano"
    imgs.src = "assets/estados-unidos (1) 1.png"
  }

  if (select.value === "₿ Bitcoin") {
    currencyName.innerHTML = "₿ Bitcoin"
    imgs.src = "assets/bitcoin.png"}

 convertValues()
}


button.addEventListener('click', convertValues)
select.addEventListener('change', changeTextAndImg)







