from fastapi import APIRouter, Request
from bson import ObjectId
from database import posts_collection

router = APIRouter(prefix="/api/posts")


# ✅ Create new draft post
@router.post("/")
async def create():

    result = posts_collection.insert_one({
        "content": "",
        "status": "draft"
    })

    return {
        "id": str(result.inserted_id)
    }


# ✅ Update post (Auto save + Publish)
@router.patch("/{id}")
async def update_post(id: str, request: Request):

    data = await request.json()

    print("Received data:", data)
    print("Updating ID:", id)

    result = posts_collection.update_one(
        {"_id": ObjectId(id)},
        {
            "$set": data
        }
    )

    print("Matched:", result.matched_count)
    print("Modified:", result.modified_count)

    return {"message": "Post updated"}


