const orders = [
  { id: 1, quantity: 54, createdAt: new Date(), price: 1000 },
  { id: 2, quantity: 12, createdAt: new Date(), price: 1500 },
  { id: 3, quantity: 3, createdAt: new Date(), price: 500 },
  { id: 4, quantity: 1, createdAt: new Date(), price: 300 },
  { id: 5, quantity: 7, createdAt: new Date(), price: 1000 },
  { id: 6, quantity: 2, createdAt: new Date(), price: 1500 },
];
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1000,
    description: "A laptop for work or play",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Desktop PC",
    price: 1500,
    description: "A desktop PC for work or play",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Tablet",
    price: 500,
    description: "A tablet for work or play",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Smartphone",
    price: 300,
    description: "A smartphone for work or play",
    image: "https://via.placeholder.com/150",
  },
];

module.exports = { products, orders };
