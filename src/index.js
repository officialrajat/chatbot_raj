const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
app.use(cors()); 

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 
const talkToChatbot = require("./backend/chatbot");
app.use(morgan("dev"));

 app.post("/chatbot", function (req, res, next) {
  const message = req.body.message;
  console.log("message" + message);

  talkToChatbot(message)
    .then((response) => {
      res.send({ message: response });
    })
    .catch((error) => {
      console.log("Something went wrong: " + error);
      res.send({
        error: "Error occured here"
      });
    });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});