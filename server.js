const express = require('express')
const appUserRoutes = require('./src/appuser/routes.js')

const app = express()
const port = 3000
const cors = require('cors');

// Enable CORS for all origins
app.use(cors());

// Alternatively, configure specific origins
const corsOptions = {
  origin: 'chrome-extension://hdjhfpcbpainnggebbednnjadeolgdhk', // Replace with your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies to be sent with requests
};

app.use(cors(corsOptions));

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use('/api/v1/appuser', appUserRoutes)

app.listen(port, () => console.log('app listening on port '+port))