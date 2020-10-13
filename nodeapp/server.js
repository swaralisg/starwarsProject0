const express = require("express");
const peopleRoute = require('./Routes/peopleRoute');
const app = express();
const cors = require('cors');
app.use(cors());
app.use('/people', peopleRoute);

app.listen(8080, () => {
  console.log("Server is listening on port: 8080");
});