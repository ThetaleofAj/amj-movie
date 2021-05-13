from rest_framework import serializers
from .models import Film,Genre,Watchlist

class GenreSerializer(serializers.RelatedField):
    def to_representation(self,value):
        return value.name
    class Meta:
        model = Genre

class filmSerializer(serializers.RelatedField):
    def to_representation(self,value):
        return value.name
    class Meta:
        model = Film
#Serializers 
class FilmSerializer(serializers.ModelSerializer):
    Genre = GenreSerializer(read_only=True, many=True)
    class Meta:
        model = Film
        fields = ('id','FilmType','Genre','image','name','description','Release_date','runtime_and_agerestriction',
                   'Trailer','Rating')

