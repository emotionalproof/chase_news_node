const express = require("express");
const PORT = process.env.PORT || 3001;

//enable CORS
const cors = require("cors");
const app = express();
app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => {
	res.json({ message: "Welcome" });
});

app.get("/api", (req, res) => {
	res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
