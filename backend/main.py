from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests
from dotenv import load_dotenv
import os

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")


app = FastAPI()

class StoryRequest(BaseModel):
    prompt: str

LLM_API_URL = "https://api.openai.com/v1/completions"
COMFYUI_API_URL = "http://localhost:8188/generate"
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")


@app.post("/generate")
async def generate_story(request: StoryRequest):
    try:
        llm_response = requests.post(
            LLM_API_URL,
            headers={"Authorization": f"Bearer {OPENAI_API_KEY}"},
            json={"model": "gpt-4", "prompt": request.prompt, "max_tokens": 200},
        )
        story = llm_response.json().get("choices")[0]["text"].strip()
        
        image_response = requests.post(
            COMFYUI_API_URL,
            json={"prompt": request.prompt, "steps": 50}
        )
        image_url = image_response.json().get("image_url")
        
        return {"story": story, "image": image_url}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
