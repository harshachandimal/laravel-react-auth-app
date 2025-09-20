import React from 'react';
import {Navbar} from '../common/NavBar';
import {products} from "./ProductDetails.ts";
import {ProductCard} from "./ProductCard.tsx";

/**
 * Page: Products
 */
const Products: React.FC = () => {


  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Product Highlights
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Explore our curated selection. Thoughtfully designed, beautifully built.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 active:scale-95">
              Filters
            </button>
            <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 active:scale-95">
              Sort
            </button>
          </div>
        </div>

        <section aria-label="Product list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Products;
