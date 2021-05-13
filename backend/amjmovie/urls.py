from django.urls import path
from .views import MovieList
from amjmovie import views

urlpatterns = [
    path('',MovieList.as_view()),
    
]