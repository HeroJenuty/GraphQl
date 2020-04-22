import Game from "../../models/Game";
import { response } from "express";


export default {
    Query: {
        game: (root, args) => {
            return new Promise((resolve, reject) => {
                Game.findOne(args).exec((error, res) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        games: () => {
            return new Promise((resolve, reject) => {
                Game.find({}).populate().exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    },
    Mutation: {
        addGame: (root, { name, description, imageURL, price }) => {
            const newGame = new Game({ uname, description, imageURL, price });
            return new Promise((resolve, reject) => {
                newGame.save((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        deleteGame: (root, { _id }) => {
            return new Promise((resolve, reject) => {
                Game.findByIdAndRemove({ _id }).exec((error, response) => {
                    error ? reject : resolve(response)
                })
            })
        },
        editGame: (root, { _id, name, description, imageURL, price }) => {
            return new Promise((resolve, reject) => {
                Game.findByIdAndUpdate({ _id }, { $set: { username, email, password } }, { new: true }).exec((error, response) => {
                    error ? reject : resolve(response)
                })
            })
        }
    }
}