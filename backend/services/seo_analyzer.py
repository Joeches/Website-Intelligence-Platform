from bs4 import BeautifulSoup
from services.ai_huggingface import extract_keywords
from services.accessibility_checker import wcag_basic_checks

async def analyze(url: str, html: str) -> dict:
    soup = BeautifulSoup(html, "html.parser")
    title = soup.title.string.strip() if soup.title and soup.title.string else ""
    h1 = [h.get_text().strip() for h in soup.find_all("h1")]
    imgs = [img.get('alt') for img in soup.find_all('img')]
    text = soup.get_text(separator=' ', strip=True)[:3000]
    keywords = await extract_keywords(text)
    access = await wcag_basic_checks(html)
    score = {
        "title_length": len(title),
        "h1_count": len(h1),
        "missing_alts": sum(1 for a in imgs if not a),
    }
    return {"url": url, "title": title, "h1": h1, "keywords": keywords, "score": score, "accessibility": access}

