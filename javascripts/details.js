
const id = new URLSearchParams(window.location.search).get('id')

//console.log(Object.entries(id));

const postDetails = async () => {
    const single_post = await fetch('http://localhost:3000/posts/' + id)

    const row = await single_post.json()

    // TP: displaying details on html page 

  let data = '';

    data += 
    `
      <div id="post">
        <h2>${row.title}</h2>
        <p>${row.content}</p>
      </div>
    `
  
  //console.log(data);
  document.getElementById('single_post').innerHTML = data;

}

window.addEventListener('DOMContentLoaded', () => postDetails())

