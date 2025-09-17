from fastapi import APIRouter
from ..services.db_service import db_service

router = APIRouter(
    prefix="/health",
    tags=["health"]
)

@router.get("")
async def health_check():
    try:
        # Check database connection
        db = db_service.get_db()
        await db.command("ping")
        db_status = "healthy"
    except Exception as e:
        db_status = f"unhealthy: {str(e)}"

    return {
        "status": "healthy",
        "database": db_status,
        "version": "1.0.0"
    }
