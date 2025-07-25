import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Black Seersucker Check Shirt',
    price: 659,
    originalPrice: 1649,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
      'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop'
    ],
    category: 'shirts',
    description: 'Premium cotton seersucker check shirt with a modern slim fit.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Gray'],
    inStock: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    name: 'Pastel Green Slub Textured Shirt',
    price: 759,
    originalPrice: 1899,
    image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop'
    ],
    category: 'shirts',
    description: 'Luxurious slub textured shirt in a sophisticated pastel green.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Green', 'Blue', 'White'],
    inStock: true,
    isExclusive: true,
    rating: 4.7,
    reviews: 95
  },
  {
    id: '3',
    name: 'Premium Cotton Sumptuous Shirt',
    price: 799,
    originalPrice: 1999,
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop'
    ],
    category: 'shirts',
    description: 'Exquisite premium cotton shirt with exceptional comfort and style.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Burgundy', 'Black', 'Navy'],
    inStock: true,
    isExclusive: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: '4',
    name: 'Alpine White Slub Shirt',
    price: 659,
    originalPrice: 1649,
    image: 'https://images.pexels.com/photos/1040473/pexels-photo-1040473.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1040473/pexels-photo-1040473.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop'
    ],
    category: 'shirts',
    description: 'Classic alpine white slub shirt perfect for any occasion.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Cream', 'Light Blue'],
    inStock: true,
    isEssential: true,
    rating: 4.6,
    reviews: 203
  },
  {
    id: '5',
    name: 'Latte Luxe Signature Shirt',
    price: 899,
    originalPrice: 2249,
    image: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop'
    ],
    category: 'shirts',
    description: 'Signature latte-colored shirt with luxurious finish.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Latte', 'Beige', 'Taupe'],
    inStock: true,
    rating: 4.9,
    reviews: 87
  },
  {
    id: '6',
    name: 'Icy Grid Winter Weave Shirt',
    price: 849,
    originalPrice: 2199,
    image: 'https://images.pexels.com/photos/1040488/pexels-photo-1040488.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1040488/pexels-photo-1040488.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop'
    ],
    category: 'shirts',
    description: 'Winter-ready grid pattern shirt with exceptional warmth.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Gray', 'Black'],
    inStock: true,
    rating: 4.4,
    reviews: 112
  },
  {
    id: '7',
    name: 'Coastal Dune Striped Shirt',
    price: 749,
    originalPrice: 1899,
    image: 'https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop'
    ],
    category: 'shirts',
    description: 'Coastal-inspired striped shirt with relaxed fit.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Beige', 'White', 'Navy'],
    inStock: true,
    rating: 4.5,
    reviews: 134
  },
  {
    id: '8',
    name: 'Minimal Ink Sketch White Shirt',
    price: 699,
    originalPrice: 1749,
    image: 'https://images.pexels.com/photos/1040473/pexels-photo-1040473.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1040473/pexels-photo-1040473.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop'
    ],
    category: 'shirts',
    description: 'Minimalist white shirt with subtle ink sketch details.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Off-White', 'Cream'],
    inStock: true,
    rating: 4.3,
    reviews: 89
  }
];