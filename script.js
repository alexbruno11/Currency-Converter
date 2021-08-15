const button = document.getElementById('converter')

console.log (button)

const dolar = 5.2

const convertValues = () => {

    const inputReais = document.getElementById ('real').value
    console.log (inputReais / dolar)
   
}


button.addEventListener ('click', convertValues)








