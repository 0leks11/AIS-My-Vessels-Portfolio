import os
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import FAQ
from openai import OpenAI

client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

# Получаем API ключ из переменных окружения

@api_view(['POST'])
def chat_api(request):
    user_question = request.data.get('question', '').lower()
    faqs = FAQ.objects.all()

    # Поиск точного совпадения в базе данных
    exact_match = faqs.filter(question__iexact=user_question).first()
    if exact_match:
        return Response({'answer': exact_match.answer})

    # Если точного совпадения нет, ищем похожие вопросы
    similar_faqs = faqs.filter(question__icontains=user_question)
    if similar_faqs.exists():
        return Response({'answer': similar_faqs.first().answer})

    # Если похожих вопросов нет, обращаемся к ChatGPT API
    try:
        response = client.chat.completions.create(model='gpt-4',  # Используйте корректное название модели
        messages=[
            {"role": "system", "content": "Ты профессиональный фронтенд-разработчик. Отвечай на вопросы посетителей сайта кратко и по делу."},
            {"role": "user", "content": user_question}
        ])
        answer = response.choices[0].message.content.strip()
    except Exception as e:
        print(f"Ошибка при обращении к OpenAI API: {e}")
        answer = 'Извините, я не смог найти ответ на ваш вопрос. Пожалуйста, уточните его.'

    return Response({'answer': answer})

@api_view(['GET', 'POST'])
def faq_list_or_create(request):
    if request.method == 'GET':
        faqs = FAQ.objects.all()
        data = [{'id': faq.id, 'question': faq.question, 'answer': faq.answer} for faq in faqs]
        return Response(data)
    elif request.method == 'POST':
        question = request.data.get('question')
        answer = request.data.get('answer')
        faq = FAQ.objects.create(question=question, answer=answer)
        return Response({'id': faq.id, 'question': faq.question, 'answer': faq.answer})

@api_view(['GET', 'PUT', 'DELETE'])
def faq_detail(request, id):
    faq = get_object_or_404(FAQ, id=id)
    if request.method == 'GET':
        data = {'id': faq.id, 'question': faq.question, 'answer': faq.answer}
        return Response(data)
    elif request.method == 'PUT':
        faq.question = request.data.get('question', faq.question)
        faq.answer = request.data.get('answer', faq.answer)
        faq.save()
        return Response({'id': faq.id, 'question': faq.question, 'answer': faq.answer})
    elif request.method == 'DELETE':
        faq.delete()
        return Response(status=204)