# chat/serializers.py
from rest_framework import serializers  # Импорт сериализаторов
from .models import FAQ  # Импорт модели FAQ

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = ['id', 'question', 'answer']  # Поля, которые нужно сериализовать
