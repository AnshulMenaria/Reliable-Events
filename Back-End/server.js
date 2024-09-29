require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require('cors');

const app = express();

// Middleware to redirect www to non-www
app.use((req, res, next) => {
    const host = req.headers.host;
    if (host.startsWith('www.')) {
        const nonWwwHost = host.slice(4); // Remove 'www.'
        const redirectUrl = `${req.protocol}://${nonWwwHost}${req.originalUrl}`;
        return res.redirect(301, redirectUrl); // Permanent redirect
    }
    next();
});

app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB:', err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
