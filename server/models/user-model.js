const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
// This is a Mongoose pre-hook (middleware).
// It runs before the .save() method is executed on a document.
userSchema.pre('save', async function (next) {
  // console.log("pre method",this);
  // Inside a schema method, this refers to the document being saved (i.e., the current user object).
  // this refers to the current document (i.e., the current user).
  const user = this;
  if (!user.isModified('password')) {
    next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

// create a token using instance method
// create a instance method in mongo db using schema_name.methods.method_name

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString,
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '30d',
      },
    );
  } catch (error) {
    console.error(error);
  }
};

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = new mongoose.model('User', userSchema);

module.exports = User;
