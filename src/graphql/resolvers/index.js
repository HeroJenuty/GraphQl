import { mergeResolvers } from "merge-graphql-schemas";
import User from "./User";
import Book from "./Book";
//...

const resolver = [User, Book];

export default mergeResolvers(resolver);