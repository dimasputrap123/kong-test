const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.append('X-CLIENT-KEY', req.get('X-CLIENT-KEY'))
  next()
})

let products = {
    '001': {
        'id': '001',
        'name': 'Nokia 10',
        'quantity': 10
    },
    '002': {
        'id': '002',
        'name': 'IPHONE 10',
        'quantity': 5
    },
    '003': {
        'id': '003',
        'name': 'Samsung Galaxy 6',
        'quantity': 2
    }
};

app.get('/', (req, res, next) => {
	res.json({"hello": "helloooo"});
});

app.get('/products', (req, res, next) => {
	res.json(products);
});

app.post('/products',multer().none(), (req, res, next) => {
  const body = req.body;
  const id = body.id;
  const name = body.name;
  const quantity = body.quantity;

  if (id == '' || name == '' || quantity == '') {
    return res.json({'message': 'data cannot be empty'});
  }

  products[id] = {
    'id': id,
    'name': name,
    'quantity': quantity
  }

	res.status(201).json({'message': 'product created', 'data': body});
});

app.get('/products/:id', (req, res, next) => {
	res.json(products[req.params.id]);
});

app.listen(PORT, () => {
	console.log(`app listen on port ${PORT}`);
});