var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Ready to solve your problems?!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  /* app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  }); */

  //NEED A PAGE AND ROUTE VOTE PAGE
  //POPULATE VOTE PAGE

  

  app.get("/vote", function(req, res) {
    res.render("vote");
  });


  app.get("/battle", function(req, res) {
    res.render("battle");
  });



   // Load profile page and pass in an profile by id
  app.get("/profile/:id", function(req, res) {
    db.Profile.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("profile", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
