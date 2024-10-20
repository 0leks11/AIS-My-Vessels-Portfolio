# chat/models.py
from django.db import models  # Импорт моделей

class FAQ(models.Model):
    question = models.CharField(max_length=255)  # Вопрос пользователя
    answer = models.TextField()  # Ответ на вопрос

    def __str__(self):
        return self.question
