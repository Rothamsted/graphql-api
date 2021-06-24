require('dotenv').config()
const { ApolloServer } = require('apollo-server');
const neo4j = require('neo4j-driver');
const { inferSchema, makeAugmentedSchema } = require('neo4j-graphql-js');

const {
  BOLT_ADDRESS,
  DB_USERNAME,
  DB_PASSWORD
} = process.env;

(async () => {
  const driver = neo4j.driver('bolt://knetminer-neo4j.cyverseuk.org:7687', neo4j.auth.basic('',''));
  const { typeDefs } = await inferSchema(driver);

  const generatedSchema = makeAugmentedSchema({
    typeDefs,
  });
  
  const server = new ApolloServer({
    schema: generatedSchema,
    context: ({ req }) => {
      return {
        driver,
        req
      };
    },
  });
  const port = process.env.PORT || 8080;
  
  server.listen(port).then(({ url }) => {
    console.log(`GraphQL API ready at ${url}`);
  }).catch(err => console.error(err));
})();
// const { ApolloServer, gql } = require('apollo-server');

// // A schema is a collection of type definitions (hence "typeDefs")
// // that together define the "shape" of queries that are executed against
// // your data.
// const typeDefs = gql`
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book]
//   }
// `;

// const books = [
//   {
//     title: 'The Awakening',
//     author: 'Kate Chopin',
//   },
//   {
//     title: 'City of Glass',
//     author: 'Paul Auster',
//   },
// ];

// // Resolvers define the technique for fetching the types defined in the
// // schema. This resolver retrieves books from the "books" array above.
// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };

// // The ApolloServer constructor requires two parameters: your schema
// // definition and your set of resolvers.
// const server = new ApolloServer({ typeDefs, resolvers });

// // The `listen` method launches a web server.
// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });

