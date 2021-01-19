import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import offersData from "./data/offersData.json"

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/auth";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('public'))

const Offer = new mongoose.model('Offer', {
  title: String,
  description: String,
  startDate: String,
  endDate: String,
  price: Number,
  mainImageUrl: {
    url: String,
    alt: String
  },
  images: [{
    url: String,
    alt: String
  }],
  category: String,
})






app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
