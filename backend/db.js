const mongoose = require('mongoose')
const mongoURI = "mongodb://127.0.0.1:27017/iNoteBook"


mongoose.set('strictQuery', false);

const connectToMongo = ()=>{  
    mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));
}

module.exports = connectToMongo;