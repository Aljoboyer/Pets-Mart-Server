const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
    type: String,
    require: true,
    },
   email: {
    type: String,
    require: true,
   },
   role: {
    type: String,
    require: true,
   },
});

module.exports  = mongoose.model("User", UserSchema);
