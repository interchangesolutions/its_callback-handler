const express = require("express");
const app = express();

// Callback endpoint
app.get("/callback", (req, res) => {
    const { code, state } = req.query; // Handle query parameters
    console.log("Authorization Code:", code);
    res.send("Callback received successfully!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
