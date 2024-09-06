// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     name: String,
//     email: {
//       type:      String,
//       unique:    true,
//       required:  true,
//     },
//     password:    String,
//     profilePic:  String,
//     role:        String,
//   },
//   {
//     timestamps:   true,
//   }
// );

// const userModel = mongoose.model("user", userSchema);

// module.exports = userModel;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true, // Optional: trim white spaces
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true, // Optional: ensure emails are stored in lowercase
    trim: true, // Optional: remove leading/trailing spaces
  },
  password: {
    type: String,
    required: true, // Optional: require password if appropriate
  },
  profilePic: {
    type: String,
    trim: true, // Optional: trim white spaces
  },
  role: {
    type: String,
    enum: ['GENERAL', 'ADMIN'], // Optional: specify roles if applicable
    default: 'GENERAL', // Optional: default role
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

const User = mongoose.model('user', userSchema);

module.exports = User;
