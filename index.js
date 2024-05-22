 const express = require("express");
 const cors = require("cors");
 const bodyParser = require("body-parser");
 const dotenv = require("dotenv");

 const chat = require("./routes/chat");

 const app = express()
 app.use(cors());
 app.use(bodyParser.json());

 dotenv.config()

 app.use("/", chat);

 const port = process.env.port || 8000;

 app.listen(port, () => {
    console.log(`Server running on port ${port}`);
 })