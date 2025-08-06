'use client'
import React from "react";

// Utility function to format money with commas
const formatMoney = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductCard = ({ data, isSponsored }) => {
  // Determine which price to display
  const displayPrice = data.grossAmount || data.discountPrice || 0;

  return (
    <div className="w-full h-full bg-white text-primary rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative h-[250px] overflow-hidden">
        <img
          src={`${data.images && data.images[0]?.url}`}
          alt={data.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Sponsored label */}
        {isSponsored && (
          <div className="absolute bottom-3 left-3">
            <span className="bg-text_color text-white px-2 py-1 rounded-md text-xs font-semibold shadow-md">
              Sponsored
            </span>
          </div>
        )}
        {/* Discount badge */}
        {data.discountPercentage > 0 && (
          <div className="absolute top-3 left-3">
            <span className="bg-white text-primary_color px-2 py-1 rounded-md text-sm">
              {Math.round(data.discountPercentage)}% off
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h5 className="text-lg font-semibold text-primary_color mb-2 hover:text-primary_color/80 transition-colors line-clamp-2">
          {data.name}
        </h5>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h5 className="text-xl font-bold text-primary_color">
              Ghs {formatMoney(displayPrice)}
            </h5>
            {data.discountPercentage > 0 && data.originalPrice && (
              <p className="text-primary_color/60 line-through text-sm">
                Ghs {formatMoney(data.originalPrice)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
