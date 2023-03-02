"""Mywebsite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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
from django.contrib import admin
from django.urls import path, include

#importing the path for setting up the media
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("SiteREST.urls")),
    path("", TemplateView.as_view(template_name= "index.html")),
    path("Home/", TemplateView.as_view(template_name= "index.html")),
    path("Projects/", TemplateView.as_view(template_name= "index.html")),
    path("Blog/", TemplateView.as_view(template_name= "index.html")),
    path("Blog/<int:pk>", TemplateView.as_view(template_name= "index.html")),
    
]


#setting the media urlspatterns
urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
