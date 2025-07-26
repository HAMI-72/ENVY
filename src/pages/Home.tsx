import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, RefreshCw } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10"></div>
        <img
          src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Hero Fashion Model"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-6">
            Elevate Your Style
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
            Discover premium clothing that defines modern elegance
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            SHOP NOW
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ENVY</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of luxury, comfort, and style with our carefully curated collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Free Shipping</h3>
              <p className="text-gray-600">
                Complimentary shipping on all orders over $100. Fast and reliable delivery worldwide.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Guarantee</h3>
              <p className="text-gray-600">
                Premium materials and exceptional craftsmanship backed by our lifetime quality promise.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <RefreshCw className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Returns</h3>
              <p className="text-gray-600">
                Not satisfied? Return any item within 30 days for a full refund, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Hero Sections - Multiple full-screen fashion images */}
      <div className="md:hidden">
        {/* Hero Section 2 - Premium Shirts */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10"></div>
          <img
            src="https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Premium Shirts Collection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-6">
              Premium Shirts
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
              Discover exceptional quality and timeless style
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              SHOP NOW
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Hero Section 3 - Exclusive Collection */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10"></div>
          <img
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Exclusive Fashion Collection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-6">
              Exclusive Styles
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
              Limited edition pieces for the discerning individual
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              SHOP NOW
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Hero Section 4 - Essential Wardrobe */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10"></div>
          <img
            src="https://images.pexels.com/photos/1040473/pexels-photo-1040473.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Essential Wardrobe Collection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-6">
              Essential Wardrobe
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
              Timeless pieces that define your signature style
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              SHOP NOW
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Hero Section 5 - Luxury Collection */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10"></div>
          <img
            src="https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Luxury Fashion Collection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-6">
              Luxury Collection
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
              Indulge in the finest fabrics and craftsmanship
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              SHOP NOW
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>

      {/* Featured Collection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Collection</h2>
            <p className="text-xl text-gray-600">
              Handpicked pieces that embody sophistication and contemporary style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Exclusive Collection"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">Exclusive Collection</h3>
                  <Link
                    to="/shop?exclusive=true"
                    className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Explore Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/1040473/pexels-photo-1040473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Essential Collection"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">Essential Wardrobe</h3>
                  <Link
                    to="/shop?essential=true"
                    className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Shop Essentials
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Stay In Style</h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for exclusive offers, style tips, and first access to new collections
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-black outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;