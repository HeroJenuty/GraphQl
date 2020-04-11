import { mergeTypes } from "merge-graphql-schemas";
import User from "./User";
import Book from "./Book";
//...

const typeDefs = [User, Book];
//...

export default mergeTypes(typeDefs, { all: true });