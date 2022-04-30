const mysql = require('mysql')
const config = require('../config/db.config')
const data = require('../config/test.data')

// Get Connection
const connection = mysql.createConnection(config)
connection.connect()

const routers = [
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            return 'Hello World'
        }
    },
    {
        // View list of all users in the system
        method: 'GET',
        path: '/users',
        handler: async (request, h) => {
            return new Promise((resolve, reject) => {
                connection.query('SELECT * FROM users', (err, results) => {
                    if (err) return reject(err)
                    return resolve(results)
                })
            })
        }
    },
    {
        // Add a new user
        method: 'GET',
        path: '/create',
        handler: async (request, h) => {
            return new Promise((resolve, reject) => {
                const record = Object.values(data[0])
                connection.query(`INSERT INTO users(Firstname, Lastname, Address, PostCode, ContactNo, Email, Username, Password) VALUES (?,?,?,?,?,?,?,?)`, record , (err, results) => {
                    if (err) return reject(err)
                    return resolve(results)
                })
            })
        }
    },
    {
        // Edit a user
        method: 'GET',
        path: '/update/{id}/{newusername}/{newpassword}',
        handler: async (request, h) => {
            return new Promise((resolve, reject) => {
                const id = request.params.id
                const user = request.params.newusername
                const pass = request.params.newpassword
                connection.query(`UPDATE users SET Username = ?, Password = ? WHERE Id = ?`, [user, pass, id], (err, results) => {
                    if (err) return reject(err)
                    return resolve(results)
                })
            })
        }
    },
    {
        // Delete a user
        method: 'GET',
        path: '/delete/{id}',
        handler: async (request, h) => {
            return new Promise((resolve, reject) => {
                const id = request.params.id
                connection.query(`DELETE FROM users WHERE Id = ?`, id, (err, results) => {
                    if (err) return reject(err)
                    return resolve(results)
                })
            })
        }
    },
]

module.exports = routers