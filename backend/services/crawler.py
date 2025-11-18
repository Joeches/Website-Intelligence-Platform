import httpx
from bs4 import BeautifulSoup
from utils.url_normalizer import normalize_url

async def crawl_url(url: str, timeout: int = 10) -> str:
    url = normalize_url(url)
    async with httpx.AsyncClient(timeout=timeout, follow_redirects=True) as client:
        r = await client.get(url)
        r.raise_for_status()
        html = r.text
    soup = BeautifulSoup(html, "html.parser")
    return str(soup)

