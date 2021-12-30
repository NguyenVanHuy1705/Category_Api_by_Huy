const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const setRoute = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended: true
    })
);

app.use("/category", (req, res, next) => {
    console.log("Hello category")
    return next();
});

app.use("/brand", (req, res, next) => {
    console.log("Hello brand");
    return next();
});
const PORT = process.env.PORT || 8989;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    setRoute(app);
});