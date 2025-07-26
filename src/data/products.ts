import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Seersucker Check Shirt',
    price: 599,
    originalPrice: 899,
    image: 'https://images.pexels.com/photos/17098298/pexels-photo-17098298.jpeg',
    images: [
      'https://images.pexels.com/photos/17098298/pexels-photo-17098298.jpeg',
    ],
    category: 'shirts',
    description: 'Premium cotton seersucker check shirt with a modern slim fit.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Gray'],
    inStock: true,
    rating: 3.9,
    reviews: 0
  },
  {
    id: '2',
    name: 'Stylish Leather Jacket',
    price: 1499,
    originalPrice: 2999,
    image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop'
    ],
    category: 'shirts',
    description: 'Luxurious leather jacket in a sophisticated flamboyount black.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    inStock: true,
    isExclusive: true,
    rating: 4.7,
    reviews: 0
  },
  {
    id: '3',
    name: 'Cotton Hoodie',
    price: 799,
    originalPrice: 999,
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop'
    ],
    category: 'shirts',
    description: 'Exquisite premium cotton hoodie with exceptional comfort and style.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Burgundy', 'Black', 'Yellow'],
    inStock: true,
    isExclusive: true,
    rating: 4.8,
    reviews: 0
  },
  {
    id: '4',
    name: 'Alpine Slub Shirt',
    price: 399,
    originalPrice: 499,
    image: 'https://images.pexels.com/photos/6256275/pexels-photo-6256275.jpeg',
    images: [
      'https://images.pexels.com/photos/6256275/pexels-photo-6256275.jpeg'
    ],
    category: 'shirts',
    description: 'Classic alpine white slub shirt perfect for any occasion.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Cream', 'Light Blue'],
    inStock: true,
    isEssential: true,
    rating: 4.3,
    reviews: 0
  },
  {
    id: '5',
    name: 'RUN Hoodie',
    price: 499,
    originalPrice: 799,
    image: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop'
    ],
    category: 'shirts',
    description: 'Signature hoodie by our shop partner RUN.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Latte', 'Beige', 'Taupe'],
    inStock: true,
    rating: 4.9,
    reviews: 0
  },
  {
    id: '6',
    name: "Men's Pendant",
    price: 199,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/11947662/pexels-photo-11947662.jpeg',
    images: [
      'https://images.pexels.com/photos/11947662/pexels-photo-11947662.jpeg'
    ],
    category: 'accessories',
    description: 'Simple yet elegant chain to elevate your vibe.',
    sizes: ['S'],
    colors: ['Black'],
    inStock: true,
    rating: 3.5,
    reviews: 0
  },
  {
    id: '7',
    name: "Men's Sports Shoes",
    price: 1199,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop'
    ],
    category: 'shoes',
    description: 'Everyday shoes that can be also used on track.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy'],
    inStock: true,
    rating: 4,
    reviews: 0
  },
  {
    id: '8',
    name: "Women's Casual Jeans",
    price: 699,
    originalPrice: 999,
    image: 'https://images.pexels.com/photos/6769359/pexels-photo-6769359.jpeg',
    images: [
      'https://images.pexels.com/photos/6769359/pexels-photo-6769359.jpeg'
    ],
    category: 'pants',
    description: 'Simple and casual jeans for women.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue'],
    inStock: true,
    rating: 4.5,
    reviews: 0
  }
];