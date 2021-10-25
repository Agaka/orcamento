class Budget {
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

    create(connection) {
        const sql = "INSERT INTO Budget (userId, measures, description) VALUES (?, ?, ?);"

        connection.query(sql, [this.userId, this.measures, this.description], (err, result) => {
            if (err) throw err
        })
    }

}

module.exports = Budget