import dotenv from "dotenv";
dotenv.config({ path: "../config.env" });

import { app } from "./app";
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
