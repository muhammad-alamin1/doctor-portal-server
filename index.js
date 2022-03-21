require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// app
const app = express();

// import middleware & routes
const appMiddleware = require('./middleware/appMiddleware');
const allRoutes = require('./routes/routes');

// set static
app.use(express.static(path.join(__dirname, 'public')));

// use middleware 
app.use(appMiddleware);

// use routes
allRoutes(app);

// db connection uri
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jdxha.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// database connect with mongoose
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("Connected successfully");
    // port
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`listening on port http://localhost:${PORT}`)
    });
});

// TODO remove wcBF5XduFsAM4Uq
