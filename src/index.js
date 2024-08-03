require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const productsRoutes = require("./routes/productsRoutes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

const allowedOrigins = [
  "http://localhost:3000",
  "https://viby-fe.vercel.app"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api", productsRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
