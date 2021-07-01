const { Neo4jGraphQL } = require("@neo4j/graphql");
const neo4j = require("neo4j-driver");
const { ApolloServer } = require("apollo-server");

const typeDefs = `
    type Gene {
        iri: String
        identifier: String
        TAXID: Int
        Chromosome: Int
        END: Int
        comment: String
        ondexId: Int
        BEGIN: Int
        altName: String
        prefName: String     
    }
`;

const driver = neo4j.driver(
    "bolt://knetminer-neo4j.cyverseuk.org:7687",
    neo4j.auth.basic("", "")
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

const server = new ApolloServer({
    schema: neoSchema.schema,
    context: ({ req }) => ({ req }),
});

//server.listen(4000).then(() => console.log("Online"));
const port = process.env.PORT || 4000;
  server.listen(port).then(({ url }) => {
    console.log(`GraphQL API ready at ${url}`);
  }).catch(err => console.error(err));