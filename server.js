import dotenv from "dotenv";
import app from "./app.js";
import pool from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

// Test Database Connection
async function startServer() {
    try {
        await pool.query("SELECT NOW()");

        console.log("✅ PostgreSQL Connected");

        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });

    } catch (error) {

        console.error("Database Connection Failed");

        console.error(error.message);

        process.exit(1);

    }
}

startServer();