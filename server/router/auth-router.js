const express = require('express');
const { home, register } = require('../controllers/auth-controller');

const router = express.Router();
// first way
// router.get('/', (req, res) => {
//   res.status(200).send('welcome to backend server ');
// });

// second way
router.route('/').get(home);

router.route('/register').post(register);

module.exports = router;
