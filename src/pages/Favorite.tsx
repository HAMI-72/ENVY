import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Favorite: React.FC = () => {
    const { favorites, toggleFavorite, addToCart } = useApp();

    // Fetch products that are marked as favorite
    const favoriteProducts = favorites.length > 0
      ? JSON.parse(localStorage.getItem("products") || "[]").filter((product: any) =>
          favorites.includes(product.id)
        )
      : [];
  
    if (favoriteProducts.length === 0) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No favorites yet</h2>
            <p className="text-gray-600 mb-8">Start adding products to your wishlist for later</p>
            <Link
              to="/shop"
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Browse Products
            </Link>
          </div>
        </div>
      );
    }
  
    return(
        <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Your Favorites</h1>
          </div>
  
          {/* Favorites List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteProducts.map((product: any) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 flex flex-col">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover rounded-lg mb-4"
                  />
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
  
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600 mb-2">₹{product.price}</p>
  
                <div className="mt-auto flex items-center space-x-3">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 text-center py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => addToCart(product, product.sizes[0], product.colors[0], 1)}
                    className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default Favorite;