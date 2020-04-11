import Book from "../../models/Book";
import { response } from "express";


export default {
    Query: {
        book: (root, args) => {
            return new Promise((resolve, reject) => {
                Book.findOne(args).exec((error, res) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        books: () => {
            return new Promise((resolve, reject) => {
                Book.find({}).populate().exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    },
    Mutation: {
        addBook: (root, { name, description, imageURL, price }) => {
            const newBook = new Book({ uname, description, imageURL, price });
            return new Promise((resolve, reject) => {
                newBook.save((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        deleteBook: (root, { _id }) => {
            return new Promise((resolve, reject) => {
                Book.findByIdAndRemove({ _id }).exec((error, response) => {
                    error ? reject : resolve(response)
                })
            })
        },
        editBook: (root, { _id, name, description, imageURL, price }) => {
            return new Promise((resolve, reject) => {
                Book.findByIdAndUpdate({ _id }, { $set: { username, email, password } }, { new: true }).exec((error, response) => {
                    error ? reject : resolve(response)
                })
            })
        }
    }
}