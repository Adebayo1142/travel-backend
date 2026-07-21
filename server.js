import dotenv from "dotenv";
import app from "./app.js";
import prisma from "./src/config/prisma.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Test Prisma connection
    await prisma.$connect();

    console.log("✅ Prisma Connected to PostgreSQL");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {

    console.error("❌ Database Connection Failed");
    console.error(error);

    process.exit(1);

  }
}

startServer();