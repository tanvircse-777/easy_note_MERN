const mongoose = require("mongoose");

const DB =
  "mongodb+srv://tanvircse:tanvircse123%40@cluster0.dgjn7.mongodb.net/MERN?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`connnection successful from MongoDb`);
  })
  .catch((err) => {
    console.log(`no connection`);
    console.log(err);
  });
