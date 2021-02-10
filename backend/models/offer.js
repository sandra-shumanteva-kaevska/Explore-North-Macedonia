import mongoose from "mongoose";

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

export default Offer