
const id = new URLSearchParams(window.location.search).get('id')
//const Deletebutton = document.querySelector('button') 

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

  document.getElementById('single_post').innerHTML = data;
  console.log(data);

}

// const deletePost = async () => {
//   const post = await fetch('http://localhost:3000/posts/' + id)
//   await fetch (post, {
//       method: "DELETE"
//   })

//   window.location.replace('/index.html')
// }

// button.addEventListener('click', deletePost);
window.addEventListener('DOMContentLoaded', () => postDetails())

