const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectionDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();


connectionDb();
const app = express();
let PORT = process.env.PORT || 5000;


app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});