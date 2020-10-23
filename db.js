const mongoose = require("mongoose");
require('dotenv').config()

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };

const connection = mongoose.connect(process.env.DB_URI, options).then(
    () => {
        console.log("DB Ready To Use");
    }
).catch((err) => {
    console.log(err);
});
