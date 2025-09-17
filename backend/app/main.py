from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import time
from dotenv import load_dotenv
from app.database import init_db

# Load environment variables
load_dotenv()

# Instantiate FastAPI app
app = FastAPI(title="ProwPay API")

# CORS setup
origins = [
    "http://localhost:3000",  # React dev frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logging middleware
@app.middleware("http")
async def log_requests(request: Request, call_next):
    start_time = time.time()
    print(f"[SERVER] Request: {request.method} {request.url.path}")
    response = await call_next(request)
    duration = time.time() - start_time
    print(
        f"[SERVER] Done: {request.method} {request.url.path} - {response.status_code} in {duration:.2f}s"
    )
    return response

# Root route
@app.get("/")
async def root():
    return {"message": "Welcome to ProwPay API"}

# Health check endpoint
@app.get("/health")
async def health():
    return {"status": "ok", "message": "Backend is running"}

# MongoDB init
@app.on_event("startup")
async def startup_event():
    print("[SERVER] Initializing MongoDB...")
    try:
        await init_db()
        print("[SERVER] MongoDB connection successful.")
    except Exception as e:
        print(f"[SERVER] MongoDB init error: {str(e)}")
        raise e