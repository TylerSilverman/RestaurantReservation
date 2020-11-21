const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tableReservations = [
        {
          routeName: "yoda",
          name: "Yoda",
          role: "Jedi Master",
          age: 900,
          forcePoints: 2000
        },
    ]

const waitingList = [];

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

//routeswill get you 
app.get("/api/tables", function(req, res){
    res.json(tableReservations)


});

app.post("/api/tables", function(req, res){
    
})


app.post("/api/reserve", function (req, res){
var newReservation = req.body;
newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

console.log(newReservation);
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  

