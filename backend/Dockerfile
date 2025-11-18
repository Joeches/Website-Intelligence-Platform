
FROM python:3.11-slim

WORKDIR /app

# system deps required by some libs (reportlab)
RUN apt-get update && apt-get install -y build-essential libjpeg-dev zlib1g-dev && rm -rf /var/lib/apt/lists/*

COPY . /app

RUN python -m pip install --upgrade pip setuptools wheel
RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
