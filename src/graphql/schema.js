const { loadSchemaSync } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { addResolversToSchema } = require('@graphql-tools/schema');
const resolversMap = require('./resolvers');

const options = { loaders: [new GraphQLFileLoader()] };

const schema = loadSchemaSync(['./src/graphql/schema.graphql'], options);

const schemaWithResolvers = addResolversToSchema(schema, resolversMap);

module.exports = schemaWithResolvers;
