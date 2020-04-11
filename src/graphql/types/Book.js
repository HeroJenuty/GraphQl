export default `
    type Book{
        _id: String!
        name: String!
        description: String!
        imageURL: String!
        price: String!
    }


    type Query{
        book(_id: String!): Book
        books: [Book]
    }

    type Mutation {
        addBook(name: String!, description:String!, imageURL: String!, price:String!): Book
        deleteBook(_id: String!): Book
        editBook(_id: String!, name: String, description: String, imageURL: String!, price: String): Book
    }

`