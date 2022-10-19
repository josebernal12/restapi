const producto = require('../models/modelProducto')


const resolvers = {
    Query: {

        getAllProducts: async () => {
            const products = await producto.find()
            return products
        },
        async getProduct(_, { id }) {
            return await producto.findById(id)
        },
    },

    Mutation: {
        async createProduct(_ ,{product}) {
            const { nombre, precio, stock } = product;
            const newTask = new producto({ nombre, precio, stock });
            await newTask.save();
            return newTask;
        },
        async deleteProduct(_, { id }) {
            await producto.findByIdAndDelete(id)
            return 'product deleted'
        },
        async updateProduct(_, { id, product }) {
            const { nombre,precio, stock } = product;
            const newTask = await producto.findByIdAndUpdate(
                id,
                {
                    $set: {
                        nombre,
                        precio,
                        stock
                    },
                },
                {
                    new: true,
                }
            );
            return newTask;
        },

    }
}

module.exports = {
    resolvers,
}