from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('read/<int:id>/', views.book_read, name='read'),
]