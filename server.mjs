import express from "express";
import path from "path";
const port = 5500;

const app = express();

app.use("/static", express.static(path.resolve("src", "static")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("src", "index.html"));
});

app.listen(process.env.PORT || port, () =>
  console.log(`Server running on port: ${port}`)
);
