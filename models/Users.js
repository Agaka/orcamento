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

    create(connection) {
        const sql = "INSERT INTO Users (name, email, phone, password) VALUES (?, ?, ?, ?);"

        connection.query(sql, [this.name, this.email, this.phone, this.password], (err, result) => {
            if (err) throw err
        })
    }
    
}

module.exports = Users