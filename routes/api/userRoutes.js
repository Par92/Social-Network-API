const router = require('express').Router();
const {
  getUsers,
  getSingleUser, //and populated thought and friend data
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/thoughtController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;

// /api/users/:userId/friends
router.route('/:userId/friends/:friendId').post(addAssignment).delete(removeAssignment);

//bonus: remove a user's associated thoughts when deleted
