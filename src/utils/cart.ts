export interface CartItem {
  productId: number;
  slug: string;
  title: string;
  priceUSD: number;
  priceXAF: number;
  image: string;
  quantity: number;
}

export const getCart = (): CartItem[] => {
  try {
    const cart = localStorage.getItem('empowered-nexus-cart');
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
};

export const addToCart = (item: Omit<CartItem, 'quantity'>): void => {
  const cart = getCart();
  const existingItem = cart.find(cartItem => cartItem.productId === item.productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  
  localStorage.setItem('empowered-nexus-cart', JSON.stringify(cart));
};

export const updateCartItemQuantity = (productId: number, quantity: number): void => {
  const cart = getCart();
  const itemIndex = cart.findIndex(item => item.productId === productId);
  
  if (itemIndex !== -1) {
    if (quantity <= 0) {
      cart.splice(itemIndex, 1);
    } else {
      cart[itemIndex].quantity = quantity;
    }
    localStorage.setItem('empowered-nexus-cart', JSON.stringify(cart));
  }
};

export const removeFromCart = (productId: number): void => {
  const cart = getCart().filter(item => item.productId !== productId);
  localStorage.setItem('empowered-nexus-cart', JSON.stringify(cart));
};

export const clearCart = (): void => {
  localStorage.removeItem('empowered-nexus-cart');
};

export const getCartTotal = (currency: 'USD' | 'XAF' = 'USD'): number => {
  const cart = getCart();
  return cart.reduce((total, item) => {
    const price = currency === 'USD' ? item.priceUSD : item.priceXAF;
    return total + (price * item.quantity);
  }, 0);
};

export const getCartItemCount = (): number => {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
};