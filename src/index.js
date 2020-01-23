const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

const { searchSolution } = require('./services/search');

const port = process.env.PORT || 8080;
const app = express();
app.use(bodyParser.json({ limit: '5mb' }));
app.use(compression());
app.use(cors());

app.get("/search", (req, res) => {
  const { query: { q } } = req;
  if (!q) res.status(404).json({ error: 'Not found' });

  res.send(searchSolution(q));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
