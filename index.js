const { Neo4jGraphQL } = require("@neo4j/graphql");
const neo4j = require("neo4j-driver");
const { ApolloServer } = require("apollo-server");
const fs = require("fs");
const dotenv = require("dotenv");
const path = require("path");

// Load contents of .env as environment variables
dotenv.config();

// Load GraphQL type definitions from schema.graphql file
const typeDefs = fs
    .readFileSync(path.join(__dirname, "schema.graphql"))
    .toString("utf-8");

// Create Neo4j driver instance
const driver = neo4j.driver(
    process.env.NEO4J_URI,
    neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

// Create executable GraphQL schema from GraphQL type definitions,
// using @neo4j/graphql to autogenerate resolvers
const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

// Create ApolloServer instance that will serve GraphQL schema created above
//  into each (autogenerated) resolver
const server = new ApolloServer({
    schema: neoSchema.schema,
    context: ({ req }) => ({ req }),
    introspection: true,
    playground: true,
});

const port = process.env.PORT || 4000;

// Start ApolloServer
server
    .listen(port)
    .then(({ url }) => {
        console.log(`GraphQL API ready at ${url}`);
    })
    .catch((err) => console.error(err));
