import express from "express";
import { errorMiddleware } from "../interfaces/middlewares/error.middleware";
import { userRoutes } from "./routes/user.routes";
import { healthRoute } from "./routes/health.route";

const app = express();
app.use(express.json());

app.use(userRoutes);
app.use(healthRoute); // Só não estava registrada a rota
app.use(errorMiddleware);

export { app };
