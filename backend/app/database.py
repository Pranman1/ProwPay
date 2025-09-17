from motor.motor_asyncio import AsyncIOMotorClient
import os

# MongoDB connection
MONGODB_URL = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
DB_NAME = os.getenv("MONGODB_DB_NAME", "prowpay_db")

# Database instance
db = None

async def init_db():
    global db
    try:
        client = AsyncIOMotorClient(MONGODB_URL)
        db = client[DB_NAME]
        # Test connection
        await client.admin.command('ping')
        print(f"[SERVER] Connected to MongoDB database: {DB_NAME}")
    except Exception as e:
        print(f"[SERVER] Failed to connect to MongoDB: {str(e)}")
        raise e

def get_db():
    if not db:
        raise Exception("Database not initialized. Call init_db() first.")
    return db