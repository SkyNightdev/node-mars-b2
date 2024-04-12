const db = require('../util/database');

const Cart = require('./cart');

module.exports = class Product {
    constructor(id, title, image_url, description, price) {
        this.id = id;
        this.title = title;
        this.image_url = image_url;
        this.description = description;
        this.price = price;
    }

    save() {
        return db.execute('INSERT INTO product (title, price, description, image_url) VALUES (?, ?, ?, ?)', [this.title, this.price, this.description, this.image_url]);
    }

    update() {
        return db.execute('UPDATE product SET title = ?, price = ?, description = ?, image_url = ? WHERE id = ?', [this.title, this.price, this.description, this.image_url, this.id]);
    }

    static fetch(productId) {
        return db.execute('SELECT * FROM product WHERE id = ?', [productId]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM product');
    }

    static delete(productId) {
        return db.execute('DELETE FROM products WHERE id = ?', [productId]);
    }
}