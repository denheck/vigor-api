// Update with your config settings.

module.exports = {

  development: {
    "client": "mysql",
    "connection": {
      "host": "mysql",
      "port": 3306,
      "user": "root",
      "password": "root",
      "database": "vigor-api",
      "charset": "utf8"
    },
    migrations: {
      tableName: 'migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
