class PUBLIC_DATA {
  static port = process.env.PORT || 4000;
  static mongo_URI = process.env.MONGO_URI || 4000;
}

module.exports = {
  PUBLIC_DATA,
};
