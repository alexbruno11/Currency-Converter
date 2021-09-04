const button = document.getElementById('converter-button')
const select = document.getElementById('select-input')


const dolar = 6.2

const convertValues = () => {

    const inputReais = document.getElementById('input-real').value

    const realValueText = document.getElementById('real-value-text')

    realValueText.innerHTML =   new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format((inputReais));

    const currencyDolar = document.getElementById('currency-dolar')

    currencyDolar.innerHTML = new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' }
  ).format((inputReais / dolar));



  

    console.log(inputReais / dolar)


}


button.addEventListener('click', convertValues)
select.addEventListener('change', convertValues)






