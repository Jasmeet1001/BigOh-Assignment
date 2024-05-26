import "dotenv/config";
import express from "express";
import router from "./routes/routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).json({message: "Welcome to BigOh API"})
});

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
