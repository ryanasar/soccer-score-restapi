const express = require('express')
const appUserRoutes = require('./src/appuser/routes.js')

const app = express()
const port = 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello Wold")
})

app.use('/api/v1/appuser', appUserRoutes)

app.listen(port, () => console.log('app listening on port '+port))