const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const productSchema = new mongoose.Schema(
    {
        name: {

            type: String,
            trim: true,
            require: true,
            maxlength: 32
        },
        alta: {
            type: Number
        },
        price: {
            type: Number,
            trim: true,
            require: true,
            maxlength: 32
        },
        category: {
            type: ObjectId,
            ref: "Category",
            require: true,
        },
        quantity: {
            type: Number
        },
        muyalta : {
            type: Number
        },

        baja: {
            type: Number
        },

        muybaja:{ 
            type: Number
        },

        photo: {
            data: Buffer,
            contentType: String,
        }
    },
    
    {timestamps: true}

);

module.exports = mongoose.model("product", productSchema);
