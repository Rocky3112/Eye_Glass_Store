import React from "react";
import { heroCategories, flashSaleItems } from "../data/data";

export default function EyeglassesHomePage() {
  return (
    <div className="p-4 w-full">
      {/* Hero Section */}
      <section className="bg-base-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">TryNow</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {heroCategories.map((item, idx) => (
            <div key={idx} className="bg-base-100 rounded-lg p-4 text-center shadow hover:scale-105 transition">
              <span className="text-lg font-semibold">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Flash Sale Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Flash Sale</h2>
          <button className="btn btn-outline btn-sm">View All</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {flashSaleItems.map((item, idx) => (
            <div key={idx} className="card bg-base-100 shadow-xl">
              <figure className="h-40 bg-gray-100 flex items-center justify-center text-4xl">👓</figure>
              <div className="card-body p-4">
                <h3 className="card-title text-base">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.discount}% OFF</p>
                <div className="text-primary font-semibold">${item.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
