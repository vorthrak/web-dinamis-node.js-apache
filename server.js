const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
