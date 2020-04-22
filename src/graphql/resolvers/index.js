import { mergeResolvers } from "merge-graphql-schemas";
import User from "./User";
import Game from "./Game";
//...

const resolver = [User, Game];

export default mergeResolvers(resolver);