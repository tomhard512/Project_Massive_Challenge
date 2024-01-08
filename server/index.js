const express = require('express');
const userRoutes = require('./routes/userRoutes')
const cors = require('cors');


const app = express()
const port = 3000;
app.use(cors());

app.use('/api', userRoutes)


app.listen(port,() => {
    console.log('server is running on port ' + port)
})