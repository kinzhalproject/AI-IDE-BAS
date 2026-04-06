from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS so the VS Code Webview can reach it
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify the actual extension origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
    name: str
    description: Optional[str] = None

@app.post("/items/")
async def create_item(item: Item):
    return {"message": "Item received successfully!", "item": item}

@app.get("/")
async def root():
    return {"status": "FastAPI is running!"}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
