const express = require('express')
const appUserRoutes = require('./src/appuser/routes.js')

const app = express()
const port = 3001
const cors = require('cors');

const corsOptions = {
  origin: 'chrome-extension://hdjhfpcbpainnggebbednnjadeolgdhk',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
};

app.use(cors(corsOptions));

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use('/api/v1/appuser', appUserRoutes)

app.listen(port, () => console.log('app listening on port '+port))