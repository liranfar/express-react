const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const customers = require('./routes/customer')

const app = express();
const port = process.env.PORT || 5000;

// Connect to db
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.use('/api/v1/customers', customers);


app.listen(port, () => console.log(`Server running on port ${port}, mongodb uri: ${process.env.MONGO_DB_URI}`));

//TODO: add winston logger https://github.com/winstonjs/winston
//TODO: use mongoose
