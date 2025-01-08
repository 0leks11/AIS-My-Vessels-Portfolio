# django/Dockerfile

FROM python:3.10

# Выключаем буферизацию вывода Python (полезно для Docker-логов)
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Скопируем requirements.txt
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Копируем оставшийся код (manage.py, папку chatbot, etc.)
COPY . .

# Запускаем Gunicorn (или uvicorn + gunicorn)
CMD ["gunicorn", "chatbot.wsgi:application", "--bind", "0.0.0.0:8000"]