const db = require("../util/database");

module.exports = class Order {
  constructor(id, price, quantity, createdAt) {
    this.id = id;
    this.price = price;
    this.quantity = quantity;
    this.createdAt = createdAt;
  }

  static fetchAll() {
    return db.execute("SELECT * FROM orders");
  }
};
