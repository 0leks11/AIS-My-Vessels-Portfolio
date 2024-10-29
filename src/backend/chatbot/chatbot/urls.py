"""
URL configuration for chatbot project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
#### Проект ####  your_project_root/backend/chatbot/chatbot/urls.py

# chatbot/chatbot/urls.py
from django.contrib import admin
from django.urls import path, include # Импорт функции include для подключения приложений
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),  # Админ панель
    path('api/', include('chat.urls')),  # Включаем все маршруты приложения chat
    path('', TemplateView.as_view(template_name='index.html'), name='home'),  # Catch-all маршрут для React
]    ###  !!! ?????