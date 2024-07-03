from django.contrib import admin
from .models import Book, BookElement, Playlist
# Register your models here.




class BookElementInline(admin.TabularInline):
    model = BookElement
    extra = 3
    # fields = ['title']


class BookAdmin(admin.ModelAdmin):
    inlines = [BookElementInline]
    list_display = ['title']


    class Meta:
        model = BookElement




class BookInline(admin.TabularInline):
    model = Playlist.books.through  # Используем промежуточную модель
    extra = 3


class PlaylistAdmin(admin.ModelAdmin):
    inlines = [BookInline]  # Добавляем инлайн к админке плейлистов
    list_display = ['title']
    fields = ['title']  # Поля для отображения в форме редактирования



admin.site.register(Book, BookAdmin)
admin.site.register(Playlist, PlaylistAdmin)