const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = "1.0.0";

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport"
            content="width=device-width, initial-scale=1.0">
      <title>Cloud Deployment Lab</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f0f4f8;
          display: grid;
          place-items: center;
          min-height: 100vh;
          margin: 0;
        }
        .card {
          background: white;
          padding: 40px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 8px 25px #0001;
        }
        h1 { color: #2563eb; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Welcome to My Cloud Application!</h1>
        <p>Developed by: Manvendra Singh</p>
        <p>Application Version: ${VERSION}</p>
        <p>Running inside a Docker container on AWS EC2.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Application running on port ${PORT}`);
});