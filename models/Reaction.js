const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
     //use mongoose's object id data type
     //default value is set to a new objectId
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      // use a getter method to format the timestamp on query
    },
  },
);

//TODO: change this from a model to the reaction feild's subdocument schema in the thought model.
const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
