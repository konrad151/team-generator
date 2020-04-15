const express = require("express");

const app = express();

// routes
app.get('/workers', (req, res) => {
    res.json( require("./data/workers.json") );
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));