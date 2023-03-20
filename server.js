const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;
require("./DB/db");
const passport = require('passport')
require('./config/passport')(passport)
const authMiddleWare = require("./middlewares/auth")


app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const usersRouter = require("./routes/users");
const servicesRouter = require("./routes/services");
const subServicesRouter = require("./routes/sub-services");
const ordersRouter = require("./routes/orders");
const recommendationsRouter = require("./routes/recommendations");


app.get("/", (req, res) => {
    res.send({ message: "success" })

});

app.use("/api/users", usersRouter);
app.use("/api/services", servicesRouter);
app.use("/api/sub-service", subServicesRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/recommendations", recommendationsRouter);



app.listen(port, () => {
    console.log(`server is connect on port: ${port}`);
});