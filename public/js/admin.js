const form = document.querySelector('form')

console.log(form)

const url = "https://puerto-paraiso-api-v-1.herokuapp.com/posada"

form.addEventListener('submit', (info) => {
    info.preventDefault()
    console.log('Estoy funcionando')

    const formData = new FormData (form)
    const formDataJson = Object.fromEntries(formData)

    console.log(formDataJson)

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(formDataJson),
        headers: {
            'content-Type': 'application/json'
        }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

})