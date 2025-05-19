const User = require('../models/user-model');

const home = async (req, res) => {
  try {
    res.status(200).send('welcome to backend server ');
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { username, email, password, phone } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).send({ msg: 'Email already exist' });
    }
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      password,
      phone,
    });

    res.status(200).send({ msg: userCreated });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { home, register };
