const form = document.querySelector('form')
const editForm = document.querySelectorAll('.posadas-admin-form')
const deleteBtn = document.querySelectorAll('.eliminar-posada')

console.log(form)
console.log(editForm)

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
    .then(res => {
        console.log(res)
        alert('Posada agregada exitosamente')
        window.location.reload(true)  
    
    })
    .catch(err => console.log(err))

})

editForm.forEach(posada => {
    posada.addEventListener('submit', (info) => {
        info.preventDefault()
        console.log('Estoy funcionando')
    
        const formData = new FormData (posada)
        const formDataJson = Object.fromEntries(formData)

           
        console.log(formDataJson)
        
        fetch(`${url}/${formDataJson.id}`, {
            method: 'PATCH',
            body: JSON.stringify(formDataJson),
            headers: {
                'content-Type': 'application/json'
            }
        })
        .then((res) => {
            console.log(res)
            alert('Posada modificada exitosamente')
            window.location.reload(true)  
        
        })
        .catch(err => console.log(err));

        
    })
})

deleteBtn.forEach(posada => {
    posada.addEventListener('click', () => {
       console.log('Estoy Eliminando')
           
        fetch(`${url}/${posada.value}`, {
            method: 'DELETE',
            headers: {
                'content-Type': 'application/json'
            }
            
        })
        .then(() => {
            alert('Posada eliminada exitosamente')
            window.location.reload(true)  
        
        })
        .catch(err => console.log(err));

        
    })
})



