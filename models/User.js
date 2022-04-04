const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      //unique
      required: true,
      //trimmed

    },
    email: {
      type: String,
      required: true,
      //unique
      //mongoose email validation
    },
    thoughts: {
      //array of _id values referencing the Thought model

    },
    friends: {
      //array of _id values referencing the user model (self-reference)
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

//TODO: create a virtual called friendCount that retrieves the length of the users's friends array field on query
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })
  // Setter to set the first and last name
  // .set(function (v) {
  //   const first = v.split(' ')[0];
  //   const last = v.split(' ')[1];
  //   this.set({ first, last });
  // });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
