const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    id: ID
    nombre: String
    precio: Float
    stock:Float
  }
  type Query {
    getAllProducts: [Product]
    getProduct(id: ID): Product
  }
  input ProductInput {
    nombre: String
    precio: Float
    stock: Float
  }
  type Mutation {
    createProduct(product: ProductInput): Product
    updateProduct(id: ID, product: ProductInput): Product
    deleteProduct(id: ID): String
  }
`;

module.exports = {
  typeDefs,
};