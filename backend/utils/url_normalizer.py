from urllib.parse import urlparse, urlunparse

def normalize_url(url: str) -> str:
    p = urlparse(url)
    scheme = p.scheme or 'https'
    netloc = p.netloc or p.path  # handle if user passed 'example.com'
    path = p.path if p.netloc else '/'
    if not netloc:
        raise ValueError("Invalid URL")
    return urlunparse((scheme, netloc, path, '', '', ''))

