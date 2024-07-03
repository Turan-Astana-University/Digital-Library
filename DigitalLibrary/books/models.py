from django.db import models
from authors.models import Author
from categories.models import Category
# Create your models here.


class BookManager(models.Manager):
    def get_last_ten_books(self):
        return self.order_by('-id')[:10]


class Book(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    date = models.DateTimeField(null=True, blank=True)
    ISBN = models.CharField(max_length=255, null=True, blank=True)
    # rating
    # parent = models.ForeignKey("self", null=True, blank=True, on_delete=models.CASCADE)
    author = models.ManyToManyField(Author, null=True, blank=True)
    categories = models.ManyToManyField(Category, null=True, blank=True)
    image = models.ImageField('book_images/', null=True, blank=True)

    objects = BookManager()

    def __str__(self):
        return f"{self.title}"


class BookElement(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    language = models.CharField(max_length=255, null=True, blank=True)
    # qr


class Playlist(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    books = models.ManyToManyField(Book, null=True, blank=True)

