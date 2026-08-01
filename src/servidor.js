const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
  	message: 'games server working',
  	status: 'active'
  });
});

app.listen(port, () => {
  console.log(`videogames app listening on port: ${port}`);
});


