const express = require("express");

const app = express();

app.get("/numbers" , async (req , res) => {
    let output = [];
    const urls = req.query;
    console.log(urls);
    for(let url of urls.url) {
        console.log(url);
        const { numbers } = await fetch(url).then(data => data.json());
        console.log(numbers);
        output.push(...numbers);
    }
    output = [...new Set(output)].sort((a, b) => a - b);;
    res.send({"numbers" : output});
})

app.listen(3000 , () => {
    console.log("Server Running on Port 3000")
})