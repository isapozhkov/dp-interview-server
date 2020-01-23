const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

const port = process.env.PORT || 8080;
const app = express();
app.use(bodyParser.json({ limit: '5mb' }));
app.use(compression());
app.use(cors());

app.get("/search", (req, res) => {
    res.send("test");
  });

app.listen(port, () => console.log(`Listening on port ${port}`));
