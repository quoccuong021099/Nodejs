module.exports = {
  multipleMongooseToObject: (mongooses) =>
    mongooses.map((item) => item.toObject()),

  mongoosesToObject: (mongoose) => (mongoose ? mongoose.toObject() : mongoose),
};
