const express = require('express');
const UserController = require('../controller/user-controller');

const router = express.Router();

// router.post('/create-user', UserController.createUser); 
// router.get('/fetch-all', UserController.fetchAllUsers);
// router.get('/user-single/:id', UserController.fetchUserById);
// router.put('/user-update', UserController.updateUserById);
// router.delete('/user-delete', UserController.deleteUserById);


router.post('', UserController.createUser); 
router.get('', UserController.fetchAllUsers);
router.get('/:id', UserController.fetchUserById);
router.put('', UserController.updateUserById);
router.delete('', UserController.deleteUserById);


module.exports = router;

// const express = require('express');
// const router = express.Router();
// const UserController = require('../controller/user-controller');

// router.post('/create-user', UserController.createUser);

// module.exports = router;