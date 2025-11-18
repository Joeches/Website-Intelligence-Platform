from bs4 import BeautifulSoup

def extract_text(html: str, max_chars: int = 5000) -> str:
    soup = BeautifulSoup(html, 'html.parser')
    text = soup.get_text(separator=' ', strip=True)
    return text[:max_chars]

