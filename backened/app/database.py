import os
from dotenv import load_dotenv
from pymongo import MongoClient


load_dotenv()


MONGO_URL = os.getenv("client")


client = MongoClient(MONGO_URL)


db = client.blog_db

print("Database name:", db.name)
posts_collection = db.posts


users_collection = db.users

print("Mongo URL:", os.getenv("client"))


print("MongoDB Connected Successfully")


