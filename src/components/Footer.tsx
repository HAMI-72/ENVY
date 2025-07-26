import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-wider">ENVY</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium clothing for the modern individual. Experience luxury, comfort, and style in every piece.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/shop" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Shop All
              </Link>
              <Link to="/shop?category=shirts" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Shirts
              </Link>
              <Link to="/shop?category=pants" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Pants
              </Link>
              <Link to="/shop?category=shoes" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Shoes
              </Link>
              <Link to="/shop?category=accessories" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Accessories
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <div className="space-y-2">
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contact Us
              </Link>
              <Link to="/shipping" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Shipping Info
              </Link>
              <Link to="/returns" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Returns
              </Link>
              <Link to="/size-guide" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Size Guide
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gray-300 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  placeholder address - 10001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-300 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-300 flex-shrink-0" />
                <span className="text-gray-300 text-sm">envyfashion@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 ENVY. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;