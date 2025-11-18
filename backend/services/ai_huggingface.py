import httpx
import config

HF_API = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn"

async def extract_keywords(text: str, top_k: int = 10) -> list:
    headers = {"Authorization": f"Bearer {config.HUGGINGFACE_API_TOKEN}"}
    payload = {"inputs": text}
    async with httpx.AsyncClient(timeout=30) as client:
        r = await client.post(HF_API, headers=headers, json=payload)
        if r.status_code != 200:
            return []
        out = r.json()
        if isinstance(out, dict) and out.get('error'):
            return []
        # Safely extract summary text
        summary = ""
        if isinstance(out, list) and out and isinstance(out[0], dict):
            summary = out[0].get('summary_text') or ""
        elif isinstance(out, dict):
            summary = out.get('summary_text') or ""
        else:
            summary = str(out)
        words = [w.strip('.,') for w in summary.split() if len(w) > 3]
        uniq = []
        for w in words:
            lw = w.lower()
            if lw not in uniq:
                uniq.append(lw)
        return uniq[:top_k]

