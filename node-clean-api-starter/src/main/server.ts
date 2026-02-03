import { app } from "./app";
import dotenv from "dotenv";

dotenv.config();

// sempre legal deixar a porta como variável de ambiente, eu pelo menos prefiro assim :)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
