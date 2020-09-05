const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');


const resolvers = {
    Query: {
        user: () => {
            return {
                name: "ahmad",
                age: 18

            }
        },
        course: () => {
            return {
                subject: "Cloud Native Computing"
            }

        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
