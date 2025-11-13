require('dotenv').config()
const RunServer = require("./DataBase/Connection");
const express = require('express')//1    must in index.js
const cors = require('cors');// must include - CORS (Cross-Origin Resource Sharing) is essential in backend development as it enables secure cross-origin
//  requests, allowing web applications to access resources from different domains while maintaining security.
const noteRoutes = require('./Routes/NotesRoutes');


const app = express() //2      express is stored in app
const PORT = process.env.PORT; //3        password should not be visible so we are using env


app.use(express.json()) //4         to transfer data between frontend and backend
app.use(cors()) //5 

RunServer() //6           connects database

app.use('/api', noteRoutes)


app.listen(PORT,()=>{  //7
    console.log(`server is running on ${PORT}`) //tells the server to accept incoming requests only on the specified port (s) or address-and-port combinations.
    //  If only a port number is specified in the Listen directive, the server listens to the given port on all interfaces
})