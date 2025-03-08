const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.use((req,res,next) => {
  let logEnteries = `Time: ${new Date().toISOString()} | Method: ${req.method} | URL: ${req.url} | IP: ${req.ip}\n`;
  console.log(logEnteries)
  fs.appendFileSync('./logEnteries.txt' , logEnteries , {root:__dirname})
  next()  ;
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
