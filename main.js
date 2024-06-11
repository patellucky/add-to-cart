// const data = [
//     { name: 'Noise Colorfit pro 2', price: '1,799', color: 'orange', qty: '1', img: 'p-1.webp' },
//     { name: 'Noise Colorfit pro 3', price: '1,999', color: 'black', qty: '1', img: 'p-2.webp' },
// ]

// let carddata = document.querySelector('#card-area').innerHTML;
// for (let i = 0; i < data.length; i++) {
//      carddata.innerHTML += `<div class="col-md-6 col-xl-4">
//     <div class="card mt-5 p-2 rounded-3 position-relative border-3">
//         <img src="${data[i].img}" alt="" class="img-fluid border p-3 border-3 rounded-2" id="img">
//         <div class="card-body">
//             <div class="card-title" id="addtocart">
//                 <button
//                     class="px-3 py-1 text-white fw-semibold rounded-3 text-center nav-link mb-1 add" id="addcart">ADD
//                     TO CART</button>
//                 <button
//                     class="px-3 py-1 text-white fw-semibold rounded-3 text-center nav-link mb-1 view">View</button>
//                     <div id="name">
//                 <span class="fs-5 fw-semibold opacity-75 text-center d-block id="name">${data[i].name}
//                     </span>
//                     </div>
//                     <div id="color">
//                 <span class="fw-medium opacity-50 d-block text-center">${data[i].color}</span>
//                 </div>
//                 <div id="price">
//                 <span class="d-block text-center mt-3 fw-bold">${data[i].price}</span>
//                 </div>
//                 <div class="d-block text-center mt-1 fw-bold">
//                 <span>
//                 &nbsp&nbsp<del>5,999</del><span class="d-block text-success">&nbsp65% off
//                 </span>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>`
// }

// var addcart = document.querySelectorAll('#addcart');

// addcart.forEach((i) => i.addEventListener('click', function () {
//     var parent = document.querySelector('#addtocart').parentElement;
//     var img = parent.parentElement.querySelector('#img').src;
//     var names = document.querySelector('#name').innerText;
//     var color = document.querySelector('#color').innerText;
//     var price = document.querySelector('#price').innerText;

//     var cart = JSON.parse(localStorage.getItem('cart'));
//     // console.log(cart)

    
//     if (cart == null) {
//         cart = [];
//     }
    
//     // let index = cart.findIndex(items => items.name === names);
    
//     // if(index !== -1){
//     //     cart[index].qty++;
//     //     localStorage.setItem('cart',JSON.stringify(cart))
//     // }
//     // else {
//         let local = {
//             name: names,
//             img: img,
//             color: color,
//             price: price,
//             qty: 1
//         }
//         console.log(obj)
//         cart.push(local);

//         localStorage.setItem('cart', JSON.stringify(local))
//         console.log(cart)
//    // }


    
// }))





