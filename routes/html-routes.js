var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/cardio", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cardio.html"));
  });

  app.get("/resistance", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/resistance.html"));
  });
};
