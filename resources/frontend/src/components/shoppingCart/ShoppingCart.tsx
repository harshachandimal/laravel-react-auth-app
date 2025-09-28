import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../common/NavBar.tsx";
import type { RootState } from "../../store.tsx";
import { removeItem, updateQty, clearCart } from "../../utilities/slices/cart/CartSlice";

const ShoppingCart: React.FC = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);

    const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
    const totalPrice = items.reduce((sum, i) => sum + i.price * i.qty, 0);

    const handleQtyChange = (id: string | number, qtyStr: string) => {
        const qty = Math.max(0, Number(qtyStr) || 0);
        if (qty === 0) {
            // if set to 0, remove item
            dispatch(removeItem(id));
        } else {
            dispatch(updateQty({ id, qty }));
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            <main className="mx-auto w-full max-w-5xl px-4 py-6">
                <h1 className="mb-4 text-2xl font-bold text-slate-900">Your Cart</h1>

                {items.length === 0 ? (
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600">
                        Your cart is empty. Go add some products!
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-3">
                        <section className="md:col-span-2">
                            <ul className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
                                {items.map((item) => (
                                    <li key={item.id} className="flex items-center gap-4 p-4">
                                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                                            <img
                                                src="/images/placeholder-product.jpg"
                                                alt={item.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-1 items-start justify-between gap-4">
                                            <div>
                                                <h3 className="text-sm font-semibold text-slate-900">{item.name}</h3>
                                                <p className="mt-0.5 text-sm text-slate-600">${item.price}</p>
                                                {item.stock !== undefined && (
                                                    <p className="mt-0.5 text-xs text-slate-400">Stock: {item.stock}</p>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <input
                                                    type="number"
                                                    min={0}
                                                    value={item.qty}
                                                    onChange={(e) => handleQtyChange(item.id, e.target.value)}
                                                    className="w-20 rounded-lg border border-slate-200 px-2 py-1.5 text-sm focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100"
                                                />
                                                <span className="w-20 text-right text-sm font-semibold text-slate-900">
                                                    ${(item.price * item.qty).toFixed(2)}
                                                </span>
                                                <button
                                                    onClick={() => dispatch(removeItem(item.id))}
                                                    className="rounded-lg px-2 py-1.5 text-sm text-rose-600 hover:bg-rose-50"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <aside className="h-max rounded-2xl border border-slate-200 bg-white p-5">
                            <h2 className="mb-3 text-lg font-semibold text-slate-900">Summary</h2>
                            <div className="mb-2 flex items-center justify-between text-sm text-slate-700">
                                <span>Items</span>
                                <span>{totalItems}</span>
                            </div>
                            <div className="mb-4 flex items-center justify-between text-sm text-slate-700">
                                <span>Subtotal</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <button
                                onClick={() => dispatch(clearCart())}
                                className="mt-2 w-full rounded-xl bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700 active:scale-[0.98]"
                            >
                                Clear cart
                            </button>
                            <button
                                className="mt-3 w-full rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 active:scale-[0.98]"
                            >
                                Checkout
                            </button>
                        </aside>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ShoppingCart;
