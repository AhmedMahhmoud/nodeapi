const http = require('http');
const server=http.createServer((req, res) => {
    console.log(req.url)
    if (req.url=='/')
    {
        res.end('It is my birthday');
    }
else if (req.url=='/info')
    {
        res.end("Ahmed Mahmoud information");
    }
    else 
    {
        res.end(`
        <h1>Ops something wrong happened !</h1>
        <p>We can't seem to find that page you are looking for </p>
        <a href="/">Go back to the homepage </a>
        `);

    }

});

server.listen(5000);














// const express= require('express');
// const app = express();
// const morgan = require('morgan');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// // import mongoose

// // load env variables
// const dotenv = require('dotenv');
// dotenv.config()
 
// //db connection
// mongoose.set('strictQuery', false);
// mongoose.connect(
//   process.env.MONGO_URI,
//   {useNewUrlParser: true}
// )
// .then(() => console.log('DB Connected successfully'));
// //connection on to check if there is an error
// mongoose.connection.on('error', err => {
//     console.log(`DB connection error: ${err.message}`)
//   });
//  const postRoutes=require('./routes/post');
//  const portNumber = process.env.PORT||8080;

// app.use(morgan("dev"));
// app.use(bodyParser.json());
// app.use("/",postRoutes);
// app.listen(portNumber); 

