const createModels = (knexConfig) => {
    const knex = require('knex')(knexConfig);
    const bookshelf = require('bookshelf')(knex);
    const User = bookshelf.Model.extend({
        tableName: 'users'
    });

    return { User };
};

module.exports = createModels;