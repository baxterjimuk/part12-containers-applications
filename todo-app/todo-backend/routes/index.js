const express = require('express');
const router = express.Router();
const redis = require('../redis')

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  let created = await redis.getAsync('added_todos');
  if (isNaN(Number(created))) {
    created = 0;
  } else {
    created = Number(created);
  }
  res.send({ added_todos: created });
});

module.exports = router;
