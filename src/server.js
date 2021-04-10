const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');

const app = express();

app.use('/graphql', graphqlHTTP({ graphiql: true, schema }));

app.listen(5000, () => {
  console.log('visit localhost:5000/graphql');
});
