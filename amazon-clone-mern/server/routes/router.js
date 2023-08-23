const express = require("express");
const router = new express.Router();
const Products = require("../models/productSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

//get productsdata api
router.get("/getproducts", async (req, res) => {
  try {
    const productsdata = await Products.find();
    // console.log(productsdata);
    res.status(201).json(productsdata);
  } catch (error) {
    console.log(error.message);
  }
});

//get individual data
router.get("/getproductsone/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const individualdata = await Products.findOne({ id: id });
    console.log(individualdata);
    res.status(201).json(individualdata);
  } catch (error) {
    res.status(400).json(individualdata);
    console.log("error" + error.message);
  }
});

router.post("/register", async (req, res) => {
  const { fname, email, mobile, password, cpassword } = req.body;

  console.log(req.body);
  if (!fname || !email || !mobile || !password || !cpassword) {
    res.status(422).json({ error: "filll the all details" });
    console.log("bhai nathi present badhi details");
  }

  try {
    const preuser = await USER.findOne({ email: email });

    if (preuser) {
      res.status(422).json({ error: "This email is already exist" });
    } else if (password !== cpassword) {
      res.status(422).json({ error: "password are not matching" });
    } else {
      const finaluser = new USER({
        fname,
        email,
        mobile,
        password,
        cpassword,
      });

      const storedata = await finaluser.save();

      res.status(201).json(storedata);
    }
  } catch (error) {
    console.log("error chhe bhai catch ma for registratoin" + error.message);
    res.status(422).send(error);
  }
});

//login user

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "fill all the data" });
  }

  try {
    const userlogin = await USER.findOne({ email: email });
    // console.log(userlogin);

    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);
    //   console.log(isMatch);

    const token = await userlogin.generatAuthtoken();


    res.cookie("Amazonweb",token,{
        expires : new Date(Date.now() + 9000000),
        httpOnly : true
    })

    console.log(token);
      if (!isMatch) {
        res.status(400).json({ error: "Password do not match" });
      }
      else{
        res.status(201).json({userlogin});
      }
    }
  } catch (error) {
    res.status(400).json({error:"Invalid details"});

  }
});

//ading data in cart
router.post("/addcart/:id", authenticate , async (req, res) => {

  try {
      // console.log("perfect 6");
      const { id } = req.params;
      const cart = await Products.findOne({ id: id });
      console.log(cart + "cart milta hain");

      const Usercontact = await USER.findOne({ _id: req.userID });
      console.log(Usercontact + "user milta hain");


      if (Usercontact) {
          const cartData = await Usercontact.addcartdata(cart);

          await Usercontact.save();
          console.log(cartData );
          console.log(Usercontact );
          res.status(201).json(Usercontact);
      }
  } catch (error) {
          res.status(201).json({error:"Invaled user"});
          console.log(error);
  }
});


module.exports = router;
