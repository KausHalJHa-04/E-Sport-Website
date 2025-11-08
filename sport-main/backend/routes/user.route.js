const express = require('express');
const { getUser, updateUser, toggleFavourites, togglecart } = require('../controller/user.controller');
const router = express.Router();

router.get('/',getUser);
router.put('/update',updateUser);
router.get('/togglecart/',togglecart);
router.get('/togglefavourites/',toggleFavourites);
 
module.exports = router;
