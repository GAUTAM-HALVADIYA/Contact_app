const mongoose = require("mongoose");

const contactSchima = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "User"
        },
        name: {
            type: String,
            required: [true, "pleae add contact name"],
        },
        email: {
            type: String,
            required: [true, "pleae add contact email"],
        },
        phone: {
            type: String,
            required: [true, "pleae add contact phone"],
        },
        
    },
    {
        timestamps: true,
    }


)

module.exports = mongoose.model("Contact", contactSchima)