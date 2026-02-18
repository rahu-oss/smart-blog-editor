from fastapi import APIRouter
from openai import OpenAI
import os
from config import OPENAI_API_KEY 

router = APIRouter(prefix="/api/ai")




client = OpenAI(

    api_key=OPENAI_API_KEY,
    

   base_url="https://api.deepseek.com"

)



@router.post("/generate")
def generate_summary(data: dict):

    text = data["text"]

    response = client.chat.completions.create(

        model="deepseek-chat",

        messages=[

            {

                "role": "user",

                "content": f"Summarize this blog:\n{text}"

            }

        ]

    )

    return {

        "summary":

        response.choices[0].message.content

    }


