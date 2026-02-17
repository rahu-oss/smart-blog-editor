from fastapi import FastAPI
from dotenv import load_dotenv

load_dotenv()
from fastapi.middleware.cors import CORSMiddleware

from app.routes import auth_routes, post_routes, ai_routes


app = FastAPI()


# ✅ CORS middleware add karo
app.add_middleware(

    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)


@app.get("/")
def home():
    return {"message": "Backend Running"}


app.include_router(auth_routes.router)
app.include_router(post_routes.router)
app.include_router(ai_routes.router)


