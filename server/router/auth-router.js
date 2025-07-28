const express = require('express');
const { home, register, login } = require('../controllers/auth-controller');
const validate = require('../middlewares/validate-middleware');
const signupSchema = require('../validators/auth-validator');

const router = express.Router();
// first way
// router.get('/', (req, res) => {
//   res.status(200).send('welcome to backend server ');
// });

// second way
router.route('/').get(home);

router.route('/register').post(validate(signupSchema), register);

router.route('/login').post(login);

module.exports = router;
