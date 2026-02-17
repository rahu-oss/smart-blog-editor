from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from app.database import users_collection
from app.utils.jwt_handler import create_token

router = APIRouter(prefix="/api/auth")


# ⭐ Model
class User(BaseModel):

    email: EmailStr
    password: str


# REGISTER
@router.post("/register")
def register(user: User):

    existing = users_collection.find_one({
        "email": user.email
    })

    if existing:

        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )


    users_collection.insert_one({

        "email": user.email,
        "password": user.password

    })


    return {

        "message": "Registered successfully"

    }


# LOGIN
@router.post("/login")
def login(data: dict):

    email = data.get("email")
    password = data.get("password")


    # check email exists
    user = users_collection.find_one({
        "email": email
    })


    if not user:

        raise HTTPException(
            status_code=404,
            detail="User not found. Please register first."
        )


    # check password
    if user["password"] != password:

        raise HTTPException(
            status_code=401,
            detail="Incorrect password"
        )


    token = create_token({

        "email": email

    })


    return {

        "token": token

    }


