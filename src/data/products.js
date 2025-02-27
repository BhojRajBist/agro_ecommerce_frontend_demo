import rice from '../img/rice.jpeg'

export const products = [
  {
    id: "1",
    name: "Himalayan Wild Honey",
    price: 15.99,
    description:
      "Pure wild honey harvested from the foothills of the Himalayas by indigenous communities using traditional methods. This golden nectar carries the essence of rare Himalayan flowers.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80",
    category: "Honey",
    village: {
      name: "Ghandruk",
      latitude: 28.3949,
      longitude: 83.8074,
      story:
        "Ghandruk is a picturesque village known for its traditional honey harvesting practices passed down through generations.",
    },
  },
  {
    id: "2",
    name: "Premium Ilam Tea",
    price: 12.99,
    description:
      "Hand-picked organic tea leaves from high-altitude plantations. Known for its distinct aroma and smooth flavor profile.",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&q=80",
    category: "Tea",
    village: {
      name: "Ilam",
      latitude: 26.9112,
      longitude: 87.9237,
      story: "Ilam is Nepal's tea capital, where the perfect climate and altitude create exceptional tea.",
    },
  },
  {
    id: "3",
    name: "Himalayan Rock Salt",
    price: 8.99,
    description:
      "Pure, mineral-rich pink salt from ancient Himalayan deposits. Perfect for cooking and natural remedies.",
    image: "https://images.unsplash.com/photo-1517705600644-cbc52b0caa66?w=800&q=80",
    category: "Spices",
    village: {
      name: "Namche Bazaar",
      latitude: 27.8069,
      longitude: 86.714,
      story: "Namche Bazaar, the gateway to Everest, has been a trading hub for Himalayan goods for centuries.",
    },
  },
  {
    id: "4",
    name: "Hand-woven Pashmina Shawl",
    price: 89.99,
    description: "Luxuriously soft pashmina shawl hand-woven by skilled artisans using traditional techniques.",
    image: "https://images.unsplash.com/photo-1601244005535-a48d21d951ac?w=800&q=80",
    category: "Textiles",
    village: {
      name: "Patan",
      latitude: 27.6766,
      longitude: 85.3241,
      story: "Patan is renowned for its skilled artisans who have preserved traditional crafts for generations.",
    },
  },
  {
    id: "5",
    name: "Handcrafted Prayer Bells",
    price: 34.99,
    description:
      "Traditional bronze prayer bells crafted by local artisans, featuring intricate designs and pure sound.",
    image: "https://images.unsplash.com/photo-1600161777932-f8335b68f3bb?w=800&q=80",
    category: "Handicrafts",
    village: {
      name: "Bhaktapur",
      latitude: 27.671,
      longitude: 85.4298,
      story: "Bhaktapur is a living museum of traditional Newari crafts and architecture.",
    },
  },
    {
    id: "6",
    name: "Rice",
    price: 89.99,
    description: "Luxuriously soft pashmina shawl hand-woven by skilled artisans using traditional techniques.",
    image: rice,
    category: "Spices",
    village: {
      name: "Patan",
      latitude: 27.6766,
      longitude: 85.3241,
      story: "Patan is renowned for its skilled artisans who have preserved traditional crafts for generations.",
    },
  },
]

export const categories = ["Tea", "Honey", "Spices", "Handicrafts", "Textiles"]

