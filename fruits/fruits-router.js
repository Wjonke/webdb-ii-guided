const express = require('express');
const knex = require('knex');

/////this is where we connect to the database//////
//import the knex file and select the environment config, in this case its just development
const knexConfig = require('./knexfile.js')


const db = knex(knexConfig.development);


/////this is where we connect to the database//////

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const fruits = await db('fruits');
    res.json(fruits); 
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve fruits' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const fruit = await db('fruits').where({ id });
    
    res.json(fruit);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve fruit' });
  }
});

router.post('/', async (req, res) => {
  try {
    const fruitData = req.body;
    const [ id ] = await db('fruits').insert(fruitData);
    const newFruitEntry = await db('fruits').where({ id });
  
    res.status(201).json(newFruitEntry);
  } catch (err) {
    console.log('POST error', err);
    res.status(500).json({ message: "Failed to store data" });
  }
});

module.exports = router;