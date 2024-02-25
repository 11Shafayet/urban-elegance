require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  'mongodb+srv://Shafayet:Shafayet111@cluster0.8laudjn.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const userRoutes = require('./routes/userRoutes');
const productsRoutes = require('./routes/productsRoutes');

async function run() {
  try {
    await client.connect();

    const userCollection = client.db('urban-elegance').collection('users');
    const productsCollection = client
      .db('urban-elegance')
      .collection('products');
    app.use('/user', userRoutes(userCollection));
    app.use('/products', productsRoutes(productsCollection, userCollection));

    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    //await client.close()
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Urban Elegance server is running');
});

app.listen(port, () => {
  console.log(`Urban Elegance server is running at PORT: ${port}`);
});
