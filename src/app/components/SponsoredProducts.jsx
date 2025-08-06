'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from "../components/ProductCard";

const SponsoredProducts = () => {
  const [sponsoredProducts, setSponsoredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSponsoredProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Debug: Check if environment variable is set
      console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
      
      const apiUrl = `https://iskashop-backend.vercel.app/api/v2/product/get-all-products`;
      console.log('Full API URL:', apiUrl);
      
      const response = await axios.get(apiUrl);
      console.log('API Response:', response);
      console.log('Products data:', response.data);
      
      setSponsoredProducts(response.data.products || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      console.error('Error details:', error.response?.data || error.message);
      setError(`Failed to load products: ${error.response?.data?.message || error.message}`);
      setSponsoredProducts([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('Component mounted, fetching products...');
    fetchSponsoredProducts();
  }, []); // Only run once on mount

  if (loading) {
    return (
      <div className="w-full py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p>Loading products...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-red-500">{error}</p>
            <button 
              onClick={fetchSponsoredProducts}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-4 px-4 relative z-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">All Products</h2>
          <p className="mt-4 text-lg text-gray-600">Browse all available products from our sellers</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sponsoredProducts && sponsoredProducts.length > 0 ? (
            sponsoredProducts.map((product, index) => (
              <div key={product._id || index} className="transform transition duration-300 hover:scale-105">
                <ProductCard data={product} isSponsored={false} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">No products available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SponsoredProducts;
