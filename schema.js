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

module.exports = new GraphQLSchema({
  // something right here
});
