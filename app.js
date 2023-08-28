const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (request, response) => {
    let weight = parseFloat(request.body.weight);
    let height = parseFloat(request.body.height);
    let BMI = 703 * (weight / (height ** 2));
    if (BMI >= 40.0) {
        response.send("<h1>Obese.</h1>")
    }
    else if (BMI <= 18.4) {
        response.send("<h1>Underweight.</h1>");
    }
    else if (BMI >=18.5 && BMI <= 24.9) {
        response.send("<h1>Normal.</h1>");
    }
    else if (BMI >=25.0 && BMI <=39.9) {
        response.send("<h1>Overweight.</h1>")
    }
})




app.listen(3000, () => {
    console.log("Server is running on port 3000");
})