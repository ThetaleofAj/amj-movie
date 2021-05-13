from django.shortcuts import render
from rest_framework import generics,status,permissions,filters
from .models import Film,Genre,Watchlist as WatchlistModel
from .serializers import FilmSerializer
from rest_framework.response import Response

# Create your views here.
class MovieList(generics.ListAPIView):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer
    filter_backends = (filters.SearchFilter,filters.OrderingFilter)
    search_fields = ('name',)




