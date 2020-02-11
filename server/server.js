const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

require('./model/connect');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', require('./routes'));

const PORT = 3000;
app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));