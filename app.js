import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./db/index.js";
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended:true}))

import userRouter from "./routes/user.router.js"
app.use("/api/v1/user", userRouter);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("database error", error);
  });
// Root route
app.get("/", (req, res) => {
  res.send("Welcome to codeX100 Backend");
});
