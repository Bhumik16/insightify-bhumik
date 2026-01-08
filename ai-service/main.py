from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Insightify AI Service")

class ChatRequest(BaseModel):
    message: str
    context: str = ""

@app.get("/")
def read_root():
    return {"message": "Insightify AI Service (Gemini + RAG)"}

@app.post("/agent/chat")
def chat_with_mentor(req: ChatRequest):
    # TODO: Connect to Gemini
    return {"response": f"Mentor says: I heard you say '{req.message}'. Let's analyze your retention."}

@app.post("/insights/uninstall")
def analyze_uninstall_reasons(reviews: list[str]):
    # TODO: Connect to Gemini to classify reviews
    return {"reasons": [{"reason": "Battery Drain", "confidence": 0.9}]}
