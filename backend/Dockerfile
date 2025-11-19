FROM python:3.11-slim

WORKDIR /app

# system deps required by some libs (reportlab)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential libjpeg-dev zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies first for caching
COPY requirements.txt .
RUN python -m pip install --upgrade pip setuptools wheel && \
    pip install --no-cache-dir -r requirements.txt

# Copy the rest of the code
COPY . .

# Expose port for FastAPI
EXPOSE 8000

# Default CMD for web service
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]



