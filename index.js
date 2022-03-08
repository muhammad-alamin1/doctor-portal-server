require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


// app
const app = express();

// import middleware & routes
const appMiddleware = require('./middleware/appMiddleware');
const addAppointmentRouter = require('./routes/addAppointmentRoute');
const userRouter = require('./routes/allUserRoute');


// use middleware 
app.use(appMiddleware);

// use routes
app.use('/users', userRouter);
app.use('/addAppointment', addAppointmentRouter);

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



// db connection
// instance.connect((err, client) => {


//     if (err) console.log(err)
//     else {
//         console.log('connected')
//         const appointmentCollection = client.db("Doctor-Portal").collection("appointment")

//         // Post
//         app.post('/addAppointment', );

//         // All data load to db
//         app.get('/appointments', (req, res) => {
//             appointmentCollection.find({})
//                 .toArray((error, documents) => {
//                     res.send(documents)
//                 })
//         })

//         // Post date
//         app.post('/appointmentByDate', (req, res) => {
//             const date = req.body;
//             console.log(date.date);
//             appointmentCollection.find({ date: date.date })
//                 .toArray((error, documents) => {
//                     res.send(documents)
//                 })

//         });

//         // images upload client to Database
//         app.post('/addADoctor', (req, res) => {
//             const file = req.files.file;
//             const name = req.body.name;
//             const email = req.body.email;
//             // console.log(name , email , file);

//             const filePath = `${__dirname}/doctors/${file.name}`;
//             file.mv(filePath, err => {
//                 if (err) {
//                     console.log(err);
//                     return res.status(500).send({ msg: 'Failed to upload Image' })
//                 }
//                 const newImg = fs.readFileSync(filePath);
//                 const encImg = newImg.toString('base64');

//                 let image = {
//                     contentType: req.files.file.mimetype,
//                     size: req.files.file.size,
//                     img: Buffer(encImg, 'base64')
//                 }

//                 appointmentCollection.insertOne({ name, email, image })
//                     .then(result => {
//                         fs.remove(filePath, err => {
//                             if (err) {
//                                 console.log(err)
//                             }
//                             res.send(result.insertedCount > 0)
//                         })

//                     })
//                 return res.send({ name: file.name, path: `${file.name}` })
//             })
//         })
//     }

// });