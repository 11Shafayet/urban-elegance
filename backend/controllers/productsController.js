const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');

// ADD PRODUCT
const addProduct = (productsCollection) => async (req, res) => {
  const data = req.body;
  const { pic, regPrice, salePrice, title } = data;

  if (!pic || !regPrice || !title) {
    res.status(400).send('Please fill up all the required fields!');
    return;
  }

  await productsCollection.insertOne(data);
  res.send(data);
};

// GET ALL PRODUCTS
const getAllProducts =
  (productsCollection, userCollection) => async (req, res) => {
    const { adminId } = req.body;
    const admin = await userCollection.findOne({ _id: new ObjectId(adminId) });
    if (admin) {
      const allUsers = await productsCollection.find().toArray();

      res.status(200).json(allUsers);
    } else {
      res.status(400).json({ message: 'Unauthorized user!' });
    }
  };

//UPDATE A PRODUCT
const updateProduct = (productsCollection) => async (req, res) => {
  const data = req.body;

  if (data.id) {
    const updatedProduct = await productsCollection.findOneAndUpdate(
      {
        _id: new ObjectId(userId),
      },
      {
        $set: {
          pic: data.pic,
          regPrice: data.regPrice,
          salePrice: data?.salePrice,
          title: data.title,
        },
      },
      { returnDocument: 'after' } // This ensures that the returned result is the updated document
    );

    res.status(200).json(updatedProduct);
  } else {
    res.status(400).json({ message: 'Unauthorized user!' });
  }
};

// DELETE A PRODUCT
const deleteProduct = (productsCollection) => async (req, res) => {
  const { id } = req.params;

  if (id) {
    const result = await productsCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });

    res.status(200).json(result);
  } else {
    res
      .status(400)
      .json({ message: 'Unauthorized user or product not found!' });
  }
};

module.exports = { addProduct, getAllProducts, updateProduct, deleteProduct };
