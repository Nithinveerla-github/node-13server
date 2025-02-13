const http = require("http");
const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === "/fake" && req.method === "GET") {
        try {
            let data = await fetch("https://fakestoreapi.com/products");
            let response = await data.json();
            res.write(JSON.stringify(response));
        } catch (error) {
            res.write(JSON.stringify({ error: "Failed to fetch data" }));
        }
        res.end();

    } else if (req.url === "/dummy" && req.method === "POST") { 
        try {
            let data1 = await fetch("https://dummyjson.com/quotes");
            let response1 = await data1.json();
            res.write(JSON.stringify(response1));
        } catch (error) {
            res.write(JSON.stringify({ error: "Failed to fetch data" }));
        }
        res.end();

    } else {
        res.write(JSON.stringify({ message: "Try another one" }));
        res.end();
    }
});

server.listen(3007, () => {
    console.log("Server is running on port 3007");
});
