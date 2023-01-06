const express = require('express')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 4000

app.use(express.json());
app.use(cors())


app.get('/', function (req, res, next) {
    res.status(200).send(`<body style="background-color: black"> <div style="text-align:center;"> <h1 style="color:white;" >Hello World</h1> <br> <h2 style="color:white;">Server listening on port ${port}... </h2></div> </body>`)
})

app.use((req, res, next) => {
    res.status(404).send(`<body style="background-color: black"> <div style="text-align:center;"> <h1 style="color:white;" >Hello World</h1> <br> <h2 style="color:white;">Server running but 404 Page not found... </h2></div> </body>`)
})

app.listen(port, () => {
    console.log(`Server listening on port "${port}".`);
})