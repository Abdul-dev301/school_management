
// Dependencies 
const mongoose = require('mongoose');
const config = require('config')
const express = require('express');
const cors = require("cors");
const app  = express(); 

if( !config.get('jwtPrivateKey')){
console.error('FATAL ERROR: jwtPrivateKey is not defined.');
process.exit(1);
}



// MIDDLEWARE 
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(cors());
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/students", require("./routes/studentRoutes"));

// DATABASE CONNECTION 
mongoose.connect("mongodb://localhost/School")
.then(()=> console.log('Database is connected'))
.catch(err=> console.log("Database not connected"));


// SERVER CONNNECTION  
const port = process.env.PORT || 3000 
app.listen(port, ()=>console.log(`Server is listening to port ${port}...`))