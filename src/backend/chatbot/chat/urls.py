from django.urls import path
from . import views

urlpatterns = [
    path('chat/', views.chat_api, name='chat_api'),
    path('faq/<int:id>/', views.faq_detail, name='faq_detail'),
    path('faq/', views.faq_list_or_create, name='faq_list_or_create'),
    path('', views.home, name='home'),  # Маршрут для главной страницы
]
