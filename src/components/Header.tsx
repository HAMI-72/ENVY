import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cart, favorites, isLoggedIn, logout } = useApp();
  const navigate = useNavigate();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleUserClick = () => {
    if (isLoggedIn) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-black tracking-wider">
            ENVY
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/shop" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">
              SHOP ALL
            </Link>
            <Link to="/shop?category=shirts" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">
              SHIRTS
            </Link>
            <Link to="/shop?category=pants" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">
              PANTS
            </Link>
            <Link to="/shop?category=accessories" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">
              ACCESSORIES
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center bg-gray-50 rounded-full px-4 py-2 w-64">
            <Search className="h-4 w-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none text-gray-900 placeholder-gray-500 text-sm flex-1"
            />
          </form>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleUserClick}
              className="text-gray-900 hover:text-gray-600 transition-colors"
            >
              <User className="h-5 w-5" />
            </button>
            
            <Link to="/favorites" className="text-gray-900 hover:text-gray-600 transition-colors relative">
              <Heart className="h-5 w-5" />
              {favorites.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>
            
            <Link to="/cart" className="text-gray-900 hover:text-gray-600 transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-900 hover:text-gray-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <form onSubmit={handleSearch} className="flex items-center bg-gray-50 rounded-full px-4 py-2 mb-4">
              <Search className="h-4 w-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none text-gray-900 placeholder-gray-500 text-sm flex-1"
              />
            </form>
            <nav className="space-y-4">
              <Link
                to="/shop"
                className="block text-gray-900 hover:text-gray-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                SHOP ALL
              </Link>
              <Link
                to="/shop?category=shirts"
                className="block text-gray-900 hover:text-gray-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                SHIRTS
              </Link>
              <Link
                to="/shop?category=pants"
                className="block text-gray-900 hover:text-gray-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                PANTS
              </Link>
              <Link
                to="/shop?category=accessories"
                className="block text-gray-900 hover:text-gray-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ACCESSORIES
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;