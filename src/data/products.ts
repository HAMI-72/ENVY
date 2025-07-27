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
    comments: [
      {
        id: 1,
        profile_pic: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg",
        text: "Fits perfectly! The material feels premium and very comfortable to wear.",
        author: "John D.",
        date: new Date("2025-01-05"),
        rating: 5,
      },
      {
        id: 2,
        profile_pic: "https://images.pexels.com/photos/3646160/pexels-photo-3646160.jpeg",
        text: "Loved the color and design. Slightly loose at the shoulders, but overall great purchase.",
        author: "Sarah M.",
        date: new Date("2025-01-10"),
        rating: 4,
      },
      {
        id: 3,
        profile_pic: "https://images.pexels.com/photos/4067761/pexels-photo-4067761.jpeg",
        text: "Delivery was quick and the product matches the image. Fabric could be softer though.",
        author: "Mike R.",
        date: new Date("2025-01-08"),
        rating: 3,
      }
    ],
    category: 'shirts',
    description: 'Premium cotton seersucker check shirt with a modern slim fit.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Gray'],
    inStock: true,
    rating: 3.9,
    reviews: 3
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
    comments: [
      {
        id: 1,
        profile_pic: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
        text: "Looks good but the size runs a bit small. Order one size up.",
        author: "Alex K.",
        date: new Date("2025-01-12"),
        rating: 4,
      },
      {
        id: 2,
        profile_pic: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg",
        text: "Great quality for the price. Feels breathable and durable — ideal for daily wear.",
        author: "Emma L.",
        date: new Date("2025-01-15"),
        rating: 5,
      },
      {
        id: 3,
        profile_pic: "https://images.pexels.com/photos/4068300/pexels-photo-4068300.jpeg",
        text: "Exactly what I was looking for. Light, stylish, and very comfy.",
        author: "David R.",
        date: new Date("2025-01-18"),
        rating: 5,
      }
    ],
    category: 'shirts',
    description: 'Luxurious leather jacket in a sophisticated flamboyount black.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    inStock: true,
    isExclusive: true,
    rating: 4.7,
    reviews: 3
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
    comments: [
      {
        id: 1,
        profile_pic: "https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg",
        text: "Keeps me warm without being too bulky. Perfect for chilly evenings!",
        author: "Lisa M.",
        date: new Date("2025-01-20"),
        rating: 5,
      },
      {
        id: 2,
        profile_pic: "https://images.pexels.com/photos/20089653/pexels-photo-20089653.jpeg",
        text: "Zipper quality could be better, but the fit and look are spot on.",
        author: "Tom B.",
        date: new Date("2025-01-22"),
        rating: 4,
      },
      {
        id: 3,
        profile_pic: "https://images.pexels.com/photos/3756037/pexels-photo-3756037.jpeg",
        text: "Stylish and functional. Love the inner lining and the pockets!",
        author: "Anna K.",
        date: new Date("2025-01-25"),
        rating: 5,
      }
    ],
    category: 'shirts',
    description: 'Exquisite premium cotton hoodie with exceptional comfort and style.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Burgundy', 'Black', 'Yellow'],
    inStock: true,
    isExclusive: true,
    rating: 4.8,
    reviews: 3
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
    comments: [
      {
        id: 1,
        profile_pic: "https://images.pexels.com/photos/10665370/pexels-photo-10665370.jpeg",
        text: "Perfect basic tee. Soft, breathable, and fits like a dream.",
        author: "Chris P.",
        date: new Date("2025-01-28"),
        rating: 5,
      },
      {
        id: 2,
        profile_pic: "https://images.pexels.com/photos/4065187/pexels-photo-4065187.jpeg",
        text: "Good quality fabric for the price. Slightly loose fit, but I like it.",
        author: "Maria S.",
        date: new Date("2025-01-30"),
        rating: 4,
      }
    ],
    category: 'shirts',
    description: 'Classic alpine white slub shirt perfect for any occasion.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Cream', 'Light Blue'],
    inStock: true,
    isEssential: true,
    rating: 4.3,
    reviews: 2
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
    comments: [
      {
        id: 1,
        profile_pic: "https://images.pexels.com/photos/7710127/pexels-photo-7710127.jpeg",
        text: "Exactly like the pictures. Feels cozy and looks stylish too.",
        author: "Rachel T.",
        date: new Date("2025-02-01"),
        rating: 5,
      },
      {
        id: 2,
        profile_pic: "https://images.pexels.com/photos/31766049/pexels-photo-31766049.jpeg",
        text: "Decent quality, but the fabric feels thinner than expected.",
        author: "Kevin L.",
        date: new Date("2025-02-03"),
        rating: 3,
      },
      {
        id: 3,
        profile_pic: "https://images.pexels.com/photos/6589930/pexels-photo-6589930.jpeg",
        text: "Stylish design, but not very warm for winter. Better for mild weather.",
        author: "Sophie M.",
        date: new Date("2025-02-05"),
        rating: 4,
      },
      {
        id: 4,
        profile_pic: "https://images.pexels.com/photos/31766049/pexels-photo-31766049.jpeg",
        text: "I've been living in this hoodie since I got it. Super comfortable and breathable.",
        author: "Jake R.",
        date: new Date("2025-02-07"),
        rating: 5,
      },
      {
        id: 5,
        profile_pic: "https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg",
        text: "Great fit and color. Just wish the sleeves were a bit longer.",
        author: "Emma D.",
        date: new Date("2025-02-09"),
        rating: 4,
      },
      {
        id: 6,
        profile_pic: "https://images.pexels.com/photos/32814913/pexels-photo-32814913.jpeg",
        text: "Super soft and warm! Easily my go-to hoodie for chilly days.",
        author: "Alex K.",
        date: new Date("2025-02-11"),
        rating: 5,
      }
    ],
    category: 'shirts',
    description: 'Signature hoodie by our shop partner RUN.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Latte', 'Beige', 'Taupe'],
    inStock: true,
    rating: 4.9,
    reviews: 6
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
    comments: [
      {
        id: 1,
        profile_pic: "https://images.pexels.com/photos/2092449/pexels-photo-2092449.jpeg",
        text: "Subtle yet stylish. Adds just the right amount of edge to my look.",
        author: "Mark S.",
        date: new Date("2025-02-15"),
        rating: 4,
      },
      {
        id: 2,
        profile_pic: "https://images.pexels.com/photos/18400418/pexels-photo-18400418.jpeg",
        text: "The chain length is perfect, and the pendant has a nice weight to it. Feels premium.",
        author: "Lisa K.",
        date: new Date("2025-02-17"),
        rating: 5,
      },
      {
        id: 3,
        profile_pic: "https://images.pexels.com/photos/1975069/pexels-photo-1975069.jpeg",
        text: "Bought two colors and planning to get more. These are great for daily wear.",
        author: "Tom R.",
        date: new Date("2025-02-19"),
        rating: 4,
      },
      {
        id: 4,
        profile_pic: "https://images.pexels.com/photos/17839232/pexels-photo-17839232.jpeg",
        text: "Material is okay — a bit thinner than expected, but comfy nonetheless.",
        author: "Anna M.",
        date: new Date("2025-02-21"),
        rating: 3,
      },
      {
        id: 5,
        profile_pic: "https://images.pexels.com/photos/4040436/pexels-photo-4040436.png",
        text: "Exactly what I needed — clean, minimal, and goes with everything.",
        author: "Chris P.",
        date: new Date("2025-02-23"),
        rating: 5,
      },
      {
        id: 6,
        profile_pic: "https://images.pexels.com/photos/17839050/pexels-photo-17839050.jpeg",
        text: "Color hasn't faded even after several washes. Impressed with the durability.",
        author: "Sarah L.",
        date: new Date("2025-02-25"),
        rating: 4,
      },
      {
        id: 7,
        profile_pic: "https://images.pexels.com/photos/4120381/pexels-photo-4120381.jpeg",
        text: "Fits true to size. Not too tight or baggy. Just right.",
        author: "Mike D.",
        date: new Date("2025-02-27"),
        rating: 4,
      },
      {
        id: 8,
        profile_pic: "https://images.pexels.com/photos/19205564/pexels-photo-19205564.jpeg",
        text: "Shrunk slightly after the first wash. Order one size up if unsure.",
        author: "Emma T.",
        date: new Date("2025-03-01"),
        rating: 3,
      },
      {
        id: 9,
        profile_pic: "https://images.pexels.com/photos/2926180/pexels-photo-2926180.jpeg",
        text: "Great layering piece. Works under jackets, hoodies, or on its own.",
        author: "David K.",
        date: new Date("2025-03-03"),
        rating: 5,
      },
      {
        id: 10,
        profile_pic: "https://images.pexels.com/photos/19168401/pexels-photo-19168401.jpeg",
        text: "Sleeves are just the right length. Not too short like some other tees.",
        author: "Maria S.",
        date: new Date("2025-03-05"),
        rating: 4,
      }
    ],
    category: 'accessories',
    description: 'Simple yet elegant chain to elevate your vibe.',
    sizes: ['S'],
    colors: ['Black'],
    inStock: true,
    rating: 3.5,
    reviews: 10
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
    comments: [
      {
        id: 1,
        profile_pic: "https://images.pexels.com/photos/3754165/pexels-photo-3754165.jpeg",
        text: "Super comfortable even after wearing them all day. Great arch support!",
        author: "John M.",
        date: new Date("2025-03-07"),
        rating: 5,
      },
      {
        id: 2,
        profile_pic: "https://images.pexels.com/photos/19290559/pexels-photo-19290559.jpeg",
        text: "Looks exactly like the picture. Slightly tight at first, but loosens up after a few wears.",
        author: "Lisa P.",
        date: new Date("2025-03-09"),
        rating: 4,
      },
      {
        id: 3,
        profile_pic: "https://images.pexels.com/photos/1192601/pexels-photo-1192601.jpeg",
        text: "Perfect for daily use. Light, breathable, and stylish.",
        author: "Alex R.",
        date: new Date("2025-03-11"),
        rating: 5,
      },
      {
        id: 4,
        profile_pic: "https://images.pexels.com/photos/14158230/pexels-photo-14158230.jpeg",
        text: "Received so many compliments! Matches with almost any outfit.",
        author: "Sophie K.",
        date: new Date("2025-03-13"),
        rating: 5,
      },
      {
        id: 5,
        profile_pic: "https://images.pexels.com/photos/11537400/pexels-photo-11537400.jpeg",
        text: "Good value for the price. Not for heavy use, but great for casual wear.",
        author: "Kevin T.",
        date: new Date("2025-03-15"),
        rating: 4,
      }
    ],
    category: 'shoes',
    description: 'Everyday shoes that can be also used on track.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy'],
    inStock: true,
    rating: 4,
    reviews: 5
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
    comments: [
      {
        id: 1,
        profile_pic: "https://images.pexels.com/photos/17839146/pexels-photo-17839146.jpeg",
        text: "Very flattering fit. I wore this to a party and felt so confident!",
        author: "Rachel L.",
        date: new Date("2025-03-17"),
        rating: 5,
      },
      {
        id: 2,
        profile_pic: "https://images.pexels.com/photos/17839295/pexels-photo-17839295.jpeg",
        text: "Color is slightly different than shown but still very beautiful.",
        author: "Emma M.",
        date: new Date("2025-03-19"),
        rating: 4,
      },
      {
        id: 3,
        profile_pic: "https://images.pexels.com/photos/17747047/pexels-photo-17747047.jpeg",
        text: "Hugs the body well without being too tight. Loved the texture.",
        author: "Sarah K.",
        date: new Date("2025-03-21"),
        rating: 5,
      }
    ],
    category: 'pants',
    description: 'Simple and casual jeans for women.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue'],
    inStock: true,
    rating: 4.5,
    reviews: 3
  }
];