import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, ShoppingBag, Heart, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const { cart, favorites } = useApp();
  
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navItems = [
    {
      path: '/',
      icon: Home,
      label: 'Home',
      isActive: location.pathname === '/'
    },
    {
      path: '/shop',
      icon: Search,
      label: 'Shop',
      isActive: location.pathname === '/shop' || location.pathname.startsWith('/shop')
    },
    {
      path: '/cart',
      icon: ShoppingBag,
      label: 'Cart',
      isActive: location.pathname === '/cart',
      badge: cartItemsCount > 0 ? cartItemsCount : undefined
    },
    {
      path: '/favorites',
      icon: Heart,
      label: 'Favorites',
      isActive: location.pathname === '/favorites',
      badge: favorites.length > 0 ? favorites.length : undefined
    },
    {
      path: '/login',
      icon: User,
      label: 'Account',
      isActive: location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/profile'
    }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-3 min-w-0 flex-1 ${
                item.isActive
                  ? 'text-black'
                  : 'text-gray-400 hover:text-gray-600'
              } transition-colors`}
            >
              <div className="relative">
                <Icon className="h-6 w-6" />
                {item.badge && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center min-w-[1rem]">
                    {item.badge > 99 ? '99+' : item.badge}
                  </span>
                )}
              </div>
              <span className="text-xs mt-1 truncate">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;