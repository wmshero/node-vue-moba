const express = require("express");

const app = express();
const { join } = require("path");

app.set("secret", "i2u34y12oi3u4y8"); //密钥应该放在环境变量里

app.use(require("cors")());
app.use(express.json());
app.use("/admin", express.static(__dirname + "/admin"));
app.use("/uploads", express.static(join(__dirname + "uploads")));

require("./plugins/db")(app);
require("./routes/admin")(app);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
