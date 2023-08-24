const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors');

connectToMongo();
const app = express();
const port = 5000

app.use(express.json())
app.use(cors());
// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


// development config
const path = require("path");
__dirname = path.resolve();

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/client/build")));
    app.get("*",(req,res) =>{
        res.sendFile(path.join(__dirname,"client","build","index.html"));
    });
} 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})