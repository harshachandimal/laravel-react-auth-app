import React from "react";
import { StarRating } from "./StarRating.tsx";

/**
 * Product Card
 */

export const ProductCard: React.FC<{ p: IProduct }> = ({ p }) => {
    const hasDiscount = p.originalPrice && p.originalPrice > p.price;
    const discountPct = hasDiscount
        ? Math.round(((p.originalPrice! - p.price) / p.originalPrice!) * 100)
        : 0;

    return (
        <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="relative">
                <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    {p.badges?.map((b) => (
                        <span
                            key={b}
                            className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-800 shadow-sm ring-1 ring-slate-200 backdrop-blur"
                        >
                            {b}
                        </span>
                    ))}
                    {hasDiscount && (
                        <span className="rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                            -{discountPct}%
                        </span>
                    )}
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
                        {p.title}
                    </h3>
                    <span
                        className={[
                            "shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide",
                            p.inStock
                                ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                                : "bg-rose-50 text-rose-700 ring-1 ring-rose-100",
                        ].join(" ")}
                    >
                        {p.inStock ? "In stock" : "Sold out"}
                    </span>
                </div>

                <p className="mb-3 line-clamp-2 text-sm text-slate-600">
                    {p.description}
                </p>

                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-slate-900">
                            ${p.price}
                        </span>
                        {hasDiscount && (
                            <span className="text-sm text-slate-400 line-through">
                                ${p.originalPrice}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <StarRating rating={p.rating} />
                        <span className="text-xs text-slate-500">
                            ({p.reviews.toLocaleString()})
                        </span>
                    </div>
                </div>

                <div className="mt-auto flex gap-2">
                    <button
                        disabled={!p.inStock}
                        className={[
                            "flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition",
                            p.inStock
                                ? "bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.98]"
                                : "bg-slate-100 text-slate-400",
                        ].join(" ")}
                    >
                        {p.inStock ? "Add to cart" : "Notify me"}
                    </button>
                    <button className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 active:scale-[0.98]">
                        Details
                    </button>
                </div>
            </div>
        </article>
    );
};
