const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

// routes
app.get('/workers', (req, res) => {
	res.json( require("./data/workers.json") );
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));