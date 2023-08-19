const mongoose = require ("mongoose");

// const DB = process.env.DATABASE;
// const DB = "mongodb+srv://ishapaghdal:008080@atlascluster.kmduaff.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(DB).then(()=>{
//     console.log("DATA BASE connected");
// }).catch((error) => console.log(error.message))

mongoose.connect('mongodb://127.0.0.1:27017/amazon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));