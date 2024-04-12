const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];

}
const saveToLS = cart => {
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);


}
const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id);
    // save to local storage
    saveToLS(cart);
}
export {addToLS}