/**
 * UI: Simple Navbar
 */

import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store.tsx";
import { Link } from "react-router-dom";

interface INavLink {
    label: string;
    href: string;
}

const navLinks: INavLink[] = [
    { label: "Home", href: "#" },
    { label: "Shop", href: "#" },
    { label: "Categories", href: "#" },
    { label: "Deals", href: "#" },
];

export const Navbar: React.FC = () => {
    const cartCount = useSelector((state: RootState) =>
        state.cart.items.reduce((sum, item) => sum + (item.qty), 0),
    );

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
                <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
                        <span className="text-sm font-bold">LA</span>
                    </div>
                    <span className="hidden text-base font-semibold text-slate-900 sm:block">
                        Laravel Store
                    </span>
                </div>

                <nav className="ml-4 hidden items-center gap-4 md:flex">
                    {navLinks.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            className="rounded-full px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <div className="ml-auto flex flex-1 items-center justify-end gap-3">
                    <div className="relative hidden w-full max-w-sm items-center md:flex">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100"
                        />
                        <svg
                            viewBox="0 0 24 24"
                            className="pointer-events-none absolute right-3 h-5 w-5 text-slate-400"
                        >
                            <path
                                className="fill-none stroke-current"
                                strokeWidth="1.8"
                                d="M21 21l-4.3-4.3M17 10.5A6.5 6.5 0 1 1 4 10.5a6.5 6.5 0 0 1 13 0Z"
                            />
                        </svg>
                    </div>

                    <Link
                        to="/dashboard/shopping-cart"
                        aria-label="Cart"
                        className="relative rounded-full p-2 text-slate-700 hover:bg-slate-100"
                    >
                        <svg viewBox="0 0 24 24" className="h-6 w-6">
                            <path
                                className="fill-none stroke-current"
                                strokeWidth="1.8"
                                d="M7 7h14l-1.5 8.5a2 2 0 0 1-2 1.5H9a2 2 0 0 1-2-1.5L5 4H2"
                            />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-500 px-1.5 text-[10px] font-semibold text-white">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    <button className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full ring-1 ring-slate-200">
                        <img
                            alt="user"
                            src="https://i.pravatar.cc/100?img=12"
                            className="h-full w-full object-cover"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
};
