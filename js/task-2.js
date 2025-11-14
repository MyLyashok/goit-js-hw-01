function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = country + deliveryFee; 
    return `Shipping to ${price} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));
