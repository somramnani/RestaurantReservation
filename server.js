// GLOBAL VARIABLES
//======================================================
  
  const express = require('express');
  const app = express();
  const port = process.env.PORT ||  3000;
  const path = require("path");
  const axios = require('axios');

//======================================================


// ROUTING
//======================================================
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });


  app.get("/newsletter", function(req, res) {
      res.sendFile(path.join(__dirname, "newsletter.html"));
    });

  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());



  // Starts the server to begin listening
  app.listen(port, function() {
    console.log("App listening on http://localhost:" + port);
  });
//======================================================

let currentRes = [
    {
        routeName: 'user',
        userName: 'Brent Abruzese',
        phone: '848-213-2522',
        email: 'brent.abruzese@gmail.com',
        id: 438534
    }
]

let waitingList = [
    {
        routeName: 'user',
        userName: 'Som Ramnani',
        phone: '800-555-1212',
        email: 'som@som.com',
        id: 483984
    }
]

// app.get("/reservation/:reservation", function(req, res) {
//   let reservation = req.params.reservation;

//   console.log(reservation);


//   for (var i = 0; i < currentRes.length; i++) {
//     if (reservation === currentRes[i].routeName) {
//       return res.json(reservation[i]);
//     }
//   }
//   return res.json(false);
// });

//display all CURRENT reservations
app.get("/tables", function(req, res) {
  return res.json(currentRes);

});

//create NEW reservations
app.post("/reservation", function(req, res) {
  let reservation = req.body;
  console.log(reservation);
  reservation.routeName = reservation.userName.replace(/\s+/g, "").toLowerCase();
  
  if (currentRes.length < 5) {
    currentRes.push(reservation);
  } else {
    waitingList.push(reservation);
  }

  res.json(reservation);
});