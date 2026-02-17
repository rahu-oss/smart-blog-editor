import os
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

client = os.getenv("client")

JWT_SECRET = os.getenv("JWT_SECRET")
