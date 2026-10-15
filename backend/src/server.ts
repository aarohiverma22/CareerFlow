import app from "./app.js";
import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";

const startServer = async (): Promise<void> => {
  try {
    await connectDB();

    app.listen(env.port, () => {
      console.log(`CareerFlow API running at http://localhost:${env.port}`);
    });
  } catch {
    console.error(
      "Server startup failed because the database connection could not be established.",
    );

    process.exitCode = 1;
  }
};

void startServer();
