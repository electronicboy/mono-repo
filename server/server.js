import express from 'express';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json("You are looking at my root route. How roude.")
})


app.listen(8081, () => {
    console.log("Listening on port http://localhost:8081");
})
