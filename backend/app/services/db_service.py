from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from ..config import settings
from loguru import logger

class DatabaseService:
    client: AsyncIOMotorClient = None
    db: AsyncIOMotorDatabase = None

    async def connect_to_database(self):
        logger.info("Connecting to MongoDB...")
        try:
            self.client = AsyncIOMotorClient(settings.MONGODB_URL)
            self.db = self.client[settings.MONGODB_DB_NAME]
            logger.info(f"Connected to MongoDB: {settings.MONGODB_DB_NAME}")
        except Exception as e:
            logger.error(f"Failed to connect to MongoDB: {e}")
            raise e

    async def close_database_connection(self):
        logger.info("Closing MongoDB connection...")
        if self.client:
            self.client.close()
            logger.info("MongoDB connection closed")

    def get_db(self) -> AsyncIOMotorDatabase:
        return self.db

db_service = DatabaseService()
