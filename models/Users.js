class Users {
    constructor() {
        this.name = ""
        this.email = ""
        this.phone = ""
        this.password = ""
    }

    setName(n) {
        this.name = n
    }

    getName() {
        return this.name
    }

    setEmail(e) {
        this.email = e
    }

    getEmail() {
        return this.email
    }

    setPhone(p) {
        this.phone = p
    }

    getPhone() {
        return this.phone
    }

    setPassword(p) {
        this.password = p 
    }

    getPassword() {
        return this.password
    }

    create(connection, n, e, p, pw) {
        this.name = n
        this.email = e
        this.phone = p
        this.password = pw
        const sql = "INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?);"

        connection.query(sql, [this.name, this.email, this.phone, this.password], (err, result) => {
            if (err) {
                throw err
            } else {
                const confirm = true
                return confirm
            }
        })
    }

    list(connection, callback) {
        const sql = "SELECT * FROM users;"

        connection.query(sql, (err, result) => {
            if (err) throw err
            return callback(result)
        })
    }

    delete(connection, id) {
        const sql = "DELETE FROM users WHERE id = ?;"

        connection.query(sql, [id], (err, result) => {
            if (err) throw err
        })
    }
    
    findById(connection, id, callback) {
        const sql = `SELECT * FROM users WHERE id = ${id};`

        connection.query(sql, (err, result) => {
            if (err) throw err
            return callback(result)
        })
    }

    update(connection, fields) {
        const sql = `UPDATE users SET name = '${fields.name}', email = '${fields.email}', phone = '${fields.phone}' WHERE id = ${fields.id};`

        connection.query(sql, (err, result) => {
            if (err) throw err
        })
    }
}

export { Users }