import express from "express";

// IMPORT ROUTES
import guideRouter from "./routes/guides.route";
import userRouter from "./routes/users.route";

const app = express();

// MIDDLEWARES
app.use(express.json());

// ROUTES
app.use("/api/guides", guideRouter);
app.use("/api/users", userRouter);

export { app };
