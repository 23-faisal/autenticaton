import { app } from "./app.js";
import { connectToDatabase } from "./config/database.js";
import "dotenv/config";

const port = process.env.PORT || 5000;

connectToDatabase();

app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});
