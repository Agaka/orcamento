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

    

}

export { Products }