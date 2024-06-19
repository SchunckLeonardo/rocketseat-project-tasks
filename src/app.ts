import express from "express";
import { routes } from "./routes/routes";
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use('/api', routes)

app.listen(port, () => {
  console.log("Server running on port " + port);
});
