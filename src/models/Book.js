import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Book = mongoose.model("Book", BookSchema);

export default Book;