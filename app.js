const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());  // for parsing application/json

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to codeX100 Backend');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
