from pydantic import BaseModel
from typing import Any, Dict, List

class ScanResultModel(BaseModel):
    url: str
    title: str
    h1: List[str]
    keywords: List[str]
    score: Dict[str, Any]

