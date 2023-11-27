const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: String,
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }]
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
