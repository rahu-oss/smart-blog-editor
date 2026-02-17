from jose import jwt
from app.config import JWT_SECRET

SECRET = "mysecret123"

def create_token(data):

    token = jwt.encode(

        data,

        SECRET,

        algorithm="HS256"

    )

    return token


