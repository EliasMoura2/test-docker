const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name : { type: String , required: true, min: 6, max: 255}
})

module.exports = model("User", userSchema);