const express = require("express");
const {
     ServerConfig,
     Logger
} = require("./config/index.js");

const apiRoutes=require("./routes");
const logger = require("./config/logger-config.js");

const app = express();

app.use("/api",apiRoutes);

app.listen(ServerConfig.PORT, () => {
     console.log(`hosted on http://localhost:${ServerConfig.PORT}`);
})