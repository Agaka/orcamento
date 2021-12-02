class Budgets {
    constructor() {
        this.userId = 0
        this.measures = ""
        this.description = ""
    }

    setUserId(u) {
        this.userId = u
    }

    getUserId() {
        return this.userId
    }

    setMeasures(m) {
        this.measures = m
    }

    getMeasures() {
        return this.measures
    }

    setDescription(d) {
        this.description = d
    }

    getDescription() {
        return this.description
    }

    create(connection, u, m, d) {
        this.userId = u
        this.measures = m
        this.description = d

        const sql = "INSERT INTO budget (userId, measures, description) VALUES (?, ?, ?);"

        connection.query(sql, [this.userId, this.measures, this.description], (err, result) => {
            if (err) throw err
        })
    }

    list(connection, callback) {
        const sql = "SELECT * FROM budget;"

        connection.query(sql, (err, result) => {
            if (err) throw err
            return callback(result)
        })
    }

    delete(connection, id) {
        const sql = "DELETE FROM budget WHERE id = ?"

        connection.query(sql, [id], (err, result) => {
            if (err) throw err
        })
    }

}

export { Budgets }