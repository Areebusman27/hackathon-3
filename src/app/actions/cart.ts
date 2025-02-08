type Product = {
    _id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    inventory: number;
};

export const addtoCArt = (product: Product) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingproductIndex = cart.findIndex(item => item._id === product._id);

    if (existingproductIndex >= 0) {
        cart[existingproductIndex].inventory += 1;
    } else {
        cart.push({ ...product, inventory: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
};

export const removeCart = (productid: number) => {
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter((cartitem) => cartitem._id !== productid);
    localStorage.setItem('cart', JSON.stringify(cart));
};

export const updateQuantity = (productid: number, quantity: number) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex = cart.findIndex(item => item._id === productid);

    if (productIndex > -1) {
        cart[productIndex].inventory = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
};

export const getCartitems = (): Product[] => {
    return JSON.parse(localStorage.getItem('cart') || "[]");

    
};