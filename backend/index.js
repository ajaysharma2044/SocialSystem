const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`API running on :${PORT}`));
