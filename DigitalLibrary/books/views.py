from django.shortcuts import render
from.models import Book, Playlist

# Create your views here.


def index(request):
    last_ten_books = Book.objects.get_last_ten_books()
    playlists = Playlist.objects.all()
    return render(request, "books/home.html", {'playlists' : playlists, 'last_ten_books': last_ten_books})


def book_read(request, id):
    return render(request, "books/main.html", {'book_id': id})