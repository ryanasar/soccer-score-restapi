const pool = require('../../db')
const queries = require('./queries')

const getAppUsers = (req, res) => {
    pool.query(queries.getAppUsers, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const getAppUserByGoogleId = (req, res) => {
    const googleid = req.params.id
    pool.query(queries.getAppUserByGoogleId, [googleid], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const addAppUser = (req, res) => {
    const { googleId, googleEmail, followingTeams, followingLeagues } = req.body

    pool.query(queries.getAppUserByGoogleId, [googleId], (error, results) => {
        if (results.rows.length) {
            res.send("GoogleId already exists")
        }
        else {
            pool.query(queries.addAppUser, [googleId, googleEmail, followingTeams, followingLeagues], (error, results) => {
                if (error) throw error
                res.status(201).send("AppUser created successfully")
            })
        }
    })
}

const removeAppUserByGoogleId = (req, res) => {
    const googleId = req.params.id

    pool.query(queries.getAppUserByGoogleId, [googleId], (error, results) => {
        if (!results.rows.length) {
            res.send("GoogleId does not exist")
        }
        else {
            pool.query(queries.removeAppUserByGoogleId, [googleId], (error, results) => {
                if (error) throw error
                res.status(200).send("AppUser removed successfully")
            })
        }
    })
}

const updateAppUser = (req, res) => {
    const googleId = req.params.id
    const { followingTeams, followingLeagues } = req.body

    pool.query(queries.getAppUserByGoogleId, [googleId], (error, results) => {
        if (!results.rows.length) {
            res.send("GoogleId does not exist")
        }
        else {
            pool.query(queries.updateAppUser, [followingTeams, followingLeagues, googleId], (error, results) => {
                if (error) throw error
                res.status(200).send("AppUser update successfully")
            })
        }
    })
}



module.exports = {
    getAppUsers,
    getAppUserByGoogleId,
    addAppUser,
    removeAppUserByGoogleId,
    updateAppUser,
}

