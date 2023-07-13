const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080 ;

app.listen(PORT, () => {
    console.log(`app listening at PORT ${PORT}`)
});

app.get("/", (req, resp) => {
    resp.json({name: "typescript server", age: 100})
})