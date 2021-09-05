const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_node_js");
    console.log("Connect DB successfully");
  } catch (error) {
    console.log(error);
  }
}
module.exports = { connect };
