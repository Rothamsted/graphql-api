# KnetMiner GraphQL API BETA

We are beginning to migrate the existing KnetMiner REST API built using the OndexGraph library and Java Spring to the [GRANDstack](https://grandstack.io/). As we transition to GRAND, our first goal is to rebuild 11+ API endpoints using [Apollo-GraphQL](https://www.apollographql.com/), the [Neo4j GraphQL Library](https://neo4j.com/product/graphql-library/) and our Neo4j DB which are modelled using [BioSchemas](https://bioschemas.org/) and serveral ontologies. 

Description of existing REST APIs and wishlist of new APIs will be gathered in this [Google Doc](https://docs.google.com/document/d/1KyZaBwq0uLnK9NIArIytRrI1CN6xZ5hkG21Nro1KyCo/edit?usp=sharing). Contributions are welcome!

Other related repositories to check out are the [knetminer-backend](https://github.com/Rothamsted/knetminer-backend) based on Neo4j (and legacy Ondex) and [knetminer](https://github.com/Rothamsted/knetminer).


## KnetMiner Neo4j DBs for testing

Wheat Neo4j:
 - bolt://knetminer-neo4j.cyverseuk.org:7687
 - http://knetminer-wheat.cyverseuk.org:7474/browser/

Arabidopsis Neo4j:
 - bolt://knetminer-neo4j.cyverseuk.org:7688

COVID-19 Neo4j:
 - bolt://knetminer-neo4j.cyverseuk.org:7689

Neo4j Cypher traverser/queries used in KnetMiner
 - https://github.com/Rothamsted/knetminer/wiki/Semantic-Motif-Searching-in-Knetminer#the-cypherneo4j-traverser


## Getting started

The process of testing GraphQL and developing a schema for our current data models could be started by wrapping the existing KnetMiner REST API using these resources:

 - Docs: https://www.apollographql.com/docs/apollo-server/data/data-sources/
 - Example video: https://www.youtube.com/watch?v=qNXhhrJIv-w

This could allow us to get started writing type definitions for the JSON objects returned from the current API. To start using the Neo4j-GraphQL integration (@neo4j/graphql), we'd only need to add that and the NodeJS based Neo4j driver (neo4j-driver), in order for the Apollo Server communicate with our Neo4j DB. Wrapping the existing REST API isn't necessary, but it could be a quicker way to get started in order to prevent needing to migrate all the Java logic to NodeJS. Either way, we could make a GraphQL schema organized in a manner similar to the below repository (developed by @michaeldgraham), with various Neo4j-GraphQL features:

 - Repo: https://github.com/covidgraph/graphql-api
 - Example GraphQL: https://github.com/covidgraph/graphql-api/tree/master/api/src/schemas/Biomedical/typeDefs



The KnetMiner Team - where knowledge grows. :)

