import {cart,addtoCart } from '../data/cart.js';
import {products} from '../data/products.js';
import { formatCurrency } from  './utils/money.js';

let productsHTML = '';


products.forEach((product) =>
{
  productsHTML += `<div class="flex flex-col gap-3 rounded-xl bg-surface-light dark:bg-surface-dark overflow-hidden border border-border-light dark:border-border-dark cursor-pointer transition-shadow hover:shadow-lg">
<div class="w-full aspect-square">
  <img src="${product.image}"  class="w-full h-full object-cover" loading="lazy" />
</div>
<div class="p-3 pt-0">
<p class="text-base font-semibold leading-normal text-text-light dark:text-text-dark">${product.name}</p>
<p class="text-base font-bold leading-normal text-primary mt-1">${formatCurrency(product.price)}/kg</p>
<p class="text-xs font-normal leading-normal text-muted-light dark:text-muted-dark">Min. 10kg</p>
</div>
<button class="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold leading-normal text-white js-add-to-cart" data-product-id = ${product.id}>
<span class="truncate">add to cart</span>
</button>
</div>`
});


function updateCartQuantity()
{
  
      let cartTotal = 0;

      cart.forEach((cartItem)=>
      {
        cartTotal += cartItem.quantity; 
         document.querySelector('.js-cart-quantity').innerHTML = cartTotal;
      });

}

document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
.forEach((button) =>
{
  button.addEventListener('click', () =>
    {
      const productId = button.dataset.productId;
      addtoCart(productId);
      updateCartQuantity();

    });
});
    
    

