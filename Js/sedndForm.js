const form = document.querySelector('.form-test-drive')

// https://jsonplaceholder.typicode.com/todos/1

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let data = {}

    for(let {name, value } of form.elements){      
        if(name){
            data[name] = value
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
        if (response.status === 200 || response.status === 201) {
            return response.json()
        }   else {
            throw new Error(response.status)

        }

    }).then(data => {
        
    }).catch(error => {
        alert('Произошла ошибка, статус ' + error.massage)
    })
})