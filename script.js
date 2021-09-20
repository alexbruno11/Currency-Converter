const button = document.getElementById('converter-button')
const select = document.getElementById('select')


const dolar = 5.2
const euro  = 6.2
const bitcoin = 0.0000038




const convertValues = () => {

  const inputReais = document.getElementById('input-real').value

  const realValueText = document.getElementById('real-value-text')

  realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format((inputReais));

  const currencyDolar = document.getElementById('currency-dolar')


  if (select.value === "$ Dólar Americano") {
    currencyDolar.innerHTML = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }
    ).format((inputReais / dolar));
  }


if (select.value === "€ Euro") {
  
  currencyDolar.innerHTML = new Intl.NumberFormat('de-DE',
    { style: 'currency', currency: 'EUR' }
  ).format((inputReais / euro));

}


if (select.value === "₿ Bitcoin") {
  
  currencyDolar.innerHTML = new Intl.NumberFormat('de-DE',
      
    { maximumFractionDigits:10, style: 'currency', currency: 'XBT' }
  ).format(( inputReais * bitcoin ))

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







