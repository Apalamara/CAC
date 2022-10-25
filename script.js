'use strict';

document.querySelector('.check').addEventListener('click', function () {
    console.log('hiciste click')

    const ticket = 200;
    let quantity = Number(document.querySelector('#quantity').value);
    let category = Number(document.querySelector('#category').value);
    let totalQty = document.querySelector('#total')


    if (quantity > 0 && category) {
         let total = Math.round(ticket*quantity*(1-category/100),0)
         totalQty.value = `Total a pagar: $${total}`
         console.log(total)
    } else {
        console.log('ingrese algo')
    }
});


