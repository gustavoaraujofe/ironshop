const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    user: {
        type: mongoose.Types.ObjectId, ref: "User",
        required: true
    },

    establishment: {
        type: mongoose.Types.ObjectId, ref: "Establisment",
        required: true
    },

    itens: [{
        type: mongoose.Types.ObjectId, ref: "Product",
        required: true
    }],

    quantity: {
        type: Number,
        min: 0,
        required: true
    },

    value:{
        type: Number,
        min: 0,
        required: true
    },

    status: {
        type: String, 
        enum: ["Created", "In Preparation", "Ready for delivery", "In delivery", "Delivered", "Cancelled by client", "Cancelled by stablishment"],
        required: true,
        default: "Created",
    }
},

{ timestamps:true }

)

const Order = mongoose.model("Order", orderSchema)

module.exports = Order