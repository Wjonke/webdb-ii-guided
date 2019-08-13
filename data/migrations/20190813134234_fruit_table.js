//up is the changes to make on the schema
exports.up = function(knex) {
  return knex.schema.createTable('fruits', tbl => {
    tbl.increments();
    tbl.string('name', 128)
      .unique()
      .notNullable()
    tbl.decimal('avg-weight-oz');
  })
};


//this is how we can undo the changes we made in the up
exports.down = function(knex) {
  
};
