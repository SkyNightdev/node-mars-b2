const db = require('../util/database');

const Cart = require('./user');

module.exports = class users {
    constructor(id, nom, prenom, email, tel) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.tel = tel;
        this.password = password;
    }

    static create(userData) {
        return db.execute('INSERT INTO users (nom, prenom, email, tel, password) VALUES (?, ?, ?, ?, ?)', [userData.nom, userData.prenom, userData.email, userData.tel, userData.password]);
    }

    static findByEmail(email) {
        return db.execute('SELECT * FROM users WHERE email = ?', [email])
            .then(([rows]) => {
                if (rows.length > 0) {
                    return new User(rows[0].id, rows[0].nom, rows[0].prenom, rows[0].email, rows[0].tel, rows[0].password);
                }
                return null;
            });
    }

    save() {
        return db.execute('INSERT INTO users (id, nom, prenom, email, tel, password) VALUES (?, ?, ?, ?)', [this.id, this.nom, this.prenom, this.email, this.tel, this.password]);
    }

    update() {
        return db.execute('UPDATE users SET nom = ?, prenom = ?, email = ?, tel = ?, password = ? WHERE id = ?', [this.id, this.nom, this.prenom, this.email, this.tel, this.password]);
    }

    static fetch(usersId) {
        return db.execute('SELECT * FROM product WHERE id = ?', [usersId]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM users');
    }

    static delete(usersId) {
        return db.execute('DELETE FROM products WHERE id = ?', [usersId]);
    }
}