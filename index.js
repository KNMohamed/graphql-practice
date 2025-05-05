import express from 'express';
import mongoose from 'mongoose';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

// the root provides a resolver function for each API endpoint
const root = {
    hello: () => {
        return 'Hello world!';
    }
};

const app = express();
const PORT = 3000;

// serving static files
app.use(express.static('public'));

// Setup graphql endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true // Enable GraphiQL IDE
}));

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}/graphql`)
);
