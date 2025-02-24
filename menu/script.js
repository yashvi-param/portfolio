/*let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;

    displayCart();
}

function displayCart() {
    const cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = ''; // Clear current list

    cart.forEach((entry) => {
        const listItem = document.createElement('li');
        listItem.textContent = `{entry.item} - ${entry.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
    });

    document.getElementById('totalPrice').textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length > 0) {
        alert(`Your order has been placed!\nTotal amount: ${total.toFixed(2)}`);
        cart = [];  // Reset the cart
        total = 0;  // Reset total
        displayCart();  // Update the UI
    } else {
        alert('Your cart is empty!');
    }
}
