var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var cors = require("cors");

var conString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.get("/", (req,res) =>{
    res.send("hello, Welcome to Application")
})


app.get("/get-users", (req, res)=>{
    mongoClient.connect(conString).then(clientObject=>{
        var database = clientObject.db("Food-website");
        database.collection("tblusers").find({}).toArray().then(documents=>{
             res.send(documents);
             res.end();
        });
    });
});


app.post("/register-user",(req, res)=>{

    var user = {
        UserId: req.body.UserId,
        UserName: req.body.UserName, 
        Password: req.body.Password, 
        Email: req.body.Email, 
        Mobile: req.body.Mobile
    };

    mongoClient.connect(conString).then(clientObject=>{

        var database = clientObject.db("Food-website");
        database.collection("tblusers").insertOne(user).then(()=>{
            console.log('User Registered');
            res.end();
        });
    });

});

// Get cart for a user
app.get("/get-cart/:userId", (req, res) => {
  mongoClient.connect(conString).then((clientObject) => {
    var database = clientObject.db("Food-website");
    database
      .collection("tblcart")
      .findOne({ userId: req.params.userId })
      .then((cart) => {
        if (cart) {
          res.send(cart);
        } else {
          res.status(404).send({ message: "Cart not found" });
        }
        res.end();
      });
  });
});

app.post("/add-to-cart", (req, res) => {
    var cartItem = {
      productId: req.body.productId,
      productName: req.body.productName,
      quantity: req.body.quantity,
      price: req.body.price,
    };
  
    mongoClient.connect(conString).then((clientObject) => {
      var database = clientObject.db("Food-website");
      
      // Check if the user has an existing cart
      database.collection("tblcart").findOne({ userId: req.body.userId }).then((cart) => {
        if (cart) {
          // If cart exists, update it
          let itemIndex = cart.items.findIndex((item) => item.productId === cartItem.productId);
          if (itemIndex > -1) {
            // If item already exists in the cart, update quantity
            cart.items[itemIndex].quantity += cartItem.quantity;
          } else {
            // Else, add the new item to the cart
            cart.items.push(cartItem);
          }
  
          database.collection("tblcart").updateOne(
            { userId: req.body.userId },
            { $set: { items: cart.items } }
          ).then(() => {
            res.send({ message: "Cart updated" });
            res.end();
          });
        } else {
          // If no cart exists, create a new cart
          var newCart = {
            userId: req.body.userId,
            items: [cartItem],
          };
  
          database.collection("tblcart").insertOne(newCart).then(() => {
            res.send({ message: "Cart created" });
            res.end();
          });
        }
      });
    });
  });
  
  // Remove item from cart
  app.post("/remove-from-cart", (req, res) => {
    mongoClient.connect(conString).then((clientObject) => {
      var database = clientObject.db("Food-website");
      
      // Find the user's cart
      database.collection("tblcart").findOne({ userId: req.body.userId }).then((cart) => {
        if (cart) {
          // Remove the item from the cart
          cart.items = cart.items.filter((item) => item.productId !== req.body.productId);
  
          // Update the cart in the database
          database.collection("tblcart").updateOne(
            { userId: req.body.userId },
            { $set: { items: cart.items } }
          ).then(() => {
            res.send({ message: "Item removed from cart" });
            res.end();
          });
        } else {
          res.status(404).send({ message: "Cart not found" });
          res.end();
        }
      });
    });
  });
  
  // Update cart item quantity
  app.post("/update-cart-quantity", (req, res) => {
    mongoClient.connect(conString).then((clientObject) => {
      var database = clientObject.db("Food-website");
      
      // Find the user's cart
      database.collection("tblcart").findOne({ userId: req.body.userId }).then((cart) => {
        if (cart) {
          // Find the item in the cart and update the quantity
          let itemIndex = cart.items.findIndex((item) => item.productId === req.body.productId);
          if (itemIndex > -1) {
            cart.items[itemIndex].quantity = req.body.quantity;
  
            database.collection("tblcart").updateOne(
              { userId: req.body.userId },
              { $set: { items: cart.items } }
            ).then(() => {
              res.send({ message: "Cart quantity updated" });
              res.end();
            });
          } else {
            res.status(404).send({ message: "Item not found in cart" });
            res.end();
          }
        } else {
          res.status(404).send({ message: "Cart not found" });
          res.end();
        }
      });
    });
  });




app.listen(3030);
console.log(`Server Started : http://127.0.0.1:3030`);