const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const keysecret = process.env.KEY
const keysecret = "ishapaghdalishapaghdalishapaghda";

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true, // remove space from left and right
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("not valid email address");
      }
    },
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  cpassword: {
    type: String,
    required: true,
    minlength: 6,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  carts: Array,
});

// password hashing
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

// generting token
userSchema.methods.generatAuthtoken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, keysecret, {
      expiresIn: "1d",
    });
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

//add to cart data
userSchema.methods.addcartdata = async function (cart) {
  try {
    this.catrs = this.catrs.concat(cart);
    await this.save();
    return this.catrs;
  } catch (error) {
    console.log(error);
  }
};

const USER = new mongoose.model("USER", userSchema);

module.exports = USER;
