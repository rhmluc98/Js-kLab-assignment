const form = document.querySelector('form')

const url = 'http://localhost:3000/posts';


const createPost = async (e) => {
    e.preventDefault()

    let data = {
        title:form.title.value,
        content: form.content.value,
        author: 'Admin'
    }

    await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })

    window.location.replace('index.html')
} 

form.addEventListener('submit', createPost)