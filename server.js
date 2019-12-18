const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

require("./routes/html-routes.js")(app);

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "./public/home.html"));
// });

// db.Cardio.create({})
//   .then(dbCardio => {
//     console.log(dbCardio);
//   })
//   .catch(({message}) => {
//     console.log(message);
// });

app.get("/cardio", (req, res) => {
    db.Cardio.find({})
      .then(dbCardio => {
        res.json(dbCardio);
      })
      .catch(err => {
        res.json(err);
      });
});
  
app.get("/resistance", (req, res) => {
    db.Resistance.find({})
      .then(dbResistance => {
        res.json(dbResistance);
      })
      .catch(err => {
        res.json(err);
      });
});

app.post("/cardio", ({ body }, res) => {
  db.Cardio.create(body)
    .then(dbCardio => {
      res.json(dbCardio);
      res.redirect("/cardio.html");
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/resistance", ({ body }, res) => {
  db.Resistance.create(body)
    .then(dbResistance => {
      res.json(dbResistance);
      res.redirect("/resistance.html");
    })
    .catch(err => {
      res.json(err);
    });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});