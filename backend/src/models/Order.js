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

export default Order