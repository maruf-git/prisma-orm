import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.send("backend is running properly");
});
app.listen(port, () => {
    console.log("app is listening port: ", port);
});
//# sourceMappingURL=server.js.map