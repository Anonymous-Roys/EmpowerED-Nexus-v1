import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCart, updateCartItemQuantity, removeFromCart, getCartTotal, CartItem } from '../utils/cart';

export function CheckoutPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mobile'>('card');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'XAF'>('USD');
  
  useEffect(() => {
    setCart(getCart());
  }, []);

  const updateQuantity = (productId: number, quantity: number) => {
    updateCartItemQuantity(productId, quantity);
    setCart(getCart());
  };

  const removeItem = (productId: number) => {
    removeFromCart(productId);
    setCart(getCart());
  };

  if (cart.length === 0) {
    return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[32px] text-black mb-4">
              Your cart is empty
            </h2>
            <button
              onClick={() => navigate('/products')}
              className="bg-[#4eba86] hover:bg-[#3da670] text-white font-['Barlow:SemiBold',sans-serif] text-[18px] px-8 py-3 rounded-[8px] transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        </div>
  
    );
  }

  const subtotal = getCartTotal(currency);
  const tax = subtotal * 0.16;
  const discount = subtotal * 0.1;
  const total = subtotal + tax - discount;

  return (
   
      <div className="bg-white min-h-screen w-full">
        {/* Progress Indicator */}
        <div className="max-w-[1375px] mx-auto px-6 md:px-8 py-8 md:py-12">
          <div className="flex items-center justify-start gap-8 mb-8">
            {/* Step 1 - Cart */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#2e92c6] flex items-center justify-center">
                <span className="font-['Montserrat:SemiBold',sans-serif] text-white text-[18px]">1</span>
              </div>
              <span className="font-['Montserrat:Regular',sans-serif] text-[#2e92c6] text-[18px]">Cart</span>
            </div>
            
            <div className="w-16 md:w-24 h-0.5 bg-[#2e92c6]" />
            
            {/* Step 2 - Checkout */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0c1733] flex items-center justify-center">
                <span className="font-['Montserrat:SemiBold',sans-serif] text-white text-[18px]">2</span>
              </div>
              <span className="font-['Montserrat:Regular',sans-serif] text-black text-[18px]">Checkout</span>
            </div>
            
            <div className="w-16 md:w-24 h-0.5 bg-black" />
            
            {/* Step 3 - Done */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center">
                <span className="font-['Montserrat:SemiBold',sans-serif] text-[#b3b3b3] text-[18px]">3</span>
              </div>
              <span className="font-['Montserrat:Regular',sans-serif] text-[#b3b3b3] text-[18px]">Done</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Column - Form */}
            <div className="lg:col-span-3">
              {/* Contact Information */}
              <h2 className="font-['Barlow:Black',sans-serif] text-[32px] md:text-[40px] text-[#0c1733] mb-8">
                Contact Information
              </h2>

              {/* Email */}
              <div className="mb-6">
                <label className="font-['Montserrat:Regular',sans-serif] text-[18px] text-black mb-2 block">
                  Email address <span className="text-[#e23710]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full h-[52px] px-4 border border-[#dbdde3] rounded-[8px] font-['Montserrat:Regular',sans-serif] text-[16px] focus:border-[#2e92c6] focus:outline-none transition-colors"
                />
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="font-['Montserrat:Regular',sans-serif] text-[18px] text-black mb-2 block">
                    Full name <span className="text-[#e23710]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full h-[52px] px-4 border border-[#dbdde3] rounded-[8px] font-['Montserrat:Regular',sans-serif] text-[14px] focus:border-[#2e92c6] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-['Montserrat:Regular',sans-serif] text-[18px] text-black mb-2 block">
                    Last name <span className="text-[#e23710]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full h-[52px] px-4 border border-[#dbdde3] rounded-[8px] font-['Montserrat:Regular',sans-serif] text-[14px] focus:border-[#2e92c6] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="mb-6">
                <label className="font-['Montserrat:Regular',sans-serif] text-[18px] text-black mb-2 block">
                  Phone number <span className="text-[#e23710]">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="w-20 h-[52px] px-4 border border-[#b3b3b3] rounded-[8px] flex items-center bg-[rgba(207,202,202,0.2)]">
                    <span className="font-['Montserrat:Regular',sans-serif] text-[14px] text-[#818ea1]">+254</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="712 345 678"
                    className="flex-1 h-[52px] px-4 border border-[#b3b3b3] rounded-[8px] font-['Montserrat:Regular',sans-serif] text-[14px] focus:border-[#2e92c6] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Country */}
              <div className="mb-6">
                <label className="font-['Montserrat:Regular',sans-serif] text-[18px] text-black mb-2 block">
                  Country <span className="text-[#e23710]">*</span>
                </label>
                <select className="w-full h-[52px] px-4 border border-[#dbdde3] rounded-[8px] font-['Montserrat:Regular',sans-serif] text-[16px] text-[#818ea1] focus:border-[#2e92c6] focus:outline-none transition-colors appearance-none bg-white cursor-pointer">
                  <option>Choose state</option>
                  <option>Kenya</option>
                  <option>Nigeria</option>
                  <option>Ghana</option>
                  <option>South Africa</option>
                  <option>Tanzania</option>
                </select>
              </div>

              {/* City, State, ZIP */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="font-['Montserrat:Regular',sans-serif] text-[18px] text-black mb-2 block">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Enter city"
                    className="w-full h-[52px] px-4 border border-[#dbdde3] rounded-[8px] font-['Montserrat:Regular',sans-serif] text-[16px] focus:border-[#2e92c6] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-['Montserrat:Regular',sans-serif] text-[18px] text-black mb-2 block">
                    State
                  </label>
                  <input
                    type="text"
                    placeholder="Enter state"
                    className="w-full h-[52px] px-4 border border-[#dbdde3] rounded-[8px] font-['Montserrat:Regular',sans-serif] text-[16px] focus:border-[#2e92c6] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-['Montserrat:Regular',sans-serif] text-[18px] text-black mb-2 block">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter ZIP code"
                    className="w-full h-[52px] px-4 border border-[#dbdde3] rounded-[8px] font-['Montserrat:Regular',sans-serif] text-[16px] focus:border-[#2e92c6] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[32px] text-black mb-6">
                Payment Method
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`h-[92px] rounded-[8px] border-2 transition-all duration-300 ${
                    paymentMethod === 'card'
                      ? 'border-[#2e92c6] bg-white'
                      : 'border-[#000] bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3 px-6">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === 'card' ? 'border-[#2e92c6]' : 'border-gray-400'
                    }`}>
                      {paymentMethod === 'card' && (
                        <div className="w-2 h-2 rounded-full bg-[#2e92c6]" />
                      )}
                    </div>
                    <span className="font-['Montserrat:Bold',sans-serif] text-[14px] text-[#0c1733]">
                      Card
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod('mobile')}
                  className={`h-[92px] rounded-[8px] border-2 transition-all duration-300 ${
                    paymentMethod === 'mobile'
                      ? 'border-[#2e92c6] bg-white'
                      : 'border-[#000] bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3 px-6">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === 'mobile' ? 'border-[#2e92c6]' : 'border-gray-400'
                    }`}>
                      {paymentMethod === 'mobile' && (
                        <div className="w-2 h-2 rounded-full bg-[#2e92c6]" />
                      )}
                    </div>
                    <span className="font-['Montserrat:Bold',sans-serif] text-[14px] text-[#0c1733]">
                      Mobile Money
                    </span>
                  </div>
                </button>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start gap-3 mb-8">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 w-5 h-5 border-2 border-[#415be7] rounded accent-[#415be7] cursor-pointer"
                />
                <label htmlFor="terms" className="font-['Montserrat:Regular',sans-serif] text-[14px] text-black cursor-pointer">
                  I have read and agree to the Terms and Conditions.
                </label>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-black rounded-[10px] p-6 sticky top-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-['Barlow:Bold',sans-serif] text-[28px] md:text-[32px] text-black tracking-[1.6px]">
                    Order Summary
                  </h3>
                  <div className="bg-[#d9d9d9] rounded-[8px] p-1 flex gap-1">
                    <button
                      onClick={() => setCurrency('USD')}
                      className={`px-3 py-1 rounded-[6px] text-[12px] font-semibold transition-all ${
                        currency === 'USD' ? 'bg-white text-black' : 'text-gray-600'
                      }`}
                    >
                      USD
                    </button>
                    <button
                      onClick={() => setCurrency('XAF')}
                      className={`px-3 py-1 rounded-[6px] text-[12px] font-semibold transition-all ${
                        currency === 'XAF' ? 'bg-white text-black' : 'text-gray-600'
                      }`}
                    >
                      XAF
                    </button>
                  </div>
                </div>

                <div className="border-b border-[#b3b3b3] pb-6 mb-6 space-y-4">
                  {cart.map((item) => (
                    <div key={item.productId} className="flex gap-4">
                      <div className="w-16 h-16 bg-[#d9d9d9] rounded-[8px] overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-['Montserrat:Bold',sans-serif] text-[14px] text-black mb-1">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 mb-2">
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                            className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="font-['Montserrat:Regular',sans-serif] text-[14px] text-black">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeItem(item.productId)}
                            className="ml-auto text-red-500 hover:text-red-700 text-[12px]"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <p className="font-['Montserrat:Bold',sans-serif] text-[14px] text-black">
                        {currency === 'USD' 
                          ? `$${(item.priceUSD * item.quantity).toFixed(2)}`
                          : `${(item.priceXAF * item.quantity).toLocaleString()} XAF`
                        }
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-[rgba(238,26,38,0.06)] -mx-6 px-6 py-6 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-['Montserrat:Bold',sans-serif] text-[14px] text-[#b3b3b3]">
                      Subtotal
                    </span>
                    <span className="font-['Montserrat:Bold',sans-serif] text-[14px] text-[#b3b3b3]">
                      {currency === 'USD' ? `$${subtotal.toFixed(2)}` : `${subtotal.toLocaleString()} XAF`}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="font-['Montserrat:Bold',sans-serif] text-[14px] text-[#b3b3b3]">
                      Tax (VAT 16%)
                    </span>
                    <span className="font-['Montserrat:Bold',sans-serif] text-[14px] text-[#b3b3b3]">
                      {currency === 'USD' ? `$${tax.toFixed(2)}` : `${tax.toLocaleString()} XAF`}
                    </span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="font-['Montserrat:Bold',sans-serif] text-[14px] text-[#4eba86]">
                      Discount (EDUTECH10)
                    </span>
                    <span className="font-['Montserrat:Bold',sans-serif] text-[14px] text-[#4eba86]">
                      -{currency === 'USD' ? `$${discount.toFixed(2)}` : `${discount.toLocaleString()} XAF`}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline border-t border-[#b3b3b3] pt-4">
                    <span className="font-['Montserrat:Bold',sans-serif] text-[14px] text-black">
                      Total
                    </span>
                    <div className="text-right">
                      <p className="font-['Montserrat:Bold',sans-serif] text-[32px] text-black">
                        {currency === 'USD' ? `$${total.toFixed(2)}` : `${total.toLocaleString()} XAF`}
                      </p>
                      <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-[#8d7777] tracking-[0.28px]">
                        {currency}
                      </p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#4eba86] hover:bg-[#3da670] text-white font-['Montserrat:Bold',sans-serif] text-[18px] py-4 rounded-[10px] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg mb-3">
                  Complete Purchase →
                </button>

                <div className="flex items-center justify-center gap-2 text-[#757575]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <p className="font-['Montserrat:Bold',sans-serif] text-[14px]">
                    Payments are SSL encrypted and secure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}