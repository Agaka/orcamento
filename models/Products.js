class Products {
    constructor() {
        this.name = ""
        this.availability = 0
    }

    setName(n) {
        this.name = n
    }

    getName() {
        return this.name
    }

    setAvailability(a) {
        this.availability = a
    }

    getAvailability() {
        return this.availability
    }

    create(connection, n, a) {
        this.name = n
        this.availability = a

        const sql = "INSERT INTO Products (name, availability) VALUES (?, ?);"

        connection.query(sql, [this.name, this.availability], (err, result) => {
            if (err) throw err
        })
    }

    list(connection, callback) {
        const sql = "SELECT * FROM products;"

        connection.query(sql, (err, result) => {
            if (err) throw err
            return callback(result)
        })
    }

    delete(connection, id) {
        const sql = "DELETE FROM products WHERE id = ?"

        connection.query(sql, [id], (err, result) => {
            if (err) throw err
        })
    }

    findById(connection, id, callback) {
        const sql = `SELECT * FROM products WHERE id = ${id};`

        connection.query(sql, (err, result) => {
            if (err) throw err
            return callback(result)
        })
    }

    update(connection, fields) {
        const sql = `UPDATE products SET name = '${fields.name}', availability = ${fields.availability} WHERE id = ${fields.id};`

        connection.query(sql, (err, result) => {
            if (err) throw err
        })
    }

}

export { Products }