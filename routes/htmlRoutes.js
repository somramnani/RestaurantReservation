// ===============================================================================
// DEPENDENCIES
// ===============================================================================
    // We need to include the path package to get the correct file path for our html
    var path = require("path");
// ===============================================================================


// ===============================================================================
// ROUTING
// ===============================================================================
    module.exports = function(app) {
      //tables.html Route
      app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/tables.html"));
      });

      // reserve.html Route
      app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
      });

      // If no matching route is found default to home
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });

      // Stylesheet Route
      app.get("/styles", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/css/style.css"));     
      });

      //Home page picture Route
      app.get("/homepage-picture", function(req,res){
        res.sendFile(path.join(__dirname, "../public/images/patrick-tomasso-NlcCPeKNmwg-unsplash.jpg"))
      })


      

  };
// ===============================================================================
