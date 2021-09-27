'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    productosByCategory:async(ctx)=>{
        const {categoria} = ctx.query;

        try {
            const producstFiltered = await strapi.models["producto"].find({
                categoria:{
                    $eq:categoria
                }
            }) 
            return producstFiltered;
        } catch (error) {
            throw error;
        }
    }
};
