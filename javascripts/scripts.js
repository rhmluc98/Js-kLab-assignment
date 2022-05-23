
const Arrowfunction = async () => 
{

  
  const posts = await fetch('http://localhost:3000/posts') 

  const result = await posts.json()

  let data = '';

  result.map(row =>{
    data += 
    `
        <h2>${row.title}</h2>
        <p>${row.content} <a href="details.html?id=${row.id}">View Details</a></p>
    `
  })
  
  console.log(data);
  document.getElementById('obj').innerHTML = data;

}

window.addEventListener('DOMContentLoaded', Arrowfunction());













// const arr = [
//     "Pascal",
//     "Butikima",
//     "Ishara",
// ];

// for (let i = 0; i < arr.length; i++) {
//     //console.log(arr[i]);
//     document.getElementById("arr").innerHTML = arr;
    
// }


// // Show all products
// for(let i = 0; i < item.length; i++)
// {
//     document.getElementById("array").innerHTML = JSON.stringify(item);
// }


// // 1. filtering the cheapest product
// const  cheapProd = item.reduce((prev, curr) => (prev.price < curr.price) ? prev : curr);
// document.getElementById("cheapProduct").innerHTML = JSON.stringify(cheapProd);

// // 2. filtering the more expensive product
// const expensiveProd = item.reduce((prev, curr) => (prev.price > curr.price) ? prev : curr);
// document.getElementById("expensivePrice").innerHTML = JSON.stringify(expensiveProd);


// // sum all prices combine
// const getSumByKey = (arr, key) => {
//     return arr.reduce((acc, curr) => acc + Number(curr[key]), 0)
// } 

// const total = getSumByKey(item, 'price')
// document.getElementById("sum").innerHTML = JSON.stringify(total);


// // 2. remove product under the 10 dollar  
// const index = item.findIndex(items => {
//     return items.price < 10;
// });

// let totalNumber = 0;
// totalNumber = index;
// item.splice(index,totalNumber);
// document.getElementById("remove").innerHTML = JSON.stringify(item);