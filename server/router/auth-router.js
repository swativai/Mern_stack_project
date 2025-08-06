const express = require('express');
const { authController } = require('../controllers/auth-controller');
const validate = require('../middlewares/validate-middleware');
const signupSchema = require('../validators/auth-validator');
const authMiddleware = require('../middlewares/auth-middleware');

const router = express.Router();
// first way
// router.get('/', (req, res) => {
//   res.status(200).send('welcome to backend server ');
// });

// second way
router.route('/').get(authController.home);

router.route('/register').post(validate(signupSchema), authController.register);

router.route('/login').post(authController.login);

router.route('/user').get(authMiddleware, authController.user);

module.exports = router;
