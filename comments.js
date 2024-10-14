// Create web server
// 1. Import express
const express = require('express');
// 2. Create an instance of express
const app = express();
// 3. Create a port
const port = 3000;
// 4. Create a route
app.get('/comments', (req, res) => {
    res.send('Hello, Comments!');
});
// 5. Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// 6. Run the server
// node comments.js
// Open the browser and go to the URL: http://localhost:3000/comments
// 7. Stop the server
// Ctrl + C