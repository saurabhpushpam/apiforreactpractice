const express = require('express');
const app = express();
const cors = require('cors');
// app.use(express.json());
// app.use(cors());

app.use(cors({
  origin: "*"
}));

const post_routes = require('./routes/postRoutes');
app.use('/api', post_routes)

const mongoose = require('mongoose');
const http = require('http')


// const mongoose = require('mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/ecomm");

// const mongoose = require('mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/mern_crud");

// app.listen(8000, function () {
//   console.log("server is running on 8000")
// });



const PORT = 8000;
const DB = "mongodb+srv://spuspam111:Sp123456@cluster0.0taaaup.mongodb.net/getapi?retryWrites=true&w=majority";
mongoose.connect(DB)
  .then(() => {
    console.log("Connected to MongoDB");
    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`Server is running on :${PORT}`);
    });
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });


