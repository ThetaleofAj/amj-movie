from django.db import models
from django.contrib.auth.models import User
#specifying film type choices
Film_type = (
    ('Movie','Movie'),
    ('Series','Series'),
)
#specifying rating choices
Rating_choice = (
    ('1','1'),
    ('2','2'),
    ('3','3'),
    ('4','4'),
    ('5','5'),
)

# Create your models here.
#Genre
class Genre(models.Model):
    name = models.CharField(max_length=35)
    
    def __str__(self):
        return self.name

#Film
class Film(models.Model):
    FilmType = models.CharField(max_length=7,choices=Film_type,blank=True)
    Genre = models.ManyToManyField(Genre,blank=True)
    image = models.ImageField(upload_to='images/',blank=True)
    name = models.CharField(max_length=60,blank=True)
    description = models.CharField(max_length=250,blank=True)
    slug = models.SlugField(max_length=35)
    Release_date = models.CharField(max_length=15)
    runtime_and_agerestriction = models.CharField(max_length=15,blank=True)
    Trailer = models.CharField(max_length=60,blank=True)
    Rating = models.CharField(max_length=2,choices=Rating_choice,blank=True)
    where_to_watch = models.CharField(max_length=251)
    watchlist1 = models.ManyToManyField(User,blank=True)

    def __str__(self):
        return self.name

#Watchlist(NOT IN USE)
class Watchlist(models.Model):
    Film = models.ManyToManyField(Film,blank=True)
    