import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../utilities/slices/cart/CartSlice";

/**
 * Product Card
 */

export const ProductCard: React.FC<{ p: IProduct }> = ({ p }) => {
    const dispatch = useDispatch();
    const inStock = (p.product_qty ?? 0) > 0;

    const productAddToCart = (p: IProduct) => {
        const item = {
            id: p.id,
            name: p.product_name,
            price: p.product_price,
            qty: 1,
            stock: p.product_qty,
            description: p.product_description,
        };
        // Dispatch to Redux store
        dispatch(addItem(item));
    };

    return (
        <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="relative">
                <img
                    src={"/images/placeholder-product.jpg"}
                    alt={p.product_name}
                    className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    {/* badges/discount removed since BE fields don't include them */}
                </div>
                <button
                    aria-label="Add to wishlist"
                    className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-slate-700 shadow ring-1 ring-slate-200 transition hover:bg-white"
                >
                    <svg viewBox="0 0 24 24" className="h-5 w-5">
                        <path
                            className="fill-none stroke-current"
                            strokeWidth="1.8"
                            d="M12.1 20.3 4.6 13c-2.2-2.2-2.2-5.8 0-8s5.8-2.2 8 0c2.2-2.2 5.8-2.2 8 0s2.2 5.8 0 8l-7.5 7.3c-.3.3-.8.3-1.1 0z"
                        />
                    </svg>
                </button>
            </div>

            <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="line-clamp-2 text-base font-semibold text-slate-900">
                        {p.product_name}
                    </h3>
                    <span
                        className={[
                            "shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide",
                            inStock
                                ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                                : "bg-rose-50 text-rose-700 ring-1 ring-rose-100",
                        ].join(" ")}
                    >
                        {inStock ? "In stock" : "Sold out"}
                    </span>
                </div>

                <p className="mb-3 line-clamp-2 text-sm text-slate-600">
                    {p.product_description}
                </p>

                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-slate-900">
                            ${p.product_price}
                        </span>
                    </div>
                    {/* rating/reviews removed since BE fields don't include them */}
                </div>

                <div className="mt-auto flex gap-2">
                    <button
                        onClick={() => productAddToCart(p)}
                        className={"flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.98]"}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </article>
    );
};
