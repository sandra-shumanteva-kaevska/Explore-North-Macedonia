import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import offersData from "./data/offersData.json"
import { Mailer } from './Mailer'

const Offer = new mongoose.model("Offer", {
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200
  },
  description: {
    type: String,
    required: true,
    minlength: 3,
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  images: [{
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }],
  category: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Order = new mongoose.model("Order", {
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    minlength: 3
  },
  quantity: {
    type: Number,
    default: 1
  },
  offer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Offer',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/agency";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static("public"))

if (process.env.RESET_DATABASE === "true") {
  const populateDatabase = async () => {
    await Offer.deleteMany()
    await Order.deleteMany()

    offersData.forEach(item => {
      const newOffer = new Offer(item)
      newOffer.save()
    })
  }
  populateDatabase()
}

app.get("/", (req, res) => {
  res.send("Welcome to Explore North Macedonia")
})

// ---------------------------- OFFERS ----------------------------

app.get("/offers", async (req, res) => {
  const query = {}
  if (req.query.hasOwnProperty("category")) {
    query.category = req.query.category
  }
  if (req.query.hasOwnProperty("minPrice")) {
    query.price = { $gte: req.query.minPrice }
  }
  if (req.query.hasOwnProperty("maxPrice")) {
    query.price = { ...query.price, ... { $lte: req.query.maxPrice } }
  }
  if (req.query.hasOwnProperty("minDate")) {
    query.startDate = { $gte: req.query.minDate }
  }
  if (req.query.hasOwnProperty("maxDate")) {
    query.startDate = { ...query.startDate, ... { $lte: req.query.maxDate } }
  }
  const offers = await Offer.find(query)
  res.json(offers)
})

app.get("/offers/:id", async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id).exec()

    offer
      ? res.status(200).json(offer)
      : res.status(404).json({ message: "The offer is not found" })
  }
  catch (err) {
    res.status(400).json({ message: "Something went wrong", err: err.errors })
  }
})

app.post("/offers", async (req, res) => {
  try {
    const newOffer = await Offer.create(req.body)
    res.status(201).json(newOffer)
  }
  catch (err) {
    res.status(400).json({ message: "The offer could not be created", err: err.errors })
  }
})

app.delete("/offers/:id", async (req, res) => {
  try {
    const deleteOffer = await Offer.findByIdAndRemove(req.params.id).exec()

    deleteOffer
      ? res.status(204).json(deleteOffer)
      : res.status(400).json({ message: "The offer could not be deleted" })
  }
  catch (err) {
    res.status(400).json({ message: "Something went wrong", err: err.errors })
  }
})

// ---------------------------- ORDERS ----------------------------

app.get("/orders", async (req, res) => {
  const orders = await Order.find().populate({ path: 'offer', select: ['title', "description"] })
  res.json(orders)
})

app.get("/orders/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate({ path: 'offer', select: ['title', "description"] }).exec()

    order
      ? res.status(200).json(order)
      : res.status(404).json({ message: "The order is not found" })
  }
  catch (err) {
    res.status(400).json({ message: "Something went wrong", err: err.errors })
  }
})

app.post("/orders", async (req, res) => {
  try {
    const newOrder = await Order.create(req.body)
    Mailer(req.body.email, req.body.firstName, req.body.lastName)
    res.status(201).json(newOrder)
  }
  catch (err) {
    res.status(400).json({ message: "The order could not be created", err: err.errors })
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
});
