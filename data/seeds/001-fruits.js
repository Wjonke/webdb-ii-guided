
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        {id: 1, name: 'apple'},
        {id: 2, name: 'orange'},
        {id: 3, name: 'mango'}
      ]);
    });
};
