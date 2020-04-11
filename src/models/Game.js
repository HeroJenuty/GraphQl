import mongoose from "mongoose";

const Schema = mongoose.Schema;

const GameSchema = new Schema({
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
        type: String,
        required: true
    }
})

const Game = mongoose.model("Game", GameSchema);

export default Game;