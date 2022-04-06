// ObjectId() method for converting studentId string into an ObjectId for querying database
const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
      User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    // Get one user
    getSingleUser(req, res) {
      User.findOne({ _id: req.params.id })
        .populate('thoughts')
        .populate('friends')
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Create a user
    createUser(req, res) {
      User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Delete a thought
    deleteUser(req, res) {
      User.findOneAndDelete({ _id: req.params.Id })
        .then(() => res.json({ message: 'Thought deleted!' }))
        .catch((err) => res.status(500).json(err));
    },
    // Update a user
    updateUser(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with this id!' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
  
     // Create a friend
     addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: {friends: req.params.friendId} },
            { runValidators: true, new: true }
          )
            .then((friend) =>
              !friend
                ? res.status(404).json({ message: 'No user with this id!' })
                : res.json(friend)
            )
            .catch((err) => res.status(500).json(err));
        },

    // Delete a friend
    removeFriend(req, res) {
        User.findOneAndUpdate(
            {_id: params.id},
            {$pull: {reactions: {friends: req.params.friendId}}},
            {runValidators: true, new: true}
        )
        .then(() => res.json({ message: 'Reaction deleted!' }))
        .catch((err) => res.status(500).json(err));
    }

};