import "dotenv/config";

const port = Number(process.env.PORT ?? 5000);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be a valid port number.");
}

const frontendUrl = process.env.FRONTEND_URL;

if (!frontendUrl) {
  throw new Error("FRONTEND_URL is required.");
}

const mongoUri = process.env.MONGO_URI;

if (!mongoUri || !mongoUri.startsWith("mongodb")) {
  throw new Error("A valid MONGO_URI is required in the .env file.");
}

const nodeEnv = process.env.NODE_ENV ?? "development";

if (!["development", "production", "test"].includes(nodeEnv)) {
  throw new Error("NODE_ENV must be development, production, or test.");
}

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret || jwtSecret.length < 32) {
  throw new Error("JWT_SECRET must contain at least 32 characters.");
}

const jwtExpiresIn = process.env.JWT_EXPIRES_IN ?? "1d";

export const env = {
  port,
  frontendUrl,
  mongoUri,
  nodeEnv,
  jwtSecret,
  jwtExpiresIn,
};
