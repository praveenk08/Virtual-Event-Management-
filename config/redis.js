const redis = require('redis');

// Load environment variables
require('dotenv').config();

const redisClient = redis.createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379', // Default Redis URL
    // Optional: Add username and password if Redis authentication is required
    username: process.env.REDIS_USERNAME || undefined,
    password: process.env.REDIS_PASSWORD || undefined,
});

// Event listeners for the Redis client
redisClient.on('connect', () => console.log('Connected to Redis'));
redisClient.on('error', (err) => console.error('Redis Client Error:', err));

(async () => {
    try {
        await redisClient.connect();
    } catch (error) {
        console.error('Error connecting to Redis:', error);
    }
})();

module.exports = redisClient;
