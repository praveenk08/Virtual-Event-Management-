 const mongoose = require('mongoose');

  const eventSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: false
    },
    location: {
      type: String,
      required: true
    },
    organizerId: {
      type: String,
      required: false
    },
    participants: {
      type: Array,
      required: false,
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true }  // Store user ID

    }
  });

  module.exports = mongoose.model('Event', eventSchema);