// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3'
    },
    useNullAsDefault: true,
    migrations : {
      directory: './data/migrations'
    },
    seeds : {
      directory: './data/seeds'
    }
    
  },

};
//RULE: EVERY SCHEMA CHANGE NEEDS A NEW MIGRATION

// npx knex init
// npx knex migrate:make fruits_table makes a new migration
// npx knex migrate:latest            commits the migration
// npx knex migrate:rollback          undoes the migration
// npx knex seed:make 001-fruits      created seed data file
// npx knex seed:run                  commits seed data file