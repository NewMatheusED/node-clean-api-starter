import express from "express";
import { errorMiddleware } from "../interfaces/middlewares/error.middleware";
import { healthRoute } from "./routes/health.route";
import { userRoutes } from "./routes/user.routes";

const app = express();
app.use(express.json());

app.use(userRoutes);
app.use(healthRoute); 
app.use(errorMiddleware);

export { app };

