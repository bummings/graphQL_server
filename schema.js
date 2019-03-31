const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

//hardcoded data in lieu of server
const customers = [
  { id: '1', name: 'fauxkno', email: 'sup@fauxkno.com', age: 32 },
  { id: '2', name: 'grafiq', email: 'graf@iq.com', age: 25 },
  { id: '3', name: 'loro', email: 'loro@ipso.com', age: 99 }
];

// customer type
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLString }
  })
});

// Root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  customer: {
    type: CustomerType,
    args: {
      id: { GraphQLString }
    },
    resolve(parentValue, args) {
      for (let i = 0; i < customers.length; i++) {
        return customers[i];
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
