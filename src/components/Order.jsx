import { useEffect, useState } from "react";

const OrderPage = () => {
    const [cart, setCart] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        paymentMethod: "Cash on Delivery",
    });

    // ✅ Load cart data from localStorage
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    // ✅ Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // ✅ Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ✅ Handle order submission
    const handleOrderSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.address) {
            alert("Please fill in all fields.");
            return;
        }

        const orderDetails = {
            customer: formData,
            cartItems: cart,
            totalAmount: totalPrice,
            orderDate: new Date().toLocaleString(),
        };

        // ✅ Save order details to localStorage
        localStorage.setItem("order", JSON.stringify(orderDetails));

        // ✅ Clear cart after order
        localStorage.removeItem("cart");
        setCart([]);

        alert("Order placed successfully!");
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="border p-4 mb-6 rounded-md">
                    {cart.map((item) => (
                        <div key={item.id} className="flex justify-between border-b py-2">
                            <span>{item.name} (x{item.quantity})</span>
                            <span>${item.price * item.quantity}</span>
                        </div>
                    ))}
                    <div className="flex justify-between font-bold text-lg mt-3">
                        <span>Total:</span>
                        <span>${totalPrice}</span>
                    </div>
                </div>
            )}

            <h3 className="text-xl font-bold mb-3">Checkout Form</h3>
            <form onSubmit={handleOrderSubmit} className="border p-4 rounded-md">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                    required
                />
                <textarea
                    name="address"
                    placeholder="Shipping Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                    required
                />
                <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-3"
                >
                    <option value="Cash on Delivery">Cash on Delivery</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Mobile Banking">Mobile Banking</option>
                </select>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default OrderPage;
