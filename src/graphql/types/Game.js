export default `
    type Game{
        _id: String!
        name: String!
        description: String!
        imageURL: String!
        price: String!
    }


    type Query{
        game(_id: String!): Game
        games: [Game]
    }

    type Mutation {
        addGame(name: String!, description:String!, imageURL: String!, price:String!): Game
        deleteGame(_id: String!): Game
        editGame(_id: String!, name: String, description: String, imageURL: String!, price: String): Game
    }

`