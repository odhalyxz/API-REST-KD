const { Schema, model } = require("mongoose");

const KdramaSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    episodes: {
      type: String,
      required: true
    },
    release: {
      type: String,
      required: false
    },
    gender: {
        type: String,
        required: false
    },
    network: {
        type: String,
        required: false
    },
    writer: {
        type: String,
        required: false
    },
    director: {
        type: String,
        required: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("kdrama", KdramaSchema);