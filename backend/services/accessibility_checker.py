from bs4 import BeautifulSoup

async def wcag_basic_checks(html: str) -> dict:
    soup = BeautifulSoup(html, 'html.parser')
    imgs = soup.find_all('img')
    missing_alts = [str(img) for img in imgs if not img.get('alt')]
    buttons = soup.find_all('button')
    unlabeled_buttons = [str(b) for b in buttons if not b.get_text().strip() and not b.get('aria-label')]
    return {"missing_alts": len(missing_alts), "unlabeled_buttons": len(unlabeled_buttons)}

