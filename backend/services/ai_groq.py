import httpx
import config
import json

# NOTE: update GROQ_API_URL to the correct engine endpoint for your account.
GROQ_API_URL = "https://api.groq.ai/v1/engines/llama-3/repls"

async def rewrite_seo(text: str) -> dict:
    headers = {"Authorization": f"Bearer {config.GROQ_API_KEY}", "Content-Type": "application/json"}
    prompt = (
        "Rewrite this website headline and meta description to be short, SEO-optimized and conversion-focused.\n\n"
        f"{text}\n\nReturn a JSON object with keys: title, meta"
    )
    payload = {"input": prompt}
    async with httpx.AsyncClient(timeout=30) as client:
        r = await client.post(GROQ_API_URL, headers=headers, json=payload)
        if r.status_code != 200:
            return {"error": "groq error", "text": text}
        data = r.json()
        # groq response shapes vary — try to parse common keys
        if isinstance(data, dict):
            # if provider returned structured output
            out = data.get("output") or data.get("result") or data
            if isinstance(out, dict):
                return out
            # sometimes output is a list or string — try to parse JSON from text
        text_out = ""
        if isinstance(data, list):
            text_out = " ".join([str(x) for x in data])
        else:
            text_out = str(data)
        # attempt to extract JSON embedded in text
        try:
            parsed = json.loads(text_out)
            if isinstance(parsed, dict):
                return parsed
        except Exception:
            pass
        return {"text": text_out}

