const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://mongo:27017/demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  directConnection: true,
});

const Item = mongoose.model('Item', { name: String });

app.use(express.json());

app.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post('/', async (req, res) => {
  const item = new Item({ name: req.body.name });
  await item.save();
  res.status(201).json(item);
});

app.listen(port, () => console.log(`App listening on port ${port}`));