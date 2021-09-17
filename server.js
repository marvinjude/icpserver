const app = require("./app");
require("./config/mongodb");

require("dotenv").config();

app.listen(process.env.PORT, () => console.log("server is listening"));
