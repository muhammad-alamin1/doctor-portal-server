const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

// db connection uri
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jdxha.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;


const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// port
const PORT = process.env.PORT || 5000;


// Create API 
app.get('/', (req, res) => {
    res.send('Hello from db its working ')
})


// db connection
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const appointmentCollection = client.db("Doctor-Portal").collection("appointment")
        console.log(`Error `,err);
        console.log(`Database Connected`);
    
        // Post
        app.post('/addAppointment',(req, res) => {
            const appointment = req.body;
            // console.log(appointment);
            appointmentCollection.insertOne(appointment)
                .then(result => {
                    res.send(result.insertedCount > 0 )
                })
        });

        // All data load to db
        app.get('/appointments',(req, res)=>{
            appointmentCollection.find({})
                .toArray((error,documents)=>{
                    res.send(documents)
                })
        })

         // Post date
        app.post('/appointmentByDate',(req, res) => {
            const date = req.body;
            console.log(date.date);
            appointmentCollection.find({date:date.date})
                .toArray((error , documents) => {
                    res.send(documents)
                })
                
        })
    
    
});

app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`)
});
