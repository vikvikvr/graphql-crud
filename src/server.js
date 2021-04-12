const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');

const app = express();

app.use('/graphql', graphqlHTTP({ graphiql: true, schema }));

app.listen(process.env.PORT, () => {
  console.log('visit /graphql');
});
