from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from io import BytesIO

async def generate_pdf_from_result(data: dict) -> BytesIO:
    buffer = BytesIO()
    c = canvas.Canvas(buffer, pagesize=letter)
    width, height = letter
    c.setFont("Helvetica-Bold", 16)
    c.drawString(40, height - 60, "AI Website Intelligence - Fix Report")
    c.setFont("Helvetica", 10)
    y = height - 90
    for k, v in data.items():
        if y < 80:
            c.showPage()
            y = height - 60
        line = f"{k}: {str(v)}"
        # wrap naive: cut long lines
        if len(line) > 120:
            line = line[:120] + "..."
        c.drawString(40, y, line)
        y -= 16
    c.save()
    buffer.seek(0)
    return buffer

