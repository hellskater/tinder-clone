import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import cards from "./dbCards.js";

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:PtESWtfpWMmq07s5@cluster0.w319e.mongodb.net/tinderdb?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
// mongoose.connect(connection_url, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });
mongoose.connect(connection_url, (err) => {
  if (err) throw err;
  console.log("connected to MongoDB");
});

// API Endpoints
app.get("/", (req, res) => res.status(200).send("HELLO THERE!!!!"));


app.post("/cards", (req, res) => {
  const dbCard = req.body;
  console.log(dbCard);

  cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/cards", (req, res) => {
  cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
