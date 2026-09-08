const moongose = require("mongoose");
// "           es              "
const userSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 3,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        //   @ .com>> regex .io
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      },
      message: "invalid email format",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    validate: {
      validator: function (value) {
        // pattern >> 1 upper case, 1 lower case, 1 special char, 1 number
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
          value,
        );
      },
      message:
        "invalid password format  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/",
    },
  },
  age: {
    type: Number,
    min: 20,
    max: 40,
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
      message: "gender should be male or female",
    },
  },
  city: {
    type: String,
    maxlength: 50,
  },
});
//create collection in db >>users
// moongose.model("collectionName",schema)
const userModel = moongose.model("users", userSchema);

module.exports = { userModel };
