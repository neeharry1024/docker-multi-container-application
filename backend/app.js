const express = require("express");
const mysql = require("mysql2");
const redis = require("redis");

const app = express();
const PORT = process.env.API_PORT || 3000;

// --------------------
// MySQL Connection
// --------------------
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST || "mysql",
  user: process.env.MYSQL_USER || "appuser",
  password: process.env.MYSQL_PASSWORD || "password123",
  database: process.env.MYSQL_DATABASE || "appdb"
});

db.connect((err) => {
  if (err) {
    console.log("❌ MySQL Connection Failed");
    console.log(err.message);
  } else {
    console.log("✅ Connected to MySQL");
  }
});

// --------------------
// Redis Connection
// --------------------
const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST || "redis"}:6379`
});

redisClient.on("error", (err) => {
  console.log("Redis Error:", err);
});

(async () => {
  await redisClient.connect();
  console.log("✅ Connected to Redis");
})();

// --------------------
// API Route
// --------------------
app.get("/", async (req, res) => {
  try {
    await redisClient.set("message", "Hello from Redis!");

    const redisValue = await redisClient.get("message");

    res.json({
      message: "Hello from Backend API",
      redis: redisValue
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
