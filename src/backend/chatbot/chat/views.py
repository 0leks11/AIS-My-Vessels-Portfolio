# chat/views.py
from rest_framework.decorators import api_view  # Декоратор для API
from rest_framework.response import Response  # Для отправки ответов
from .models import FAQ  # Импорт модели FAQ
from .serializers import FAQSerializer  # Импорт сериализатора для моделей
from django.http import HttpResponse

# API для чата
@api_view(['POST'])
def chat_api(request):
    user_question = request.data.get('question', '').lower()
    faqs = FAQ.objects.filter(question__icontains=user_question)
    if faqs.exists():
        serializer = FAQSerializer(faqs.first())
        answer = serializer.data['answer']
    else:
        answer = 'Извините, ответ на ваш вопрос не найден.'
    return Response({'answer': answer})

# Получение одного FAQ
@api_view(['GET'])
def faq_detail(request, id):
    try:
        faq = FAQ.objects.get(id=id)
        serializer = FAQSerializer(faq)
        return Response(serializer.data)
    except FAQ.DoesNotExist:
        return Response({'error': 'FAQ не найдено'}, status=404)

# Список всех FAQ или создание нового
@api_view(['GET', 'POST'])
def faq_list_or_create(request):
    if request.method == 'GET':
        faqs = FAQ.objects.all()
        serializer = FAQSerializer(faqs, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FAQSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
# Представление для главной страницы
def home(request):
    return HttpResponse("Добро пожаловать на главную страницу!")
