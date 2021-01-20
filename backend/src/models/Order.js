import mongoose from "mongoose";

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
    offerId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default Order